import { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AdminHeader from '@/components/admin/AdminHeader'
import AdminSidebar from '@/components/admin/AdminSidebar'
import {
  fetchMainBannerDetail,
  createMainBanner,
  updateMainBanner,
} from '@/api/mainBanner'
import '@/assets/css/style.css'

export default function AdminMainBannerFormPage() {
  const navigate = useNavigate()
  const { id }   = useParams<{ id: string }>()
  const isEdit   = Boolean(id)
  const fileRef  = useRef<HTMLInputElement>(null)

  const [url,         setUrl]         = useState('')
  const [linkTarget,  setLinkTarget]  = useState('_self')
  const [useYn,       setUseYn]       = useState<'Y' | 'N'>('Y')
  const [sortOrder,   setSortOrder]   = useState<number | ''>(1)
  const [imgFile,     setImgFile]     = useState<File | null>(null)
  const [imgPreview,  setImgPreview]  = useState('')
  const [imgOriName,  setImgOriName]  = useState('')
  const [loading,     setLoading]     = useState(false)
  const [fetching,    setFetching]    = useState(isEdit)

  useEffect(() => {
    if (!isEdit) return
    fetchMainBannerDetail(Number(id))
      .then((item) => {
        setUrl(item.url)
        setLinkTarget(item.link_target)
        setUseYn(item.use_yn === 'Y' ? 'Y' : 'N')
        setSortOrder(item.sort_order || 1)
        setImgPreview(item.img_url ?? '')
        setImgOriName(item.img_ori_name ?? '')
      })
      .catch(() => {
        alert('데이터를 불러오지 못했습니다.')
        navigate('/admin/main-banner')
      })
      .finally(() => setFetching(false))
  }, [id, isEdit, navigate])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setImgFile(file)
    setImgOriName(file.name)
    const reader = new FileReader()
    reader.onload = (ev) => setImgPreview(ev.target?.result as string)
    reader.readAsDataURL(file)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isEdit && !imgFile) { alert('이미지를 선택해주세요.'); return }

    const fd = new FormData()
    fd.append('url',         url)
    fd.append('link_target', linkTarget)
    fd.append('use_yn',      useYn)
    fd.append('sort_order',  String(sortOrder ?? 1))
    if (imgFile) fd.append('image', imgFile)

    setLoading(true)
    try {
      if (isEdit) {
        await updateMainBanner(Number(id), fd)
        alert('수정되었습니다.')
      } else {
        await createMainBanner(fd)
        alert('등록되었습니다.')
      }
      navigate('/admin/main-banner')
    } catch (err) {
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
          <AdminHeader pageTitle={isEdit ? '메인 배너 수정' : '메인 배너 등록'} />
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
        <AdminHeader pageTitle={isEdit ? '메인 배너 수정' : '메인 배너 등록'} />
        <main className="adm_main">
          <section className="adm_section">
            <form className="adm_form" onSubmit={handleSubmit}>

              {/* URL */}
              <div className="adm_form_row">
                <label className="adm_form_label">링크 URL</label>
                <input
                  type="text"
                  className="adm_form_input"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://..."
                />
              </div>

              {/* 링크타겟 */}
              <div className="adm_form_row">
                <label className="adm_form_label">링크타겟</label>
                <div style={{ display: 'flex', gap: '1.6rem' }}>
                  {[{ value: '_self', label: '현재창' }, { value: '_blank', label: '새창' }].map((opt) => (
                    <label key={opt.value} className="adm_checkbox_label">
                      <input
                        type="radio"
                        name="link_target"
                        value={opt.value}
                        checked={linkTarget === opt.value}
                        onChange={() => setLinkTarget(opt.value)}
                        style={{ accentColor: '#2563eb' }}
                      />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </div>

              {/* 사용여부 */}
              <div className="adm_form_row">
                <label className="adm_form_label">사용여부 <span className="required">*</span></label>
                <div style={{ display: 'flex', gap: '1.6rem' }}>
                  {[{ value: 'Y', label: '사용' }, { value: 'N', label: '미사용' }].map((opt) => (
                    <label key={opt.value} className="adm_checkbox_label">
                      <input
                        type="radio"
                        name="use_yn"
                        value={opt.value}
                        checked={useYn === opt.value}
                        onChange={() => setUseYn(opt.value as 'Y' | 'N')}
                        style={{ accentColor: '#2563eb' }}
                      />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </div>

              {/* 노출순서 */}
              <div className="adm_form_row">
                <label className="adm_form_label">노출순서 <span className="required">*</span></label>
                <input
                  type="number"
                  className="adm_form_input"
                  style={{ maxWidth: '120px' }}
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value === '' ? '' : Number(e.target.value))}
                  min={1}
                />
              </div>

              {/* 이미지 업로드 */}
              <div className="adm_form_row" style={{ alignItems: 'flex-start' }}>
                <label className="adm_form_label" style={{ paddingTop: '0.6rem' }}>
                  배너 이미지 {!isEdit && <span className="required">*</span>}
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <input
                      ref={fileRef}
                      type="file"
                      accept=".jpg,.jpeg,.png,.gif,.bmp"
                      style={{ display: 'none' }}
                      onChange={handleFileChange}
                    />
                    <button
                      type="button"
                      className="adm_btn_secondary"
                      style={{ height: '3.4rem', fontSize: '1.3rem' }}
                      onClick={() => fileRef.current?.click()}
                    >
                      파일 선택
                    </button>
                    <span style={{ fontSize: '1.3rem', color: '#6b7280' }}>
                      {imgOriName || '선택된 파일 없음'}
                    </span>
                  </div>
                  {imgPreview && (
                    <img
                      src={imgPreview}
                      alt="미리보기"
                      style={{ maxWidth: '400px', maxHeight: '200px', objectFit: 'contain', border: '1px solid #e5e7eb', borderRadius: '0.4rem' }}
                    />
                  )}
                  <p style={{ fontSize: '1.2rem', color: '#9ca3af' }}>
                    (파일형식 : jpg, jpeg, gif, png, bmp / 권장 1920×650px / 용량제한 10MB)
                  </p>
                </div>
              </div>

              <div className="adm_form_btns">
                <button
                  type="button"
                  className="adm_btn_secondary"
                  onClick={() => navigate('/admin/main-banner')}
                >
                  취소
                </button>
                <button type="submit" className="adm_btn_primary" disabled={loading}>
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
