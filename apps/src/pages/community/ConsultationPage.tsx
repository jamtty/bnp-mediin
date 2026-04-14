import { useState, useEffect, useCallback } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'
import { fetchConsultationList, type ConsultationItem } from '../../api/consultation'
import { JB_CD_MAP } from './_jbCdMap'

type SearchType = '' | 'A.AD_TITLE' | 'A.AD_CONT' | 'A.AD_NAME'

const SEARCH_TYPE_LABELS: Record<SearchType, string> = {
  '': '전체',
  'A.AD_TITLE': '제목',
  'A.AD_CONT': '내용',
  'A.AD_NAME': '이름',
}

const PAGE_SIZE = 10
const PAGE_GROUP_SIZE = 10

export default function ConsultationPage() {
  const [searchParams, setSearchParams] = useSearchParams()

  const currentPage = Math.max(1, Number(searchParams.get('page') ?? 1))
  const appliedSearchType = (searchParams.get('type') ?? '') as SearchType
  const appliedSearchValue = searchParams.get('keyword') ?? ''

  // 입력 중인 값 (URL에는 검색 버튼 눌러야 반영)
  const [searchType, setSearchType] = useState<SearchType>(appliedSearchType)
  const [searchValue, setSearchValue] = useState(appliedSearchValue)
  const [selectOpen, setSelectOpen] = useState(false)
  const [items, setItems] = useState<ConsultationItem[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(false)

  // URL 파라미터가 바뀌면 입력 필드도 동기화 (헤더 메뉴 클릭으로 파라미터 초기화 시)
  useEffect(() => {
    setSearchType(appliedSearchType)
    setSearchValue(appliedSearchValue)
  }, [appliedSearchType, appliedSearchValue])

  const loadList = useCallback(async (page: number, keyword: string, type: SearchType) => {
    setLoading(true)
    try {
      const result = await fetchConsultationList({ page, size: PAGE_SIZE, keyword, type })
      setItems(result.items)
      setTotalCount(result.total)
      setTotalPages(result.total_pages)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadList(currentPage, appliedSearchValue, appliedSearchType)
  }, [currentPage, appliedSearchValue, appliedSearchType, loadList])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchParams({ type: searchType, keyword: searchValue, page: '1' })
  }

  const handlePageChange = (page: number) => {
    setSearchParams({ type: appliedSearchType, keyword: appliedSearchValue, page: String(page) })
    window.scrollTo(0, 0)
  }

  const pageGroupStart = Math.floor((currentPage - 1) / PAGE_GROUP_SIZE) * PAGE_GROUP_SIZE + 1
  const pageGroupEnd = Math.min(pageGroupStart + PAGE_GROUP_SIZE - 1, totalPages)

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
            <input type="hidden" name="sc" value={appliedSearchType} readOnly />
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
            <p className="bbs_count">총 {totalCount}건이 검색되었습니다.</p>
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
                    <th scope="col">분류</th>
                    <th scope="col">제목</th>
                    <th scope="col" className="m_hide">등록일</th>
                    <th scope="col" className="m_hide">조회수</th>
                    <th scope="col">답변상태</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr><td colSpan={6} style={{ textAlign: 'center' }}>불러오는 중...</td></tr>
                  ) : items.length === 0 ? (
                    <tr><td colSpan={6} style={{ textAlign: 'center' }}>등록된 상담이 없습니다.</td></tr>
                  ) : items.map((item, idx) => {
                    const rowNum = totalCount - (currentPage - 1) * PAGE_SIZE - idx
                    return (
                      <tr key={item.id}>
                        <td className="m_hide">{rowNum}</td>
                        <td>{item.jb_cd ? (JB_CD_MAP[item.jb_cd]?.label ?? item.jb_cd) : '-'}</td>
                        <td>
                          <Link to={`/community/consultation/${item.id}`}>
                            {item.title}
                            {item.is_secret === 'Y' && <i className="ico_secret"></i>}
                          </Link>
                        </td>
                        <td className="m_hide">{item.date}</td>
                        <td className="m_hide">{item.view_count}</td>
                        <td>{item.status}</td>
                      </tr>
                    )
                  })}
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
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
                다음페이지로
              </button>
              <button
                type="button"
                className="btn_arrow btn_last"
                title="마지막 페이지"
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
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
