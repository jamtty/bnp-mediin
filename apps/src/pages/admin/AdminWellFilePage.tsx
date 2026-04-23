import { useState, useEffect, useRef } from 'react'
import AdminHeader from '@/components/admin/AdminHeader'
import AdminSidebar from '@/components/admin/AdminSidebar'
import {
  fetchWellFileList,
  updateWellFile,
  clearWellFile,
  type WellFileItem,
} from '@/api/wellFile'

export default function AdminWellFilePage() {
  const [items, setItems] = useState<WellFileItem[]>([])
  const [loading, setLoading] = useState(false)
  const [editItem, setEditItem] = useState<WellFileItem | null>(null)
  const [editLabel, setEditLabel] = useState('')
  const [editUseYn, setEditUseYn] = useState<'Y' | 'N'>('Y')
  const [editFile, setEditFile] = useState<File | null>(null)
  const [editFileName, setEditFileName] = useState('')
  const [saving, setSaving] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  const load = async () => {
    setLoading(true)
    try {
      setItems(await fetchWellFileList())
    } catch (err) {
      alert(err instanceof Error ? err.message : '불러오기 실패')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  const openEdit = (item: WellFileItem) => {
    setEditItem(item)
    setEditLabel(item.label)
    setEditUseYn(item.use_yn === 'Y' ? 'Y' : 'N')
    setEditFile(null)
    setEditFileName('')
  }

  const closeEdit = () => { setEditItem(null); setEditFile(null); setEditFileName('') }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] ?? null
    setEditFile(f)
    setEditFileName(f ? f.name : '')
  }

  const handleSave = async () => {
    if (!editItem) return
    setSaving(true)
    try {
      const fd = new FormData()
      fd.append('label', editLabel)
      fd.append('use_yn', editUseYn)
      if (editFile) fd.append('file', editFile)
      await updateWellFile(editItem.id, fd)
      alert('저장되었습니다.')
      closeEdit()
      load()
    } catch (err) {
      alert(err instanceof Error ? err.message : '저장 실패')
    } finally {
      setSaving(false)
    }
  }

  const handleClearFile = async (item: WellFileItem) => {
    if (!item.ori_name) return
    if (!confirm(`"${item.ori_name}" 파일을 삭제하시겠습니까?`)) return
    try {
      await clearWellFile(item.id)
      alert('파일이 삭제되었습니다.')
      load()
    } catch (err) {
      alert(err instanceof Error ? err.message : '파일 삭제 실패')
    }
  }

  const formatBytes = (bytes: number) => {
    if (!bytes) return '-'
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / 1024 / 1024).toFixed(1)} MB`
  }

  /* ── 편집 폼 ── */
  if (editItem) {
    return (
      <div className="adm_wrap">
        <AdminSidebar />
        <div className="adm_content">
          <AdminHeader pageTitle="건강증진센터 파일 관리" />
          <main className="adm_main">
            <section className="adm_section">
              <div className="adm_form">

                <div className="adm_form_row">
                  <label className="adm_form_label">메뉴 키</label>
                  <span style={{ fontSize: '1.3rem', color: '#6b7280' }}>{editItem.menu_key}</span>
                </div>

                <div className="adm_form_row">
                  <label className="adm_form_label">표시 이름 <span className="required">*</span></label>
                  <input
                    type="text"
                    className="adm_form_input"
                    value={editLabel}
                    onChange={(e) => setEditLabel(e.target.value)}
                  />
                </div>

                <div className="adm_form_row">
                  <label className="adm_form_label">사용여부 <span className="required">*</span></label>
                  <div style={{ display: 'flex', gap: '1.6rem' }}>
                    {(['Y', 'N'] as const).map((v) => (
                      <label key={v} className="adm_checkbox_label">
                        <input
                          type="radio"
                          name="use_yn"
                          value={v}
                          checked={editUseYn === v}
                          onChange={() => setEditUseYn(v)}
                          style={{ accentColor: '#2563eb' }}
                        />
                        {v === 'Y' ? '사용' : '미사용'}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="adm_form_row" style={{ alignItems: 'flex-start' }}>
                  <label className="adm_form_label" style={{ paddingTop: '0.6rem' }}>파일 교체</label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {editItem.ori_name && (
                      <p style={{ fontSize: '1.3rem', color: '#374151' }}>
                        현재 파일: <strong>{editItem.ori_name}</strong> ({formatBytes(editItem.file_size)})
                      </p>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                      <input
                        ref={fileRef}
                        type="file"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                      />
                      <button
                        type="button"
                        className="adm_btn_secondary"
                        style={{ height: '3.4rem', fontSize: '1.3rem' }}
                        onClick={() => fileRef.current?.click()}
                      >파일 선택</button>
                      <span style={{ fontSize: '1.3rem', color: '#6b7280' }}>
                        {editFileName || '선택된 파일 없음'}
                      </span>
                    </div>
                    <p style={{ fontSize: '1.2rem', color: '#9ca3af' }}>
                      새 파일을 선택하면 기존 파일이 교체됩니다. (최대 30MB)
                    </p>
                  </div>
                </div>

                <div className="adm_form_btns">
                  <button type="button" className="adm_btn_secondary" onClick={closeEdit}>취소</button>
                  <button type="button" className="adm_btn_primary" onClick={handleSave} disabled={saving}>
                    {saving ? '저장 중...' : '저장'}
                  </button>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    )
  }

  /* ── 목록 ── */
  return (
    <div className="adm_wrap">
      <AdminSidebar />
      <div className="adm_content">
        <AdminHeader pageTitle="건강증진센터 파일 관리" />
        <main className="adm_main">
          <section className="adm_section">
            <div className="adm_table_wrap">
              <table className="adm_table">
                <thead>
                  <tr>
                    <th style={{ width: '5%' }}>No</th>
                    <th style={{ width: '14%' }}>메뉴 키</th>
                    <th>표시 이름</th>
                    <th style={{ width: '22%' }}>등록 파일</th>
                    <th style={{ width: '8%' }}>크기</th>
                    <th style={{ width: '8%' }}>사용</th>
                    <th style={{ width: '14%' }}>수정일</th>
                    <th style={{ width: '10%' }}>관리</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr><td colSpan={8} className="adm_table_empty">불러오는 중...</td></tr>
                  ) : items.length === 0 ? (
                    <tr><td colSpan={8} className="adm_table_empty">데이터가 없습니다.</td></tr>
                  ) : items.map((item, idx) => (
                    <tr key={item.id}>
                      <td className="adm_td_center">{idx + 1}</td>
                      <td className="adm_td_center">
                        <code style={{ fontSize: '1.2rem', background: '#f3f4f6', padding: '0.2rem 0.5rem', borderRadius: '0.3rem' }}>
                          {item.menu_key}
                        </code>
                      </td>
                      <td>{item.label}</td>
                      <td>
                        {item.ori_name ? (
                          <div className="adm_action_btns">
                            <a
                              href={item.file_url}
                              target="_blank"
                              rel="noreferrer"
                              style={{ fontSize: '1.3rem', color: '#2563eb', wordBreak: 'break-all' }}
                            >
                              {item.ori_name}
                            </a>
                            <button
                              type="button"
                              className="adm_btn_delete"
                              onClick={() => handleClearFile(item)}
                            >삭제</button>
                          </div>
                        ) : (
                          <span style={{ fontSize: '1.3rem', color: '#9ca3af' }}>파일 없음</span>
                        )}
                      </td>
                      <td className="adm_td_center" style={{ fontSize: '1.2rem' }}>{formatBytes(item.file_size)}</td>
                      <td className="adm_td_center">
                        <button
                          type="button"
                          className={item.use_yn === 'Y' ? 'adm_btn_edit' : 'adm_btn_secondary'}
                          style={{ pointerEvents: 'none', cursor: 'default' }}
                        >
                          {item.use_yn === 'Y' ? '사용' : '미사용'}
                        </button>
                      </td>
                      <td className="adm_td_center" style={{ fontSize: '1.2rem' }}>
                        {item.updated_at || item.created_at || '-'}
                      </td>
                      <td className="adm_td_center">
                        <button
                          type="button"
                          className="adm_btn_edit"
                          onClick={() => openEdit(item)}
                        >편집</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
