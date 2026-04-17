import { useCallback, useEffect, useState } from 'react'
import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'
import { fetchMediTvList, type MediTvItem } from '../../api/board'
import { getYouTubeThumbnailUrl } from '../../utils/youtube'

type SearchType = '' | '0' | '1'

const SEARCH_TYPE_LABELS: Record<SearchType, string> = {
  '': '전체',
  '0': '제목',
  '1': '내용',
}

const PAGE_SIZE = 12
const PAGE_GROUP_SIZE = 10

export default function MediTvPage() {
  const [items, setItems] = useState<MediTvItem[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [totalPages, setTotalPages] = useState(1)
  const [page, setPage] = useState(1)
  const [searchType, setSearchType] = useState<SearchType>('')
  const [inputValue, setInputValue] = useState('')
  const [keyword, setKeyword] = useState('')
  const [selectOpen, setSelectOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const load = useCallback(async (p: number, kw: string, type: SearchType) => {
    setLoading(true)
    try {
      const params: Parameters<typeof fetchMediTvList>[0] = { page: p, size: PAGE_SIZE }
      if (kw) {
        params.keyword = kw
        params.type = type === '' ? 2 : Number(type)
      }
      const res = await fetchMediTvList(params)
      setItems(res.items)
      setTotalCount(res.total)
      setTotalPages(res.total_pages || 1)
    } catch {
      setItems([])
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
  const pageGroupEnd = Math.min(pageGroupStart + PAGE_GROUP_SIZE - 1, totalPages)

  return (
    <SubPageLayout
      visualClass="vs4"
      visualTitle="병원소식"
      contentsClass="sub04"
      lnbItems={lnbItems}
    >
      <h3 className="cont_tit">메디TV</h3>
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
                title="메디TV 검색어"
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
            {loading ? (
              <p style={{ textAlign: 'center', padding: '40px 0' }}>불러오는 중...</p>
            ) : items.length === 0 ? (
              <p className="bbs_empty">등록된 메디TV가 없습니다.</p>
            ) : (
              <div className="bbs_list2">
                {items.map((item) => {
                  const thumbnail = getYouTubeThumbnailUrl(item.youtube_url) ?? item.thumbnail
                  const summary = (item.content ?? '').replace(/<[^>]*>/g, '').trim()
                  return (
                    <div className="bbs_item" key={item.id}>
                      <a
                        href={item.youtube_url ?? '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="bbs_thumb">
                          {thumbnail ? (
                            <img src={thumbnail} alt={item.title} />
                          ) : (
                            <img src="/images/default_thumb.png" alt="" />
                          )}
                        </div>
                        <div className="bbs_item_cont">
                          <p className="bbs_name">{item.title}</p>
                          <p className="bbs_date">{item.created_at}</p>
                        </div>
                      </a>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          <div className="pagination" role="navigation">
            <button type="button" className="btn_arrow btn_first" title="첫 페이지" onClick={() => handlePageChange(1)} disabled={page === 1}>처음페이지로</button>
            <button type="button" className="btn_arrow btn_prev" title="이전 페이지" onClick={() => handlePageChange(Math.max(1, page - 1))} disabled={page === 1}>이전페이지로</button>
            <div className="page_num_list">
              {Array.from({ length: pageGroupEnd - pageGroupStart + 1 }, (_, i) => pageGroupStart + i).map((p) => (
                <button key={p} type="button" className={`btn_num${page === p ? ' active_num' : ''}`} title={page === p ? '현재 페이지' : undefined} onClick={() => handlePageChange(p)}>
                  {p}
                </button>
              ))}
            </div>
            <button type="button" className="btn_arrow btn_next" title="다음 페이지" onClick={() => handlePageChange(Math.min(totalPages, page + 1))} disabled={page === totalPages}>다음페이지로</button>
            <button type="button" className="btn_arrow btn_last" title="마지막 페이지" onClick={() => handlePageChange(totalPages)} disabled={page === totalPages}>마지막페이지로</button>
          </div>
        </div>
      </div>
    </SubPageLayout>
  )
}