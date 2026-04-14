"""
메디인_게시판db.sql 파일의 data:image base64 이미지를
uploads/editor/ 경로의 실제 파일로 저장하고
src 를 파일 URL 로 교체하는 마이그레이션 스크립트

실행 방법:
    python migrate_base64_images.py
"""

import re
import base64
import secrets
from pathlib import Path

# ── SQL 파일 경로 설정 ────────────────────────────────────────
SQL_FILE = Path(r"D:\기본다운로드\메디인_게시판db.sql")
OUTPUT_FILE = Path(__file__).parent / "backend" / "sql" / "메디인_게시판db_migrated.sql"

if not SQL_FILE.exists():
    raise FileNotFoundError(f"SQL 파일을 찾을 수 없습니다: {SQL_FILE}")

# ── 업로드 경로 설정 ─────────────────────────────────────────
UPLOAD_DIR = Path(__file__).parent / "uploads" / "editor"
UPLOAD_URL = "/uploads/editor/"
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)

# ── base64 이미지 패턴 ───────────────────────────────────────
# SQL 내부 HTML: src="data:image/TYPE;base64,DATA" 또는 src='...'
# SQL 이스케이프: \\' 또는 \\" 가 구분자로 사용될 수 있으므로
# SQL 내에서는 보통 \' 또는 \" 가 아닌 '' 또는 \\' 이지만
# 여기서는 큰따옴표/작은따옴표 기준으로 처리
PATTERN = re.compile(
    r'src=(?P<q>["\'])data:image/(?P<ext>png|jpeg|jpg|gif|webp);base64,'
    r'(?P<data>[A-Za-z0-9+/=\r\n]+?)(?P=q)',
    re.IGNORECASE,
)

EXT_MAP = {"jpeg": "jpg"}

total_saved = 0


def replace_base64_images(content: str) -> tuple[str, int]:
    """
    HTML 내 data:image src 를 파일로 저장하고 URL 로 교체.
    반환: (교체된 content, 저장된 파일 수)
    """
    count = 0

    def _replacer(m: re.Match) -> str:
        nonlocal count
        quote    = m.group("q")
        mime_ext = m.group("ext").lower()
        b64_data = re.sub(r"\s+", "", m.group("data"))  # 개행 제거

        ext = EXT_MAP.get(mime_ext, mime_ext)

        try:
            # padding 자동 보정
            missing = len(b64_data) % 4
            if missing:
                b64_data += "=" * (4 - missing)
            bin_data = base64.b64decode(b64_data)
        except Exception as e:
            print(f"  [SKIP] base64 디코드 실패: {e}")
            return m.group(0)

        if not bin_data:
            print("  [SKIP] 빈 데이터")
            return m.group(0)

        save_name = secrets.token_hex(16) + "." + ext
        save_path = UPLOAD_DIR / save_name

        try:
            save_path.write_bytes(bin_data)
        except OSError as e:
            print(f"  [SKIP] 파일 저장 실패: {e}")
            return m.group(0)

        count += 1
        url = UPLOAD_URL.rstrip("/") + "/" + save_name
        print(f"  [SAVED] {save_name} ({len(bin_data):,} bytes)")
        return f"src={quote}{url}{quote}"

    new_content = PATTERN.sub(_replacer, content)
    return new_content, count


# ── SQL 파일 읽기 ─────────────────────────────────────────────
print(f"SQL 파일 읽는 중: {SQL_FILE}")
sql_content = SQL_FILE.read_text(encoding="utf-8-sig")  # BOM 자동 제거

print("data:image base64 이미지 처리 중...\n")
new_sql, total_saved = replace_base64_images(sql_content)

# ── 변환된 SQL 저장 ───────────────────────────────────────────
OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
OUTPUT_FILE.write_text(new_sql, encoding="utf-8")

print(f"\n{'='*40}")
print(f"완료: 총 {total_saved}개 이미지 파일 저장")
print(f"이미지 저장 경로 : {UPLOAD_DIR}")
print(f"변환된 SQL 저장됨: {OUTPUT_FILE}")
print(f"{'='*40}")
print()
print("다음 단계:")
print(f"  1. phpMyAdmin 또는 MySQL 클라이언트에서")
print(f"     '{OUTPUT_FILE.name}' 파일을 임포트하세요.")
print(f"  2. uploads/editor/ 폴더를 웹서버 루트에 배포하세요.")

