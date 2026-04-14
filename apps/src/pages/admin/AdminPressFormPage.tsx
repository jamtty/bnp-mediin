import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AdminHeader from '@/components/admin/AdminHeader'
import AdminSidebar from '@/components/admin/AdminSidebar'
import RichEditor from '@/components/admin/RichEditor'
import { createPress, updatePress, fetchPressDetail } from '@/api/board'
import '@/assets/css/style.css'

export default function AdminPressFormPage() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const isEdit = Boolean(id)

  const [title, setTitle]           = useState('')
  const [content, setContent]       = useState('')
  const [pressName, setPressName]   = useState('')
  const [externalUrl, setExternalUrl] = useState('')
  const [isPinned, setIsPinned]     = useState(false)
  const [loading, setLoading]       = useState(false)
  const [fetching, setFetching]     = useState(isEdit)

  useEffect(() => {
    if (!isEdit) return
    fetchPressDetail(Number(id))
      .then((item) => {
        setTitle(item.title)
        setContent(item.content ?? '')
        setPressName(item.press_name ?? '')
        setExternalUrl(item.external_url ?? '')
        setIsPinned(item.is_pinned === 1)
      })
      .catch(() => {
        alert('게시글을 불러오지 못했습니다.')
        navigate('/admin/press')
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
        await updatePress(Number(id), {
          title,
          content,
          is_pinned: isPinned,
          press_name: pressName,
          external_url: externalUrl,
        })
        alert('수정되었습니다.')
      } else {
        await createPress({
          title,
          content,
          is_pinned: isPinned,
          press_name: pressName,
          external_url: externalUrl,
        })
        alert('등록되었습니다.')
      }
      navigate('/admin/press')
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
          <AdminHeader pageTitle={isEdit ? '보도자료 수정' : '보도자료 등록'} />
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
        <AdminHeader pageTitle={isEdit ? '보도자료 수정' : '보도자료 등록'} />
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

              {/* 언론사명 */}
              <div className="adm_form_row">
                <label className="adm_form_label">언론사명</label>
                <input
                  type="text"
                  className="adm_form_input"
                  value={pressName}
                  onChange={(e) => setPressName(e.target.value)}
                  placeholder="예) 파주타임스"
                />
              </div>

              {/* 원문 URL */}
              <div className="adm_form_row">
                <label className="adm_form_label">원문 링크</label>
                <input
                  type="url"
                  className="adm_form_input"
                  value={externalUrl}
                  onChange={(e) => setExternalUrl(e.target.value)}
                  placeholder="https://..."
                />
              </div>

              {/* 내용 */}
              <div className="adm_form_row adm_form_row_col">
                <label className="adm_form_label">내용</label>
                <RichEditor value={content} onChange={setContent} />
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
                  공지로 표시
                </label>
              </div>

              <div className="adm_form_btns">
                <button
                  type="button"
                  className="adm_btn_secondary"
                  onClick={() => navigate('/admin/press')}
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
