<?php
/**
 * 공지사항 Repository
 * DB 쿼리만 담당 - 비즈니스 로직 없음
 */
class NoticeRepository extends BaseRepository
{
    /**
     * 목록 총 건수
     */
    public function countList(array $searchCondition): int
    {
        [$where, $params] = $this->buildSearchWhere($searchCondition);

        return (int)$this->selectScalar(
            "SELECT COUNT(*) FROM notice n $where",
            $params
        );
    }

    /**
     * 목록 조회 (페이징)
     */
    public function findList(array $searchCondition, int $limit, int $offset): array
    {
        [$where, $params] = $this->buildSearchWhere($searchCondition);

        $sql = "
            SELECT
                n.id,
                n.title,
                n.author_name,
                DATE_FORMAT(n.created_at, '%Y-%m-%d') AS created_at,
                n.view_count,
                LEFT(n.content, 100) AS content,
                (SELECT COUNT(*) FROM notice_file f WHERE f.notice_id = n.id) AS file_count
            FROM notice n
            $where
            ORDER BY n.id DESC
            LIMIT :limit OFFSET :offset
        ";

        $stmt = $this->db->prepare($sql);

        foreach ($params as $key => $val) {
            $stmt->bindValue($key, $val, PDO::PARAM_STR);
        }

        $stmt->bindValue(':limit',  $limit,  PDO::PARAM_INT);
        $stmt->bindValue(':offset', $offset, PDO::PARAM_INT);
        $stmt->execute();

        return $stmt->fetchAll();
    }

    /**
     * 단건 조회
     */
    public function findById(int $id): array|false
    {
        return $this->selectOne(
            "SELECT
                n.id, n.title, n.author_id, n.author_name,
                n.content, n.view_count,
                DATE_FORMAT(n.created_at, '%Y-%m-%d') AS created_at,
                DATE_FORMAT(n.updated_at, '%Y-%m-%d') AS updated_at
            FROM notice n
            WHERE n.id = :id AND n.is_deleted = 0",
            [':id' => $id]
        );
    }

    /**
     * 첨부파일 목록
     */
    public function findFiles(int $noticeId): array
    {
        $uploadUrl = Env::get('UPLOAD_URL_NOTICE', '/uploads/notice/');

        return $this->select(
            "SELECT
                id, ori_name, save_name,
                CONCAT(:upload_url, save_name) AS file_url,
                file_size, file_ext
            FROM notice_file
            WHERE notice_id = :notice_id
            ORDER BY id ASC",
            [':upload_url' => $uploadUrl, ':notice_id' => $noticeId]
        );
    }

    /**
     * 이전글
     */
    public function findPrev(int $id): array|false
    {
        return $this->selectOne(
            "SELECT id, title FROM notice
             WHERE id < :id AND is_deleted = 0
             ORDER BY id DESC LIMIT 1",
            [':id' => $id]
        );
    }

    /**
     * 다음글
     */
    public function findNext(int $id): array|false
    {
        return $this->selectOne(
            "SELECT id, title FROM notice
             WHERE id > :id AND is_deleted = 0
             ORDER BY id ASC LIMIT 1",
            [':id' => $id]
        );
    }

    /**
     * 조회수 증가
     */
    public function incrementViewCount(int $id): void
    {
        $this->execute(
            'UPDATE notice SET view_count = view_count + 1 WHERE id = :id',
            [':id' => $id]
        );
    }

    /**
     * 게시글 등록
     */
    public function create(string $title, string $content, string $authorId, string $authorName): int
    {
        return (int)$this->insert(
            'INSERT INTO notice (title, content, author_id, author_name) VALUES (:title, :content, :author_id, :author_name)',
            [':title' => $title, ':content' => $content, ':author_id' => $authorId, ':author_name' => $authorName]
        );
    }

    /**
     * 게시글 수정
     */
    public function update(int $id, string $title, string $content): bool
    {
        return $this->execute(
            'UPDATE notice SET title = :title, content = :content WHERE id = :id AND is_deleted = 0',
            [':title' => $title, ':content' => $content, ':id' => $id]
        ) > 0;
    }

    /**
     * 게시글 삭제 (실제 삭제)
     */
    public function softDelete(int $id): bool
    {
        return $this->execute(
            'DELETE FROM notice WHERE id = :id',
            [':id' => $id]
        ) > 0;
    }
    /**
     * 첨부파일 저장
     */
    public function saveFile(int $noticeId, string $oriName, string $saveName, string $filePath, int $fileSize, string $fileExt): void
    {
        $this->execute(
            'INSERT INTO notice_file (notice_id, ori_name, save_name, file_path, file_size, file_ext) VALUES (:notice_id, :ori_name, :save_name, :file_path, :file_size, :file_ext)',
            [':notice_id' => $noticeId, ':ori_name' => $oriName, ':save_name' => $saveName, ':file_path' => $filePath, ':file_size' => $fileSize, ':file_ext' => $fileExt]
        );
    }

    /**
     * 첨부파일 디스크 경로 조회
     */
    public function findFilePath(int $fileId): string|false
    {
        $row = $this->selectOne('SELECT file_path FROM notice_file WHERE id = :id', [':id' => $fileId]);
        return $row ? (string)$row['file_path'] : false;
    }

    /**
     * 첨부파일 DB 삭제
     */
    public function deleteFile(int $fileId): bool
    {
        return $this->execute('DELETE FROM notice_file WHERE id = :id', [':id' => $fileId]) > 0;
    }
    // ─────────────────────────────────────────────────────────────
    // Private helpers
    // ─────────────────────────────────────────────────────────────

    private function buildSearchWhere(array $condition): array
    {
        $where  = 'WHERE n.is_deleted = 0';
        $params = [];

        $keyword = trim($condition['keyword'] ?? '');
        $type    = isset($condition['type']) ? (int)$condition['type'] : -1;

        if ($keyword !== '') {
            $like = '%' . $keyword . '%';
            if ($type === 0) {
                $where .= ' AND n.title LIKE :keyword';
                $params[':keyword'] = $like;
            } elseif ($type === 1) {
                $where .= ' AND n.content LIKE :keyword';
                $params[':keyword'] = $like;
            } else {
                $where .= ' AND (n.title LIKE :keyword OR n.content LIKE :keyword2)';
                $params[':keyword']  = $like;
                $params[':keyword2'] = $like;
            }
        }

        return [$where, $params];
    }
}
