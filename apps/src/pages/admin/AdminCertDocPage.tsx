import { useState, useEffect, useRef } from 'react'
import AdminHeader from '@/components/admin/AdminHeader'
import AdminSidebar from '@/components/admin/AdminSidebar'
import {
  fetchCertDocAdminList,
  createCertDoc,
  updateCertDoc,
  deleteCertDoc,
  type CertDocItem,
} from '@/api/certDoc'

const TEMPLATE_ITEMS = [
  { title: '진료기록 열람 및 사본발급 동의서', format: 'HWP',  icon: 'ico_hangeul', exts: ['hwp', 'hwpx'] },
  { title: '진료기록 열람 및 사본발급 동의서', format: 'Word', icon: 'ico_word',    exts: ['doc', 'docx'] },
  { title: '진료기록 열람 및 사본발급 동의서', format: 'PDF',  icon: 'ico_pdf',     exts: ['pdf'] },
  { title: '진료기록 열람 및 사본발급 위임장', format: 'HWP',  icon: 'ico_hangeul', exts: ['hwp', 'hwpx'] },
  { title: '진료기록 열람 및 사본발급 위임장', format: 'Word', icon: 'ico_word',    exts: ['doc', 'docx'] },
  { title: '진료기록 열람 및 사본발급 위임장', format: 'PDF',  icon: 'ico_pdf',     exts: ['pdf'] },
]

export default function AdminCertDocPage() {
  const [items, setItems] = useState<CertDocItem[]>([])
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState<string | null>(null)
  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({})

  const load = async () => {
    setLoading(true)
    try { setItems(await fetchCertDocAdminList()) }
    catch (err) { alert(err instanceof Error ? err.message : '불러오기 실패') }
    finally { setLoading(false) }
  }

  useEffect(() => { load() }, [])

  const findRecord = (item: typeof TEMPLATE_ITEMS[0]): CertDocItem | undefined =>
    items.find(
      (d) => d.title === item.title && item.exts.includes(d.file_ext.toLowerCase())
    )

  const itemKey = (item: typeof TEMPLATE_ITEMS[0]) =>
    `${item.title}::${item.format}`

  const handleUpload = async (item: typeof TEMPLATE_ITEMS[0], file: File) => {
    const key = itemKey(item)
    setUploading(key)
    try {
      const fd = new FormData()
      fd.append('title', item.title)
      fd.append('use_yn', 'Y')
      fd.append('sort_order', '0')
      fd.append('file', file)

      const existing = findRecord(item)
      if (existing) {
        await updateCertDoc(existing.id, fd)
      } else {
        await createCertDoc(fd)
      }
      await load()
    } catch (err) {
      alert(err instanceof Error ? err.message : '업로드 실패')
    } finally {
      setUploading(null)
    }
  }

  const handleDelete = async (item: typeof TEMPLATE_ITEMS[0]) => {
    const record = findRecord(item)
    if (!record) return
    if (!confirm(`"${record.ori_name}" 파일을 삭제하시겠습니까?`)) return
    try {
      await deleteCertDoc(record.id)
      await load()
    } catch (err) {
      alert(err instanceof Error ? err.message : '삭제 실패')
    }
  }

  const formatBytes = (bytes: number) => {
    if (!bytes) return '-'
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / 1024 / 1024).toFixed(1)} MB`
  }

  return (
    <div className="adm_wrap">
      <AdminSidebar />
      <div className="adm_content">
        <AdminHeader pageTitle="구비서류 파일 관리" />
        <main className="adm_main">
          <section className="adm_section">

            {loading ? (
              <p style={{ padding: '2rem', textAlign: 'center' }}>불러오는 중...</p>
            ) : (
              <table className="adm_table">
                <thead>
                  <tr>
                    <th style={{ width: '80px' }}>형식</th>
                    <th>문서 제목</th>
                    <th style={{ width: '220px' }}>등록된 파일</th>
                    <th style={{ width: '90px' }}>파일크기</th>
                    <th style={{ width: '160px' }}>관리</th>
                  </tr>
                </thead>
                <tbody>
                  {TEMPLATE_ITEMS.map((item) => {
                    const record = findRecord(item)
                    const key = itemKey(item)
                    const isUploading = uploading === key

                    return (
                      <tr key={key}>
                        <td style={{ textAlign: 'center' }}>
                          <span
                            style={{
                              display: 'inline-block',
                              padding: '0.3rem 0.8rem',
                              borderRadius: '0.3rem',
                              fontSize: '1.1rem',
                              fontWeight: 700,
                              background: item.format === 'HWP' ? '#e0f2fe' : item.format === 'Word' ? '#dbeafe' : '#fee2e2',
                              color: item.format === 'HWP' ? '#0369a1' : item.format === 'Word' ? '#1d4ed8' : '#dc2626',
                            }}
                          >
                            {item.format}
                          </span>
                        </td>
                        <td>{item.title}</td>
                        <td style={{ fontSize: '1.2rem', color: record ? '#111827' : '#9ca3af' }}>
                          {record?.ori_name || '파일 없음'}
                        </td>
                        <td style={{ textAlign: 'center', color: '#6b7280', fontSize: '1.2rem' }}>
                          {record ? formatBytes(record.file_size) : '-'}
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          <div className="adm_action_btns">
                            <input
                              type="file"
                              accept=".hwp,.hwpx,.doc,.docx,.pdf"
                              style={{ display: 'none' }}
                              ref={(el) => { fileInputRefs.current[key] = el }}
                              onChange={(e) => {
                                const f = e.target.files?.[0]
                                if (f) handleUpload(item, f)
                                e.target.value = ''
                              }}
                            />
                            <button
                              type="button"
                              className="adm_btn_edit"
                              disabled={isUploading}
                              onClick={() => fileInputRefs.current[key]?.click()}
                            >
                              {isUploading ? '업로드중...' : record ? '교체' : '업로드'}
                            </button>
                            {record && (
                              <button
                                type="button"
                                className="adm_btn_delete"
                                onClick={() => handleDelete(item)}
                              >
                                삭제
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            )}
          </section>
        </main>
      </div>
    </div>
  )
}
