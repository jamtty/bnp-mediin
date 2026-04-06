import { useState } from 'react'
import { Link } from 'react-router-dom'
import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

type SearchType = '' | 'BD.BD_TITLE' | 'BD.BD_CONTENT'

type NoticeItem = {
  id: number
  num: number | null
  title: string
  date: string
  views: number
  isPinned: boolean
}

const SEARCH_TYPE_LABELS: Record<SearchType, string> = {
  '': '전체',
  'BD.BD_TITLE': '제목',
  'BD.BD_CONTENT': '내용',
}

const noticeList: NoticeItem[] = [
  { id: 464, num: null, isPinned: true,  title: '2026년 1분기 친절사원 포상',                     date: '2026-04-02', views: 40 },
  { id: 462, num: null, isPinned: true,  title: "내'무릎'이 보내는 경고! 무릎관절염",              date: '2026-03-27', views: 86 },
  { id: 456, num: null, isPinned: true,  title: "내 '간'이 보내는 위험신호! A형 · E형 간염",       date: '2026-03-13', views: 189 },
  { id: 441, num: null, isPinned: true,  title: '3월 의료진 휴진안내',                             date: '2026-02-03', views: 2349 },
  { id: 438, num: null, isPinned: true,  title: '허리디스크 양방향 내시경 수술',                   date: '2026-01-23', views: 979 },
  { id: 435, num: null, isPinned: true,  title: '파주시 유일 류마티스 내과',                       date: '2026-01-13', views: 1788 },
  { id: 100, num: null, isPinned: true,  title: '대장내시경 약 복용법 - 오전 검사',                date: '2023-05-02', views: 11819 },
  { id: 99,  num: null, isPinned: true,  title: '대장내시경 약 복용법 - 오후 검사',                date: '2023-05-02', views: 20439 },
  { id: 461, num: 193,  isPinned: false, title: '4주기 의료기관인증 중간현장조사',                  date: '2026-03-20', views: 133 },
  { id: 460, num: 192,  isPinned: false, title: '정형외과와 함께할 새로운 의료진을 소개 합니다.',   date: '2026-03-20', views: 346 },
]

const TOTAL_COUNT = 201
const TOTAL_PAGES = 21
const PAGE_GROUP_SIZE = 10

export default function NoticePage() {
  const [searchType, setSearchType] = useState<SearchType>('')
  const [searchValue, setSearchValue] = useState('')
  const [selectOpen, setSelectOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
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
      <h3 className="cont_tit">공지사항</h3>
      <div className="con_area">
        <div className="bbs_cont">
          <form onSubmit={handleSearch}>
            <input type="hidden" name="sc" value={searchType} readOnly />
            <div className="bbs_search_area">
              <div className={`select_area${selectOpen ? ' open' : ''}`}>
                <button
                  type="button"
                  className="btn_slc_active"
                  onClick={() => setSelectOpen(v => !v)}
                >
                  {SEARCH_TYPE_LABELS[searchType]}
                </button>
                <div className="slc_list">
                  <ul>
                    {(Object.keys(SEARCH_TYPE_LABELS) as SearchType[]).map(key => (
                      <li key={key}>
                        <button
                          type="button"
                          onClick={() => { setSearchType(key); setSelectOpen(false) }}
                        >
                          {SEARCH_TYPE_LABELS[key]}
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
                title="공지사항 검색어"
                placeholder="검색어를 입력하세요"
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
              />
              <button type="submit" className="btn_sh">
                <span>검색</span>
                <i className="ico_sh"></i>
              </button>
            </div>
          </form>

          <div className="bbs_list_area">
            <p className="bbs_count">총 {TOTAL_COUNT.toLocaleString()}건이 검색되었습니다.</p>
            <div className="bbs_list">
              <table>
                <caption>공지사항 리스트표</caption>
                <colgroup>
                  <col style={{ width: '70px' }} />
                  <col />
                  <col style={{ width: '150px' }} className="m_hide" />
                  <col style={{ width: '80px' }} className="m_hide" />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">번호</th>
                    <th scope="col">제목</th>
                    <th scope="col" className="m_hide">등록일</th>
                    <th scope="col" className="m_hide">조회수</th>
                  </tr>
                </thead>
                <tbody>
                  {noticeList.map(item => (
                    <tr key={item.id}>
                      <td>
                        {item.isPinned
                          ? <span className="t_notice">공지</span>
                          : item.num
                        }
                      </td>
                      <td>
                        <Link to={`/news/notice/${item.id}`}>
                          {item.title}
                        </Link>
                      </td>
                      <td className="m_hide">{item.date}</td>
                      <td className="m_hide">{item.views.toLocaleString()}</td>
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
              onClick={() => handlePageChange(1)}
              title="첫 페이지"
            >
              처음페이지로
            </button>
            <button
              type="button"
              className="btn_arrow btn_prev"
              onClick={() => handlePageChange(Math.max(1, pageGroupStart - 1))}
              title="이전 페이지"
            >
              이전페이지로
            </button>
            <div className="page_num_list">
              {Array.from({ length: pageGroupEnd - pageGroupStart + 1 }, (_, i) => pageGroupStart + i).map(page => (
                <button
                  key={page}
                  type="button"
                  className={`btn_num${page === currentPage ? ' active_num' : ''}`}
                  onClick={() => handlePageChange(page)}
                  title={page === currentPage ? '현재 페이지' : undefined}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="btn_arrow btn_next"
              onClick={() => handlePageChange(Math.min(TOTAL_PAGES, pageGroupEnd + 1))}
              title="다음 페이지"
            >
              다음페이지로
            </button>
            <button
              type="button"
              className="btn_arrow btn_last"
              onClick={() => handlePageChange(TOTAL_PAGES)}
              title="마지막 페이지"
            >
              마지막페이지로
            </button>
          </div>
        </div>
      </div>
    </SubPageLayout>
  )
}
