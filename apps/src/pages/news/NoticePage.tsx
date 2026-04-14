import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'
import { fetchNoticeList, type NoticeItem } from '../../api/notice'

type SearchType = '' | '0' | '1'

const SEARCH_TYPE_LABELS: Record<SearchType, string> = {
  '': '전체',
  '0': '제목',
  '1': '내용',
}

const PAGE_SIZE = 10
const PAGE_GROUP_SIZE = 10

export default function NoticePage() {
  const [items, setItems]             = useState<NoticeItem[]>([])
  const [totalCount, setTotalCount]   = useState(0)
  const [totalPages, setTotalPages]   = useState(1)
  const [page, setPage]               = useState(1)
  const [searchType, setSearchType]   = useState<SearchType>('')
  const [inputValue, setInputValue]   = useState('')
  const [keyword, setKeyword]         = useState('')
  const [selectOpen, setSelectOpen]   = useState(false)
  const [loading, setLoading]         = useState(false)

  const load = useCallback(async (p: number, kw: string, type: SearchType) => {
    setLoading(true)
    try {
      const params: Parameters<typeof fetchNoticeList>[0] = { page: p, size: PAGE_SIZE }
      if (kw) {
        params.keyword = kw
        params.type    = type === '' ? 2 : Number(type)
      }
      const res = await fetchNoticeList(params)
      setItems(res.items)
      setTotalCount(res.totalCount)
      setTotalPages(res.totalPages || 1)
    } catch {
      // 오류 무시 (빈 목록 유지)
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

  const pageGroupStart = Math.floor((page - 1) / PAGE_GROUP_SIZE) * PAGE_GROUP_SIZE + 1
  const pageGroupEnd   = Math.min(pageGroupStart + PAGE_GROUP_SIZE - 1, totalPages)

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
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
              />
              <button type="submit" className="btn_sh">
                <span>검색</span>
                <i className="ico_sh"></i>
              </button>
            </div>
          </form>

          <div className="bbs_list_area">
            <p className="bbs_count">
              총 {totalCount.toLocaleString()}건이 검색되었습니다.
            </p>
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
                  {loading ? (
                    <tr>
                      <td colSpan={4} style={{ textAlign: 'center', padding: '2rem' }}>
                        불러오는 중...
                      </td>
                    </tr>
                  ) : items.length === 0 ? (
                    <tr>
                      <td colSpan={4} style={{ textAlign: 'center', padding: '2rem' }}>
                        게시글이 없습니다.
                      </td>
                    </tr>
                  ) : (
                    (() => {
                      let regularIdx = 0
                      return items.map(item => {
                        const rowNum = item.is_pinned
                          ? null
                          : totalCount - (page - 1) * PAGE_SIZE - regularIdx++
                        return (
                          <tr key={item.id}>
                            <td>
                              {item.is_pinned
                                ? <span className="t_notice">공지</span>
                                : rowNum
                              }
                            </td>
                            <td>
                              <Link to={`/news/notice/${item.id}`}>
                                {item.title}
                              </Link>
                            </td>
                            <td className="m_hide">{item.created_at}</td>
                            <td className="m_hide">{item.view_count.toLocaleString()}</td>
                          </tr>
                        )
                      })
                    })()
                  )}
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
              {Array.from({ length: pageGroupEnd - pageGroupStart + 1 }, (_, i) => pageGroupStart + i).map(p => (
                <button
                  key={p}
                  type="button"
                  className={`btn_num${p === page ? ' active_num' : ''}`}
                  onClick={() => handlePageChange(p)}
                  title={p === page ? '현재 페이지' : undefined}
                >
                  {p}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="btn_arrow btn_next"
              onClick={() => handlePageChange(Math.min(totalPages, pageGroupEnd + 1))}
              title="다음 페이지"
            >
              다음페이지로
            </button>
            <button
              type="button"
              className="btn_arrow btn_last"
              onClick={() => handlePageChange(totalPages)}
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
