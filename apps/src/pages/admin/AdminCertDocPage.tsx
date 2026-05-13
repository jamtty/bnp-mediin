import { useState, useEffect, useRef } from 'react'
import AdminHeader from '@/components/admin/AdminHeader'
import AdminSidebar from '@/components/admin/AdminSidebar'
import {
  fetchCertDocAdminList,
  createCertDoc,
  updateCertDoc,
  deleteCertDoc,
  clearCertDocFile,
  type CertDocItem,
} from '@/api/certDoc'

const SECTIONS = ['공통', '제증명', '의무기록', '영상자료']

type FormMode = 'create' | 'edit'

interface FormState {
  mode: FormMode
  item: CertDocItem | null
  section: string
  title: string
  useYn: 'Y' | 'N'
  sortOrder: number | ''
  file: File | null
  fileName: string
}

const defaultForm = (): FormState => ({
  mode: 'create',
  item: null,
  section: '공통',
  title: '',
  useYn: 'Y',
  sortOrder: 0,
  file: null,
  fileName: '',
})

export default function AdminCertDocPage() {
  const [items, setItems] = useState<CertDocItem[]>([])
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState<FormState | null>(null)
  const [saving, setSaving] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  const load = async () => {
    setLoading(true)
    try {
      setItems(await fetchCertDocAdminList())
    } catch (err) {
      alert(err instanceof Error ? err.message : '불러오기 실패')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  const openCreate = () => {
    setForm(defaultForm())
  }

  const openEdit = (item: CertDocItem) => {
    setForm({
      mode: 'edit',
      item,
      section: item.section || '공통',
      title: item.title,
      useYn: item.use_yn === 'Y' ? 'Y' : 'N',
      sortOrder: item.sort_order,
      file: null,
      fileName: '',
    })
  }

  const closeForm = () => setForm(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] ?? null
    setForm((prev) => prev ? { ...prev, file: f, fileName: f ? f.name : '' } : prev)
  }

  const handleSave = async () => {
    if (!form) return
    if (!form.title.trim()) { alert('제목을 입력해주세요.'); return }

    setSaving(true)
    try {
      const fd = new FormData()
      fd.append('section', form.section === '공통' ? '' : form.section)
      fd.append('title', form.title)
      fd.append('use_yn', form.useYn)
      fd.append('sort_order', String(form.sortOrder === '' ? 0 : form.sortOrder))
      if (form.file) fd.append('file', form.file)

      if (form.mode === 'create') {
        await createCertDoc(fd)
        alert('등록되었습니다.')
      } else if (form.item) {
        await updateCertDoc(form.item.id, fd)
        alert('저장되었습니다.')
      }
      closeForm()
      load()
    } catch (err) {
      alert(err instanceof Error ? err.message : '저장 실패')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (item: CertDocItem) => {
    if (!confirm(`"${item.title}" 항목을 삭제하시겠습니까?`)) return
    try {
      await deleteCertDoc(item.id)
      alert('삭제되었습니다.')
      load()
    } catch (err) {
      alert(err instanceof Error ? err.message : '삭제 실패')
    }
  }

  const handleClearFile = async (item: CertDocItem) => {
    if (!item.ori_name) return
    if (!confirm(`"${item.ori_name}" 파일을 삭제하시겠습니까?`)) return
    try {
      await clearCertDocFile(item.id)
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

  /* ── 편집/등록 폼 ── */
  if (form) {
    return (
      <div className="adm_wrap">
        <AdminSidebar />
        <div className="adm_content">
          <AdminHeader pageTitle={`구비서류 관리 - ${form.mode === 'create' ? '새 항목 추가' : '수정'}`} />
          <main className="adm_main">
            <section className="adm_section">
              <div className="adm_form">

                <div className="adm_form_row">
                  <label className="adm_form_label">섹션 <span className="required">*</span></label>
                  <select
                    className="adm_form_input"
                    style={{ maxWidth: '200px' }}
                    value={form.section}
                    onChange={(e) => setForm((p) => p ? { ...p, section: e.target.value } : p)}
                  >
                    {SECTIONS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <span style={{ color: '#9ca3af', fontSize: '1.2rem' }}>
                    공통: 모든 탭에 표시 / 그 외: 해당 탭에만 표시
                  </span>
                </div>

                <div className="adm_form_row">
                  <label className="adm_form_label">제목 <span className="required">*</span></label>
                  <input
                    type="text"
                    className="adm_form_input"
                    value={form.title}
                    onChange={(e) => setForm((p) => p ? { ...p, title: e.target.value } : p)}
                    placeholder="예) 구비서류 양식 (환자 본인)"
                  />
                </div>

                <div className="adm_form_row">
                  <label className="adm_form_label">정렬순서</label>
                  <input
                    type="number"
                    className="adm_form_input"
                    style={{ maxWidth: '120px' }}
                    value={form.sortOrder}
                    min={0}
                    onChange={(e) => setForm((p) => p ? { ...p, sortOrder: e.target.value === '' ? '' : Number(e.target.value) } : p)}
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
                          checked={form.useYn === v}
                          onChange={() => setForm((p) => p ? { ...p, useYn: v } : p)}
                          style={{ accentColor: '#2563eb' }}
                        />
                        {v === 'Y' ? '사용' : '미사용'}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="adm_form_row" style={{ alignItems: 'flex-start' }}>
                  <label className="adm_form_label" style={{ paddingTop: '0.6rem' }}>
                    {form.mode === 'edit' ? '파일 교체' : '파일 첨부'}
                  </label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {form.mode === 'edit' && form.item?.ori_name && (
                      <p style={{ fontSize: '1.3rem', color: '#374151' }}>
                        현재 파일: <strong>{form.item.ori_name}</strong> ({formatBytes(form.item.file_size)})
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
                        {form.fileName || '선택된 파일 없음'}
                      </span>
                    </div>
                    <p style={{ fontSize: '1.2rem', color: '#9ca3af' }}>
                      최대 30MB. PDF, Word, Excel, HWP 등 가능
                    </p>
                  </div>
                </div>

                <div className="adm_form_btns">
                  <button type="button" className="adm_btn_primary" onClick={handleSave} disabled={saving}>
                    {saving ? '저장 중...' : '저장'}
                  </button>
                  <button type="button" className="adm_btn_secondary" onClick={closeForm}>취소</button>
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
        <AdminHeader pageTitle="구비서류 관리" />
        <main className="adm_main">
          <section className="adm_section">
            <div className="adm_list_top">
              <button type="button" className="adm_btn_primary" onClick={openCreate}>
                + 새 항목 추가
              </button>
            </div>

            {loading ? (
              <p style={{ padding: '2rem', color: '#6b7280' }}>불러오는 중...</p>
            ) : items.length === 0 ? (
              <p style={{ padding: '2rem', color: '#6b7280' }}>등록된 구비서류가 없습니다.</p>
            ) : (
              <div className="adm_table_wrap">
                <table className="adm_table">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>섹션</th>
                      <th>제목</th>
                      <th>파일명</th>
                      <th>파일크기</th>
                      <th>정렬</th>
                      <th>사용</th>
                      <th>등록일</th>
                      <th>관리</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, idx) => (
                      <tr key={item.id}>
                        <td>{idx + 1}</td>
                        <td>{item.section || '공통'}</td>
                        <td style={{ textAlign: 'left' }}>{item.title}</td>
                        <td style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {item.ori_name || <span style={{ color: '#9ca3af' }}>없음</span>}
                        </td>
                        <td>{formatBytes(item.file_size)}</td>
                        <td>{item.sort_order}</td>
                        <td>
                          <span style={{ color: item.use_yn === 'Y' ? '#16a34a' : '#dc2626', fontWeight: 600 }}>
                            {item.use_yn === 'Y' ? '사용' : '미사용'}
                          </span>
                        </td>
                        <td>{item.created_at?.slice(0, 10) || '-'}</td>
                        <td>
                          <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <button
                              type="button"
                              className="adm_btn_secondary"
                              style={{ fontSize: '1.2rem', padding: '0.3rem 0.8rem' }}
                              onClick={() => openEdit(item)}
                            >수정</button>
                            {item.ori_name && (
                              <button
                                type="button"
                                className="adm_btn_secondary"
                                style={{ fontSize: '1.2rem', padding: '0.3rem 0.8rem' }}
                                onClick={() => handleClearFile(item)}
                              >파일삭제</button>
                            )}
                            <button
                              type="button"
                              className="adm_btn_danger"
                              style={{ fontSize: '1.2rem', padding: '0.3rem 0.8rem' }}
                              onClick={() => handleDelete(item)}
                            >삭제</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  )
}
