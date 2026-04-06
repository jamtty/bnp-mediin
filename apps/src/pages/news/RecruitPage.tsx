import { useState } from 'react'
import { Link } from 'react-router-dom'
import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

type SearchType = '' | 'BD.BD_TITLE' | 'BD.BD_CONTENT'

type RecruitItem = {
  id: number
  title: string
  periodStart: string
  periodEnd: string
  date: string
  status: string
}

const SEARCH_TYPE_LABELS: Record<SearchType, string> = {
  '': '전체',
  'BD.BD_TITLE': '제목',
  'BD.BD_CONTENT': '내용',
}

// TODO: API 연동 시 제거 — 임시 목업 데이터
const mockItems: RecruitItem[] = [
  { id: 414, title: '2026년도 신규 간호사 모집공고',          periodStart: '2025-10-31', periodEnd: '2025-11-23', date: '2025-10-31', status: '채용마감' },
  { id: 275, title: '2025년도 신규 간호사 모집공고',          periodStart: '2024-09-30', periodEnd: '2024-10-23', date: '2024-09-30', status: '채용마감' },
  { id: 224, title: '내시경실 간호사 채용공고',               periodStart: '2024-03-18', periodEnd: '2024-04-30', date: '2024-03-18', status: '채용마감' },
  { id: 223, title: '임상병리사 채용공고',                    periodStart: '2024-03-18', periodEnd: '2024-04-30', date: '2024-03-18', status: '채용마감' },
  { id: 219, title: '외래 간호조무사 채용공고',               periodStart: '2024-02-29', periodEnd: '2024-08-31', date: '2024-02-29', status: '채용마감' },
  { id: 218, title: '외래 간호사 채용공고',                   periodStart: '2024-02-29', periodEnd: '2024-12-30', date: '2024-02-29', status: '채용마감' },
  { id: 217, title: '병동(3교대) 간호조무사 채용공고',        periodStart: '2024-02-29', periodEnd: '2024-12-31', date: '2024-02-29', status: '채용마감' },
  { id: 216, title: '간호사 채용공고',                        periodStart: '2024-02-29', periodEnd: '2024-09-29', date: '2024-02-29', status: '채용마감' },
  { id: 211, title: '내시경식 소독 및 세척 도우미 채용공고',  periodStart: '2024-02-22', periodEnd: '2024-03-31', date: '2024-02-22', status: '채용마감' },
  { id: 210, title: '야간원무팀 채용공고',                    periodStart: '2024-02-22', periodEnd: '2024-04-01', date: '2024-02-22', status: '채용마감' },
]

const TOTAL_COUNT = 18
const TOTAL_PAGES = 2
const PAGE_GROUP_SIZE = 10

export default function RecruitPage() {
  const [searchType, setSearchType] = useState<SearchType>('')
  const [searchValue, setSearchValue] = useState('')
  const [selectOpen, setSelectOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentPage(1)
    // TODO: API 연동
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // TODO: API 연동
  }

  const pageGroupStart = Math.floor((currentPage - 1) / PAGE_GROUP_SIZE) * PAGE_GROUP_SIZE + 1
  const pageGroupEnd = Math.min(pageGroupStart + PAGE_GROUP_SIZE - 1, TOTAL_PAGES)

  return (
    <SubPageLayout
      visualClass="vs4"
      visualTitle="병원소식"
      contentsClass="sub04"
      lnbItems={lnbItems}
    >
      <h3 className="cont_tit">채용정보</h3>
      <div className="con_area">
        <div className="bbs_cont">
          <form onSubmit={handleSearch}>
            <input type="hidden" name="sc" value={searchType} readOnly />
            <div className="bbs_search_area">
              <div className={`select_area${selectOpen ? ' open' : ''}`}>
                <button
                  type="button"
                  className="btn_slc_active"
                  onClick={() => setSelectOpen((v) => !v)}
                >
                  {SEARCH_TYPE_LABELS[searchType]}
                </button>
                <div className="slc_list">
                  <ul>
                    {(Object.keys(SEARCH_TYPE_LABELS) as SearchType[]).map((type) => (
                      <li key={type}>
                        <button
                          type="button"
                          onClick={() => { setSearchType(type); setSelectOpen(false) }}
                        >
                          {SEARCH_TYPE_LABELS[type]}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <input
                type="text"
                className="sh_ip"
                title="채용정보 검색어"
                placeholder="검색어를 입력하세요"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button type="submit" className="btn_sh">
                <span>검색</span>
                <i className="ico_sh"></i>
              </button>
            </div>
          </form>

          <div className="bbs_list_area">
            <p className="bbs_count">총 {TOTAL_COUNT}건이 검색되었습니다.</p>
            <div className="bbs_list">
              <table>
                <caption>채용정보 리스트표</caption>
                <colgroup>
                  <col style={{ width: '65px' }} />
                  <col style={{ width: '50%' }} />
                  <col style={{ width: '40%' }} />
                  <col style={{ width: '150px' }} className="m_hide" />
                  <col style={{ width: '25%' }} />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">번호</th>
                    <th scope="col">제목</th>
                    <th scope="col">채용기간</th>
                    <th scope="col" className="m_hide">등록일</th>
                    <th scope="col">채용상태</th>
                  </tr>
                </thead>
                <tbody>
                  {mockItems.map((item, idx) => (
                    <tr key={item.id}>
                      <td>{TOTAL_COUNT - ((currentPage - 1) * 10) - idx}</td>
                      <td>
                        <Link to={`/news/recruit/${item.id}`}>{item.title}</Link>
                      </td>
                      <td>
                        {item.periodStart}
                        <br />~<br />
                        {item.periodEnd}
                      </td>
                      <td className="m_hide">{item.date}</td>
                      <td>{item.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="pagination" role="navigation">
            <button
              type="button"
              className="btn_arrow btn_first"
              title="첫 페이지"
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
            >
              처음페이지로
            </button>
            <button
              type="button"
              className="btn_arrow btn_prev"
              title="이전 페이지"
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              이전페이지로
            </button>
            <div className="page_num_list">
              {Array.from({ length: pageGroupEnd - pageGroupStart + 1 }, (_, i) => pageGroupStart + i).map((page) => (
                <button
                  key={page}
                  type="button"
                  className={`btn_num${currentPage === page ? ' active_num' : ''}`}
                  title={currentPage === page ? '현재 페이지' : undefined}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="btn_arrow btn_next"
              title="다음 페이지"
              onClick={() => handlePageChange(Math.min(TOTAL_PAGES, currentPage + 1))}
              disabled={currentPage === TOTAL_PAGES}
            >
              다음페이지로
            </button>
            <button
              type="button"
              className="btn_arrow btn_last"
              title="마지막 페이지"
              onClick={() => handlePageChange(TOTAL_PAGES)}
              disabled={currentPage === TOTAL_PAGES}
            >
              마지막페이지로
            </button>
          </div>
        </div>
      </div>
    </SubPageLayout>
  )
}