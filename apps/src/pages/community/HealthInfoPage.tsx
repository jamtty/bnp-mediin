import { useState } from 'react'
import { Link } from 'react-router-dom'
import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

type SearchType = '' | 'BD.BD_TITLE' | 'BD.BD_CONTENT'

type HealthInfoItem = {
  id: number
  title: string
  thumb: string
  date: string
}

const SEARCH_TYPE_LABELS: Record<SearchType, string> = {
  '': '전체',
  'BD.BD_TITLE': '제목',
  'BD.BD_CONTENT': '내용',
}

// TODO: API 연동 시 제거 — 임시 목업 데이터
const mockItems: HealthInfoItem[] = [
  { id: 457, title: "내 '간'이 보내는 위험신호! A형 · E형 간염",              thumb: '/upfilePath/bd/BD_202603131011234100.png', date: '2026-03-13' },
  { id: 453, title: '심장 건강의 이상신호! 심장판막질환',                      thumb: '/upfilePath/bd/BD_202602270307538430.png', date: '2026-02-27' },
  { id: 452, title: '바람만 스쳐도 눈물이? 당신의 관절이 보내는 경고,  ...',    thumb: '/upfilePath/bd/BD_202602270257589830.png', date: '2026-02-27' },
  { id: 447, title: '내 몸의 균형을 무너뜨리는 척추측만증',                    thumb: '/upfilePath/bd/BD_202602120209227090.png', date: '2026-02-12' },
  { id: 445, title: '파주시 유일 류마티스 내과',                               thumb: '/upfilePath/bd/BD_202602061119029720.png', date: '2026-02-06' },
  { id: 444, title: '허리디스크 양방향 내시경 수술',                           thumb: '/upfilePath/bd/BD_202602061117216920.png', date: '2026-02-06' },
  { id: 439, title: '메디인병원 건강증진센터',                                  thumb: '/upfilePath/bd/BD_202601290208026710.jpg',  date: '2026-01-29' },
  { id: 430, title: '겨울철, 한파가 예보된다면 한랭질환을 조심하세요!',          thumb: '/upfilePath/bd/BD_202512260206333880.jpg',  date: '2025-12-26' },
  { id: 426, title: '건강한 콩팥, 건강한 삶 ',                                 thumb: '/upfilePath/bd/BD_202512120215510570.jpg',  date: '2025-12-12' },
  { id: 423, title: '최소 절개, 흉터없이 안전한 복강경 수술, 담낭절제술',       thumb: '/upfilePath/bd/BD_202512050236573940.jpg',  date: '2025-12-05' },
]

const TOTAL_COUNT = 161
const TOTAL_PAGES = 17
const PAGE_GROUP_SIZE = 10

export default function HealthInfoPage() {
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
      <h3 className="cont_tit">건강정보</h3>
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
                title="건강정보 검색어"
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
            <div className="bbs_list2">
              {mockItems.map((item) => (
                <div className="bbs_item" key={item.id}>
                  <Link to={`/community/health-info/${item.id}`}>
                    <div className="bbs_thumb">
                      <img src={item.thumb} alt="" />
                    </div>
                    <div className="bbs_item_cont">
                      <p className="bbs_name">{item.title}</p>
                      <p className="bbs_disc"></p>
                      <p className="bbs_date">{item.date}</p>
                    </div>
                  </Link>
                </div>
              ))}
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