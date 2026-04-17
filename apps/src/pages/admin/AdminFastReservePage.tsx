import { useState, useEffect, useCallback } from 'react'
import AdminHeader from '@/components/admin/AdminHeader'
import AdminSidebar from '@/components/admin/AdminSidebar'
import {
  fetchFastReserveList,
  updateFastReserveSucc,
  deleteFastReserve,
  type FastReserveItem,
} from '@/api/fastReserve'
import '@/assets/css/style.css'

const PAGE_SIZE = 15

export default function AdminFastReservePage() {
  const [items, setItems] = useState<FastReserveItem[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [totalPages, setTotalPages] = useState(1)
  const [page, setPage] = useState(1)
  const [keyword, setKeyword] = useState('')
  const [inputKeyword, setInputKeyword] = useState('')
  const [loading, setLoading] = useState(false)
  const [checkedIds, setCheckedIds] = useState<number[]>([])

  const load = useCallback(async (p: number, kw: string) => {
    setLoading(true)
    try {
      const res = await fetchFastReserveList({ page: p, size: PAGE_SIZE, keyword: kw })
      setItems(res.items)
      setTotalCount(res.total)
      setTotalPages(res.total_pages)
      setCheckedIds([])
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

  const handleToggleSucc = async (item: FastReserveItem) => {
    const next: 'Y' | 'N' = item.succ_yn === 'Y' ? 'N' : 'Y'
    try {
      await updateFastReserveSucc(item.id, next)
      load(page, keyword)
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : '처리 변경에 실패했습니다.')
    }
  }

  const handleDelete = async (id: number, name: string) => {
    if (!confirm(`"${name}" 을(를) 삭제하시겠습니까?`)) return
    try {
      await deleteFastReserve(id)
      load(page, keyword)
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : '삭제에 실패했습니다.')
    }
  }

  const handleBulkDelete = async () => {
    if (checkedIds.length === 0) return
    if (!confirm(`선택한 ${checkedIds.length}건을 삭제하시겠습니까?`)) return
    try {
      await Promise.all(checkedIds.map((id) => deleteFastReserve(id)))
      load(page, keyword)
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : '삭제에 실패했습니다.')
    }
  }

  const handleBulkSucc = async () => {
    if (checkedIds.length === 0) return
    if (!confirm(`선택한 ${checkedIds.length}건을 처리완료로 변경하시겠습니까?`)) return
    try {
      await Promise.all(checkedIds.map((id) => updateFastReserveSucc(id, 'Y')))
      load(page, keyword)
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : '처리 변경에 실패했습니다.')
    }
  }

  return (
    <div className="adm_wrap">
      <AdminSidebar />
      <div className="adm_content">
        <AdminHeader pageTitle="빠른예약 관리" />
        <main className="adm_main">
          <section className="adm_section">
            <div className="adm_toolbar">
              <form className="adm_search_form" onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="이름/연락처 검색"
                  value={inputKeyword}
                  onChange={(e) => setInputKeyword(e.target.value)}
                />
                <button type="submit" className="adm_btn_secondary">검색</button>
                <button type="button" className="adm_btn_secondary" onClick={() => { setInputKeyword(''); setKeyword(''); setPage(1) }}>초기화</button>
              </form>
            </div>

            <div className="adm_table_wrap">
              <table className="adm_table">
                <thead>
                  <tr>
                    <th style={{ width: '4%' }}>
                      <input type="checkbox" checked={allChecked} onChange={handleCheckAll} />
                    </th>
                    <th style={{ width: '5%' }}>번호</th>
                    <th style={{ width: '18%' }}>이름</th>
                    <th>연락처</th>
                    <th style={{ width: '10%' }}>개인정보동의</th>
                    <th style={{ width: '16%' }}>등록일시</th>
                    <th style={{ width: '10%' }}>처리여부</th>
                    <th style={{ width: '12%' }}>관리</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr><td colSpan={8} className="adm_table_empty">불러오는 중...</td></tr>
                  ) : items.length === 0 ? (
                    <tr><td colSpan={8} className="adm_table_empty">데이터가 없습니다.</td></tr>
                  ) : (
                    items.map((item, idx) => (
                      <tr key={item.id}>
                        <td className="adm_td_center">
                          <input
                            type="checkbox"
                            checked={checkedIds.includes(item.id)}
                            onChange={() => handleCheckOne(item.id)}
                          />
                        </td>
                        <td className="adm_td_center">{totalCount - (page - 1) * PAGE_SIZE - idx}</td>
                        <td className="adm_td_center">{item.name}</td>
                        <td className="adm_td_center">{item.phone}</td>
                        <td className="adm_td_center">
                          {item.pri_yn === 'Y'
                            ? <span style={{ color: '#2196F3' }}>동의</span>
                            : <span style={{ color: '#999' }}>미동의</span>
                          }
                        </td>
                        <td className="adm_td_center">{item.created_at}</td>
                        <td className="adm_td_center">
                          <span className={`adm_status_badge ${item.succ_yn === 'Y' ? 'adm_status_done' : 'adm_status_wait'}`}>
                            {item.succ_yn === 'Y' ? '처리완료' : '미처리'}
                          </span>
                        </td>
                        <td className="adm_td_center">
                          <div className="adm_action_btns">
                            <button
                              className={item.succ_yn === 'Y' ? 'adm_btn_edit' : 'adm_btn_secondary'}
                              onClick={() => handleToggleSucc(item)}
                            >
                              처리
                            </button>
                            <button
                              className="adm_btn_delete"
                              onClick={() => handleDelete(item.id, item.name)}
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
                  <>
                    <button className="adm_btn_edit" onClick={handleBulkSucc}>
                      선택 처리 ({checkedIds.length})
                    </button>
                    <button className="adm_btn_delete" onClick={handleBulkDelete}>
                      선택 삭제 ({checkedIds.length})
                    </button>
                  </>
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