import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AdminHeader from '@/components/admin/AdminHeader'
import AdminSidebar from '@/components/admin/AdminSidebar'
import RichEditor from '@/components/admin/RichEditor'
import {
  createHealthInfo,
  updateHealthInfo,
  fetchHealthInfoDetail,
} from '@/api/board'

export default function AdminHealthInfoFormPage() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const isEdit = Boolean(id)

  const [title, setTitle]       = useState('')
  const [content, setContent]   = useState('')
  const [isPinned, setIsPinned] = useState(false)
  const [loading, setLoading]   = useState(false)
  const [initLoading, setInitLoading] = useState(isEdit)

  useEffect(() => {
    if (!isEdit) return
    setInitLoading(true)
    fetchHealthInfoDetail(Number(id))
      .then((detail) => {
        setTitle(detail.title)
        setContent(detail.content ?? '')
        setIsPinned(detail.is_pinned === 1)
      })
      .catch((err: unknown) => {
        alert(err instanceof Error ? err.message : '불러오기에 실패했습니다.')
        navigate('/admin/health-info')
      })
      .finally(() => setInitLoading(false))
  }, [id, isEdit, navigate])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) {
      alert('제목을 입력해주세요.')
      return
    }
    setLoading(true)
    try {
      const payload = {
        title: title.trim(),
        content,
        is_pinned: isPinned,
      }
      if (isEdit) {
        await updateHealthInfo(Number(id), payload)
        alert('수정되었습니다.')
      } else {
        await createHealthInfo(payload)
        alert('등록되었습니다.')
      }
      navigate('/admin/health-info')
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : '저장에 실패했습니다.')
    } finally {
      setLoading(false)
    }
  }

  if (initLoading) {
    return (
      <div className="adm_wrap">
        <AdminSidebar />
        <div className="adm_content">
          <AdminHeader pageTitle="건강정보 관리" />
          <main className="adm_main">
            <p style={{ padding: '2rem' }}>불러오는 중...</p>
          </main>
        </div>
      </div>
    )
  }

  return (
    <div className="adm_wrap">
      <AdminSidebar />
      <div className="adm_content">
        <AdminHeader pageTitle={isEdit ? '건강정보 수정' : '건강정보 등록'} />
        <main className="adm_main">
          <section className="adm_section">
            <form onSubmit={handleSubmit} className="adm_form">
              <div className="adm_form_row">
                <label className="adm_form_label">
                  제목 <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="adm_form_input"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="제목을 입력하세요"
                  required
                />
              </div>

              <div className="adm_form_row">
                <label className="adm_form_label">내용</label>
                <RichEditor value={content} onChange={setContent} />
              </div>

              <div className="adm_form_row">
                <label className="adm_form_label">공지 고정</label>
                <label className="adm_checkbox_label">
                  <input
                    type="checkbox"
                    checked={isPinned}
                    onChange={(e) => setIsPinned(e.target.checked)}
                  />
                  상단 고정
                </label>
              </div>

              <div className="adm_form_actions">
                <button
                  type="button"
                  className="adm_btn_secondary"
                  onClick={() => navigate('/admin/health-info')}
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="adm_btn_primary"
                  disabled={loading}
                >
                  {loading ? '저장 중...' : isEdit ? '수정' : '등록'}
                </button>
              </div>
            </form>
          </section>
        </main>
      </div>
    </div>
  )
}
