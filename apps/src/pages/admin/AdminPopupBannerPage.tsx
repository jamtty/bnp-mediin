import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminHeader from '@/components/admin/AdminHeader'
import AdminSidebar from '@/components/admin/AdminSidebar'
import {
  fetchPopupBannerList,
  updatePopupBannerUseYn,
  updatePopupBannerSortOrder,
  deletePopupBanner,
  POPUP_SITE_MAP,
  type PopupBannerItem,
} from '@/api/popupBanner'
import '@/assets/css/style.css'

const PAGE_SIZE = 15

export default function AdminPopupBannerPage() {
  const navigate = useNavigate()
  const [items, setItems]               = useState<PopupBannerItem[]>([])
  const [totalCount, setTotalCount]     = useState(0)
  const [totalPages, setTotalPages]     = useState(1)
  const [page, setPage]                 = useState(1)
  const [site, setSite]                 = useState('MAIN')
  const [keyword, setKeyword]           = useState('')
  const [inputKeyword, setInputKeyword] = useState('')
  const [loading, setLoading]           = useState(false)
  const [checkedIds, setCheckedIds]     = useState<number[]>([])

  const load = useCallback(async (p: number, s: string, kw: string) => {
    setLoading(true)
    try {
      const res = await fetchPopupBannerList({ page: p, size: PAGE_SIZE, site: s, keyword: kw })
      setItems(res.items)
      setTotalCount(res.total)
      setTotalPages(res.total_pages)
      setCheckedIds([])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { load(page, site, keyword) }, [load, page, site, keyword])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setPage(1)
    setKeyword(inputKeyword)
  }

  const allChecked = items.length > 0 && items.every((item) => checkedIds.includes(item.id))
  const handleCheckAll = () => setCheckedIds(allChecked ? [] : items.map((i) => i.id))
  const handleCheckOne = (id: number) =>
    setCheckedIds((prev) => (prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]))

  const handleToggleUse = async (item: PopupBannerItem) => {
    const next: 'Y' | 'N' = item.use_yn === 'Y' ? 'N' : 'Y'
    try {
      await updatePopupBannerUseYn(item.id, next)
      load(page, site, keyword)
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : '변경에 실패했습니다.')
    }
  }

  const handleSortDown = async (item: PopupBannerItem) => {
    try {
      await updatePopupBannerSortOrder(item.id, item.sort_order + 1)
      load(page, site, keyword)
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : '순서 변경에 실패했습니다.')
    }
  }

  const handleDelete = async (id: number, title: string) => {
    if (!confirm(`"${title}"을(를) 삭제하시겠습니까?`)) return
    try {
      await deletePopupBanner(id)
      load(page, site, keyword)
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : '삭제에 실패했습니다.')
    }
  }

  const handleBulkDelete = async () => {
    if (checkedIds.length === 0) return
    if (!confirm(`선택한 ${checkedIds.length}건을 삭제하시겠습니까?`)) return
    try {
      await Promise.all(checkedIds.map((id) => deletePopupBanner(id)))
      load(page, site, keyword)
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : '삭제에 실패했습니다.')
    }
  }

  return (
    <div className="adm_wrap">
      <AdminSidebar />
      <div className="adm_content">
        <AdminHeader pageTitle="팝업 관리" />
        <main className="adm_main">
          <section className="adm_section">
            <div className="adm_toolbar">
              <form className="adm_search_form" onSubmit={handleSearch}>
                <select
                  className="adm_btn_secondary"
                  value={site}
                  onChange={(e) => { setSite(e.target.value); setPage(1) }}
                >
                  <option value="">전체 사이트</option>
                  {Object.entries(POPUP_SITE_MAP).map(([k, v]) => (
                    <option key={k} value={k}>{v}</option>
                  ))}
                </select>
                <input
                  type="text"
                  placeholder="관리자 제목 검색"
                  value={inputKeyword}
                  onChange={(e) => setInputKeyword(e.target.value)}
                />
                <button type="submit" className="adm_btn_secondary">검색</button>
              </form>
              <button className="adm_btn_primary" onClick={() => navigate('/admin/popup-banner/write')}>
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
                    <th style={{ width: '8%' }}>사이트</th>
                    <th style={{ width: '10%' }}>이미지</th>
                    <th style={{ width: '8%' }}>사용여부</th>
                    <th>관리자 제목</th>
                    <th style={{ width: '8%' }}>등록자</th>
                    <th style={{ width: '18%' }}>게시기간</th>
                    <th style={{ width: '10%' }}>등록일자</th>
                    <th style={{ width: '8%' }}>노출순서</th>
                    <th style={{ width: '10%' }}>관리</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr><td colSpan={11} className="adm_table_empty">불러오는 중...</td></tr>
                  ) : items.length === 0 ? (
                    <tr><td colSpan={11} className="adm_table_empty">데이터가 없습니다.</td></tr>
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
                        <td className="adm_td_center">{POPUP_SITE_MAP[item.site] ?? item.site}</td>
                        <td className="adm_td_center">
                          {item.img_url ? (
                            <img
                              src={item.img_url}
                              alt={item.img_ori_name}
                              style={{ width: 75, height: 90, objectFit: 'contain', borderRadius: '0.4rem', border: '1px solid #e5e7eb', display: 'block', margin: '0 auto' }}
                            />
                          ) : <span style={{ color: '#9ca3af', fontSize: '1.2rem' }}>없음</span>}
                        </td>
                        <td className="adm_td_center">
                          <label className="adm_toggle_wrap" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}>
                            <input
                              type="checkbox"
                              style={{ display: 'none' }}
                              checked={item.use_yn === 'Y'}
                              onChange={() => handleToggleUse(item)}
                            />
                            <span
                              onClick={() => handleToggleUse(item)}
                              style={{
                                display: 'inline-block',
                                width: '4rem',
                                height: '2.2rem',
                                borderRadius: '1.1rem',
                                background: item.use_yn === 'Y' ? '#2563eb' : '#d1d5db',
                                position: 'relative',
                                transition: 'background 0.2s',
                                cursor: 'pointer',
                              }}
                            >
                              <span style={{
                                position: 'absolute',
                                top: '0.2rem',
                                left: item.use_yn === 'Y' ? '1.9rem' : '0.2rem',
                                width: '1.8rem',
                                height: '1.8rem',
                                borderRadius: '50%',
                                background: '#fff',
                                transition: 'left 0.2s',
                                boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                              }} />
                            </span>
                          </label>
                        </td>
                        <td>
                          <button
                            className="adm_table_link"
                            onClick={() => navigate(`/admin/popup-banner/edit/${item.id}`)}
                          >
                            {item.admin_title}
                          </button>
                        </td>
                        <td className="adm_td_center">{item.author || '-'}</td>
                        <td className="adm_td_center">
                          {item.period_start ?? '-'} ~ {item.period_end ?? '-'}
                        </td>
                        <td className="adm_td_center">{item.created_at}</td>
                        <td className="adm_td_center">
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                            <span>{item.sort_order}</span>
                            <button
                              title="순서 내리기"
                              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6b7280', fontSize: '1.4rem', lineHeight: 1 }}
                              onClick={() => handleSortDown(item)}
                            >
                              ▼
                            </button>
                          </div>
                        </td>
                        <td className="adm_td_center">
                          <div className="adm_action_btns">
                            <button
                              className="adm_btn_edit"
                              onClick={() => navigate(`/admin/popup-banner/edit/${item.id}`)}
                            >수정</button>
                            <button
                              className="adm_btn_delete"
                              onClick={() => handleDelete(item.id, item.admin_title)}
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
