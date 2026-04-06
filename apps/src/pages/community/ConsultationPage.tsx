import { useState } from 'react'
import { Link } from 'react-router-dom'
import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

type SearchType = '' | 'A.AD_TITLE' | 'A.AD_CONT' | 'A.AD_NAME'

type ConsultationItem = {
  id: number
  num: number
  dept: string
  title: string
  date: string
  views: number
  isSecret: boolean
  status: '답변완료' | '답변대기'
}

const SEARCH_TYPE_LABELS: Record<SearchType, string> = {
  '': '전체',
  'A.AD_TITLE': '제목',
  'A.AD_CONT': '내용',
  'A.AD_NAME': '이름',
}

// TODO: API 연동 시 제거 — 임시 목업 데이터
const mockItems: ConsultationItem[] = [
  { id: 90, num: 40, dept: '신경과',   title: '두통',                                              date: '2026-03-18', views: 56,  isSecret: false, status: '답변완료' },
  { id: 89, num: 39, dept: '내과',     title: '호흡기 내과 기관지염 통증지속에 관해 궁금하여 상담 ...', date: '2026-02-11', views: 175, isSecret: false, status: '답변완료' },
  { id: 86, num: 38, dept: '심장내과', title: '고지혈증 치료제 관련 질문',                           date: '2026-01-18', views: 0,   isSecret: true,  status: '답변완료' },
  { id: 85, num: 37, dept: '내과',     title: '진료예약 변경신청합니당',                              date: '2025-11-21', views: 456, isSecret: false, status: '답변완료' },
  { id: 84, num: 36, dept: '내과',     title: '진료예약 변경신청합니당',                              date: '2025-11-18', views: 402, isSecret: false, status: '답변완료' },
  { id: 83, num: 35, dept: '내과',     title: '내과진료',                                           date: '2025-11-13', views: 403, isSecret: false, status: '답변완료' },
  { id: 82, num: 34, dept: '정형외과', title: '수술부위관련',                                        date: '2025-11-03', views: 0,   isSecret: true,  status: '답변완료' },
  { id: 81, num: 33, dept: '내과',     title: '진료예약 변경신청합니당',                              date: '2025-11-03', views: 388, isSecret: false, status: '답변완료' },
  { id: 80, num: 32, dept: '내과',     title: '왼쪽무릎 안쪽부분 통증',                              date: '2025-11-03', views: 0,   isSecret: true,  status: '답변완료' },
  { id: 79, num: 31, dept: '신경과',   title: '삼차신경통',                                          date: '2025-10-31', views: 0,   isSecret: true,  status: '답변완료' },
]

const TOTAL_COUNT = 40
const TOTAL_PAGES = 4
const PAGE_GROUP_SIZE = 10

export default function ConsultationPage() {
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
      visualClass="vs8"
      visualTitle="고객마당"
      contentsClass="sub08"
      lnbItems={lnbItems}
    >
      <h3 className="cont_tit">건강상담</h3>
      <div className="con_area">
        <div className="bbs_cont">
          <p className="bbs_disc">
            온라인으로 간편하게 진료과별로 진료 및 입원관련 건강상담을 신청 하실 수 있습니다. <br />
            빠르고 친절하게 답변해드리겠습니다.
          </p>
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
                name="sv"
                className="sh_ip"
                title="건강상담 검색어"
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
                <caption>건강상담 리스트표</caption>
                <colgroup>
                  <col style={{ width: '70px' }} className="m_hide" />
                  <col style={{ width: '150px' }} />
                  <col />
                  <col style={{ width: '150px' }} className="m_hide" />
                  <col style={{ width: '100px' }} className="m_hide" />
                  <col style={{ width: '100px' }} />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col" className="m_hide">번호</th>
                    <th scope="col">진료과</th>
                    <th scope="col">제목</th>
                    <th scope="col" className="m_hide">등록일</th>
                    <th scope="col" className="m_hide">조회수</th>
                    <th scope="col">답변상태</th>
                  </tr>
                </thead>
                <tbody>
                  {mockItems.map((item) => (
                    <tr key={item.id}>
                      <td className="m_hide">{item.num}</td>
                      <td>{item.dept}</td>
                      <td>
                        <Link to={`/community/consultation/${item.id}`}>
                          {item.title}
                        </Link>
                        {item.isSecret && <i className="ico_secret"></i>}
                      </td>
                      <td className="m_hide">{item.date}</td>
                      <td className="m_hide">{item.views}</td>
                      <td>{item.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bbs_btm">
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
            <Link to="/community/consultation/new" className="btn btn_right">
              <span>건강상담 등록</span>
            </Link>
          </div>
        </div>
      </div>
    </SubPageLayout>
  )
}