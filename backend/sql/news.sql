-- =====================================================
-- 소식(news) 테이블 생성 쿼리
-- =====================================================

-- 소식 테이블
CREATE TABLE `news` (
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='소식 게시판';


-- 소식 첨부파일 테이블
CREATE TABLE `news_file` (
  `id`          INT(11)       NOT NULL AUTO_INCREMENT COMMENT '파일 번호',
  `news_id`     INT(11)       NOT NULL                COMMENT '소식 번호(FK)',
  `ori_name`    VARCHAR(500)  NOT NULL                COMMENT '원본 파일명',
  `save_name`   VARCHAR(500)  NOT NULL                COMMENT '저장 파일명',
  `file_path`   VARCHAR(1000) NOT NULL                COMMENT '파일 경로',
  `file_size`   INT(11)       NOT NULL DEFAULT 0      COMMENT '파일 크기(byte)',
  `file_ext`    VARCHAR(20)   NULL                    COMMENT '파일 확장자',
  `created_at`  DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '등록일',
  PRIMARY KEY (`id`),
  KEY `idx_news_id` (`news_id`),
  CONSTRAINT `fk_news_file_news_id` FOREIGN KEY (`news_id`) REFERENCES `news` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='소식 첨부파일';


-- =====================================================
-- 샘플 데이터
-- =====================================================

INSERT INTO `news` (`title`, `author_id`, `author_name`, `content`, `created_at`) VALUES
('재단 홈페이지 오픈', 'admin', '관리자', '참마중물재단 홈페이지가 오픈하였습니다.', '2024-10-14 09:00:00'),
('2023년 멘토, 멘티 전체 만남의 날', 'admin', '관리자', '2023년도 멘토,멘티 전체 만남의 날 행사 내용입니다.', '2024-10-14 09:00:00'),
('2022년 멘토, 멘티 전체 만남의 날', 'admin', '관리자', '2022년도 멘토,멘티 전체 만남의 날 행사 내용입니다.', '2024-10-14 09:00:00');
