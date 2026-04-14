import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'
import { createConsultation } from '../../api/consultation'

const JB_CD_GROUPS: { value: string; label: string; items: { value: string; label: string }[] }[] = [
  {
    value: 'JB00000000',
    label: '진료과',
    items: [
      { value: 'JB07000000', label: '내과' },
      { value: 'JB09000000', label: '심장내과' },
      { value: 'JB10000000', label: '신장내과' },
      { value: 'JB04000000', label: '신경과' },
      { value: 'JB06000000', label: '외과' },
      { value: 'JB01000000', label: '척추외과' },
      { value: 'JB14000000', label: '산부인과' },
      { value: 'JB02000000', label: '정형외과' },
      { value: 'JB05000000', label: '신경외과' },
      { value: 'JB13000000', label: '비뇨의학과' },
      { value: 'JB08000000', label: '중재시술클리닉' },
      { value: 'JB11000000', label: '마취통증의학과' },
      { value: 'JB15000000', label: '진단검사의학과' },
      { value: 'JB12000000', label: '영상의학과' },
      { value: 'JB16000000', label: '응급의학과' },
      { value: 'JB18000000', label: '병리과' },
    ],
  },
  {
    value: 'SC00000000',
    label: '특수센터',
    items: [
      { value: 'SC01000000', label: '심혈관센터' },
      { value: 'SC02000000', label: '척추비수술센터' },
      { value: 'SC03000000', label: '척추센터' },
      { value: 'SC04000000', label: '관절센터' },
    ],
  },
  {
    value: 'CL00000000',
    label: '클리닉',
    items: [
      { value: 'CL01000000', label: '내시경클리닉' },
      { value: 'CL02000000', label: '인공관절클리닉' },
      { value: 'CL03000000', label: '척추클리닉' },
      { value: 'CL04000000', label: '수지접합클리닉' },
      { value: 'CL05000000', label: '항문클리닉' },
      { value: 'CL06000000', label: '복강경클리닉' },
      { value: 'CL07000000', label: '성인병클리닉' },
      { value: 'CL08000000', label: '중재시술클리닉' },
      { value: 'CL09000000', label: '뇌신경질환클리닉' },
      { value: 'CL10000000', label: '요로결석클리닉' },
      { value: 'JB03000000', label: '신경통증클리닉' },
    ],
  },
]

