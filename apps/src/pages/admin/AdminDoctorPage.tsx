import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminHeader from '@/components/admin/AdminHeader'
import AdminSidebar from '@/components/admin/AdminSidebar'
import {
  fetchDoctorList,
  updateDoctorUseYn,
  updateDoctorSortOrder,
  deleteDoctor,
  DEPT_CODE_MAP,
  type DoctorItem,
} from '@/api/doctor'

const PAGE_SIZE = 50

export default function AdminDoctorPage() {
  const navigate = useNavigate()
  const [items, setItems]               = useState<DoctorItem[]>([])
  const [totalCount, setTotalCount]     = useState(0)
  const [totalPages, setTotalPages]     = useState(1)
  const [page, setPage]                 = useState(1)
  const [deptCode, setDeptCode]         = useState('')
  const [keyword, setKeyword]           = useState('')
  const [inputKeyword, setInputKeyword] = useState('')
  const [loading, setLoading]           = useState(false)
  const [checkedIds, setCheckedIds]     = useState<number[]>([])
  const [searchTrigger, setSearchTrigger] = useState(0)

  const load = useCallback(async (p: number, dept: string, kw: string) => {
    setLoading(true)
    try {
      const res = await fetchDoctorList({ page: p, size: PAGE_SIZE, dept_code: dept, keyword: kw })
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

  useEffect(() => { load(page, deptCode, keyword) }, [load, page, deptCode, keyword, searchTrigger])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setPage(1)
    setKeyword(inputKeyword)
    setSearchTrigger(t => t + 1)
  }

  const allChecked = items.length > 0 && items.every((i) => checkedIds.includes(i.id))
  const handleCheckAll = () => setCheckedIds(allChecked ? [] : items.map((i) => i.id))
  const handleCheckOne = (id: number) =>
    setCheckedIds((prev) => (prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]))

  const handleToggleUse = async (item: DoctorItem) => {
    const next: 'Y' | 'N' = item.use_yn === 'Y' ? 'N' : 'Y'
    try {
      await updateDoctorUseYn(item.id, next)
      load(page, deptCode, keyword)
    } catch (err) {
      alert(err instanceof Error ? err.message : '변경에 실패했습니다.')
    }
  }

  const handleSortUp = async (idx: number) => {
    const curr = items[idx]
    // 같은 dept_code 중 현재 idx 바로 위 항목 찾기
    const prevIdx = items.slice(0, idx).map((_, i) => i).reverse().find(
      (i) => items[i].dept_code === curr.dept_code
    )
    if (prevIdx === undefined) return
    const prev = items[prevIdx]
    try {
      await updateDoctorSortOrder(curr.id, prev.sort_order)
      await updateDoctorSortOrder(prev.id, curr.sort_order)
      load(page, deptCode, keyword)
    } catch (err) {
      alert(err instanceof Error ? err.message : '순서 변경에 실패했습니다.')
    }
  }

  const handleSortDown = async (idx: number) => {
    const curr = items[idx]
    // 같은 dept_code 중 현재 idx 바로 아래 항목 찾기
    const nextIdx = items.slice(idx + 1).findIndex(
      (i) => i.dept_code === curr.dept_code
    )
    if (nextIdx === -1) return
    const next = items[idx + 1 + nextIdx]
    try {
      await updateDoctorSortOrder(curr.id, next.sort_order)
      await updateDoctorSortOrder(next.id, curr.sort_order)
      load(page, deptCode, keyword)
    } catch (err) {
      alert(err instanceof Error ? err.message : '순서 변경에 실패했습니다.')
    }
  }

  const handleDelete = async (id: number, name: string) => {
    if (!confirm(`"${name}" 의료진을 삭제하시겠습니까?`)) return
    try {
      await deleteDoctor(id)
      load(page, deptCode, keyword)
    } catch (err) {
      alert(err instanceof Error ? err.message : '삭제에 실패했습니다.')
    }
  }

  const handleBulkDelete = async () => {
    if (checkedIds.length === 0) { alert('선택된 항목이 없습니다.'); return }
    if (!confirm(`선택한 ${checkedIds.length}명을 삭제하시겠습니까?`)) return
    try {
      await Promise.all(checkedIds.map((id) => deleteDoctor(id)))
      load(page, deptCode, keyword)
    } catch (err) {
      alert(err instanceof Error ? err.message : '삭제에 실패했습니다.')
    }
  }

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="adm_wrap">
      <AdminSidebar />
      <div className="adm_content">
        <AdminHeader pageTitle="의료진 관리" />
        <main className="adm_main">
          <section className="adm_section">
            {/* 검색 */}
            <div className="adm_toolbar">
              <form className="adm_search_form" onSubmit={handleSearch}>
                <select
                  value={deptCode}
                  onChange={(e) => { setDeptCode(e.target.value); setPage(1) }}
                  className="adm_btn_secondary"
                >
                  <option value="">전체 진료과</option>
                  {Object.entries(DEPT_CODE_MAP).map(([code, name]) => (
                    <option key={code} value={code}>{name}</option>
                  ))}
                </select>
                <input
                  type="text"
                  value={inputKeyword}
                  onChange={(e) => setInputKeyword(e.target.value)}
                  placeholder="이름 / 진료과목 검색"
                />
                <button type="submit" className="adm_btn_secondary">검색</button>
                <button type="button" className="adm_btn_secondary" onClick={() => { setInputKeyword(''); setKeyword(''); setPage(1) }}>초기화</button>
              </form>
              <button
                type="button"
                onClick={() => navigate('/admin/doctor/write')}
                className="adm_btn_primary"
              >
                + 의료진 등록
              </button>
            </div>

            {/* 목록 */}
            <p className="adm_table_notice">
              ※ 노출 순서(▲▼)는 <strong>각 진료과별로 독립</strong> 적용됩니다. 과를 필터링하면 해당 과 내 순서만 조정됩니다.
            </p>
            <div className="adm_table_wrap">
              <table className="adm_table">
                <thead>
                  <tr>
                    <th style={{ width: '4%' }}>
                      <input type="checkbox" checked={allChecked} onChange={handleCheckAll} />
                    </th>
                    <th style={{ width: '5%' }}>번호</th>
                    <th style={{ width: '10%' }}>사진</th>
                    <th>이름</th>
                    <th style={{ width: '12%' }}>진료과</th>
                    <th style={{ width: '12%' }}>진료과목</th>
                    <th style={{ width: '7%' }}>표시</th>
                    <th style={{ width: '8%' }}>순서</th>
                    <th style={{ width: '10%' }}>관리</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr><td colSpan={9} className="adm_table_empty">로딩중...</td></tr>
                  ) : items.length === 0 ? (
                    <tr><td colSpan={9} className="adm_table_empty">등록된 의료진이 없습니다.</td></tr>
                  ) : (
                    items.map((item, idx) => {
                      const isFirstInDept = items.slice(0, idx).every(i => i.dept_code !== item.dept_code)
                      const isLastInDept  = items.slice(idx + 1).every(i => i.dept_code !== item.dept_code)
                      return (
                      <tr key={item.id}>
                        <td className="adm_td_center">
                          <input
                            type="checkbox"
                            checked={checkedIds.includes(item.id)}
                            onChange={() => handleCheckOne(item.id)}
                          />
                        </td>
                        <td className="adm_td_center">
                          {(page - 1) * PAGE_SIZE + idx + 1}
                        </td>
                        <td className="adm_td_center">
                          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {item.img_url ? (
                              <img
                                src={item.img_url}
                                alt={item.doc_name}
                                style={{ width: 90, height: 110, objectFit: 'cover', borderRadius: 4, display: 'block' }}
                              />
                            ) : (
                              <span style={{ color: '#aaa', fontSize: 12 }}>없음</span>
                            )}
                          </div>
                        </td>
                        <td>
                          <strong>{item.doc_name}</strong>
                          {item.doc_title && <span style={{ marginLeft: 4, color: '#666', fontSize: '1.2rem' }}>{item.doc_title}</span>}
                        </td>
                        <td className="adm_td_center">{DEPT_CODE_MAP[item.dept_code] ?? item.dept_code}</td>
                        <td className="adm_td_center">{item.doc_major ?? '-'}</td>
                        <td className="adm_td_center">
                          <button
                            type="button"
                            className={item.use_yn === 'Y' ? 'adm_btn_edit' : 'adm_btn_secondary'}
                            onClick={() => handleToggleUse(item)}
                          >
                            {item.use_yn === 'Y' ? '표시' : '숨김'}
                          </button>
                        </td>
                        <td className="adm_td_center">
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.2rem' }}>
                            <button
                              type="button"
                              title="위로"
                              disabled={isFirstInDept}
                              style={{ background: 'none', border: 'none', cursor: isFirstInDept ? 'default' : 'pointer', color: isFirstInDept ? '#d1d5db' : '#6b7280', fontSize: '1.3rem', lineHeight: 1, padding: '0 2px' }}
                              onClick={() => handleSortUp(idx)}
                            >▲</button>
                            <span style={{ fontSize: '1.2rem', minWidth: 24, textAlign: 'center' }}>{item.sort_order}</span>
                            <button
                              type="button"
                              title="아래로"
                              disabled={isLastInDept}
                              style={{ background: 'none', border: 'none', cursor: isLastInDept ? 'default' : 'pointer', color: isLastInDept ? '#d1d5db' : '#6b7280', fontSize: '1.3rem', lineHeight: 1, padding: '0 2px' }}
                              onClick={() => handleSortDown(idx)}
                            >▼</button>
                          </div>
                        </td>
                        <td className="adm_td_center">
                          <div className="adm_action_btns">
                            <button
                              type="button"
                              className="adm_btn_edit"
                              onClick={() => navigate(`/admin/doctor/edit/${item.id}`)}
                            >
                              수정
                            </button>
                            <button
                              type="button"
                              className="adm_btn_delete"
                              onClick={() => handleDelete(item.id, item.doc_name)}
                            >
                              삭제
                            </button>
                          </div>
                        </td>
                      </tr>
                      )
                    })
                  )}
                </tbody>
              </table>
            </div>

            {/* 페이지네이션 */}
            <div className="adm_pagination">
              <div className="adm_pagination_left">
                {checkedIds.length > 0 && (
                  <button className="adm_btn_delete" onClick={handleBulkDelete}>
                    선택 삭제 ({checkedIds.length})
                  </button>
                )}
                <span className="adm_total_count">총 {totalCount.toLocaleString()}명</span>
              </div>
              {totalPages > 1 && (
                <div className="adm_page_btns">
                  <button
                    type="button"
                    className="adm_page_btn"
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                  >
                    이전
                  </button>
                  {pages.map((p) => (
                    <button
                      key={p}
                      type="button"
                      className={`adm_page_btn${p === page ? ' active' : ''}`}
                      onClick={() => setPage(p)}
                    >
                      {p}
                    </button>
                  ))}
                  <button
                    type="button"
                    className="adm_page_btn"
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                  >
                    다음
                  </button>
                </div>
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
