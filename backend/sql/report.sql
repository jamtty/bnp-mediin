-- =====================================================
-- 사업보고(report) 테이블 생성 쿼리
-- =====================================================

-- 사업보고 테이블
CREATE TABLE `report` (
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='사업보고 게시판';


-- 사업보고 첨부파일 테이블
CREATE TABLE `report_file` (
  `id`          INT(11)       NOT NULL AUTO_INCREMENT COMMENT '파일 번호',
  `report_id`   INT(11)       NOT NULL                COMMENT '사업보고 번호(FK)',
  `ori_name`    VARCHAR(500)  NOT NULL                COMMENT '원본 파일명',
  `save_name`   VARCHAR(500)  NOT NULL                COMMENT '저장 파일명',
  `file_path`   VARCHAR(1000) NOT NULL                COMMENT '파일 경로',
  `file_size`   INT(11)       NOT NULL DEFAULT 0      COMMENT '파일 크기(byte)',
  `file_ext`    VARCHAR(20)   NULL                    COMMENT '파일 확장자',
  `created_at`  DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '등록일',
  PRIMARY KEY (`id`),
  KEY `idx_report_id` (`report_id`),
  CONSTRAINT `fk_report_file_report_id` FOREIGN KEY (`report_id`) REFERENCES `report` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='사업보고 첨부파일';


-- =====================================================
-- 샘플 데이터
-- =====================================================

INSERT INTO `report` (`title`, `author_id`, `author_name`, `content`, `created_at`) VALUES
('2024년 결산 감사 보고', 'admin', '관리자', '2024년 결산 감사 보고 자료입니다.', '2024-10-14 09:00:00'),
('2023년 결산 감사 보고', 'admin', '관리자', '2023년 결산 감사 보고 자료입니다.', '2024-03-10 09:00:00'),
('2022년 결산 감사 보고', 'admin', '관리자', '2022년 결산 감사 보고 자료입니다.', '2023-03-15 09:00:00');
