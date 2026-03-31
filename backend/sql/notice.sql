-- =====================================================
-- 공지사항(notice) 테이블 생성 쿼리
-- =====================================================

-- 공지사항 테이블
CREATE TABLE `notice` (
  `id`          INT(11)       NOT NULL AUTO_INCREMENT COMMENT '번호',
  `title`       VARCHAR(500)  NOT NULL                COMMENT '제목',
  `author_id`   VARCHAR(100)  NOT NULL                COMMENT '작성자 아이디',
  `author_name` VARCHAR(100)  NOT NULL                COMMENT '작성자 이름',
  `content`     LONGTEXT      NULL                    COMMENT '내용',
  `view_count`  INT(11)       NOT NULL DEFAULT 0      COMMENT '조회수',
  `created_at`  DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '작성일',
  `updated_at`  DATETIME      NULL ON UPDATE CURRENT_TIMESTAMP   COMMENT '수정일',
  `is_deleted`  TINYINT(1)    NOT NULL DEFAULT 0      COMMENT '삭제여부(0:정상, 1:삭제)',
  PRIMARY KEY (`id`),
  KEY `idx_created_at` (`created_at`),
  KEY `idx_is_deleted` (`is_deleted`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='공지사항 게시판';


-- 공지사항 첨부파일 테이블
CREATE TABLE `notice_file` (
  `id`          INT(11)       NOT NULL AUTO_INCREMENT COMMENT '파일 번호',
  `notice_id`   INT(11)       NOT NULL                COMMENT '공지사항 번호(FK)',
  `ori_name`    VARCHAR(500)  NOT NULL                COMMENT '원본 파일명',
  `save_name`   VARCHAR(500)  NOT NULL                COMMENT '저장 파일명',
  `file_path`   VARCHAR(1000) NOT NULL                COMMENT '파일 경로',
  `file_size`   INT(11)       NOT NULL DEFAULT 0      COMMENT '파일 크기(byte)',
  `file_ext`    VARCHAR(20)   NULL                    COMMENT '파일 확장자',
  `created_at`  DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '등록일',
  PRIMARY KEY (`id`),
  KEY `idx_notice_id` (`notice_id`),
  CONSTRAINT `fk_notice_file_notice_id` FOREIGN KEY (`notice_id`) REFERENCES `notice` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='공지사항 첨부파일';


-- =====================================================
-- 샘플 데이터
-- =====================================================

INSERT INTO `notice` (`title`, `author_id`, `author_name`, `content`, `created_at`) VALUES
('[안내] 2025년도 학업장려금 및 창업지원금 안내', 'admin', '관리자', '<p>2025년도 학업장려금 및 창업지원금 안내 내용입니다.</p>', '2024-10-14 09:00:00'),
('[안내] 재단 홈페이지 오픈 안내', 'admin', '관리자', '<p>참마중물재단 홈페이지가 오픈하였습니다.</p>', '2024-09-01 09:00:00');
