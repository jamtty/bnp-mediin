import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

type Category1 = '' | 'JB00000000' | 'SC00000000' | 'CL00000000'

const CAT1_LABELS: Record<Category1, string> = {
  '': '전체',
  'JB00000000': '진료과',
  'SC00000000': '특수센터',
  'CL00000000': '클리닉',
}

// TODO: API 연동 — 상담분류1 선택 시 동적 로드
const CAT2_OPTIONS: Record<Category1, { value: string; label: string }[]> = {
  '': [],
  'JB00000000': [],
  'SC00000000': [],
  'CL00000000': [],
}

export default function ConsultationFormPage() {
  const navigate = useNavigate()

  const [cat1, setCat1] = useState<Category1>('')
  const [cat1Open, setCat1Open] = useState(false)
  const [cat2, setCat2] = useState('')
  const [cat2Open, setCat2Open] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isSecret, setIsSecret] = useState<'Y' | 'N'>('Y')
  const [fileCount, setFileCount] = useState(1)

  const cat2Options = CAT2_OPTIONS[cat1]

  const handleCat1Select = (value: Category1) => {
    setCat1(value)
    setCat1Open(false)
    setCat2('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: API 연동 — POST /api/consultation
    navigate('/community/consultation')
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
                        <div className={`select_area wd370${cat1Open ? ' open' : ''}`}>
                          <button
                            type="button"
                            className="btn_slc_active"
                            onClick={() => setCat1Open((v) => !v)}
                          >
                            {CAT1_LABELS[cat1]}
                          </button>
                          <div className="slc_list">
                            <ul>
                              {(Object.keys(CAT1_LABELS) as Category1[]).map((key) => (
                                <li key={key}>
                                  <button type="button" onClick={() => handleCat1Select(key)}>
                                    {CAT1_LABELS[key]}
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
                        <div className={`select_area wd370${cat2Open ? ' open' : ''}`}>
                          <button
                            type="button"
                            className="btn_slc_active"
                            onClick={() => setCat2Open((v) => !v)}
                            disabled={cat2Options.length === 0}
                          >
                            {cat2Options.find((o) => o.value === cat2)?.label ?? '전체'}
                          </button>
                          <div className="slc_list">
                            <ul>
                              {cat2Options.map((opt) => (
                                <li key={opt.value}>
                                  <button
                                    type="button"
                                    onClick={() => { setCat2(opt.value); setCat2Open(false) }}
                                  >
                                    {opt.label}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
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
                            onChange={(e) => setPassword(e.target.value)}
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
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                            required
                          />
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
                      <th>*첨부파일</th>
                      <td>
                        <div className="file_add_area">
                          <button
                            type="button"
                            className="btn_del"
                            onClick={() => setFileCount((n) => n + 1)}
                          >
                            추가
                          </button>
                        </div>
                        <div style={{ paddingTop: '5px' }}>
                          {Array.from({ length: fileCount }, (_, i) => (
                            <div className="formText" key={i} style={{ paddingTop: i > 0 ? '5px' : undefined }}>
                              <input type="file" name="attfile" placeholder="파일선택" title="첨부파일" />
                              <button
                                type="button"
                                className="btn_del"
                                style={{ height: '25px', borderRadius: '5px', padding: '0 10px', background: '#707070', fontSize: '15px', color: '#fff' }}
                                onClick={() => setFileCount((n) => Math.max(1, n - 1))}
                              >
                                삭제
                              </button>
                            </div>
                          ))}
                        </div>
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
              <div className="bbs_btn_area">
                <button type="button" className="btn btn_gray" onClick={handleCancel}>
                  <span>취소</span>
                </button>
                <button type="submit" className="btn btn_emerald">
                  <span>등록</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </SubPageLayout>
  )
}