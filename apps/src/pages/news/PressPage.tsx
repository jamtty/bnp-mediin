import { useState } from 'react'
import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

type SearchType = '' | 'BD.BD_TITLE' | 'BD.BD_CONTENT'

type PressItem = {
  id: number
  isPinned: boolean
  press: string
  title: string
  url: string
  date: string
  views: number
}

// TODO: API 연동 시 제거 — 임시 목업 데이터
const mockItems: PressItem[] = [
  { id: -1, isPinned: true,  press: '경기일보',   title: "파주 메디인병원, 보건복지부의 '포괄 2차 종합병원'  ...", url: 'https://www.kgnews.co.kr/news/article.html?no=854267',                        date: '2025-07-14', views: 122 },
  { id: -2, isPinned: true,  press: '파주타임스',  title: "파주 메디인병원, 보건복지부 '포괄 2차종합병원'에 ...",  url: 'https://www.pajutimes.com/news/articleView.html?idxno=48928',                date: '2025-07-11', views: 138 },
  { id: -3, isPinned: true,  press: '하이닥 뉴스', title: "원인 모를 아침 두통…매일 하는 '이것'이 원인일  ...",   url: 'https://news.hidoc.co.kr/news/articleView.html?idxno=47902',                 date: '2025-05-27', views: 151 },
  { id: -4, isPinned: true,  press: '하이닥 뉴스', title: "주말이면 아픈 머리, 평일과 달라진 '이것' 때문",         url: 'https://news.hidoc.co.kr/news/articleView.html?idxno=47073',                 date: '2025-05-22', views: 131 },
  { id: 21, isPinned: false, press: '하이닥',      title: "밤마다 다리에서 느껴지는 이상 감각...'하지불안증 ...",  url: 'https://news.hidoc.co.kr/news/articleView.html?idxno=44432',                 date: '2025-02-24', views: 740 },
  { id: 20, isPinned: false, press: '하이닥 뉴스', title: '건망증과 치매의 차이점은?…건망증 타파하는 4가지  ...',  url: 'https://news.hidoc.co.kr/news/articleView.html?idxno=42647',                 date: '2025-01-14', views: 784 },
  { id: 19, isPinned: false, press: '파주타임스',  title: "메디인병원,결핵ㆍ천식 적정성검사 '1등급'",              url: 'https://www.pajutimes.com/news/articleView.html?idxno=47670',               date: '2024-12-09', views: 757 },
  { id: 18, isPinned: false, press: '파주타임스',  title: '파주 메디인병원, 의료서비스 각 분야서 두각',             url: 'https://www.pajutimes.com/news/articleView.html?idxno=47557',               date: '2024-11-13', views: 770 },
  { id: 17, isPinned: false, press: '파주타임스',  title: '메디인병원, 지역종합병원으로 새롭게 조명',               url: 'https://www.pajutimes.com/news/articleView.html?idxno=47244',               date: '2024-10-02', views: 790 },
  { id: 16, isPinned: false, press: '파주타임스',  title: "메디인병원, 마취 적정성 평가 '1등급' 획득",             url: 'https://www.pajutimes.com/news/articleView.html?idxno=46913',               date: '2024-08-26', views: 794 },
]

// const ITEMS_PER_PAGE = 10  // TODO: API 연동 시 사용
const totalCount = 25
const totalPages = 3

const searchTypeLabel: Record<SearchType, string> = {
  '': '전체',
  'BD.BD_TITLE': '제목',
  'BD.BD_CONTENT': '내용',
}

export default function PressPage() {
  const [searchType, setSearchType] = useState<SearchType>('')
  const [searchValue, setSearchValue] = useState('')
  const [isSelectOpen, setIsSelectOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  // TODO: API 연동 — searchType, searchValue, currentPage를 쿼리로 fetch
  const items = mockItems

  return (
    <SubPageLayout
      visualClass="vs4"
      visualTitle="병원소식"
      contentsClass="sub04"
      lnbItems={lnbItems}
    >
      <h3 className="cont_tit">보도자료</h3>
      <div className="con_area">

        <div className="bbs_cont">
          {/* 검색폼 */}
          <div className="bbs_search_area">
            <div className={`select_area${isSelectOpen ? ' open' : ''}`}>
              <button
                type="button"
                className="btn_slc_active"
                onClick={() => setIsSelectOpen((prev) => !prev)}
              >
                {searchTypeLabel[searchType]}
              </button>
              <div className="slc_list">
                <ul>
                  {(['', 'BD.BD_TITLE', 'BD.BD_CONTENT'] as SearchType[]).map((type) => (
                    <li key={type}>
                      <button
                        type="button"
                        onClick={() => { setSearchType(type); setIsSelectOpen(false) }}
                      >
                        {searchTypeLabel[type]}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <input
              type="text"
              className="sh_ip"
              title="보도자료 검색어"
              placeholder="검색어를 입력하세요"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') setCurrentPage(1) }}
            />
            <button
              type="button"
              className="btn_sh"
              onClick={() => setCurrentPage(1)}
            >
              <span>검색</span>
              <i className="ico_sh"></i>
            </button>
          </div>

          {/* 목록 */}
          <div className="bbs_list_area">
            <p className="bbs_count">총 {totalCount}건이 검색되었습니다.</p>
            <div className="bbs_list">
              <table>
                <caption>보도자료 리스트표</caption>
                <colgroup>
                  <col style={{ width: '70px' }} />
                  <col style={{ width: '120px' }} />
                  <col />
                  <col style={{ width: '150px' }} className="m_hide" />
                  <col style={{ width: '80px' }} className="m_hide" />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">번호</th>
                    <th scope="col">언론사</th>
                    <th scope="col">제목</th>
                    <th scope="col" className="m_hide">등록일</th>
                    <th scope="col" className="m_hide">조회수</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, idx) => (
                    <tr key={item.isPinned ? `pinned-${idx}` : item.id}>
                      <td>
                        {item.isPinned
                          ? <span className="t_notice">공지</span>
                          : item.id
                        }
                      </td>
                      <td>{item.press}</td>
                      <td>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                          {item.title}
                        </a>
                      </td>
                      <td className="m_hide">{item.date}</td>
                      <td className="m_hide">{item.views}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 페이지네이션 */}
          <div className="pagination" role="navigation">
            <button
              type="button"
              className="btn_arrow btn_first"
              title="첫 페이지"
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
            >
              처음페이지로
            </button>
            <button
              type="button"
              className="btn_arrow btn_prev"
              title="이전 페이지"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              이전페이지로
            </button>
            <div className="page_num_list">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  className={`btn_num${currentPage === page ? ' active_num' : ''}`}
                  title={currentPage === page ? '현재 페이지' : undefined}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="btn_arrow btn_next"
              title="다음 페이지"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              다음페이지로
            </button>
            <button
              type="button"
              className="btn_arrow btn_last"
              title="마지막 페이지"
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
            >
              마지막페이지로
            </button>
          </div>
        </div>
      </div>
    </SubPageLayout>
  )
}