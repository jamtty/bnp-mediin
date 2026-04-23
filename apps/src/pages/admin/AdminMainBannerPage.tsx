import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminHeader from '@/components/admin/AdminHeader'
import AdminSidebar from '@/components/admin/AdminSidebar'
import {
  fetchMainBannerList,
  updateMainBannerUseYn,
  updateMainBannerSortOrder,
  deleteMainBanner,
  type MainBannerItem,
} from '@/api/mainBanner'

const PAGE_SIZE = 20

const Toggle = ({ checked, onChange }: { checked: boolean; onChange: () => void }) => (
  <span
    onClick={onChange}
    style={{
      display: 'inline-block',
      width: '4rem',
      height: '2.2rem',
      borderRadius: '1.1rem',
      background: checked ? '#2563eb' : '#d1d5db',
      position: 'relative',
      transition: 'background 0.2s',
      cursor: 'pointer',
    }}
  >
    <span style={{
      position: 'absolute',
      top: '0.2rem',
      left: checked ? '1.9rem' : '0.2rem',
      width: '1.8rem',
      height: '1.8rem',
      borderRadius: '50%',
      background: '#fff',
      transition: 'left 0.2s',
      boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
    }} />
  </span>
)

export default function AdminMainBannerPage() {
  const navigate = useNavigate()
  const [items, setItems]               = useState<MainBannerItem[]>([])
  const [totalCount, setTotalCount]     = useState(0)
  const [totalPages, setTotalPages]     = useState(1)
  const [page, setPage]                 = useState(1)
  const [loading, setLoading]           = useState(false)
  const [checkedIds, setCheckedIds]     = useState<number[]>([])

  const load = useCallback(async (p: number) => {
    setLoading(true)
    try {
      const res = await fetchMainBannerList({ page: p, size: PAGE_SIZE })
      setItems(res.items)
      setTotalCount(res.total)
      setTotalPages(res.total_pages)
      setCheckedIds([])
    } catch (err) {
      alert(err instanceof Error ? err.message : '목록을 불러오지 못했습니다.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { load(page) }, [load, page])

  const allChecked = items.length > 0 && items.every((i) => checkedIds.includes(i.id))
  const handleCheckAll = () => setCheckedIds(allChecked ? [] : items.map((i) => i.id))
  const handleCheckOne = (id: number) =>
    setCheckedIds((prev) => (prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]))

  const handleToggleUse = async (item: MainBannerItem) => {
    const next: 'Y' | 'N' = item.use_yn === 'Y' ? 'N' : 'Y'
    try {
      await updateMainBannerUseYn(item.id, next)
      load(page)
    } catch (err) {
      alert(err instanceof Error ? err.message : '변경에 실패했습니다.')
    }
  }

  const handleSortDown = async (item: MainBannerItem) => {
    try {
      await updateMainBannerSortOrder(item.id, item.sort_order + 1)
      load(page)
    } catch (err) {
      alert(err instanceof Error ? err.message : '순서 변경에 실패했습니다.')
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm(`이 배너를 삭제하시걌습니까?`)) return
    try {
      await deleteMainBanner(id)
      load(page)
    } catch (err) {
      alert(err instanceof Error ? err.message : '삭제에 실패했습니다.')
    }
  }

  const handleBulkDelete = async () => {
    if (checkedIds.length === 0) { alert('선택된 항목이 없습니다.'); return }
    if (!confirm(`선택한 ${checkedIds.length}건을 삭제하시겠습니까?`)) return
    try {
      await Promise.all(checkedIds.map((id) => deleteMainBanner(id)))
      load(page)
    } catch (err) {
      alert(err instanceof Error ? err.message : '삭제에 실패했습니다.')
    }
  }

  return (
    <div className="adm_wrap">
      <AdminSidebar />
      <div className="adm_content">
        <AdminHeader pageTitle="메인 배너 관리" />
        <main className="adm_main">
          <section className="adm_section">
            <div className="adm_toolbar">
              <div />
              <button className="adm_btn_primary" onClick={() => navigate('/admin/main-banner/write')}>
                + 등록
              </button>
            </div>

            <div className="adm_table_wrap">
              <table className="adm_table">
                <thead>
                  <tr>
                    <th style={{ width: '4%' }}>
                      <input type="checkbox" checked={allChecked} onChange={handleCheckAll} />
                    </th>
                    <th style={{ width: '5%' }}>NO</th>
                    <th style={{ width: '12%' }}>이미지</th>
                    <th style={{ width: '8%' }}>사용여부</th>
                    <th>링크 URL</th>
                    <th style={{ width: '10%' }}>등록일</th>
                    <th style={{ width: '8%' }}>순서</th>
                    <th style={{ width: '10%' }}>관리</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr><td colSpan={8} className="adm_table_empty">불러오는 중...</td></tr>
                  ) : items.length === 0 ? (
                    <tr><td colSpan={8} className="adm_table_empty">등록된 배너가 없습니다.</td></tr>
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
                        <td className="adm_td_center">
                          {item.img_url ? (
                            <img
                              src={item.img_url}
                              alt="배너 이미지"
                              style={{ maxWidth: 100, maxHeight: 60, objectFit: 'contain', border: '1px solid #e5e7eb', borderRadius: '0.3rem', display: 'block', margin: '0 auto' }}
                            />
                          ) : <span style={{ color: '#9ca3af', fontSize: '1.2rem' }}>없음</span>}
                        </td>
                        <td className="adm_td_center">
                          <Toggle checked={item.use_yn === 'Y'} onChange={() => handleToggleUse(item)} />
                        </td>
                        <td style={{ fontSize: '1.2rem', color: '#6b7280', wordBreak: 'break-all' }}>
                          {item.url || '-'}
                        </td>
                        <td className="adm_td_center">{item.created_at}</td>
                        <td className="adm_td_center">
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                            <span>{item.sort_order}</span>
                            <button
                              title="순서 내리기"
                              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6b7280', fontSize: '1.4rem', lineHeight: 1 }}
                              onClick={() => handleSortDown(item)}
                            >▼</button>
                          </div>
                        </td>
                        <td className="adm_td_center">
                          <div className="adm_action_btns">
                            <button
                              className="adm_btn_edit"
                              onClick={() => navigate(`/admin/main-banner/edit/${item.id}`)}
                            >수정</button>
                            <button
                              className="adm_btn_delete"
                              onClick={() => handleDelete(item.id)}
                            >삭제</button>
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
                <button className="adm_page_btn" disabled={page <= 1} onClick={() => setPage(1)}>{'<<'}</button>
                <button className="adm_page_btn" disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>{'<'}</button>
                {(() => {
                  const delta = 4
                  const start = Math.max(1, page - delta)
                  const end   = Math.min(totalPages, page + delta)
                  return Array.from({ length: end - start + 1 }, (_, i) => start + i).map((p) => (
                    <button
                      key={p}
                      className={`adm_page_btn${page === p ? ' active' : ''}`}
                      onClick={() => setPage(p)}
                    >{p}</button>
                  ))
                })()}
                <button className="adm_page_btn" disabled={page >= totalPages} onClick={() => setPage((p) => p + 1)}>{'>'}</button>
                <button className="adm_page_btn" disabled={page >= totalPages} onClick={() => setPage(totalPages)}>{'>>'}</button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