export default function ConsultationFormPage() {
  const navigate = useNavigate()

  const [jbCd1, setJbCd1] = useState('')
  const [jbCd1Open, setJbCd1Open] = useState(false)
  const [jbCd2, setJbCd2] = useState('')
  const [jbCd2Open, setJbCd2Open] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isSecret, setIsSecret] = useState<'Y' | 'N'>('Y')
  type FileSlot = { id: number; file: File | null }
  const [fileSlots, setFileSlots] = useState<FileSlot[]>([])
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [pwError, setPwError] = useState('')

  const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB
  const MAX_FILE_COUNT = 3
  let slotIdCounter = 0

  const handleSlotAdd = () => {
    if (fileSlots.length >= MAX_FILE_COUNT) return
    setFileSlots((prev) => [...prev, { id: Date.now() + slotIdCounter++, file: null }])
  }

  const handleSlotFileChange = (slotId: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0] ?? null
    if (selected && selected.size > MAX_FILE_SIZE) {
      setError(`파일 크기가 10MB를 초과합니다: ${selected.name}`)
      e.target.value = ''
      return
    }
    setFileSlots((prev) => prev.map((s) => s.id === slotId ? { ...s, file: selected } : s))
  }

  const handleSlotRemove = (slotId: number) => {
    setFileSlots((prev) => prev.filter((s) => s.id !== slotId))
  }

  const selectedGroup = JB_CD_GROUPS.find((g) => g.value === jbCd1)
  const subItems = selectedGroup?.items ?? []
  const selectedSub = subItems.find((i) => i.value === jbCd2)

  const handleGroup = (groupValue: string) => {
    setJbCd1(groupValue)
    setJbCd1Open(false)
    setJbCd2('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setPwError('')

    if (!jbCd2) {
      setError('상담분류를 선택해주세요.')
      return
    }
    if (isSecret === 'Y' && !/^\d{4}$/.test(password)) {
      setPwError('비밀번호는 숫자 4자리로 입력해주세요.')
      return
    }
    if (isSecret === 'Y' && password !== passwordConfirm) {
      setPwError('비밀번호가 일치하지 않습니다.')
      return
    }

    setSubmitting(true)
    try {
      await createConsultation({
        jb_cd: jbCd2,
        title,
        content,
        name,
        phone,
        email,
        password: isSecret === 'Y' ? password : '',
        is_secret: isSecret,
        files: fileSlots.map((s) => s.file).filter((f): f is File => f !== null),
      })
      navigate('/community/consultation')
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : '등록에 실패했습니다.')
    } finally {
      setSubmitting(false)
    }
  }

  const handleCancel = () => {
    navigate('/community/consultation')
  }

  return (
    <SubPageLayout
      visualClass="vs8"
      visualTitle="고객마당"
      contentsClass="sub08"
      lnbItems={lnbItems}
    >
      <h3 className="cont_tit">건강상담 등록</h3>
      <div className="con_area">
        <div className="bbs_cont">
          <div className="bbs_write">
            <form onSubmit={handleSubmit}>
              <div className="v_table">
                <table>
                  <caption>건강상담 등록표</caption>
                  <colgroup>
                    <col style={{ width: '25%', maxWidth: '200px' }} />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>*상담분류1</th>
                      <td>
                        <div className={`select_area wd370${jbCd1Open ? ' open' : ''}`}>
                          <button
                            type="button"
                            className="btn_slc_active"
                            onClick={() => setJbCd1Open((v) => !v)}
                          >
                            {selectedGroup?.label ?? '분류 선택'}
                          </button>
                          <div className="slc_list">
                            <ul>
                              {JB_CD_GROUPS.map((g) => (
                                <li key={g.value}>
                                  <button type="button" onClick={() => handleGroup(g.value)}>
                                    {g.label}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>*상담분류2</th>
                      <td>
                        {subItems.length > 0 ? (
                          <div className={`select_area wd370${jbCd2Open ? ' open' : ''}`}>
                            <button
                              type="button"
                              className="btn_slc_active"
                              onClick={() => setJbCd2Open((v) => !v)}
                            >
                              {selectedSub?.label ?? '세부 분류 선택'}
                            </button>
                            <div className="slc_list">
                              <ul>
                                {subItems.map((item) => (
                                  <li key={item.value}>
                                    <button
                                      type="button"
                                      onClick={() => { setJbCd2(item.value); setJbCd2Open(false) }}
                                    >
                                      {item.label}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ) : (
                          <span className="t_gray">상담분류1을 먼저 선택해주세요.</span>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <th>*이름</th>
                      <td>
                        <input
                          type="text"
                          className="wt_ip wd370"
                          placeholder="이름을 입력해주세요."
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>*연락처</th>
                      <td>
                        <input
                          type="text"
                          className="wt_ip wd370"
                          placeholder="연락처를 입력해주세요."
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>이메일</th>
                      <td>
                        <input
                          type="email"
                          className="wt_ip wd370"
                          placeholder="이메일을 입력해주세요."
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </td>
                    </tr>
                    {isSecret === 'Y' && (
                      <tr>
                        <th>*비밀번호</th>
                        <td>
                          <input
                            type="text"
                            className="wt_ip wd370"
                            maxLength={4}
                            placeholder="비밀번호를 입력해주세요."
                            value={password}
                            onChange={(e) => { setPassword(e.target.value); setPwError('') }}
                            required
                          />
                          <span className="t_red">※ 비밀번호는 숫자 4자리 입니다.</span>
                        </td>
                      </tr>
                    )}
                    {isSecret === 'Y' && (
                      <tr>
                        <th>*비밀번호확인</th>
                        <td>
                          <input
                            type="password"
                            className="wt_ip wd370"
                            placeholder="비밀번호를 한번 더 입력해주세요."
                            value={passwordConfirm}
                            onChange={(e) => { setPasswordConfirm(e.target.value); setPwError('') }}
                            required
                          />
                          {pwError && <p className="pw_error" style={{ textAlign: 'left', marginTop: '6px' }}>{pwError}</p>}
                        </td>
                      </tr>
                    )}
                    <tr>
                      <th>*제목</th>
                      <td>
                        <input
                          type="text"
                          className="wt_ip wd100p"
                          placeholder="제목을 입력해주세요."
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>*내용</th>
                      <td>
                        <textarea
                          className="wt_textarea"
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>첨부파일</th>
                      <td>
                        <div className="file_add_area">
                          {fileSlots.length < MAX_FILE_COUNT && (
                            <button type="button" className="btn_del" onClick={handleSlotAdd}>
                              추가
                            </button>
                          )}
                        </div>
                        <div id="file_ul" style={{ paddingTop: '5px' }}>
                          {fileSlots.map((slot) => (
                            <div key={slot.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '5px' }}>
                              <label className="btn_del" style={{ cursor: 'pointer', flexShrink: 0 }}>
                                파일 선택
                                <input
                                  type="file"
                                  style={{ display: 'none' }}
                                  onChange={(e) => handleSlotFileChange(slot.id, e)}
                                />
                              </label>
                              <span style={{ flex: 1, fontSize: '13px', color: slot.file ? '#333' : '#999' }}>
                                {slot.file ? slot.file.name : '선택된 파일 없음'}
                              </span>
                              {slot.file && (
                                <span style={{ color: '#999', fontSize: '12px', flexShrink: 0 }}>
                                  ({(slot.file.size / 1024).toFixed(1)}KB)
                                </span>
                              )}
                              <button
                                type="button"
                                className="btn_del"
                                style={{ height: '25px', borderRadius: '5px', padding: '0 10px', background: '#707070', fontSize: '13px', color: '#fff', flexShrink: 0 }}
                                onClick={() => handleSlotRemove(slot.id)}
                              >
                                삭제
                              </button>
                            </div>
                          ))}
                        </div>
                        <p style={{ marginTop: '4px', fontSize: '12px', color: '#999' }}>※ 파일당 최대 10MB / 최대 {MAX_FILE_COUNT}개</p>
                      </td>
                    </tr>
                    <tr>
                      <th>*비밀글</th>
                      <td>
                        <div className="radio_wrap">
                          <div className="radio_area">
                            <input
                              type="radio"
                              id="ad_se_gubun_Y"
                              name="ad_se_gubun"
                              value="Y"
                              checked={isSecret === 'Y'}
                              onChange={() => setIsSecret('Y')}
                            />
                            <label htmlFor="ad_se_gubun_Y">사용</label>
                          </div>
                          <div className="radio_area">
                            <input
                              type="radio"
                              id="ad_se_gubun_N"
                              name="ad_se_gubun"
                              value="N"
                              checked={isSecret === 'N'}
                              onChange={() => setIsSecret('N')}
                            />
                            <label htmlFor="ad_se_gubun_N">미사용</label>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {error && <p className="t_red" style={{ textAlign: 'center', marginTop: '10px' }}>{error}</p>}
              <div className="bbs_btn_area">
                <button type="button" className="btn btn_gray" onClick={handleCancel}>
                  <span>취소</span>
                </button>
                <button type="submit" className="btn btn_emerald" disabled={submitting}>
                  <span>{submitting ? '등록 중...' : '등록'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </SubPageLayout>
  )
}