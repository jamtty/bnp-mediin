import { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AdminHeader from '@/components/admin/AdminHeader'
import AdminSidebar from '@/components/admin/AdminSidebar'
import {
  fetchPopupBannerDetail,
  createPopupBanner,
  updatePopupBanner,
  POPUP_SITE_MAP,
} from '@/api/popupBanner'

export default function AdminPopupBannerFormPage() {
  const navigate  = useNavigate()
  const { id }    = useParams<{ id: string }>()
  const isEdit    = Boolean(id)
  const fileRef   = useRef<HTMLInputElement>(null)

  const [site,        setSite]        = useState('MAIN')
  const [adminTitle,  setAdminTitle]  = useState('')
  const [url,         setUrl]         = useState('')
  const [linkTarget,  setLinkTarget]  = useState('_self')
  const [periodStart, setPeriodStart] = useState('')
  const [periodEnd,   setPeriodEnd]   = useState('')
  const [author,      setAuthor]      = useState('관리자')
  const [useYn,       setUseYn]       = useState<'Y' | 'N'>('Y')
  const [imgWidth,    setImgWidth]    = useState<number | ''>('')
  const [imgHeight,   setImgHeight]   = useState<number | ''>('')
  const [imgPosLeft,  setImgPosLeft]  = useState<number | ''>('')
  const [imgPosTop,   setImgPosTop]   = useState<number | ''>('')
  const [sortOrder,   setSortOrder]   = useState<number | ''>(1)
  const [imgFile,     setImgFile]     = useState<File | null>(null)
  const [imgPreview,  setImgPreview]  = useState('')
  const [imgOriName,  setImgOriName]  = useState('')
  const [loading,     setLoading]     = useState(false)
  const [fetching,    setFetching]    = useState(isEdit)

  useEffect(() => {
    if (!isEdit) return
    fetchPopupBannerDetail(Number(id))
      .then((item) => {
        setSite(item.site)
        setAdminTitle(item.admin_title)
        setUrl(item.url)
        setLinkTarget(item.link_target)
        setPeriodStart(item.period_start ?? '')
        setPeriodEnd(item.period_end ?? '')
        setAuthor(item.author)
        setUseYn(item.use_yn === 'Y' ? 'Y' : 'N')
        setImgWidth(item.img_width || '')
        setImgHeight(item.img_height || '')
        setImgPosLeft(item.img_pos_left !== undefined ? item.img_pos_left : '')
        setImgPosTop(item.img_pos_top !== undefined ? item.img_pos_top : '')
        setSortOrder(item.sort_order || 1)
        setImgPreview(item.img_url)
        setImgOriName(item.img_ori_name)
      })
      .catch(() => {
        alert('데이터를 불러오지 못했습니다.')
        navigate('/admin/popup-banner')
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
    if (!adminTitle.trim()) { alert('관리자 제목을 입력해주세요.'); return }
    if (!isEdit && !imgFile) { alert('이미지를 선택해주세요.'); return }

    const fd = new FormData()
    fd.append('site',        site)
    fd.append('admin_title', adminTitle)
    fd.append('url',         url)
    fd.append('link_target', linkTarget)
    fd.append('period_start', periodStart)
    fd.append('period_end',   periodEnd)
    fd.append('author',      author)
    fd.append('use_yn',      useYn)
    fd.append('img_width',   String(imgWidth  ?? 0))
    fd.append('img_height',  String(imgHeight ?? 0))
    fd.append('img_pos_left',String(imgPosLeft ?? 0))
    fd.append('img_pos_top', String(imgPosTop  ?? 0))
    fd.append('sort_order',  String(sortOrder  ?? 1))
    if (imgFile) fd.append('image', imgFile)

    setLoading(true)
    try {
      if (isEdit) {
        await updatePopupBanner(Number(id), fd)
        alert('수정되었습니다.')
      } else {
        await createPopupBanner(fd)
        alert('등록되었습니다.')
      }
      navigate('/admin/popup-banner')
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
          <AdminHeader pageTitle={isEdit ? '팝업 수정' : '팝업 등록'} />
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
        <AdminHeader pageTitle={isEdit ? '팝업 수정' : '팝업 등록'} />
        <main className="adm_main">
          <section className="adm_section">
            <form className="adm_form" onSubmit={handleSubmit}>

              {/* 사이트 */}
              <div className="adm_form_row">
                <label className="adm_form_label">사이트 <span className="required">*</span></label>
                <div style={{ display: 'flex', gap: '1.6rem' }}>
                  {Object.entries(POPUP_SITE_MAP).map(([k, v]) => (
                    <label key={k} className="adm_checkbox_label">
                      <input
                        type="radio"
                        name="site"
                        value={k}
                        checked={site === k}
                        onChange={() => setSite(k)}
                        style={{ accentColor: '#2563eb' }}
                      />
                      {v}
                    </label>
                  ))}
                </div>
              </div>

              {/* 관리자 제목 */}
              <div className="adm_form_row">
                <label className="adm_form_label">관리자 제목 <span className="required">*</span></label>
                <input
                  type="text"
                  className="adm_form_input"
                  value={adminTitle}
                  onChange={(e) => setAdminTitle(e.target.value)}
                  placeholder="관리자용 구분 제목"
                />
              </div>

              {/* URL */}
              <div className="adm_form_row">
                <label className="adm_form_label">URL <span className="required">*</span></label>
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
                <label className="adm_form_label">링크타겟 <span className="required">*</span></label>
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

              {/* 게시기간 */}
              <div className="adm_form_row">
                <label className="adm_form_label">게시기간 <span className="required">*</span></label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <input
                    type="date"
                    className="adm_form_input"
                    style={{ maxWidth: '180px' }}
                    value={periodStart}
                    onChange={(e) => setPeriodStart(e.target.value)}
                  />
                  <span style={{ color: '#6b7280' }}>~</span>
                  <input
                    type="date"
                    className="adm_form_input"
                    style={{ maxWidth: '180px' }}
                    value={periodEnd}
                    onChange={(e) => setPeriodEnd(e.target.value)}
                  />
                </div>
              </div>

              {/* 작성자 */}
              <div className="adm_form_row">
                <label className="adm_form_label">작성자</label>
                <input
                  type="text"
                  className="adm_form_input"
                  style={{ maxWidth: '300px' }}
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
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

              {/* 이미지 가로/세로 */}
              <div className="adm_form_row">
                <label className="adm_form_label">이미지 가로/세로 <span className="required">*</span></label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <input
                    type="number"
                    className="adm_form_input"
                    style={{ maxWidth: '120px' }}
                    value={imgWidth}
                    onChange={(e) => setImgWidth(e.target.value === '' ? '' : Number(e.target.value))}
                    placeholder="0"
                    min={0}
                  />
                  <input
                    type="number"
                    className="adm_form_input"
                    style={{ maxWidth: '120px' }}
                    value={imgHeight}
                    onChange={(e) => setImgHeight(e.target.value === '' ? '' : Number(e.target.value))}
                    placeholder="0"
                    min={0}
                  />
                  <span style={{ color: '#6b7280', fontSize: '1.3rem' }}>(px)</span>
                </div>
              </div>

              {/* 이미지 위치 */}
              <div className="adm_form_row">
                <label className="adm_form_label">이미지 위치 좌측/상단 <span className="required">*</span></label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <input
                    type="number"
                    className="adm_form_input"
                    style={{ maxWidth: '120px' }}
                    value={imgPosLeft}
                    onChange={(e) => setImgPosLeft(e.target.value === '' ? '' : Number(e.target.value))}
                    placeholder="0"
                    min={0}
                    max={100}
                  />
                  <input
                    type="number"
                    className="adm_form_input"
                    style={{ maxWidth: '120px' }}
                    value={imgPosTop}
                    onChange={(e) => setImgPosTop(e.target.value === '' ? '' : Number(e.target.value))}
                    placeholder="0"
                    min={0}
                    max={100}
                  />
                  <span style={{ color: '#6b7280', fontSize: '1.3rem' }}>(%)</span>
                  <span style={{ color: '#9ca3af', fontSize: '1.2rem' }}>화면 좌측에서 / 상단에서</span>
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
                  이미지 <span className="required">*</span>
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
                      style={{ maxWidth: '200px', maxHeight: '200px', objectFit: 'contain', border: '1px solid #e5e7eb', borderRadius: '0.4rem' }}
                    />
                  )}
                  <p style={{ fontSize: '1.2rem', color: '#9ca3af' }}>
                    (파일형식 : jpg, jpeg, gif, png, bmp / 용량제한 10MB)
                  </p>
                </div>
              </div>

              <div className="adm_form_btns">
                <button
                  type="button"
                  className="adm_btn_secondary"
                  onClick={() => navigate('/admin/popup-banner')}
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
