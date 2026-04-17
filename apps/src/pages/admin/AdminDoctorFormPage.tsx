import { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AdminHeader from '@/components/admin/AdminHeader'
import AdminSidebar from '@/components/admin/AdminSidebar'
import {
  fetchDoctorDetail,
  createDoctor,
  updateDoctor,
  DEPT_CODE_MAP,
  emptySchedule,
  parseSchedule,
  type ScheduleJson,
  type ScheduleRow,
} from '@/api/doctor'
import '@/assets/css/style.css'

const DAY_LABELS: { key: keyof ScheduleRow; label: string }[] = [
  { key: 'mon',   label: '월' },
  { key: 'tue',   label: '화' },
  { key: 'wed',   label: '수' },
  { key: 'thu',   label: '목' },
  { key: 'fri',   label: '금' },
  { key: 'sat13', label: '토(1,3주)' },
  { key: 'sat24', label: '토(2,4주)' },
  { key: 'sat5',  label: '토(5주)' },
]

const QUICK_VALUES = ['진료', '전화문의', 'OFF', '-']

export default function AdminDoctorFormPage() {
  const navigate = useNavigate()
  const { id }   = useParams<{ id: string }>()
  const isEdit   = Boolean(id)
  const fileRef  = useRef<HTMLInputElement>(null)

  const [deptCode,     setDeptCode]     = useState('')
  const [docName,      setDocName]      = useState('')
  const [docTitle,     setDocTitle]     = useState('')
  const [docMajor,     setDocMajor]     = useState('')
  const [docSpecialty, setDocSpecialty] = useState('')
  const [docCareer,    setDocCareer]    = useState('')
  const [careerLabel,  setCareerLabel]  = useState('약력')
  const [schedule,     setSchedule]     = useState<ScheduleJson>(emptySchedule())
  const [useYn,        setUseYn]        = useState<'Y' | 'N'>('Y')
  const [imgFile,      setImgFile]      = useState<File | null>(null)
  const [imgPreview,   setImgPreview]   = useState('')
  const [imgOriName,   setImgOriName]   = useState('')
  const [loading,      setLoading]      = useState(false)
  const [fetching,     setFetching]     = useState(isEdit)

  useEffect(() => {
    if (!isEdit) return
    fetchDoctorDetail(Number(id))
      .then((item) => {
        setDeptCode(item.dept_code)
        setDocName(item.doc_name)
        setDocTitle(item.doc_title ?? '')
        setDocMajor(item.doc_major ?? '')
        setDocSpecialty(item.doc_specialty ?? '')
        setDocCareer(item.doc_career ?? '')
        setCareerLabel(item.career_label ?? '약력')
        setSchedule(parseSchedule(item.schedule_json) ?? emptySchedule())
        setUseYn(item.use_yn === 'Y' ? 'Y' : 'N')
        setImgPreview(item.img_url ?? '')
        setImgOriName(item.img_ori_name ?? '')
      })
      .catch(() => {
        alert('데이터를 불러오지 못했습니다.')
        navigate('/admin/doctor')
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

  const handleScheduleChange = (period: 'am' | 'pm', day: keyof ScheduleRow, value: string) => {
    setSchedule((prev) => ({
      ...prev,
      [period]: { ...prev[period], [day]: value },
    }))
  }

  const getQuickValue = (value: string) => (QUICK_VALUES.includes(value) ? value : '')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!deptCode) { alert('진료과를 선택해 주세요.'); return }
    if (!docName.trim()) { alert('의사 이름을 입력해 주세요.'); return }

    setLoading(true)
    try {
      const formData = new FormData()
      formData.append('dept_code',     deptCode)
      formData.append('doc_name',      docName.trim())
      formData.append('doc_title',     docTitle.trim())
      formData.append('doc_major',     docMajor.trim())
      formData.append('doc_specialty', docSpecialty.trim())
      formData.append('doc_career',    docCareer.trim())
      formData.append('career_label',  careerLabel.trim())
      formData.append('use_yn',        useYn)

      // 진료일정 — 빈 값이면 null
      const hasSchedule = Object.values(schedule.am).some((v) => v.trim() !== '') ||
                          Object.values(schedule.pm).some((v) => v.trim() !== '')
      if (hasSchedule) {
        formData.append('schedule_json', JSON.stringify(schedule))
      }

      if (imgFile) {
        formData.append('image', imgFile)
      }

      if (isEdit) {
        await updateDoctor(Number(id), formData)
        alert('수정되었습니다.')
      } else {
        await createDoctor(formData)
        alert('등록되었습니다.')
      }
      navigate('/admin/doctor')
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
          <AdminHeader pageTitle="의료진 관리" />
          <main className="adm_main">
            <p style={{ padding: '2rem' }}>로딩중...</p>
          </main>
        </div>
      </div>
    )
  }

  return (
    <div className="adm_wrap">
      <AdminSidebar />
      <div className="adm_content">
        <AdminHeader pageTitle={isEdit ? '의료진 수정' : '의료진 등록'} />
        <main className="adm_main">
          <form onSubmit={handleSubmit}>

            {/* 기본정보 */}
            <section className="adm_section" style={{ marginBottom: '2rem' }}>
              <h3 className="adm_section_title">기본 정보</h3>
              <div className="adm_form" style={{ paddingTop: 0 }}>

                <div className="adm_form_row">
                  <label className="adm_form_label">진료과 <span className="required">*</span></label>
                  <select
                    value={deptCode}
                    onChange={(e) => setDeptCode(e.target.value)}
                    className="adm_form_input"
                    required
                  >
                    <option value="">진료과 선택</option>
                    {Object.entries(DEPT_CODE_MAP).map(([code, name]) => (
                      <option key={code} value={code}>{name}</option>
                    ))}
                  </select>
                </div>

                <div className="adm_form_row">
                  <label className="adm_form_label">의사 이름 <span className="required">*</span></label>
                  <input
                    type="text"
                    value={docName}
                    onChange={(e) => setDocName(e.target.value)}
                    placeholder="예: 이학수"
                    className="adm_form_input"
                    required
                  />
                </div>

                <div className="adm_form_row">
                  <label className="adm_form_label">직함</label>
                  <input
                    type="text"
                    value={docTitle}
                    onChange={(e) => setDocTitle(e.target.value)}
                    placeholder="예: 원장, 진료과장, 진료부원장"
                    className="adm_form_input"
                  />
                </div>

                <div className="adm_form_row">
                  <label className="adm_form_label">진료과목</label>
                  <input
                    type="text"
                    value={docMajor}
                    onChange={(e) => setDocMajor(e.target.value)}
                    placeholder="예: 내과"
                    className="adm_form_input"
                  />
                </div>

                <div className="adm_form_row">
                  <label className="adm_form_label">표시 여부</label>
                  <div>
                    <label style={{ marginRight: 16, fontSize: '1.4rem' }}>
                      <input type="radio" value="Y" checked={useYn === 'Y'} onChange={() => setUseYn('Y')} />
                      {' '}표시
                    </label>
                    <label style={{ fontSize: '1.4rem' }}>
                      <input type="radio" value="N" checked={useYn === 'N'} onChange={() => setUseYn('N')} />
                      {' '}숨김
                    </label>
                  </div>
                </div>

              </div>
            </section>

            {/* 의사 사진 */}
            <section className="adm_section" style={{ marginBottom: '2rem' }}>
              <h3 className="adm_section_title">의사 사진</h3>
              <div className="adm_form" style={{ paddingTop: 0 }}>
                <div className="adm_form_row">
                  <label className="adm_form_label">이미지</label>
                  <div>
                    {imgPreview && (
                      <div style={{ marginBottom: 12 }}>
                        <img
                          src={imgPreview}
                          alt="미리보기"
                          style={{ width: 120, height: 150, objectFit: 'cover', border: '1px solid #ddd', borderRadius: 4, display: 'block' }}
                        />
                        {imgOriName && (
                          <p style={{ fontSize: '1.2rem', color: '#666', marginTop: 6 }}>{imgOriName}</p>
                        )}
                      </div>
                    )}
                    <input
                      ref={fileRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      style={{ display: 'none' }}
                    />
                    <button
                      type="button"
                      className="adm_btn_secondary"
                      onClick={() => fileRef.current?.click()}
                    >
                      {imgPreview ? '이미지 변경' : '이미지 선택'}
                    </button>
                    <span style={{ marginLeft: 8, fontSize: '1.2rem', color: '#888' }}>
                      JPG, PNG, GIF (최대 10MB)
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* 진료분야 */}
            <section className="adm_section" style={{ marginBottom: '2rem' }}>
              <h3 className="adm_section_title">진료분야</h3>
              <div className="adm_form" style={{ paddingTop: 0 }}>
                <div className="adm_form_row adm_form_row_col">
                  <label className="adm_form_label">진료분야</label>
                  <textarea
                    value={docSpecialty}
                    onChange={(e) => setDocSpecialty(e.target.value)}
                    placeholder={"진료분야를 한 줄씩 입력하세요.\n예:\n상, 하복부 초음파\n성인병\n노인병"}
                    rows={5}
                    style={{ padding: '1.2rem', border: '1px solid #d1d5db', borderRadius: '0.6rem', fontSize: '1.4rem', fontFamily: 'inherit', resize: 'vertical', outline: 'none', boxSizing: 'border-box', lineHeight: 1.6 }}
                  />
                  <p style={{ fontSize: '1.2rem', color: '#888', marginTop: 4 }}>줄바꿈으로 각 항목을 구분합니다.</p>
                </div>
              </div>
            </section>

            {/* 약력 / 경력 */}
            <section className="adm_section" style={{ marginBottom: '2rem' }}>
              <h3 className="adm_section_title">약력 / 경력</h3>
              <div className="adm_form" style={{ paddingTop: 0 }}>
                <div className="adm_form_row">
                  <label className="adm_form_label">레이블</label>
                  <input
                    type="text"
                    value={careerLabel}
                    onChange={(e) => setCareerLabel(e.target.value)}
                    placeholder="약력 (기본값)"
                    className="adm_form_input"
                    style={{ maxWidth: 240 }}
                  />
                </div>
                <div className="adm_form_row adm_form_row_col">
                  <label className="adm_form_label">약력 내용</label>
                  <textarea
                    value={docCareer}
                    onChange={(e) => setDocCareer(e.target.value)}
                    placeholder={"한 줄씩 입력하세요.\n예:\n한양대학교 학사 석사 박사\n대한초음파학회 회원"}
                    rows={8}
                    style={{ padding: '1.2rem', border: '1px solid #d1d5db', borderRadius: '0.6rem', fontSize: '1.4rem', fontFamily: 'inherit', resize: 'vertical', outline: 'none', boxSizing: 'border-box', lineHeight: 1.6 }}
                  />
                  <p style={{ fontSize: '1.2rem', color: '#888', marginTop: 4 }}>줄바꿈으로 각 항목을 구분합니다.</p>
                </div>
              </div>
            </section>

            {/* 진료일정 */}
            <section className="adm_section" style={{ marginBottom: '2rem' }}>
              <h3 className="adm_section_title">진료일정</h3>
              <div className="adm_form" style={{ paddingTop: 0 }}>
                <p style={{ fontSize: '1.3rem', color: '#666', marginBottom: 12 }}>
                  빠른선택 드롭다운으로 기본값을 넣거나, 아래 입력칸에 직접 입력할 수 있습니다.
                </p>
                <div style={{ overflowX: 'auto' }}>
                  <table className="adm_table" style={{ minWidth: 700, fontSize: '1.3rem' }}>
                    <thead>
                      <tr>
                        <th style={{ width: 60 }}>구분</th>
                        {DAY_LABELS.map((d) => (
                          <th key={d.key} style={{ minWidth: 90 }}>{d.label}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {(['am', 'pm'] as const).map((period) => (
                        <tr key={period}>
                          <td style={{ textAlign: 'center', fontWeight: 600 }}>
                            {period === 'am' ? '오전' : '오후'}
                          </td>
                          {DAY_LABELS.map((d) => (
                            <td key={d.key} style={{ padding: 4 }}>
                              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                                <select
                                  value={getQuickValue(schedule[period][d.key])}
                                  onChange={(e) => handleScheduleChange(period, d.key, e.target.value)}
                                  className="adm_form_input"
                                  style={{ height: '3.2rem', fontSize: '1.2rem', padding: '0 0.8rem' }}
                                >
                                  <option value="">빠른선택</option>
                                  {QUICK_VALUES.map((value) => (
                                    <option key={value} value={value}>{value}</option>
                                  ))}
                                </select>
                                <input
                                  type="text"
                                  value={schedule[period][d.key]}
                                  onChange={(e) => handleScheduleChange(period, d.key, e.target.value)}
                                  style={{ width: '100%', fontSize: '1.2rem', padding: '4px 6px', border: '1px solid #d1d5db', borderRadius: 4, boxSizing: 'border-box' }}
                                  placeholder="직접 입력"
                                />
                              </div>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: '1.2rem', color: '#999', marginTop: 8 }}>
                  * 진료: 진료, 전화문의: 전화로 예약/확인 필요, OFF: 휴진, -: 해당없음
                </p>

                {/* 버튼 */}
                <div className="adm_form_btns">
                  <button
                    type="button"
                    onClick={() => navigate('/admin/doctor')}
                    className="adm_btn_secondary"
                  >
                    취소
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="adm_btn_primary"
                  >
                    {loading ? '저장중...' : isEdit ? '수정 완료' : '등록'}
                  </button>
                </div>
              </div>
            </section>
          </form>
        </main>
      </div>
    </div>
  )
}
