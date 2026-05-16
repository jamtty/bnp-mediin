import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminHeader from '@/components/admin/AdminHeader'
import AdminSidebar from '@/components/admin/AdminSidebar'
import DatePicker from '@/components/admin/DatePicker'
import { fetchPressList, deletePress, togglePressPin, type PressItem } from '@/api/board'

const PAGE_SIZE = 15

type PressSearchParams = { keyword: string; type: number; date_from: string; date_to: string; is_pinned: string }
const defaultPressParams: PressSearchParams = { keyword: '', type: 2, date_from: '', date_to: '', is_pinned: '' }

export default function AdminPressPage() {
  const navigate = useNavigate()
  const [items, setItems]           = useState<PressItem[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [totalPages, setTotalPages] = useState(1)
  const [page, setPage]             = useState(1)
  const [searchParams, setSearchParams] = useState<PressSearchParams>(defaultPressParams)
  const [inputKeyword, setInputKeyword] = useState('')
  const [inputType, setInputType]   = useState(2)
  const [inputDateFrom, setInputDateFrom] = useState('')
  const [inputDateTo, setInputDateTo]     = useState('')
  const [inputIsPinned, setInputIsPinned] = useState('')
  const [loading, setLoading]       = useState(false)
  const [checkedIds, setCheckedIds] = useState<number[]>([])

  const load = useCallback(async (p: number, params: PressSearchParams) => {
    setLoading(true)
    try {
      const res = await fetchPressList({ page: p, size: PAGE_SIZE, ...params })
      setItems(res.items)
      setTotalCount(res.total)
      setTotalPages(res.total_pages)
      setCheckedIds([])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load(page, searchParams)
  }, [load, page, searchParams])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setPage(1)
    setSearchParams({ keyword: inputKeyword, type: inputType, date_from: inputDateFrom, date_to: inputDateTo, is_pinned: inputIsPinned })
  }

  const handleReset = () => {
    setInputKeyword('')
    setInputType(2)
    setInputDateFrom('')
    setInputDateTo('')
    setInputIsPinned('')
    setPage(1)
    setSearchParams(defaultPressParams)
  }

  const allChecked =
    items.length > 0 && items.every((item) => checkedIds.includes(item.id))

  const handleCheckAll = () => {
    setCheckedIds(allChecked ? [] : items.map((item) => item.id))
  }

  const handleCheckOne = (id: number) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id],
    )
  }

  const handleDelete = async (id: number, title: string) => {
    if (!confirm(`"${title}"을(를) 삭제하시겠습니까?`)) return
    try {
      await deletePress(id)
      load(page, searchParams)
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : '삭제에 실패했습니다.')
    }
  }

  const handleBulkDelete = async () => {
    if (checkedIds.length === 0) return
    if (!confirm(`선택한 ${checkedIds.length}건을 삭제하시겠습니까?`)) return
    try {
      await Promise.all(checkedIds.map((id) => deletePress(id)))
      load(page, searchParams)
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : '삭제에 실패했습니다.')
    }
  }

  const handleTogglePin = async (id: number) => {
    try {
      await togglePressPin(id)
      load(page, searchParams)
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : '처리에 실패했습니다.')
    }
  }

  return (
    <div className="adm_wrap">
      <AdminSidebar />
      <div className="adm_content">
        <AdminHeader pageTitle="보도자료 관리" />
        <main className="adm_main">
          <section className="adm_section">
            <div className="adm_toolbar">
              <form className="adm_search_form" onSubmit={handleSearch}>
                <div className="adm_search_row">
                  <label className="adm_search_label">시작일</label>
                  <DatePicker value={inputDateFrom} onChange={setInputDateFrom} maxDate={inputDateTo || undefined} />
                  <label className="adm_search_label">종료일</label>
                  <DatePicker value={inputDateTo} onChange={setInputDateTo} minDate={inputDateFrom || undefined} />
                  <label className="adm_search_label">공지여부</label>
                  <select className="adm_search_select" value={inputIsPinned} onChange={(e) => setInputIsPinned(e.target.value)}>
                    <option value="">전체</option>
                    <option value="1">공지</option>
                    <option value="0">일반</option>
                  </select>
                </div>
                <div className="adm_search_row">
                  <label className="adm_search_label">검색어</label>
                  <select className="adm_search_select" value={inputType} onChange={(e) => setInputType(Number(e.target.value))}>
                    <option value={2}>전체</option>
                    <option value={0}>제목</option>
                    <option value={1}>내용</option>
                  </select>
                  <input
                    type="text"
                    className="adm_search_keyword"
                    placeholder="검색어를 입력해주세요."
                    value={inputKeyword}
                    onChange={(e) => setInputKeyword(e.target.value)}
                  />
                  <button type="submit" className="adm_search_btn">
                    <span className="material-icons">search</span>
                  </button>
                  <button type="button" className="adm_btn_secondary" onClick={handleReset}>초기화</button>
                </div>
              </form>
              <button
                className="adm_btn_primary"
                onClick={() => navigate('/admin/press/write')}
              >
                + 글쓰기
              </button>
            </div>

            <div className="adm_table_wrap">
              <table className="adm_table">
                <thead>
                  <tr>
                    <th style={{ width: '4%' }}>
                      <input
                        type="checkbox"
                        checked={allChecked}
                        onChange={handleCheckAll}
                      />
                    </th>
                    <th style={{ width: '5%' }}>번호</th>
                    <th style={{ width: '12%' }}>언론사</th>
                    <th>제목</th>
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
                  ) : items.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="adm_table_empty">
                        게시글이 없습니다.
                      </td>
                    </tr>
                  ) : (
                    (() => {
                    const pinnedCount = items.filter(i => i.is_pinned).length;
                    return items.map((item, idx) => (
                      <tr key={item.id} style={item.is_pinned ? { background: '#f8f8f8' } : undefined}>
                        <td className="adm_td_center">
                          <input
                            type="checkbox"
                            checked={checkedIds.includes(item.id)}
                            onChange={() => handleCheckOne(item.id)}
                          />
                        </td>
                        <td className="adm_td_center">
                          {item.is_pinned
                            ? '—'
                            : totalCount - (page - 1) * PAGE_SIZE - (idx - pinnedCount)}
                        </td>
                        <td className="adm_td_center">{item.press_name ?? '-'}</td>
                        <td>
                          <button
                            className="adm_table_link"
                            onClick={() => navigate(`/admin/press/edit/${item.id}`)}
                          >
                            {item.is_pinned ? <span className="adm_pin_badge">공지</span> : null}
                            {item.title}
                          </button>
                        </td>
                        <td className="adm_td_center">{item.created_at}</td>
                        <td className="adm_td_center">
                          {item.view_count.toLocaleString()}
                        </td>
                        <td className="adm_td_center">
                          <div className="adm_action_btns">
                            <button
                              className={item.is_pinned ? 'adm_btn_secondary' : 'adm_btn_edit'}
                              onClick={() => handleTogglePin(item.id)}
                            >
                              {item.is_pinned ? '해제' : '공지'}
                            </button>
                            <button
                              className="adm_btn_edit"
                              onClick={() => navigate(`/admin/press/edit/${item.id}`)}
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
                  })()
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
                <span className="adm_total_count">
                  총 {totalCount.toLocaleString()}건
                </span>
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
