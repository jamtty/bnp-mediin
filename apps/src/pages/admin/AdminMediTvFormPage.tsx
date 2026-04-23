import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AdminHeader from '@/components/admin/AdminHeader'
import AdminSidebar from '@/components/admin/AdminSidebar'
import { createMediTv, fetchMediTvDetail, updateMediTv } from '@/api/board'
import { getYouTubeThumbnailUrl } from '@/utils/youtube'

export default function AdminMediTvFormPage() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const isEdit = Boolean(id)

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [youtubeUrl, setYoutubeUrl] = useState('')
  const [isPinned, setIsPinned] = useState(false)
  const [loading, setLoading] = useState(false)
  const [fetching, setFetching] = useState(isEdit)

  useEffect(() => {
    if (!isEdit) return
    fetchMediTvDetail(Number(id))
      .then((item) => {
        setTitle(item.title)
        setContent(item.content ?? '')
        setYoutubeUrl(item.youtube_url ?? '')
        setIsPinned(item.is_pinned === 1)
      })
      .catch(() => {
        alert('게시글을 불러오지 못했습니다.')
        navigate('/admin/medi-tv')
      })
      .finally(() => setFetching(false))
  }, [id, isEdit, navigate])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) {
      alert('제목을 입력해주세요.')
      return
    }
    if (!youtubeUrl.trim()) {
      alert('유튜브 링크를 입력해주세요.')
      return
    }

    setLoading(true)
    try {
      if (isEdit) {
        await updateMediTv(Number(id), {
          title,
          content,
          is_pinned: isPinned,
          youtube_url: youtubeUrl,
        })
        alert('수정되었습니다.')
      } else {
        await createMediTv({
          title,
          content,
          is_pinned: isPinned,
          youtube_url: youtubeUrl,
        })
        alert('등록되었습니다.')
      }
      navigate('/admin/medi-tv')
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
          <AdminHeader pageTitle={isEdit ? '메디TV 수정' : '메디TV 등록'} />
          <main className="adm_main">
            <p style={{ padding: '40px', textAlign: 'center' }}>불러오는 중...</p>
          </main>
        </div>
      </div>
    )
  }

  const thumbnail = getYouTubeThumbnailUrl(youtubeUrl)

  return (
    <div className="adm_wrap">
      <AdminSidebar />
      <div className="adm_content">
        <AdminHeader pageTitle={isEdit ? '메디TV 수정' : '메디TV 등록'} />
        <main className="adm_main">
          <section className="adm_section">
            <form className="adm_form" onSubmit={handleSubmit}>
              <div className="adm_form_row">
                <label className="adm_form_label">제목 <span className="required">*</span></label>
                <input type="text" className="adm_form_input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="제목을 입력하세요" required />
              </div>

              <div className="adm_form_row">
                <label className="adm_form_label">유튜브 링크 <span className="required">*</span></label>
                <div className="medi_tv_form_column">
                  <input type="url" className="adm_form_input" value={youtubeUrl} onChange={(e) => setYoutubeUrl(e.target.value)} placeholder="https://www.youtube.com/watch?v=..." required />
                  {thumbnail && <img src={thumbnail} alt="유튜브 썸네일 미리보기" className="medi_tv_preview" />}
                </div>
              </div>

              <div className="adm_form_btns">
                <button type="button" className="adm_btn_secondary" onClick={() => navigate('/admin/medi-tv')}>취소</button>
                <button type="submit" className="adm_btn_primary" disabled={loading}>{loading ? '저장 중...' : isEdit ? '수정 완료' : '등록'}</button>
              </div>
            </form>
          </section>
        </main>
      </div>
    </div>
  )
}