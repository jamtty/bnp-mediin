import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AdminHeader from '@/components/admin/AdminHeader'
import AdminSidebar from '@/components/admin/AdminSidebar'
import RichEditor from '@/components/admin/RichEditor'
import { createRecruit, updateRecruit, fetchRecruitDetail } from '@/api/board'

export default function AdminRecruitFormPage() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const isEdit = Boolean(id)

  const [title, setTitle]             = useState('')
  const [content, setContent]         = useState('')
  const [periodStart, setPeriodStart] = useState('')
  const [periodEnd, setPeriodEnd]     = useState('')
  const [isPinned, setIsPinned]       = useState(false)
  const [loading, setLoading]         = useState(false)
  const [fetching, setFetching]       = useState(isEdit)

  useEffect(() => {
    if (!isEdit) return
    fetchRecruitDetail(Number(id))
      .then((item) => {
        setTitle(item.title)
        setContent(item.content ?? '')
        setPeriodStart(item.period_start ?? '')
        setPeriodEnd(item.period_end ?? '')
        setIsPinned(item.is_pinned === 1)
      })
      .catch(() => {
        alert('게시글을 불러오지 못했습니다.')
        navigate('/admin/recruit')
      })
      .finally(() => setFetching(false))
  }, [id, isEdit, navigate])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) {
      alert('제목을 입력해주세요.')
      return
    }
    setLoading(true)
    try {
      if (isEdit) {
        await updateRecruit(Number(id), {
          title,
          content,
          is_pinned: isPinned,
          period_start: periodStart || undefined,
          period_end: periodEnd || undefined,
        })
        alert('수정되었습니다.')
      } else {
        await createRecruit({
          title,
          content,
          is_pinned: isPinned,
          period_start: periodStart || undefined,
          period_end: periodEnd || undefined,
        })
        alert('등록되었습니다.')
      }
      navigate('/admin/recruit')
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : '저장에 실패했습니다.')
    } finally {
      setLoading(false)
    }
  }

  if (fetching) {
    return (
      <div className="adm_wrap">
        <AdminSidebar />
        <div className="adm_content">
          <AdminHeader pageTitle={isEdit ? '채용정보 수정' : '채용정보 등록'} />
          <main className="adm_main">
            <p style={{ padding: '40px', textAlign: 'center' }}>불러오는 중...</p>
          </main>
        </div>
      </div>
    )
  }

  return (
    <div className="adm_wrap">
      <AdminSidebar />
      <div className="adm_content">
        <AdminHeader pageTitle={isEdit ? '채용정보 수정' : '채용정보 등록'} />
        <main className="adm_main">
          <section className="adm_section">
            <form className="adm_form" onSubmit={handleSubmit}>

              {/* 제목 */}
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

              {/* 접수 기간 */}
              <div className="adm_form_row">
                <label className="adm_form_label">접수시작일</label>
                <input
                  type="date"
                  className="adm_form_input"
                  value={periodStart}
                  onChange={(e) => setPeriodStart(e.target.value)}
                  style={{ maxWidth: '220px' }}
                />
              </div>

              <div className="adm_form_row">
                <label className="adm_form_label">접수종료일</label>
                <input
                  type="date"
                  className="adm_form_input"
                  value={periodEnd}
                  onChange={(e) => setPeriodEnd(e.target.value)}
                  style={{ maxWidth: '220px' }}
                />
              </div>

              {/* 공지 고정 */}
              <div className="adm_form_row">
                <label className="adm_form_label">공지 고정</label>
                <label className="adm_checkbox_label">
                  <input
                    type="checkbox"
                    checked={isPinned}
                    onChange={(e) => setIsPinned(e.target.checked)}
                  />
                  게시글을 공지(고정글)로 등록합니다
                </label>
              </div>

              {/* 내용 */}
              <div className="adm_form_row adm_form_row_col">
                <label className="adm_form_label">내용</label>
                <RichEditor value={content} onChange={setContent} />
              </div>

              <div className="adm_form_btns">
                <button
                  type="button"
                  className="adm_btn_secondary"
                  onClick={() => navigate('/admin/recruit')}
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="adm_btn_primary"
                  disabled={loading}
                >
                  {loading ? '저장 중...' : isEdit ? '수정 완료' : '등록'}
                </button>
              </div>
            </form>
          </section>
        </main>
      </div>
    </div>
  )
}
