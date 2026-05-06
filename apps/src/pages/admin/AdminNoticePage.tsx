import { useState, useEffect, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AdminHeader from '@/components/admin/AdminHeader'
import AdminSidebar from '@/components/admin/AdminSidebar'
import { fetchNoticeList, deleteNotice, toggleNoticePin, type NoticeItem } from '@/api/notice'

const PAGE_SIZE = 15

export default function AdminNoticePage() {
  const navigate = useNavigate()
  const [items, setItems] = useState<NoticeItem[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [totalPages, setTotalPages] = useState(1)
  const [page, setPage] = useState(1)
  const [keyword, setKeyword] = useState('')
  const [inputKeyword, setInputKeyword] = useState('')
  const [loading, setLoading] = useState(false)
  const [checkedIds, setCheckedIds] = useState<number[]>([])
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async (p: number, kw: string) => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetchNoticeList({ page: p, size: PAGE_SIZE, keyword: kw, type: 2 })
      setItems(res.items)
      setTotalCount(res.totalCount)
      setTotalPages(res.totalPages)
      setCheckedIds([])
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : '목록을 불러오지 못했습니다.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load(page, keyword)
  }, [load, page, keyword])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setPage(1)
    setKeyword(inputKeyword)
  }

  const allChecked = items.length > 0 && items.every((item) => checkedIds.includes(item.id))

  const handleCheckAll = () => {
    setCheckedIds(allChecked ? [] : items.map((item) => item.id))
  }

  const handleCheckOne = (id: number) => {
    setCheckedIds((prev) => (prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]))
  }

  const handleDelete = async (id: number, title: string) => {
    if (!confirm(`"${title}" 을(를) 삭제하시겠습니까?`)) return
    try {
      await deleteNotice(id)
      load(page, keyword)
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : '삭제에 실패했습니다.')
    }
  }

  const handleBulkDelete = async () => {
    if (checkedIds.length === 0) return
    if (!confirm(`선택한 ${checkedIds.length}건을 삭제하시겠습니까?`)) return
    try {
      await Promise.all(checkedIds.map((id) => deleteNotice(id)))
      load(page, keyword)
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : '삭제에 실패했습니다.')
    }
  }

  const handleTogglePin = async (item: NoticeItem) => {
    const action = item.is_pinned ? '공지 해제' : '공지 고정'
    if (!confirm(`"${item.title}" 을(를) ${action}하시겠습니까?`)) return
    try {
      await toggleNoticePin(item.id)
      load(page, keyword)
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : '변경에 실패했습니다.')
    }
  }

  return (
    <div className="adm_wrap">
      <AdminSidebar />
      <div className="adm_content">
        <AdminHeader pageTitle="공지사항 관리" />
        <main className="adm_main">
          <section className="adm_section">
            <div className="adm_toolbar">
              <form className="adm_search_form" onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="제목/내용 검색"
                  value={inputKeyword}
                  onChange={(e) => setInputKeyword(e.target.value)}
                />
                <button type="submit" className="adm_btn_secondary">
                  검색
                </button>
                <button type="button" className="adm_btn_secondary" onClick={() => { setInputKeyword(''); setKeyword(''); setPage(1) }}>
                  초기화
                </button>
              </form>
              <button className="adm_btn_primary" onClick={() => navigate('/admin/notice/write')}>
                + 글쓰기
              </button>
            </div>

            <div className="adm_table_wrap">
              <table className="adm_table">
                <thead>
                  <tr>
                    <th style={{ width: '4%' }}>
                      <input type="checkbox" checked={allChecked} onChange={handleCheckAll} />
                    </th>
                    <th style={{ width: '5%' }}>번호</th>
                    <th>제목</th>
                    <th style={{ width: '10%' }}>작성자</th>
                    <th style={{ width: '10%' }}>작성일</th>
                    <th style={{ width: '7%' }}>조회수</th>
                    <th style={{ width: '16%' }}>관리</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan={7} className="adm_table_empty">
                        불러오는 중...
                      </td>
                    </tr>
                  ) : error ? (
                    <tr>
                      <td colSpan={7} className="adm_table_empty">
                        오류: {error}
                      </td>
                    </tr>
                  ) : items.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="adm_table_empty">
                        게시글이 없습니다.
                      </td>
                    </tr>
                  ) : (
                    items.map((item, idx) => (
                      <tr key={item.id} style={item.is_pinned ? { background: '#f8f8f8' } : undefined}>
                        <td className="adm_td_center">
                          <input
                            type="checkbox"
                            checked={checkedIds.includes(item.id)}
                            onChange={() => handleCheckOne(item.id)}
                          />
                        </td>
                        <td className="adm_td_center">
                          {totalCount - (page - 1) * PAGE_SIZE - idx}
                        </td>
                        <td>
                          <Link to={`/admin/notice/edit/${item.id}`} className="adm_table_link">
                            {item.is_pinned ? <span className="adm_pin_badge">공지</span> : null}
                            {item.title}
                          </Link>
                        </td>
                        <td className="adm_td_center">{item.author_name}</td>
                        <td className="adm_td_center">{item.created_at}</td>
                        <td className="adm_td_center">{item.view_count.toLocaleString()}</td>
                        <td className="adm_td_center">
                          <div className="adm_action_btns">
                            <button
                              className={item.is_pinned ? 'adm_btn_secondary' : 'adm_btn_edit'}
                              onClick={() => handleTogglePin(item)}
                            >
                              {item.is_pinned ? '해제' : '공지'}
                            </button>
                            <button
                              className="adm_btn_edit"
                              onClick={() => navigate(`/admin/notice/edit/${item.id}`)}
                            >
                              수정
                            </button>
                            <button
                              className="adm_btn_delete"
                              onClick={() => handleDelete(item.id, item.title)}
                            >
                              삭제
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className="adm_pagination">
              <div className="adm_pagination_left">
                {checkedIds.length > 0 && (
                  <button className="adm_btn_delete" onClick={handleBulkDelete}>
                    선택 삭제 ({checkedIds.length})
                  </button>
                )}
                <span className="adm_total_count">총 {totalCount.toLocaleString()}건</span>
              </div>
              <div className="adm_page_btns">
                <button
                  className="adm_page_btn"
                  disabled={page <= 1}
                  onClick={() => setPage(1)}
                >{'<<'}</button>
                <button
                  className="adm_page_btn"
                  disabled={page <= 1}
                  onClick={() => setPage((p) => p - 1)}
                >{'<'}</button>
                {(() => {
                  const delta = 4
                  const start = Math.max(1, page - delta)
                  const end = Math.min(totalPages, page + delta)
                  return Array.from({ length: end - start + 1 }, (_, i) => start + i).map((p) => (
                    <button
                      key={p}
                      className={`adm_page_btn${page === p ? ' active' : ''}`}
                      onClick={() => setPage(p)}
                    >
                      {p}
                    </button>
                  ))
                })()}
                <button
                  className="adm_page_btn"
                  disabled={page >= totalPages}
                  onClick={() => setPage((p) => p + 1)}
                >{'>'}</button>
                <button
                  className="adm_page_btn"
                  disabled={page >= totalPages}
                  onClick={() => setPage(totalPages)}
                >{'>>'}</button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
