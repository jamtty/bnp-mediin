import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'
import { fetchRecruitList, type RecruitItem } from '../../api/board'

type SearchType = '' | '0' | '1'

const SEARCH_TYPE_LABELS: Record<SearchType, string> = {
  '': '전체',
  '0': '제목',
  '1': '내용',
}

const PAGE_SIZE = 10
const PAGE_GROUP_SIZE = 10

export default function RecruitPage() {
  const [items, setItems]           = useState<RecruitItem[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [totalPages, setTotalPages] = useState(1)
  const [page, setPage]             = useState(1)
  const [searchType, setSearchType] = useState<SearchType>('')
  const [inputValue, setInputValue] = useState('')
  const [keyword, setKeyword]       = useState('')
  const [selectOpen, setSelectOpen] = useState(false)
  const [loading, setLoading]       = useState(false)

  const today = new Date().toISOString().slice(0, 10)

  const getStatus = (periodEnd: string | null) => {
    if (!periodEnd) return '채용중'
    return periodEnd < today ? '채용마감' : '채용중'
  }

  const load = useCallback(async (p: number, kw: string, type: SearchType) => {
    setLoading(true)
    try {
      const params: Parameters<typeof fetchRecruitList>[0] = { page: p, size: PAGE_SIZE }
      if (kw) {
        params.keyword = kw
        params.type    = type === '' ? 2 : Number(type)
      }
      const res = await fetchRecruitList(params)
      setItems(res.items)
      setTotalCount(res.total)
      setTotalPages(res.total_pages || 1)
    } catch {
      // 오류 무시
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load(page, keyword, searchType)
  }, [load, page, keyword, searchType])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setPage(1)
    setKeyword(inputValue)
  }

  const handlePageChange = (p: number) => {
    setPage(p)
    window.scrollTo({ top: 0 })
  }

  const pageGroupStart =
    Math.floor((page - 1) / PAGE_GROUP_SIZE) * PAGE_GROUP_SIZE + 1
  const pageGroupEnd = Math.min(pageGroupStart + PAGE_GROUP_SIZE - 1, totalPages)

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
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
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
                  {loading ? (
                    <tr><td colSpan={5} style={{ textAlign: 'center' }}>불러오는 중...</td></tr>
                  ) : items.length === 0 ? (
                    <tr><td colSpan={5} style={{ textAlign: 'center' }}>등록된 채용공고가 없습니다.</td></tr>
                  ) : items.map((item, idx) => (
                    <tr key={item.id}>
                      <td>{totalCount - ((page - 1) * PAGE_SIZE) - idx}</td>
                      <td>
                        <Link to={`/news/recruit/${item.id}`}>{item.title}</Link>
                      </td>
                      <td>
                        {item.period_start ?? '-'}
                        <br />~<br />
                        {item.period_end ?? '-'}
                      </td>
                      <td className="m_hide">{item.created_at}</td>
                      <td>{getStatus(item.period_end)}</td>
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
              disabled={page === 1}
            >
              처음페이지로
            </button>
            <button
              type="button"
              className="btn_arrow btn_prev"
              title="이전 페이지"
              onClick={() => handlePageChange(Math.max(1, page - 1))}
              disabled={page === 1}
            >
              이전페이지로
            </button>
            <div className="page_num_list">
              {Array.from(
                { length: pageGroupEnd - pageGroupStart + 1 },
                (_, i) => pageGroupStart + i,
              ).map((p) => (
                <button
                  key={p}
                  type="button"
                  className={`btn_num${page === p ? ' active_num' : ''}`}
                  title={page === p ? '현재 페이지' : undefined}
                  onClick={() => handlePageChange(p)}
                >
                  {p}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="btn_arrow btn_next"
              title="다음 페이지"
              onClick={() => handlePageChange(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
            >
              다음페이지로
            </button>
            <button
              type="button"
              className="btn_arrow btn_last"
              title="마지막 페이지"
              onClick={() => handlePageChange(totalPages)}
              disabled={page === totalPages}
            >
              마지막페이지로
            </button>
          </div>
        </div>
      </div>
    </SubPageLayout>
  )
}

