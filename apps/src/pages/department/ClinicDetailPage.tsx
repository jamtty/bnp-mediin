import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'
import { fetchDoctorsByDept, parseSchedule, type DoctorItem } from '../../api/doctor'
import thumb2211 from '../../assets/images/thumb2_2_1_1.png'
import thumb2212 from '../../assets/images/thumb2_2_1_2.png'
import thumb2213 from '../../assets/images/thumb2_2_1_3.png'
import thumb2214 from '../../assets/images/thumb2_2_1_4.png'
import thumb2215 from '../../assets/images/thumb2_2_1_5.png'
import thumb2216 from '../../assets/images/thumb2_2_1_6.png'
import thumb2217 from '../../assets/images/thumb2_2_1_7.png'
import thumb2218 from '../../assets/images/thumb2_2_1_8.png'
import thumb2219 from '../../assets/images/thumb2_2_1_9.png'
import thumb2231 from '../../assets/images/thumb2_2_3_1.png'
import thumb2232 from '../../assets/images/thumb2_2_3_2.png'
import thumb2233 from '../../assets/images/thumb2_2_3_3.png'
import thumb2241 from '../../assets/images/thumb2_2_4_1.png'
import thumb2242 from '../../assets/images/thumb2_2_4_2.png'
import thumb2251 from '../../assets/images/thumb2_2_5_1.png'
import thumb2252 from '../../assets/images/thumb2_2_5_2.png'
import thumb2253 from '../../assets/images/thumb2_2_5_3.png'
import thumb2254 from '../../assets/images/thumb2_2_5_4.png'
import thumb2255 from '../../assets/images/thumb2_2_5_5.png'
import thumb2256 from '../../assets/images/thumb2_2_5_6.png'
import thumb2257 from '../../assets/images/thumb2_2_5_7.png'
import thumb2258 from '../../assets/images/thumb2_2_5_8.png'
import thumb2259 from '../../assets/images/thumb2_2_5_9.png'
import thumb2261 from '../../assets/images/thumb2_2_6_1.png'
import thumb2262 from '../../assets/images/thumb2_2_6_2.png'
import thumb2263 from '../../assets/images/thumb2_2_6_3.png'
import thumb2264 from '../../assets/images/thumb2_2_6_4.png'
import thumb2265 from '../../assets/images/thumb2_2_6_5.png'
import thumb2266 from '../../assets/images/thumb2_2_6_6.png'
import thumb2267 from '../../assets/images/thumb2_2_6_7.png'
import thumb2271 from '../../assets/images/thumb2_2_7_1.png'
import thumb2272 from '../../assets/images/thumb2_2_7_2.png'
import thumb2273 from '../../assets/images/thumb2_2_7_3.png'
import thumb2274 from '../../assets/images/thumb2_2_7_4.png'
import thumb2275 from '../../assets/images/thumb2_2_7_5.png'
import thumb2276 from '../../assets/images/thumb2_2_7_6.png'
import thumb2281 from '../../assets/images/thumb2_2_8_1.png'
import thumb2282 from '../../assets/images/thumb2_2_8_2.png'
import thumb2283 from '../../assets/images/thumb2_2_8_3.png'
import thumb2284 from '../../assets/images/thumb2_2_8_4.png'
import thumb2285 from '../../assets/images/thumb2_2_8_5.png'
import thumb2291 from '../../assets/images/thumb2_2_9_1.png'
import thumb2292 from '../../assets/images/thumb2_2_9_2.png'
import thumb2293 from '../../assets/images/thumb2_2_9_3.png'
import thumb22101 from '../../assets/images/thumb2_2_10_1.png'
import thumb22102 from '../../assets/images/thumb2_2_10_2.png'
import thumb22103 from '../../assets/images/thumb2_2_10_3.png'
import thumb22104 from '../../assets/images/thumb2_2_10_4.png'
import thumb22105 from '../../assets/images/thumb2_2_10_5.png'
import thumb22106 from '../../assets/images/thumb2_2_10_6.png'
import thumb22107 from '../../assets/images/thumb2_2_10_7.png'
import thumb22108 from '../../assets/images/thumb2_2_10_8.png'
import thumb22109 from '../../assets/images/thumb2_2_10_9.png'
import thumb221010 from '../../assets/images/thumb2_2_10_10.png'
import thumb221011 from '../../assets/images/thumb2_2_10_11.png'

const SCHEDULE_DAY_LABELS = [
  { key: 'mon',   label: '월' },
  { key: 'tue',   label: '화' },
  { key: 'wed',   label: '수' },
  { key: 'thu',   label: '목' },
  { key: 'fri',   label: '금' },
  { key: 'sat13', label: '토(1,3주)' },
  { key: 'sat24', label: '토(2,4주)' },
  { key: 'sat5',  label: '토(5주)' },
]

function ScheduleModal({ doctor, onClose }: { doctor: DoctorItem; onClose: () => void }) {
  const schedule = parseSchedule(doctor.schedule_json)
  const specialty = doctor.doc_specialty?.split('\n').filter(Boolean) ?? []
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])
  return (
    <div className="pop show" style={{ zIndex: 100 }}>
      <div className="pop-wrap">
        <div className="pop-box" style={{ maxHeight: 'calc(100vh - 60px)', overflowY: 'auto' }}>
          <div className="ms_detail_cont">
            <div className="pop_tit">
              <strong>진료시간표</strong>
              <button type="button" className="btn-pop-close" onClick={onClose}>
                <span className="blind">닫기</span>
              </button>
            </div>
            <div className="pop_cont">
              <div className="ms_thumb">
                {doctor.img_url ? (
                  <img src={doctor.img_url} alt={doctor.doc_name} />
                ) : (
                  <div style={{ width: '100%', height: '100%', background: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: '#999', fontSize: 13 }}>사진없음</span>
                  </div>
                )}
              </div>
              <div className="ms_cont">
                <div className="ms_tit">
                  <strong className="name">{doctor.doc_name}{doctor.doc_title ? ` ${doctor.doc_title}` : ''}</strong>
                  {doctor.doc_major && <span className="major">{doctor.doc_major}</span>}
                </div>
                <dl>
                  {specialty.length > 0 && (
                    <>
                      <dt>진료분야</dt>
                      <dd><ul>{specialty.map((line, i) => <li key={i}>{line}</li>)}</ul></dd>
                    </>
                  )}
                  {schedule && (
                    <>
                      <dt>진료일정</dt>
                      <dd>
                        <div className="medical_schedule">
                          <table>
                            <caption>진료일정표</caption>
                            <thead>
                              <tr>
                                <th rowSpan={2}>구분</th>
                                {SCHEDULE_DAY_LABELS.slice(0, 5).map((d) => (
                                  <th key={d.key} rowSpan={2}>{d.label}</th>
                                ))}
                                <th colSpan={3}>토</th>
                              </tr>
                              <tr>
                                {SCHEDULE_DAY_LABELS.slice(5).map((d) => (
                                  <th key={d.key}>{d.label.replace('토(', '').replace(')', '')}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {(['am', 'pm'] as const).map((period) => (
                                <tr key={period}>
                                  <td>{period === 'am' ? '오전' : '오후'}</td>
                                  {SCHEDULE_DAY_LABELS.map((d) => (
                                    <td key={d.key}>{(schedule[period] as Record<string, string>)[d.key] || '-'}</td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <p style={{ marginTop: 12, fontSize: 14, color: '#888', lineHeight: '22px' }}>
                          * 병원사정에 따라 진료시간이 변경될 수 있습니다.<br />
                          * 정확한 진료 시간은 1566-1991로 문의 부탁 드립니다.
                        </p>
                      </dd>
                    </>
                  )}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pop_bg" onClick={onClose}></div>
    </div>
  )
}

function DoctorListSection({ doctors, loading, onShowSchedule }: { doctors: DoctorItem[]; loading: boolean; onShowSchedule: (d: DoctorItem) => void }) {
  if (loading) return <p style={{ padding: '20px 0', color: '#888' }}>의료진 정보를 불러오는 중입니다...</p>
  if (doctors.length === 0) return <p className="no_doctor_msg">등록된 의료진이 없습니다.</p>
  return (
    <div className="medical_staff_list">
      {doctors.map((doctor) => {
        const career = doctor.doc_career?.split('\n').filter(Boolean) ?? []
        return (
          <div key={doctor.id} className="medical_staff">
            <div className="ms_thumb">
              {doctor.img_url ? (
                <img src={doctor.img_url} alt={doctor.doc_name} />
              ) : (
                <div style={{ width: 150, height: 190, background: '#e8e8e8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#aaa', fontSize: 12 }}>사진없음</span>
                </div>
              )}
            </div>
            <div className="ms_cont">
              <div className="ms_tit">
                <strong className="name">{doctor.doc_name}{doctor.doc_title ? ` ${doctor.doc_title}` : ''}</strong>
                {doctor.doc_major && <span className="major">{doctor.doc_major}</span>}
              </div>
              {career.length > 0 && (
                <dl>
                  <dt>{doctor.career_label ?? '약력'}</dt>
                  <dd><ul>{career.map((line, i) => <li key={i}>{line}</li>)}</ul></dd>
                </dl>
              )}
              {doctor.schedule_json && (
                <button type="button" onClick={() => onShowSchedule(doctor)}>
                  <i className="ico_calendar"></i>
                  <span>진료시간표</span>
                </button>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

const clinicNames: Record<string, string> = {
  endoscopy:      '내시경클리닉',
  arthroplasty:   '인공관절클리닉',
  spine:          '척추클리닉',
  hand:           '수지접합클리닉',
  anus:           '항문클리닉',
  laparoscopy:    '복강경클리닉',
  'adult-disease':'성인병클리닉',
  intervention:   '중재시술/유방클리닉',
  neuro:          '뇌신경질환클리닉',
  urolithiasis:   '요로결석클리닉',
  painclinic:     '신경통증클리닉',
}

const clinicThirdItems = Object.entries(clinicNames).map(([code, name]) => ({
  label: name,
  to: `/department/clinic/${code}`,
}))

export default function ClinicDetailPage() {
  const { code } = useParams<{ code: string }>()
  const [inTab, setInTab] = useState('in_tab01')
  const [outerTab, setOuterTab] = useState('out_tab01')
  const [doctors, setDoctors] = useState<DoctorItem[]>([])
  const [loadingDocs, setLoadingDocs] = useState(false)
  const [scheduleDoctor, setScheduleDoctor] = useState<DoctorItem | null>(null)
  const clinicName = code ? clinicNames[code] : undefined

  useEffect(() => {
    setInTab('in_tab01')
    setOuterTab('out_tab01')
    setDoctors([])
  }, [code])

  useEffect(() => {
    if (!code) return
    setLoadingDocs(true)
    fetchDoctorsByDept(code)
      .then(setDoctors)
      .catch(() => {})
      .finally(() => setLoadingDocs(false))
  }, [code])

  if (!clinicName) {
    return (
      <SubPageLayout
        visualClass="vs2"
        visualTitle="진료과안내"
        contentsClass="sub02"
        lnbItems={lnbItems}
      >
        <h3 className="cont_tit">클리닉 소개</h3>
        <div className="con_area">
          <p>해당 클리닉 정보를 찾을 수 없습니다.</p>
          <Link to="/department/clinic">클리닉 목록으로 돌아가기</Link>
        </div>
      </SubPageLayout>
    )
  }

  return (
    <>
    <SubPageLayout
      visualClass="vs2"
      visualTitle="진료과안내"
      contentsClass="sub02"
      lnbItems={lnbItems}
      thirdLevelLabel={clinicName}
      thirdLevelItems={clinicThirdItems}
    >
      <h3 className="cont_tit">{clinicName}</h3>

        {/* ===== 내시경클리닉 ===== */}
        {code === 'endoscopy' && (
          <>
            <div className="con_area">
              <div className="tab_area">
                <button type="button" className={outerTab === 'out_tab01' ? 'btn_tab active_tab' : 'btn_tab'} onClick={() => setOuterTab('out_tab01')}><span>진료과 소개</span></button>
                <button type="button" className={outerTab === 'out_tab02' ? 'btn_tab active_tab' : 'btn_tab'} onClick={() => setOuterTab('out_tab02')}><span>의료진 소개</span></button>
              </div>
              <div className={outerTab === 'out_tab01' ? 'cont_area active_cont' : 'cont_area'}>
              <div className="emergency_sec first_sec">
                <p className="info_tit">내시경클리닉</p>
                <p className="info_disc">
                  근래 들어 식생활 등이 서구화 되면서 우리나라에도 대장 질환이 증가하고 있는 추세여서 대장검사에 대한 필요성과 관심이 증대되고 있습니다.
                </p>
              </div>
              <div className="emergency_sec">
                <div className="in_tab_area">
                  <button
                    type="button"
                    className={inTab === 'in_tab01' ? 'btn_in_tab1 active_tab' : 'btn_in_tab1'}
                    onClick={() => setInTab('in_tab01')}
                  ><span>위내시경</span></button>
                  <button
                    type="button"
                    className={inTab === 'in_tab02' ? 'btn_in_tab1 active_tab' : 'btn_in_tab1'}
                    onClick={() => setInTab('in_tab02')}
                  ><span>대장내시경</span></button>
                </div>
                <div className={inTab === 'in_tab01' ? 'in_cont_area1 active_cont' : 'in_cont_area1'}>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">위내시경 검사는 어떤 때 필요한가요?</p>
                    <ol className="num_list">
                      <li>지속적인 복통, 오심, 구토 연하곤란(삼키기 어려움), 속쓰림 등의 증상이 있을때</li>
                      <li>상부 위장관 출혈(토혈)이 있을때</li>
                      <li>식도나 위 수술 후 경과를 알아보기 위해서 내시경 검사중 조기위암이나 진행성 위암을 진단하기 위해서 조직검사도 합니다.</li>
                      <li>그밖에 내시경의 작은 관을 통하여 여러가지 미세한 기구를 넣어서 좁아진 부위를 넓혀주기도 하고, 용종을 제거하기도 하고, 삼킨 이물질을 꺼내기도 하며, 출혈을 멈추기도 합니다.</li>
                    </ol>
                    <div className="in_cont_imgarea">
                      <ul className="imgarea2_2_1_1">
                        <li>
                          <p className="img"><img src={thumb2211} alt="" /></p>
                          <p className="name">역류성 식도염</p>
                        </li>
                        <li>
                          <p className="img"><img src={thumb2212} alt="" /></p>
                          <p className="name">진행성 식도암</p>
                        </li>
                        <li>
                          <p className="img"><img src={thumb2213} alt="" /></p>
                          <p className="name">조기 위암</p>
                        </li>
                        <li>
                          <p className="img"><img src={thumb2214} alt="" /></p>
                          <p className="name">진행성 위암</p>
                        </li>
                        <li>
                          <p className="img"><img src={thumb2215} alt="" /></p>
                          <p className="name">위궤양</p>
                        </li>
                        <li>
                          <p className="img"><img src={thumb2216} alt="" /></p>
                          <p className="name">십이지장 궤양</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">한국인에게 위내시경 검사가 왜 중요한가요?</p>
                    <p className="in_cont_txt">
                      위암은 우리나라 사람이 가장 많이 걸리는 암으로 진행이 되어 발견하면 완치가 어렵기 때문에 조기진단이 매우 중요 합니다.<br /><br />
                      그러나 조기 위암은 대부분 증상이 없고 증상이 있다고 해도 일반적인 위염이나 위궤양에 의한 속쓰림 및 소화불량과 구별이 어려우며 위 내시경 검사를
                      통해서만 구별이 가능합니다. 검사 시기를 놓쳐 위암으로 진행 된다면 완치가 안되고 비용도 많이 들어갑니다. 전문가 에 의한 위내시경 검사는 수 mm
                      크기의 조기 위암도 정확히 진단할 수 있습니다. 따라서 위암의 발생률이 증가하는 40대 이후에는 증상의 유무에 상관없이 1년에 한번 위 내시경 검사를
                      받아야 하며 20~30대라도 위암의 가족력이 있거나 위장증상이 있으면 반드시 위내시경 검사를 1~2년 간격으로 정기적으로 받아야 합니다.<br /><br />
                      증상이 없고 위암의 가족력이 없는 20~30대도 위 내시경 검사를 1~2년 간격으로 받아야 하며, 내시경 검사 결과에 따른 각자의 위의 상태에 따라 정기적 검사 기간을 정해야 됩니다.
                    </p>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">검사 전 주의사항</p>
                    <div className="h_table">
                      <div className="m_scroll wd500">
                        <table>
                          <caption>내시경 검사 전 주의사항표</caption>
                          <colgroup>
                            <col style={{ width: '20%' }} />
                            <col />
                          </colgroup>
                          <thead>
                            <tr>
                              <th scope="col">구분</th>
                              <th scope="col">주의사항</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>검사 전날</td>
                              <td className="t_left">
                                저녁식사는 가볍게 드시고 저녁 10시 이후에는 일체의 음식을 금하셔야 합니다.
                              </td>
                            </tr>
                            <tr>
                              <td>검사 당일</td>
                              <td className="t_left">
                                검사 전까지 계속 금식하셔야 하며, 물이나 약도 금합니다. (단, 혈압약은 새벽 6시전 물 2컵과 함께 복용하십시오.)<br />
                                다음과 같은 질병이 있으신 분은 검사 전에 꼭 알려주시기 바랍니다.<br />
                                (심장질환, 녹내장, 전립선 비대증, 출혈 경향, 약물알레르기, 호흡장애, 임신 중이신 분)
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="info_alert"><span>추가검사를 하시게 될 경우, 의료보험카드와 소정의 금액이 필요하오니 지참하시기 바랍니다.</span></p>
                    </div>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">검사를 받으신 후</p>
                    <p className="in_cont_txt">검사가 끝난 후 후두에 답답하고 걸린 듯한 불편감이나 통증을 느끼실 수도 있으나 이는 일시적인 현상으로 곧 가라앉게 되며, 식사는 검사 후 1시간 정도 후에 하시면 됩니다.</p>
                    <ul className="dot_list3 mt30">
                      <li>조직검사를 하신 분께서는 당일은 자극적인 음식 및 술 등을 금하시고 흑색변이 나오거나 토혈을 하실 경우에는 곧바로 연락하시기 바랍니다.</li>
                      <li>내시경 결과는 다음 진료 예약시간에 담당 선생님께서 자세히 알려드립니다.</li>
                    </ul>
                  </div>
                </div>
                <div className={inTab === 'in_tab02' ? 'in_cont_area1 active_cont' : 'in_cont_area1'}>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">대장내시경 검사의 필요성</p>
                    <p className="in_cont_txt">
                      근래 들어 식생활 등이 서구화되면서 우리나라에서도 대장 질환이 증가하고 있는 추세여서 대장 검사에 대한 필요성과 관심이 증대되고 있습니다. 특히 최근
                      보건복지부 통계를 보면 위암과 자궁암은 감소하는 추세이지만 대장직장암은 약 15년 사이에 113%이상 증가 하여 우리나라에서 네 번째로 많이 발생하는
                      암이 되었습니다. 또한 서구에 많은 것으로 알려졌던 궤양성 대장염 등도 최근 들어 우리 나라에 많이 발생하고 있습니다. 하지만 아직도 내시경하면 보통
                      위내시경만을 얘기하는 것으로 알고 있을 정도로 대장 내시경에 대한 일반인들의 인식이 부족한 실정입니다.
                    </p>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">대장 내시경 검사가 필요하신분</p>
                    <ul className="dot_list3">
                      <li>일반적으로 40세 이상이면 대장암 검진을 위한 대장 내시경 검사가 필요합니다. 단, 가족중에 대장암이나 대장 용종이 있는분은 더 빠른 나이에 검사를 받아 보셔야 합니다.</li>
                      <li>배변 습관의 변화(변비, 설사)나, 항문(직장)출혈이 있는분</li>
                    </ul>
                    <div className="in_dash_box">
                      <dl>
                        <dt>기타</dt>
                        <dd>
                          <ul>
                            <li>A. 이유를 알 수 없는 복부증상</li>
                            <li>B. 변 잠혈 반응 검사의 양성</li>
                            <li>C. 바륨 관장 검사상 발견되 용종이나 이상의 확인</li>
                            <li>D. 염증성 장질환(궤양성 대장염, 크론씨 병)의 추적 검사</li>
                            <li>E. 대장암이나 대장 용종의 추적 검사 (1~3년 마다)</li>
                          </ul>
                        </dd>
                      </dl>
                    </div>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">대장 내시경 검사 안내</p>
                    <p className="in_cont_txt">
                      대장 내시경 검사는 항문을 통해 내시경을 삽입하여 전 대장직장과 소장의 마지막 부위인 말단 회장부까지 육안으로 확인할 수 있는 검사로 인체에 내시경
                      기구를 넣어 가장 멀리 볼 수 있는 검사입니다. 대장과 직장의 병변을 찾아내고 조기에 치료할 수 있는 가장 좋은 검사 및 치료 방법입니다. 메디인
                      의료진은 1500예 이상의 대장 내시경 경험을 가지고 있으며 환자 분들이 고통 없이 쉽게 검사를 받으실 수 있도록 모든 장비와 준비를 하고 있습니다.
                    </p>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">대장 내시경 검사는 왜 어려운가</p>
                    <p className="in_cont_txt">
                      대장 내시경은 기본적으로 내시경을 통해 장 속을 볼 수 있다는 것은 위내시경과 동일하지만 검사를 하는 의사와 환자의 입장에서 보면 완전히 다른
                      방법입니다. 그 이유는 위에 비해 대장은 1m 50c~2m로 훨씬 길고 파이프처럼 곧은 장기가 아니라 배속에 자유롭게 있어 위치를 쉽게 짐작하기 어려울
                      만큼 많은 휘어짐과 구부러짐이 있으며 기본적으로 대변이 차있는 곳이라 깨끗이 변을 세척해 내지 못하면 대장의 완전한 검사가 불가능하다는 점
                      때문입니다.<br /><br />
                      따라서 대장 내시경을 하기 위해 숙련된 내시경 술기와 적절한 장세척이 필수적입니다. 앞에서 얘기한 바와 같이 길고 굽은 대장을 곧게 피면서
                      아코디언처럼 접어서 들어가야만 환자의 통증을 최소화 할 수 있고 천공이나 출혈과 같은 합병증을 일으키지 않기 때문에 배우기가 어렵고 오랜 시간이
                      필요하여 내시경 전문의나 대장항문 전문의가 아니면 정확한 전체 대장 검사를 받기 어렵습니다.<br /><br />
                      또한 깨끗한 장세척이 필수적인데 최근엔 콜라이트와 콜크린이란 먹는 약을 주로 사용합니다. 두 가지는 각각 장단점이 있어서 콜라이트액은 보통 4L의
                      용량을 먹게 하여 환자들이 많은 양 때문에 불편해 하는 경우가 있으나 체내의 수분과 같은 농도의 등장액으로 신장이나 전해질 이상이 있는 경우에도
                      안전하게 사용할 수 있다는 장점이 있습니다. 그에 비해 콜크린액은 90ml정도로 적은 양에 일반 물을 먹게 하여 불편감은 덜 하지만 맛이 없고 신장이
                      안 좋은 환자나 노인에겐 전해질 불균형 등의 부작용이 생길 수 있다는 단점이 있습니다.
                    </p>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">대장 내시경을 해야 하는 경우</p>
                    <ol className="num_list">
                      <li>대장 조영술상에서 이상 소견이 있는경우</li>
                      <li>궤양성 대장염이나 크론씨병 같은 염증성 장질환의 진단, 치료의 평가, 합병증 발생여부 확인을 위해</li>
                      <li>일반인 및 고위험군에서 대장암의 감시 및 스크리닝을 위해</li>
                      <li>원인불명의 설사가 2~3개월이상 있는 경우</li>
                      <li>조기 대장암과 용종의 절제를 위해</li>
                      <li>급성 결장의 가성폐쇄나 장축염전증의 감압을 위해</li>
                      <li>협착부의 확장 및 이물질의 제거를 하는 경우 등 이고 드물게 심근경색증이나 복막염이 동반된 환자, 장 수술 직후의 환자에선 금기이다</li>
                    </ol>
                    <div className="in_cont_imgarea">
                      <ul className="imgarea2_2_1_2">
                        <li>
                          <p className="img"><img src={thumb2217} alt="" /></p>
                          <p className="name">유경성 용종</p>
                        </li>
                        <li>
                          <p className="img"><img src={thumb2218} alt="" /></p>
                          <p className="name">무경성 용종</p>
                        </li>
                        <li>
                          <p className="img"><img src={thumb2219} alt="" /></p>
                          <p className="name">올가미를 이용하여 용종을 절제하는 모습</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">과민성 대장 증후군</p>
                    <p className="in_cont_txt">
                      과민성 대장 증후군은 소화기관의 기능성 장애로 인해 발생하는 질환으로 만성적이며 반복적인 소화관 증상들 즉, 복통, 복부 팽만감, 배변 습관의
                      변화(변비, 설사 등)를 가져오며 배변 후에도 잔변감으로 인해 불편을 느끼게 합니다. 또한 대장 내시경 검사나 대장조영술에서도 이상 소견이 없는
                      것이 특징입니다. 미국의 통계를 보면 직장인들의 결근 사유 1위가 감기나 상기도 감염이고 2위가 과민성 대장증후군으로 널리 있는 질환이며 미국에선 전
                      인구의 1/4이 정도에 따라 차이는 있지만 과민성 대장증후군을 있다고 합니다. 과민성 대장 증후군은 여러 가지 다른 이름으로도 불리 우는데 신경성
                      대장염, 긴장성 대장염, 점액성 대장염 등이 그것입니다. 그러나 궤양성 대장염이나 크론씨 병과 같은 만성 염증성 장질환과 혼동하여서는 안됩니다.
                      과민성 대장 증후군은 엄밀한 의미의 질병은 아니며 감기처럼 전염되지도 않고 암과 같은 큰 병으로 악화되는 일도 없습니다.
                    </p>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">과민성 대장 증후군의 원인</p>
                    <p className="in_cont_txt">
                      기본적인 원인은 장 기능 특히 장 근육의 수축 이상입니다. 장의 외벽을 구성하는 근육들은 대장 안에 음식물의 찌꺼기가 들어오면 자동적으로 여러 운동에
                      의해 항문까지 이동시키고 배변을 하도록 합니다. 하지만 과민성 대장증후군 환자에서는 정상적인 대장의 수축과 이완 운동이 일어나지 않고 너무 강하거나
                      약하게 하며 너무 빠르거나 느리게 되어 여러 증상들이 나타나게 됩니다. 대장에 왜 이런 기능 이상이 오는가는 아직 정확히 밝혀진 것은 없습니다. 대장의
                      운동 생리학을 아직 정확히 모르기 때문입니다. 하지만 최근 우리나라에서도 서구처럼 이 질환이 증가되고 있는 추세인데 스트레스가 관련이 있다고 알려져
                      있고 운동 부족이나 불규칙한 식사, 패스트푸드와 같은 가공 식품의 범람도 원인이라고 알려져 있습니다.
                    </p>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">과민성 대장 증후군의 진단</p>
                    <p className="in_cont_txt">
                      다른 기질적인 원인이 없다는 결과로 진단을 하는 질환이므로 실제 어떤 검사를 하여야 되는가는 논란이 있으나 나이가 많거나 다른 질환이 의심되는 경우에
                      적절한 검사를 시행하여 이상 유무를 확인해야 합니다. 대장내시경을 시행하여 대장암이나 대장의 기질적인 질환이 없다는 것을 확인하고 치료를 시작합니다.
                    </p>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">과민성 대장 증후군의 치료</p>
                    <p className="in_cont_txt">
                      다른 기질적인 원인이 없다는 결과로 진단을 하는 질환이므로 실제 어떤 검사를 하여야 되는가는 논란이 있으나 나이가 많거나 다른 질환이 의심되는 경우에
                      적절한 검사를 시행하여 이상 유무를 확인해야 합니다. 대장내시경을 시행하여 대장암이나 대장의 기질적인 질환이 없다는 것을 확인하고 치료를 시작합니다.
                    </p>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">과민성 대장 증후군의 예방</p>
                    <p className="in_cont_txt">
                      실제 정확한 예방책은 없는 것으로 알려져 있습니다. 하지만 적당한 수면과 규칙적인 운동을 하고 여가 생활로 스트레스를 적절히 해소하며 자극적이거나
                      가공 식품을 피하는 것이 좋다고 알려져 있습니다. 또한 이런 환자들에겐 각각 자신에 맞지 않는 음식이 있는 경우가 많아, 개개인에 따라 맞는 음식을
                      적절히 조절하는 것이 중요하다 하겠습니다.
                    </p>
                  </div>
                </div>
              </div>
              </div>
              <div className={outerTab === 'out_tab02' ? 'cont_area active_cont' : 'cont_area'}>
                <DoctorListSection doctors={doctors} loading={loadingDocs} onShowSchedule={setScheduleDoctor} />
              </div>
            </div>
          </>
        )}

        {/* ===== 인공관절클리닉 ===== */}
        {code === 'arthroplasty' && (
          <>
            <div className="con_area">
              <div className="tab_area">
                <button type="button" className={outerTab === 'out_tab01' ? 'btn_tab active_tab' : 'btn_tab'} onClick={() => setOuterTab('out_tab01')}><span>진료과 소개</span></button>
                <button type="button" className={outerTab === 'out_tab02' ? 'btn_tab active_tab' : 'btn_tab'} onClick={() => setOuterTab('out_tab02')}><span>의료진 소개</span></button>
              </div>
              <div className={outerTab === 'out_tab01' ? 'cont_area active_cont' : 'cont_area'}>
              <div className="emergency_sec first_sec">
                <p className="info_tit">인공관절클리닉</p>
                <p className="info_disc">
                  인공관절이란 관절의 통증이나 관절운동 제한, 그 외에 걸음걸이가 힘들 때 이러한 관절들을 제거하고 인공제질로 된 관절로 바꾸어 주는 수술입니다.
                </p>
              </div>
              </div>
              <div className={outerTab === 'out_tab02' ? 'cont_area active_cont' : 'cont_area'}>
                <DoctorListSection doctors={doctors} loading={loadingDocs} onShowSchedule={setScheduleDoctor} />
              </div>
            </div>
          </>
        )}

        {/* ===== 척추클리닉 ===== */}
        {code === 'spine' && (
          <>
            <div className="con_area">
              <div className="tab_area">
                <button type="button" className={outerTab === 'out_tab01' ? 'btn_tab active_tab' : 'btn_tab'} onClick={() => setOuterTab('out_tab01')}><span>진료과 소개</span></button>
                <button type="button" className={outerTab === 'out_tab02' ? 'btn_tab active_tab' : 'btn_tab'} onClick={() => setOuterTab('out_tab02')}><span>의료진 소개</span></button>
              </div>
              <div className={outerTab === 'out_tab01' ? 'cont_area active_cont' : 'cont_area'}>
              <div className="emergency_sec first_sec">
                <p className="info_tit">척추클리닉</p>
                <p className="info_disc">
                  인간은 직립보행이라는 특성을 가지고 있기 때문에 모든 일상생활에서 척추에 많은 하중과 스트레스가 가해지게 되고, 결과적으로 척추에 구조적인 이상이 발생하기 쉽게
                  되어있습니다.
                </p>
              </div>
              <div className="emergency_sec">
                <div className="in_cont_sec">
                  <p className="in_cont_tit">현미경 레이저 수술</p>
                  <p className="in_cont_txt">
                    1990년 미국의 마가나 박사가 개발한 컴퓨터화된 레이저(CO2)를 현미경에 부착해서 15mm정도 피부절개를 통해 완벽한 수술을 한다.
                  </p>
                  <div className="in_cont_flex">
                    <div className="h_table">
                      <table>
                        <caption>현미경 레이저 수술 안내표</caption>
                        <thead>
                          <tr>
                            <th scope="col">입원</th>
                            <th scope="col">수술</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>2박3일정도</td>
                            <td>성공률 95%정도</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="flex_in_img"><img src={thumb2231} alt="" /></div>
                  </div>
                </div>
              </div>
              <div className="emergency_sec">
                <div className="in_cont_sec">
                  <p className="in_cont_tit">재수술 전문</p>
                  <p className="in_cont_txt">
                    수술에 실패한 환자들에게 희망을 주는 수술이다.<br />
                    재발한 디스크병이나 신경유착을 현미경과 내시경 그리고 레이저로 깨끗이 정리하고 인공디스크로 불안정한 허리를 고정한다.
                  </p>
                  <div className="in_cont_flex">
                    <div className="h_table">
                      <table>
                        <caption>재수술 안내표</caption>
                        <thead>
                          <tr>
                            <th scope="col">입원</th>
                            <th scope="col">수술</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>2박3일정도</td>
                            <td>성공률 95%정도</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="flex_in_img"><img src={thumb2232} alt="" /></div>
                  </div>
                </div>
              </div>
              <div className="emergency_sec">
                <div className="in_cont_sec">
                  <div className="in_cont_flex">
                    <div className="flex_in_left">
                      <p className="in_cont_tit">I.D.E.T</p>
                      <p className="in_cont_txt">
                        디스크 내 고주파 열치료술(I.D.E.T)<br />
                        - 디스크의 손상과 변성 과정에서 발생하는 만성요통을 특수한 주사바늘을 이용하여 절개수술을 하지 않고 고주파기계를 이용한 열주사로 치료한다.
                      </p>
                    </div>
                    <div className="flex_in_img"><img src={thumb2233} alt="" /></div>
                  </div>
                </div>
              </div>
              <div className="emergency_sec">
                <div className="in_cont_sec">
                  <p className="in_cont_tit">증상과 치료</p>
                  <div className="in_cont_223">
                    <div className="cont_item">
                      <i className="ico_cont_223_1"></i>
                      <div className="in_cont_area">
                        <dl>
                          <dt>만성요통</dt>
                          <dd>
                            특별히 척추뼈나 디스크 관절의 이상이 없이 통증이 오는 경우로 방사선검사나 컴퓨터 단층촬영 그리고 자기공명검사(MRI)에서도
                            특별한 병이 없는것처럼 보인다.<br />
                            척추기능검사를 하면 척추근력의 저하와 함께 유연성 부족이 나타난다. 수술없이 신경통증주사나 메덱스
                            재활운동요법으로 치료하면 좋은결과를 갖는다.
                          </dd>
                        </dl>
                      </div>
                    </div>
                    <div className="cont_item">
                      <i className="ico_cont_223_2"></i>
                      <div className="in_cont_area">
                        <dl>
                          <dt>퇴행성관절염</dt>
                          <dd>
                            관절염은 나이들어 생기는 병이라고 생각하고 방치하기 쉽습니다. 치료를 미룰경우 관절염을 악화시키고 운동제한은 전신상태 및 동반된
                            고혈압, 당뇨, 고지혈증, 골다공증 등 성인병을 악화시킬 수 있습니다.<br />
                            관절염 진행정도를 정확히 진단받고 각 시기에 맞는 치료로 관절염의 진행을 늦춰야 합니다. 치료로는 약물 및 물리치료, 내시경
                            수술, 인공관절 수술이 있습니다.
                          </dd>
                        </dl>
                      </div>
                    </div>
                    <div className="cont_item">
                      <i className="ico_cont_223_3"></i>
                      <div className="in_cont_area">
                        <dl>
                          <dt>오십견</dt>
                          <dd>
                            흔히 어깨가 아프고 굳어지면 오십견이라고 합니다. 하지만 약을 먹고 물리치료를 받아도 증상 호전이 되지 않을 경우, 원인에 대한
                            정확한 진단을 받아야 합니다.<br />
                            왜냐하면 어깨 관절내 손상이 동반된 경우 이를 치료하지 않고는 증상 호전을 기대할 수 없기 때문입니다. 회전근개 손상, 석회화
                            건염, 관절순 파염 등은 수술적 치료를 요합니다.
                          </dd>
                        </dl>
                      </div>
                    </div>
                    <div className="cont_item">
                      <i className="ico_cont_223_4"></i>
                      <div className="in_cont_area">
                        <dl>
                          <dt>요추간판 탈출증(요추디스크병)</dt>
                          <dd>
                            엉덩이(엉치)와 다리가 당기는 것이 증상의 특징이다. 심한 경우 다리를 절룩거리거나 허리를 굽히기 힘들어진다.<br />
                            디스크병의 유형중 중앙 탈출형이나 원외측 탈출형의 경우 걷기가 힘들어지는 협착증의 증상을 보이기도 한다. 대개 내시경이나 현미경
                            레이저 수술로 치료된다.
                          </dd>
                        </dl>
                        <div className="h_table">
                          <table>
                            <caption>요추간판 탈출증(요추디스크병) 안내표</caption>
                            <thead>
                              <tr>
                                <th scope="col">입원</th>
                                <th scope="col">수술</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1박2일~2박3일</td>
                                <td>성공률 95%</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="cont_item">
                      <i className="ico_cont_223_5"></i>
                      <div className="in_cont_area">
                        <dl>
                          <dt>경추간판 탈출증(목디스크병)</dt>
                          <dd>
                            목덜미와 어깨쭉지(날개뼈)가 아프고 심하면 손가락까지 저리고 당기며 잠을 못이룰 경우도 생긴다.<br />
                            고개를 뒤로 젖히기 힘들며, 심한 경우 상,하지의 마비도 초래된다. 현미경레이저수술과 목 인공디스크 수술을 병행하여 수술한다.
                          </dd>
                        </dl>
                        <div className="h_table">
                          <table>
                            <caption>경추간판 탈출증(목디스크병) 안내표</caption>
                            <thead>
                              <tr>
                                <th scope="col">입원</th>
                                <th scope="col">수술</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1박2일~2박3일</td>
                                <td>성공률 95%</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="cont_item">
                      <i className="ico_cont_223_6"></i>
                      <div className="in_cont_area">
                        <dl>
                          <dt>척추관 협착증</dt>
                          <dd>
                            허리보다는 양쪽 또는 한쪽다리의 저림증과, 보행시나 장시간 서 있으면 다리에 피가 몰린 것 처럼 남의 다리같은 느낌과 함께 심하면
                            터질 것 같은 통증이 온다.<br />
                            심해지면 감각마비와 같은 증상이 오며, 누워있거나 앉아 있으면 거짓말같이 통증이 사라진다. 현미경 레이저 수술을 한다.
                          </dd>
                        </dl>
                        <div className="h_table">
                          <table>
                            <caption>척추관 협착증 안내표</caption>
                            <thead>
                              <tr>
                                <th scope="col">입원</th>
                                <th scope="col">수술</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1박2일~2박3일</td>
                                <td>성공률 95%</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="cont_item">
                      <i className="ico_cont_223_7"></i>
                      <div className="in_cont_area">
                        <dl>
                          <dt>척추분리증(협부결손증)</dt>
                          <dd>
                            척추뼈의 강아지 목모양으로 생긴 부위가 금이가서 척추뼈가 서로 분리되어 있는 상태인데 척추가 불안정해져서 만성적인 허리통증과
                            금이간 뼈가 신경을 자극하므로 좌골 신경통을 일으키게 된다. 척추뼈를 고정하는 금속기구 고정수술을 등(척추)의 후방에서 하며, 때로는 메덱스 운동요법으로
                            수술 없이도 잘 치료된다.
                          </dd>
                        </dl>
                        <div className="h_table">
                          <table>
                            <caption>척추분리증(협부결손증) 안내표</caption>
                            <thead>
                              <tr>
                                <th scope="col">입원</th>
                                <th scope="col">수술</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1주</td>
                                <td>성공률 95%</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="cont_item">
                      <i className="ico_cont_223_8"></i>
                      <div className="in_cont_area">
                        <dl>
                          <dt>척추전방 전위증</dt>
                          <dd>
                            척추뼈의 관절 부위가 헐거워져서 허리뼈가 서로 어긋나는 병으로 반드시 신경을 압박하게 된다. 경증의 경우에는 허리통증만 있지만
                            점차 진행되면서 엉덩이와 다리까지 뻗치는 통증이 오게된다. 보행시 특히 다리가 심하게 저리며 500m도 걷기 힘들 정도면 반드시 수술이 필요하다.
                            인공디스크를 복부나 등쪽에서 삽입해서 허리를 단단히 고정하는 인공디스크(케이지)수술이 선택된다.
                          </dd>
                        </dl>
                        <div className="h_table">
                          <table>
                            <caption>척추전방 전위증 안내표</caption>
                            <thead>
                              <tr>
                                <th scope="col">입원</th>
                                <th scope="col">수술</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1주</td>
                                <td>성공률 95%</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="cont_item">
                      <i className="ico_cont_223_9"></i>
                      <div className="in_cont_area">
                        <dl>
                          <dt>후종인대 골화증</dt>
                          <dd>
                            목뼈의 인대가 뼈로 변해서 목신경을 누르는 무서운 병이다.<br />
                            초기 증상은 뒷목이 뻣뻣하고 어깨와 팔이 저린 증상을 보이지만 점차 진행되면 상지의 감각마비와 하지의 무력증, 심한 경우에는
                            마비로 인해 수저질과 보행이 힘들게 된다.<br />
                            계단을 내려 갈 때 휘청거릴 정도면 반드시 수술해야 된다. 현미경레이저 수술과 인공디스크 또는 자가골편 이식수술을 병행해서
                            하는데, 척추전문병원에서의 수술이 요구된다.
                          </dd>
                        </dl>
                        <div className="h_table">
                          <table>
                            <caption>후종인대 골화증 안내표</caption>
                            <thead>
                              <tr>
                                <th scope="col">입원</th>
                                <th scope="col">수술</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>3박4일~4박5일</td>
                                <td>성공률 70~90%</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="cont_item">
                      <i className="ico_cont_223_10"></i>
                      <div className="in_cont_area">
                        <dl>
                          <dt>퇴행성 척추증(디스크 부족증)</dt>
                          <dd>
                            척추뼈와 뼈사이의 디스크가 삭아 없어짐으로 디스크의 쿠션역할이 사라져서 만성적인 심한 요통과 둥부통이 생기며 걸을 때 허리가
                            앞으로 굽어지기도 한다.<br />
                            부엌에서 식사준비 하기도 힘들 정도이며 오히려 걸으면 통증이 덜하기도 한다.<br />
                            부족한 디스크대신 인공디스크 뼈융합수술을 복강경으로 하거나 등쪽에서 한다. 경증인 경우에는 물리치료나 메덱스 재활치료로 좋은
                            효과를 본다.
                          </dd>
                        </dl>
                        <div className="h_table">
                          <table>
                            <caption>퇴행성 척추증(디스크 부족증) 안내표</caption>
                            <thead>
                              <tr>
                                <th scope="col">입원</th>
                                <th scope="col">수술</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>4박5일</td>
                                <td>성공률 93%</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="cont_item">
                      <i className="ico_cont_223_11"></i>
                      <div className="in_cont_area">
                        <dl>
                          <dt>수술실패 증후군</dt>
                          <dd>
                            수술 후 지속적으로 다리가 당기거나 수술 후 일정기간 회복되다가 재차 아파지는 경우를 말하며, 다리가 저리거나 일상생활이 힘든
                            경우도 있다.<br />
                            심한 경우 재수술이 시도 되나 신경주사나 메덱스 재활요법으로도 치료된다.
                          </dd>
                        </dl>
                      </div>
                    </div>
                    <div className="cont_item">
                      <i className="ico_cont_223_12"></i>
                      <div className="in_cont_area">
                        <dl>
                          <dt>척추 만곡증(측만증)</dt>
                          <dd>
                            청소년에 흔한 병으로 휘어져서 몸이 뒤틀린 현상을 보이며 만성적인 요통과 흉통을 겪게 된다. 외관상 표시가 나기도 하며, 나이가
                            들게 되면서 척추뼈의 퇴행이 빨리오게 된다.<br />
                            메덱스 치료와 측만증 교정 운동 프로그램으로 훌륭히 치료된다.
                          </dd>
                        </dl>
                      </div>
                    </div>
                    <div className="cont_item">
                      <i className="ico_cont_223_13"></i>
                      <div className="in_cont_area">
                        <dl>
                          <dt>골다공증, 척추 압박골절</dt>
                          <dd>
                            척추뼈의 칼슘이 부족해서 노인들은 쉽게 척추뼈가 압박되는 골절을 겪게 되어 허리가 굽어지고 갈비뼈가 쑤시게 된다.<br />
                            부분마취로 가는 주삿바늘을 이용하여 금이 가고 짖눌린 뼈를 복원시키는 경피적 척추골 성형술이다.
                          </dd>
                        </dl>
                        <div className="h_table">
                          <table>
                            <caption>골다공증, 척추 압박골절 안내표</caption>
                            <thead>
                              <tr>
                                <th scope="col">입원</th>
                                <th scope="col">수술</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1박2일</td>
                                <td>성공률 90%</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div className={outerTab === 'out_tab02' ? 'cont_area active_cont' : 'cont_area'}>
                <DoctorListSection doctors={doctors} loading={loadingDocs} onShowSchedule={setScheduleDoctor} />
              </div>
            </div>
          </>
        )}

        {/* ===== 수지접합클리닉 ===== */}
        {code === 'hand' && (
          <>
            <div className="con_area">
              <div className="tab_area">
                <button type="button" className={outerTab === 'out_tab01' ? 'btn_tab active_tab' : 'btn_tab'} onClick={() => setOuterTab('out_tab01')}><span>진료과 소개</span></button>
                <button type="button" className={outerTab === 'out_tab02' ? 'btn_tab active_tab' : 'btn_tab'} onClick={() => setOuterTab('out_tab02')}><span>의료진 소개</span></button>
              </div>
              <div className={outerTab === 'out_tab01' ? 'cont_area active_cont' : 'cont_area'}>
              <div className="emergency_sec first_sec">
                <p className="info_tit">수지접합클리닉</p>
                <p className="info_disc">
                  육안으로 보이지 않아 수술하기 어려운 부위를 미세현미경의 도움 하에 절단된 수족지 등의 미세한혈관, 신경 등을 재건, 봉합해주거나 이를 이용하여 여러가지 복합조직을
                  이식하는 수술을 말합니다.
                </p>
              </div>
              <div className="emergency_sec">
                <div className="in_cont_sec">
                  <p className="in_cont_tit">수지접합 수술이란?</p>
                  <p className="in_cont_txt">
                    육안으로는 보이지 않아 수술하기 어려운 부위를 미세현미경의 도움 하에 절단된 수족지 등의 미세한 혈관, 신경 등을 재건, 봉합해주거나 이를 이용하여 여러가지
                    복합조직(뼈,피부,지방,근육,힘줄)을 이식하는 수술을 말합니다.<br />
                    완벽한 처치 및 수술은 미용뿐만 아니라 본래의 기능 을 복원할 수 있습니다 특히 우리 몸에서 가장 중요한 감각 기관 중 하나인 손(수부)은 섬세하고 다양한
                    움직임을 하는 기관으로서 그 해부와 생리도 매우 복잡하며 구조물(신경, 혈관, 건등) 자체도 매우 작기 때문에 수지의 절단 , 접합이나 연부조직 결손의 재건이
                    필요한 경우 미세 현미경을 통한 수술이 필수적입니다
                  </p>
                </div>
                <div className="in_cont_sec">
                  <p className="in_cont_tit">수지접합 수술 목적 및 종류</p>
                  <ol className="num_list">
                    <li>손의 신경 / 힘줄 / 뼈의 절단된 부분을 재접합 치료</li>
                    <li>재활치료를 하며 선천적 손의 기형 재건</li>
                    <li>수근과 증후군의 개선 및 예방, 손저림 수부종양질환등의 수술치료</li>
                  </ol>
                  <div className="v_table2 mt30">
                    <table>
                      <caption>수지접합 수술 목적 및 종류 안내표</caption>
                      <colgroup>
                        <col style={{ width: '20%' }} />
                        <col />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th>미세현미경수술</th>
                          <td>미세현미경 수술은 지름 1mm 이하의 아주 작은 혈관 및 신경을 10배~12.5배로 확대하여 볼 수 있는 현미경을 이용하여 절단된
                            수족지를 접합하는 수술, 성공률 평균 80% 정도이며, 깨끗이 절단된 상태일 경우 성공률은 95% 이상입니다.</td>
                        </tr>
                        <tr>
                          <th>손가락 재건술</th>
                          <td>손상, 이탈된 손가락 부분의 기능 회복 뿐만 아니라 미용재건까지 시술하는 치료방법입니다.</td>
                        </tr>
                        <tr>
                          <th>결손부위 재건술</th>
                          <td>
                            결손된 연부조직을 피부이식 / 현미경 피판술 / 조직확장술 등으로 복원시켜주는 기술입니다.<br />
                            메디인병원은 한층 더 높은 의료진과 기술을 갖추었으며, 응급수술을 위한 24시간 수술대기 시스템을 운영하고 있습니다.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="in_cont_sec">
                  <p className="in_cont_tit">절단 사고 시 응급처치 요령</p>
                  <ol className="num_list">
                    <li>절단부위는 미세한 조각이라도 모두 모아 가능하면 빨리 냉장상태(약4˚C)로 보관, 절단부위의 오염이 심하면 식염수로 세척 후 깨끗한 천, 기제로 싼 뒤
                      깨끗한 큰 타월로 두른 후 비닐봉지에 밀봉.</li>
                    <li>비닐봉지는 얼음과 물을 1:1의 비율로 용기에 담아 온도를 유지한 후 환자와 함께 병원으로 가져갑니다. 만약 밀봉이 잘못돼 얼음물에 절단부위가 노출돼
                      젖게 되면 재접합이 어려움.</li>
                    <li>출혈을 예방하기 위해 부위를 압박 붕대로 지혈 후 절단 부위를 높이 올린다. (지혈제나 지혈대는 조직, 신경, 혈관이 파괴돼 오히려 재접합 수술을
                      방해하기 때문에 상처에 사용하지 않는 것이 좋습니다.)</li>
                    <li>일반병원에서 응급조치를 받은 후에는 빠른 시간 안에 접합수술이 가능한 전문병원으로 환자와 함께 이송.</li>
                  </ol>
                </div>
                <div className="in_cont_sec">
                  <p className="in_cont_tit">완전 절단 시</p>
                  <ol className="num_list">
                    <li>절단된 부위를 생리식염수를 가볍게 씻는다. (묻은 흙을 털어내는 정도로 하면 된다.)</li>
                    <li>소독된 거즈에 생리식염수를 묻혀 절단된 손, 손가락을 싼다.</li>
                    <li>비닐봉지를 고무줄로 밀봉한다. (물이 들어가지 않도록 한다.)</li>
                    <li>얼음상자에 넣는다.</li>
                    <li>이송 중 얼음상자에 넣은 절단부위가 얼지 않게 한다. (냉동은 절대 금물)</li>
                  </ol>
                </div>
                <div className="in_cont_sec">
                  <p className="in_cont_tit">부분 절단 시</p>
                  <ol className="num_list">
                    <li>절단된 몸쪽 부위는 압박붕대나 고무줄 등으로 묶어 지혈한다.</li>
                    <li>모든 것이 여의치 않으면 절단부위를 깨끗한 헝겊으로만 싼다.</li>
                    <li>병원에 미리 전화를 하고 오시면 빨리 수술하실 수 있습니다.</li>
                  </ol>
                  <div className="in_cont_imgarea">
                    <ul className="imgarea2_2_4">
                      <li>
                        <p className="img"><img src={thumb2241} alt="" /></p>
                        <p className="name">미세 재건수술 장면</p>
                      </li>
                      <li>
                        <p className="img"><img src={thumb2242} alt="" /></p>
                        <p className="name">미세수술을 위한 수술 현미경</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              </div>
              <div className={outerTab === 'out_tab02' ? 'cont_area active_cont' : 'cont_area'}>
                <DoctorListSection doctors={doctors} loading={loadingDocs} onShowSchedule={setScheduleDoctor} />
              </div>
            </div>
          </>
        )}

        {/* ===== 항문클리닉 ===== */}
        {code === 'anus' && (
          <>
            <div className="con_area">
              <div className="tab_area">
                <button type="button" className={outerTab === 'out_tab01' ? 'btn_tab active_tab' : 'btn_tab'} onClick={() => setOuterTab('out_tab01')}><span>진료과 소개</span></button>
                <button type="button" className={outerTab === 'out_tab02' ? 'btn_tab active_tab' : 'btn_tab'} onClick={() => setOuterTab('out_tab02')}><span>의료진 소개</span></button>
              </div>
              <div className={outerTab === 'out_tab01' ? 'cont_area active_cont' : 'cont_area'}>
              <div className="emergency_sec first_sec">
                <p className="info_tit">항문클리닉</p>
                <p className="info_disc">
                  흔히 항문 및 직장의 정맥류(핏줄덩어리)라고 설명되는 치핵은 항문 및 하부직장과 그 주위에서 돌출된 혈관 덩어리 입니다.
                </p>
              </div>
              <div className="emergency_sec">
                <div className="in_cont_sec">
                  <p className="in_cont_tit">치핵(치질)이란?</p>
                  <p className="in_cont_txt">
                    흔히 항문 및 직장의 정맥류(핏줄덩어리)라고 설명되는 치핵은 항문 및 하부직장과 그 주위에서 돌출된 혈관 덩어리 입니다.
                    치핵은 위치에 따라 내치핵(암치질)과 외치핵(수치질)의 두 형태가 있습니다. <br />
                    외치핵은 항문 가까이에서 발생하며 매우 민감한 피부로 덮여 있습니다. 혈전(핏덩어리)이 항문 가까이에 생기게 되면, 그곳이 부어오르면서 심하게 아픕니다.
                    외치핵은 단단한 덩어리처럼 만져지며 터지면 피가 납니다. <br />
                    내치핵은 항문관에서 발생합니다. 통증이 없이 피가 나거나, 돌출되는 것이 가장 흔한 증상입니다.
                  </p>
                  <div className="in_cont_imgarea">
                    <ul className="imgarea2_2_5_1">
                      <li>
                        <p className="img"><img src={thumb2251} alt="" /></p>
                        <p className="name">내치핵</p>
                      </li>
                      <li>
                        <p className="img"><img src={thumb2252} alt="" /></p>
                        <p className="name">외치핵</p>
                      </li>
                      <li>
                        <p className="img"><img src={thumb2253} alt="" /></p>
                        <p className="name">혼합치핵</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="in_cont_sec">
                  <p className="in_cont_tit">치핵의 원인</p>
                  <p className="in_cont_txt">
                    정확한 원인은 아직 모르고 있습니다. 그러나 사람의 직립자세가 직장 정맥에 상당한 압력을 주게되어 직장정맥을 부풀게 합니다.<br />
                    다른 원인으로는 다음과 같은 것들이 있습니다.
                  </p>
                  <ul className="dot_list3 mt15">
                    <li>목</li>
                    <li>허리</li>
                    <li>디스크</li>
                    <li>척추협착</li>
                    <li>척추골절</li>
                    <li>퇴행성척추질환 등</li>
                  </ul>
                  <p className="in_cont_txt mt15">
                    원인이 무엇이든 간에, 정맥을 지지하는 조직들이 늘어져 정맥이 확장됩니다. <br />
                    정맥벽은 얇아져 가끔 출혈이 생기며, 이러한 증상이 반복되면 약해진 정맥들은 항문 밖으로 돌출하게 됩니다.
                  </p>
                </div>
                <div className="in_cont_sec">
                  <p className="in_cont_tit">치핵의 증상</p>
                  <p className="in_cont_txt">다음 증상들 중 한 가지라도 있다면, 치핵이 있을 수 있습니다.</p>
                  <ul className="dot_list3 mt15">
                    <li>배변 시 출혈</li>
                    <li>배변 시 항문 밖으로 돌출</li>
                    <li>항문 주위가 가려움</li>
                    <li>통증</li>
                    <li>예민한 덩어리</li>
                  </ul>
                </div>
                <div className="in_cont_sec">
                  <p className="in_cont_tit">치핵의 진단</p>
                  <div className="in_cont_flex">
                    <div className="v_table2">
                      <table>
                        <caption>치핵의 진단 안내표</caption>
                        <colgroup>
                          <col style={{ width: '25%' }} />
                          <col />
                        </colgroup>
                        <tbody>
                          <tr>
                            <th>사진</th>
                            <td>의사가 보면서 즉시 진단하는 방법</td>
                          </tr>
                          <tr>
                            <th>수지진찰</th>
                            <td>의사가 손가락으로 항문을 검사하여 진단하는 방법</td>
                          </tr>
                          <tr>
                            <td colSpan={2}>항문경 및 직장경을 통해서 알 수 있으며 감별 진단하기 위해서 (특히 직장암의 경우) 대장 내시경이나 대장
                              조영술을 시행하여 합니다.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="flex_in_img"><img src={thumb2254} alt="" /></div>
                  </div>
                </div>
                <div className="in_cont_sec">
                  <p className="in_cont_tit">치핵의 정도에 따른 분류</p>
                  <p className="in_cont_txt">치핵은 네가지로 정도를 나타내는데 1,2기는 좌욕 등의 보존적 치료로 치유되며 3,4기는 수술을 필요로 하는 경우가 있습니다.</p>
                  <div className="v_table2 mt30">
                    <table>
                      <caption>치핵의 정도에 따른 분류 안내표</caption>
                      <colgroup>
                        <col style={{ width: '25%' }} />
                        <col />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th>1도</th>
                          <td>배변시 출혈만 있으며 통증은 없고, 치핵 덩어리가 항문 밖으로 나오지 않는다.</td>
                        </tr>
                        <tr>
                          <th>2도</th>
                          <td>배변시 치행 덩어리가 항문 밖으로 나왔다가 저절로 들어간다.</td>
                        </tr>
                        <tr>
                          <th>3도</th>
                          <td>배변시 항문 밖으로 나온 치핵 덩어리가 저절로 들어가지 않아 손으로 밀어 넣는다.</td>
                        </tr>
                        <tr>
                          <th>4도</th>
                          <td>치핵 덩어리가 불쑥 항문 밖으로 나와 들어가지 않고 나온 채로 있다.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="in_cont_imgarea">
                    <ul className="imgarea2_2_5_2">
                      <li>
                        <p className="img"><img src={thumb2255} alt="" /></p>
                        <p className="name">1도</p>
                      </li>
                      <li>
                        <p className="img"><img src={thumb2256} alt="" /></p>
                        <p className="name">2도</p>
                      </li>
                      <li>
                        <p className="img"><img src={thumb2257} alt="" /></p>
                        <p className="name">3도</p>
                      </li>
                      <li>
                        <p className="img"><img src={thumb2258} alt="" /></p>
                        <p className="name">4도</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="in_cont_sec">
                  <p className="in_cont_tit">치핵의 치료</p>
                  <div className="in_cont_flex">
                    <div className="flex_in_left">
                      <p className="in_cont_txt">
                        경미한 증상은 음식물에 섬유질(예:과일,채소,빵과 곡물)과 수분의 양을 늘임으로써 경감될 수 있습니다.<br />
                        과도한 긴장을 해소하는 것으로도 치행에 대한 압력을 감소시켜, 치핵이 돌출되는 것을 예방할 수 있습니다.<br />
                        약 10분간 앉아서 따뜻한 물에 좌욕을 하는 것도 어느 정도 증상을 완화시킬 수 있습니다.<br />
                        이러한 방법으로 증상이 있는 대부분의 치핵에서 통증과 부기가 2일에서 7일 내에 감소되며, 그리고 치핵의 단단한 덩어리는 4주에서 6주내에
                        오그라듭니다.<br />
                        심하고 지속적인 통증이 있는 경우, 의사가 국소마취한 후 약간의 절개로 혈 전을 포함한 피핵을 제거하면 증상이 호전됩니다.<br />
                        심한 치질은 특별한 치료를 필요로 하나, 대개는 외래에서 시행 될 수 있습니다.
                      </p>
                    </div>
                    <div className="flex_in_img"><img src={thumb2259} alt="" /></div>
                  </div>
                  <div className="v_table2 mt30">
                    <table>
                      <caption>치핵의 치료 안내표</caption>
                      <colgroup>
                        <col style={{ width: '25%' }} />
                        <col />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th>결찰</th>
                          <td>
                            고무밴드 치료는 배변시 돌출되는 내치행을 효과적으로 치료할 수 있습니다. 작은 고무밴드로 치핵 덩어리를 묶어 혈액공급을
                            차단합니다.<br />
                            치핵과 밴드는 며칠 내에 떨어져 나가고, 상처는 대개 1~2주 내에 치유됩니다. 때때로 약간의 통증과 심한 출혈이 동반될 수 있습니다.
                          </td>
                        </tr>
                        <tr>
                          <th>주사와 응고</th>
                          <td>돌출되지 않는 출혈성 치핵에 이용될 수 있습니다. 이 방법들은 비교적 통증이 없어 치핵덩어리를 오그라들게 합니다.</td>
                        </tr>
                        <tr>
                          <th>치핵절제술</th>
                          <td>
                            치핵을 영구적으로 없애는 가장 좋은 방법입니다. 이러한 방법은 다음과 같은 경우에 필요합니다.<br />
                            가. 혈전이 외치핵에서 반복해서 생길 때<br />
                            나. 결찰 치료법으로 실패했을 때<br />
                            다. 돌출된 치핵이 오그라들지 않을 때<br />
                            라. 지속적인 출혈이 있을 때, 치핵절제술은 출혈과 돌출을 일으키는 잉여조직을 제거합니다. 치핵수술은 상황에 따라 입원과 일정기간의
                            안정이 필요로 합니다.
                          </td>
                        </tr>
                        <tr>
                          <th>다른 치료법</th>
                          <td>
                            동결 냉동요법, 경화 주사요법, 직류전류 이용법, 적외선 응고법 등이 있습니다. 동결 냉동요법은 20년 전에 유행했는데, 치핵조직을
                            냉동시키는 것입니다.<br />
                            이 방법은 아주 통증이 심하기 때문에 치행 치료에 거의 추천되지 않습니다.<br />
                            경화 주사요법, 직류전류 이용법은 치핵을 오그라들게 하는 방법으로 항문의 변형을 초래할 수 있어 널리 쓰이고 있지 않습니다.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              </div>
              <div className={outerTab === 'out_tab02' ? 'cont_area active_cont' : 'cont_area'}>
                <DoctorListSection doctors={doctors} loading={loadingDocs} onShowSchedule={setScheduleDoctor} />
              </div>
            </div>
          </>
        )}

        {/* ===== 복강경클리닉 ===== */}
        {code === 'laparoscopy' && (
          <>
            <div className="con_area">
              <div className="tab_area">
                <button type="button" className={outerTab === 'out_tab01' ? 'btn_tab active_tab' : 'btn_tab'} onClick={() => setOuterTab('out_tab01')}><span>진료과 소개</span></button>
                <button type="button" className={outerTab === 'out_tab02' ? 'btn_tab active_tab' : 'btn_tab'} onClick={() => setOuterTab('out_tab02')}><span>의료진 소개</span></button>
              </div>
              <div className={outerTab === 'out_tab01' ? 'cont_area active_cont' : 'cont_area'}>
              <div className="emergency_sec first_sec">
                <p className="info_tit">복강경클리닉</p>
                <p className="info_disc">
                  복부를 절개하지 않고 특수 카메라가 부착된 복강경과 비디오 모니터 등을 통해서 레이저 특수외과 전기술등 특수기구를 이용하는 미세수술을 말합니다.
                </p>
              </div>
              <div className="emergency_sec">
                <div className="in_cont_sec">
                  <p className="in_cont_tit">복강경수술이란?</p>
                  <p className="in_cont_txt">
                    복부를 절개하지 않고 배꼽 부위에 0.5~1cm 정도의 구멍을 뚫고 배안을 들여다 보는 Full HD카메라가 부착된 복강경과 비디오 모니터 등을 통해서 레이저
                    특수외과 전기술 등 특수기구를 이용하여 행하는 미세수술을 말합니다.<br />
                    저희 메디인 병원에서는 미국의 Strker사의 최신 Full HD급 Laparoscope 제품을 사용하는 복강경 수술 센터를 운영 중입니다.
                  </p>
                </div>
                <div className="in_cont_sec">
                  <p className="in_cont_tit">복강경수술의 장점</p>
                  <p className="in_cont_txt">
                    복강경 수술을 통하여 수술위험과 수술에 의한 스트레스, 입원 및 회복기간을 획기적으로 줄일 수 있게 되었으며 최근의 복강경은 컴퓨터 칩이 장착되어 육안으로
                    보는 것 보다도 더욱 선명하면서도 확대된 영상을 얻을 수 있어 미세 혈관도 문제없이 지혈이 가능하며 신경을 보존해야 할 경우 확대된 영상을 통해 신경의
                    보존술식이 용이합니다.<br />
                    또한 복강경 수술은 개복 수술과는 다르게 몇 개의 작은 절개공을 통해 수술을 진행하므로 흉터의 흔적이 적어 미용상의 장점이 있습니다.
                  </p>
                </div>
                <div className="in_cont_sec">
                  <p className="in_cont_tit">복강경수술과 일반개복수술 비교</p>
                  <div className="h_table">
                    <table>
                      <caption>복강경수술과 일반개복수술 비교 안내표</caption>
                      <colgroup>
                        <col style={{ width: '20%' }} />
                        <col />
                        <col />
                      </colgroup>
                      <thead>
                        <tr>
                          <th></th>
                          <th>복강경수술</th>
                          <th>일반개복술</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>정확도</th>
                          <td className="t_left">모니터를 이용한 시야확보</td>
                          <td className="t_left">집도의의 육안에 의지</td>
                        </tr>
                        <tr>
                          <th>회복기간</th>
                          <td className="t_left">2~7일 정도 짧은 회복기간</td>
                          <td className="t_left">6~10여일의 회복기간</td>
                        </tr>
                        <tr>
                          <th>통증</th>
                          <td className="t_left">수술부위의 최고화로 인한 통증의 감소</td>
                          <td className="t_left">개복으로 인한 심한 통증 유발</td>
                        </tr>
                        <tr>
                          <th>합병증</th>
                          <td className="t_left">장 유착 등의 합병증 발생 위험이 감소</td>
                          <td className="t_left">장 유착 등의 합병증 발생 위험이 높음</td>
                        </tr>
                        <tr>
                          <th>흉터</th>
                          <td className="t_left">0.5~1cm 정도의 작은 흉터가 3개 정도 남음 <br />(배꼽을 통한 단일통로 복강경 수술시 흉터가 거의 없음)</td>
                          <td className="t_left">10~30cm 정도의 흉터가 남음</td>
                        </tr>
                        <tr>
                          <th>입원기간</th>
                          <td className="t_left">담낭: 2~3일 / 탈장: 1~2일 / 맹장: 2~3일</td>
                          <td className="t_left">담낭: 10일 / 탈장: 4일 / 맹장: 5~6일</td>
                        </tr>
                        <tr>
                          <th>수술사진</th>
                          <td className="t_left">
                            <p className="td_thumb_226"><img src={thumb2261} alt="" /></p>
                          </td>
                          <td className="t_left">
                            <p className="td_thumb_226"><img src={thumb2262} alt="" /></p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="in_cont_sec">
                  <p className="in_cont_tit">복강경 수술과정</p>
                  <div className="in_cont_imgarea mt0">
                    <ul className="imgarea2_2_6">
                      <li>
                        <p className="img"><img src={thumb2263} alt="" /></p>
                        <p className="name">복강경 담낭수술</p>
                      </li>
                      <li>
                        <p className="img"><img src={thumb2264} alt="" /></p>
                        <p className="name">복강경 담낭수술</p>
                      </li>
                      <li>
                        <p className="img"><img src={thumb2265} alt="" /></p>
                        <p className="name">복강경 탈장수술</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="in_cont_sec">
                  <p className="in_cont_tit">복강경 장비 및 수술실 전경</p>
                  <div className="in_cont_imgarea mt0">
                    <ul className="imgarea2_2_6">
                      <li>
                        <p className="img"><img src={thumb2266} alt="" /></p>
                        <p className="name">복강경 장비</p>
                        <p className="disc">(미국 Strker사 Laparoscope 고해상도 복강경 FullHD급)</p>
                      </li>
                      <li>
                        <p className="img"><img src={thumb2267} alt="" /></p>
                        <p className="name">복강경 수술실</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              </div>
              <div className={outerTab === 'out_tab02' ? 'cont_area active_cont' : 'cont_area'}>
                <DoctorListSection doctors={doctors} loading={loadingDocs} onShowSchedule={setScheduleDoctor} />
              </div>
            </div>
          </>
        )}

        {/* ===== 성인병클리닉 ===== */}
        {code === 'adult-disease' && (
          <>
            <div className="con_area">
              <div className="tab_area">
                <button type="button" className={outerTab === 'out_tab01' ? 'btn_tab active_tab' : 'btn_tab'} onClick={() => setOuterTab('out_tab01')}><span>진료과 소개</span></button>
                <button type="button" className={outerTab === 'out_tab02' ? 'btn_tab active_tab' : 'btn_tab'} onClick={() => setOuterTab('out_tab02')}><span>의료진 소개</span></button>
              </div>
              <div className={outerTab === 'out_tab01' ? 'cont_area active_cont' : 'cont_area'}>
              <div className="emergency_sec first_sec">
                <p className="info_tit">성인병클리닉</p>
                <p className="info_disc">
                  성인병은 비전염성 퇴행성 만성질병 군으로 성인 사망의 주요 원인 및 각종 활동 장애를 초래하고 있습니다. 대표적인 성인병으로는 고지혈증, 당뇨병, 고혈압,
                  동맥경화, 과로, 비만 등이 있습니다.
                </p>
              </div>
              <div className="emergency_sec">
                <div className="in_tab_area">
                  <button type="button" className={inTab === 'in_tab01' ? 'btn_in_tab1 active_tab' : 'btn_in_tab1'} onClick={() => setInTab('in_tab01')}><span>성인병의 위험</span></button>
                  <button type="button" className={inTab === 'in_tab02' ? 'btn_in_tab1 active_tab' : 'btn_in_tab1'} onClick={() => setInTab('in_tab02')}><span>고지혈증</span></button>
                  <button type="button" className={inTab === 'in_tab03' ? 'btn_in_tab1 active_tab' : 'btn_in_tab1'} onClick={() => setInTab('in_tab03')}><span>고혈압</span></button>
                  <button type="button" className={inTab === 'in_tab04' ? 'btn_in_tab1 active_tab' : 'btn_in_tab1'} onClick={() => setInTab('in_tab04')}><span>동맥경화증</span></button>
                  <button type="button" className={inTab === 'in_tab05' ? 'btn_in_tab1 active_tab' : 'btn_in_tab1'} onClick={() => setInTab('in_tab05')}><span>당뇨병</span></button>
                  <button type="button" className={inTab === 'in_tab06' ? 'btn_in_tab1 active_tab' : 'btn_in_tab1'} onClick={() => setInTab('in_tab06')}><span>비만</span></button>
                </div>
                <div className={inTab === 'in_tab01' ? 'in_cont_area1 active_cont' : 'in_cont_area1'}>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">성인병의 위험</p>
                    <div className="in_cont_flex">
                      <p className="in_cont_txt flex_in_left2">
                        성인병은 비전염성 퇴행성 만성질병 군으로 성인 사망의 주요 원인 및 각종 활동 장애를 초래하고 있습니다. 대표적인 성인병으로는 고지혈증,
                        당뇨병, 고혈압, 동맥경화, 과로, 비만 등이 있으며, 이들 질환의 특징은 이 병과 연관되어 발생하는 뇌졸중(중품), 심장병, 각종 암, 간질환
                        등이 생명에 치명적이라는 것입니다. <br /><br />
                        이러한 성인병은 생활습관의 변화, 스트레스, 식생활, 운동 부족, 환경 오염 등과 관련되어 오랜 누적 기간을 걸쳐 발생합니다. 또한 특별한
                        처치나 수술로서 해결될 수 없고 꾸준한 관리가 중요합니다. <br /><br />
                        따라서 저희 성인병 치료에서는 성인병에 대한 정확한 검사와 지속적인 관리 및 치료를 중심으로 성인병 합병증 예방에 최선을 다하고 있습니다.
                      </p>
                      <div className="flex_in_img2"><img src={thumb2271} alt="" /></div>
                    </div>
                  </div>
                </div>
                <div className={inTab === 'in_tab02' ? 'in_cont_area1 active_cont' : 'in_cont_area1'}>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">고지혈증</p>
                    <div className="in_cont_flex">
                      <p className="in_cont_txt flex_in_left2">
                        체내에서 지질대사 이상으로 혈중 지질이 비정상적으로 증가된 상태입니다. <br /><br />
                        과다한 지방은 혈관벽에 달라붙어 혈관을 좁게 만듭니다.<br />
                        너무 많은 콜레스테롤은 혈관에 죽처럼 달라붙어 혈관을 막기도 하고 혈전 때문에 심근경색이나 뇌경색등 치명적인 질환의 주범이
                        됩니다.<br /><br />
                        당장의 우리몸에 콜레스테롤이 많다고 해서 어떤 증세가 없더라도 동맥경화증이나 심근경색 등 치명적인 병으로 진행되기 때문에 치료를 해야 합니다.
                      </p>
                      <div className="flex_in_img2"><img src={thumb2272} alt="" /></div>
                    </div>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">고지혈증의 원인</p>
                    <ul className="dot_list3">
                      <li>식생활 변화: 인스턴트 식품, 고지방 고칼로리 식단, 운동부족, 음주로 인한 비만</li>
                      <li>약물: 경구용 피임제</li>
                      <li>질병: 간기능장애, 갑상선 기능저하, 당뇨병</li>
                      <li>유전</li>
                    </ul>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">다음 경우에는 고지혈증을 의심해야합니다.</p>
                    <ol className="num_list">
                      <li>비만형, 고지방 음식이나 인스턴트 음식을 좋아한다.</li>
                      <li>쉽게 피로를 느끼고 두통, 어지러움 , 어깨결림 , 손발저림 , 눈의 피로가 온다.</li>
                      <li>뾰루지, 종기가 생기고 지성피부, 땀냄새가 나는 경우</li>
                      <li>숨이 잘 차거나 가슴이 답답하다.</li>
                    </ol>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">고지혈증의 진단</p>
                    <div className="v_table2">
                      <table>
                        <caption>고지혈증의 진단표</caption>
                        <colgroup>
                          <col style={{ width: '20%' }} />
                          <col />
                        </colgroup>
                        <tbody>
                          <tr>
                            <th rowSpan={3} scope="rowgroup">혈중 콜레스테롤(mg/dl)</th>
                            <td>200이하 정상</td>
                          </tr>
                          <tr>
                            <td>200-293 경계</td>
                          </tr>
                          <tr>
                            <td>240이상 고지혈증</td>
                          </tr>
                          <tr>
                            <th rowSpan={3} scope="rowgroup">LDL콜레스테롤(mg/dl)</th>
                            <td>LDL콜레스테롤(mg/dl) 130미만 정상</td>
                          </tr>
                          <tr>
                            <td>130-159 경계</td>
                          </tr>
                          <tr>
                            <td>160이상 위험</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">고지혈증의 치료</p>
                    <p className="in_cont_txt">
                      검사 수치에 따라서 또 관상동맥질환의 유무, 남성, 당뇨병, 고혈압, 음엽 등 위험인자에 따라 치료 목표가 달라지게 됩니다. <br />우선은 식이요법과
                      운동요법을 하고서도 치료 목포에 도달하지 못하면 약물요법을 하게 됩니다. 또한 일정 수준 이상의 수치가 나오면 지체 없이 약물요법으로 조절하게 됩니다.
                      <br /><br />
                      약물에는 콜레스테롤을 떨어뜨리는 약과 중성지방을 떨어뜨리는 약 2가지가 있습니다. 콜레스테롤의 합성을 억제한다든지 배설을 촉진하는 등의 약입니다. 약을
                      복용하는 동안에도 식이요법과 운동요법을 계속적으로 해야 합니다. <br />또한 이 계통의 약들은 간 장애나 근육통, 발기부전 등의 부작용이 나타날 수
                      있으므로 복용량과 방법을 정확하게 지켜야 하며 일정 기간마다 내과를 재방문하여 필요시에는 검사를 해야 합니다.
                    </p>
                  </div>
                </div>
                <div className={inTab === 'in_tab03' ? 'in_cont_area1 active_cont' : 'in_cont_area1'}>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">고혈압</p>
                    <p className="in_cont_txt">
                      고혈압은 성인병의 주범 중 하나입니다. <br />
                      성인병에 결렸다고 하더라도 걱정만 가득 끌어안고 계실 필요는 없습니다. 잘만 관리하면 건강한 사람 못지않게 즐거운 삶을 영위할 수 있습니다.
                    </p>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">혈압이란?</p>
                    <div className="in_cont_flex">
                      <p className="in_cont_txt flex_in_left2">
                        인체의 각 부분에 혈액을 보내기 위해서는 심장이 일정한 압력으로 수축하고 확정해야 합니다. <br />
                        심장이 혈액을 내보내기 위하여 수축할 때의 압력을 수축기혈압, 심장이 피를 받아들이기 위해 확장할 때의 압력을 이완기혈압 또는 확장기혈압이라
                        합니다.
                      </p>
                      <div className="flex_in_img2"><img src={thumb2273} alt="" /></div>
                    </div>
                    <div className="h_table">
                      <table>
                        <caption>혈압 정보표</caption>
                        <colgroup>
                          <col style={{ width: '20%' }} />
                          <col />
                          <col />
                        </colgroup>
                        <thead>
                          <tr>
                            <th></th>
                            <th className="bd_l_0">수축기혈압(mmHg)</th>
                            <th className="bd_l_0">확장기혈압(mmHg)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>정상</th>
                            <td>&lt;130</td>
                            <td className="bd_l_0"><span className="ab_bar">그리고</span>&lt;85</td>
                          </tr>
                          <tr>
                            <th>높은 정상</th>
                            <td>130-139</td>
                            <td className="bd_l_0"><span className="ab_bar">그리고</span>85-89</td>
                          </tr>
                          <tr>
                            <th>고혈압(1도)</th>
                            <td>140-159</td>
                            <td className="bd_l_0"><span className="ab_bar">또는</span>90-99</td>
                          </tr>
                          <tr>
                            <th>고혈압(2도)</th>
                            <td>160-179</td>
                            <td className="bd_l_0"><span className="ab_bar">또는</span>100-109</td>
                          </tr>
                          <tr>
                            <th>고혈압(3도)</th>
                            <td>&gt;180</td>
                            <td className="bd_l_0"><span className="ab_bar">또는</span>&gt;110</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">고혈압의 증상</p>
                    <p className="in_cont_txt">증상이 있을 수도 없을 수도 있습니다. 대부분의 환자에게는 고혈압에 의한 합병증이 일단 발생한 후에 증상이 발생합니다.</p>
                    <ul className="dot_list3 mt15">
                      <li>머리가 아프고 골치가 아프다.</li>
                      <li>어지럽고 귀에서 소리가 난다.</li>
                      <li>코피가 난다.</li>
                      <li>팔다리가 저린다.</li>
                      <li>숨이 가쁘고 가슴이 두근거린다.</li>
                      <li>잠이 오지 않는다.</li>
                      <li>성격이 불안하여 성을 잘낸다.</li>
                      <li>쉽게 피로해진다. 등등</li>
                    </ul>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">고혈압의 치료</p>
                    <p className="in_cont_txt">
                      고혈압의 치료는 크게 비약물 요법과 약물요법으로 구분하며 비약물 치료는 약물 요법과 병행하여 평생 계속해야 합니다. <br />
                      비약물 요법을 생활요법이라고도 하는데 여기에는 체중 조절 염분 섭취 제한, 운동, 음주 제한, 금연, 스트레스의 완화, 콜레스테롤의 조절 등이
                      있습니다.<br />
                      생활 요법으로 혈압 조절이 만족스럽지 못할 때는 약물로 낮추어야 합니다.<br />
                      고혈압 치료 약제로는 이뇨제, 교감신경 억제제, 칼슘길항제, 혈관확장제 및 앤지오텐신 전환 효소 억제제 등 여러 가지가 있으나 각각 환자의 상태에 따라
                      처방이 다르므로 의사의 지시에 따라 복용해야 하고 약국에서 함부로 사 먹는 것은 위험한 일입니다. 고혈압은 정상 혈압(140/90mmHg) 이하까지 내려야 하며 먹고 있는 약 이름과
                      용량, 그리고 부작용을 의사에게 물어 알고 있는 것이 중요합니다.
                    </p>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">고혈압 환자의 생활수칙</p>
                    <ol className="num_list">
                      <li>혈압을 정기적으로 측정해야 합니다.</li>
                      <li>평온한 마음을 유지하도록 하며 긴장이나 흥분을 피해야 합니다.</li>
                      <li>충분한 휴식으로 정신적, 육체적 피로 누적, 급격한 감정적 번화를 피합니다. 과로와 흥분은 뇌졸중이나 심장마비 등의 심각한 이상을 초래할 수 있습니다.</li>
                      <li>표준체중을 유지해야 합니다.</li>
                      <li>적절한 운동을 합니다. 산책, 뛰기, 줄넘기, 체조, 수영, 자전거타기, 에어로빅 등과 같은 운동 중 자신에게 적합한 운동을 하루 30분정도 1주일에 3-5회 하세요.</li>
                      <li>급격한 환경변화를 피해야 합니다. 뜨거운 목욕, 사우나 또는 추운 밤의 돌연한 외출은 급격한 온도 변화에 의해 위험을 초래할 수 있습니다.</li>
                      <li>변비를 피해야 합니다. 변비는 혈압을 악화시키며 배변시 위험한 상태가 올 수 있습니다.</li>
                      <li>염분섭취를 줄이도록 해야 합니다. 염분섭취량이 많을수록 고혈압이 악화되며 치료에 대한 반응이 나쁘므로 짠 음식을 피하셔야 합니다.</li>
                      <li>식생활에서 동물성 지방질 섭취와 당분섭취를 최소로 해야합니다.</li>
                      <li>과도한 성행위나 심한 음주, 흡연 및 커피 등 자극성 있는 음식은 피해야합니다.</li>
                    </ol>
                  </div>
                </div>
                <div className={inTab === 'in_tab04' ? 'in_cont_area1 active_cont' : 'in_cont_area1'}>
                  <div className="in_cont_sec">
                    <div className="in_cont_flex">
                      <div className="flex_in_left2">
                        <p className="in_cont_tit">동맥경화증</p>
                        <p className="in_cont_txt">
                          동맥경화증은 말 그대로 동맥의 벽이 탄력성을 잃어 굳어지고 또 지방질이 벽에 끼는 현상을 말합니다. <br />
                          이에 따라 동맥 내경이 좁아지면서 이에 관여된 여러 장기로의 혈액 공급이 감소하면서 여러 가지 증상이 나타나는 것입니다.<br />
                          심장으로 가는 혈관이 좁아지면 협심증, 심근 경색이 되는 것이고, 뇌로 가는 혈관이 좁아지면 풍(뇌졸중)이 되고 신장으로 가는 혈관이
                          좁아지면 고혈압을 유발할 수 있는 것입니다. 또 다리로 가는 혈관이 문제가 되면 다리가 썩을 수도 있습니다.
                        </p>
                      </div>
                      <div className="flex_in_img2"><img src={thumb2274} alt="" /></div>
                    </div>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">동맥경화증의 원인</p>
                    <ul className="dot_list3 mt15">
                      <li>고지혈증</li>
                      <li>고혈압</li>
                      <li>흡연</li>
                      <li>당뇨병</li>
                      <li>비만</li>
                      <li>스트레스</li>
                    </ul>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">동맥경화증 진단</p>
                    <p className="in_cont_txt">
                      먼저 환자가 동맥경화의 위험인자를 가지고 있는지를 자세히 알아보고, 혈액검사에서 지방질, 요산치, 당뇨가 없는지를 확인 해 볼수 있습니다. <br />
                      또 안저 검사를 통해 망막의 혈관들을 관찰하는 것은 직접적으로 혈관을 볼 수있어 동맥경화의 유무를 쉽게 알 수 있습니다.
                    </p>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">동맥경화증 예방과 치료</p>
                    <p className="in_cont_txt">
                      생활습관과 신체조건으로 생기는 질병이므로 동맥경화가 발생하면 치료하기는 무척 어렵습니다. <br />
                      간의 한 모든 위험요인을 제거 또는 감소시켜 예방하는 길만이 유일한 치료법이라고 볼 수 있습니다.
                    </p>
                    <ol className="num_list">
                      <li>
                        <p className="strong">고혈압이 있는 경우</p>
                        <p className="disc">가능하면 24시간 혈압이 어느 시간에 측정하든 140/90mmHg 이하로 유지되는 것이 좋습니다.</p>
                      </li>
                      <li>
                        <p className="strong">혈중 콜레스테롤이 높은 경우</p>
                        <p className="disc">220mg% 이하로 유지하며, 220mg% 이상의 혈중 콜레스테롤을 가진 사람은 동물성 지방 섭취를 제한하고
                          표준체중을 유지하기 위해 규칙적인 운동 등으로 조절해야 합니다. <br />
                          혈중 콜레스테롤이 300mg%를 넘으면 식이요법과 함께 의사와 상의하여 약물치료를 고려할 수 있습니다.</p>
                      </li>
                      <li>
                        <p className="strong">흡연의 경우</p>
                        <p className="disc">흡연은 동맥경화에 위험요소입니다. 그러나 1년만 끊으면 동맥 경화성 질환 발생에 관한 위험도가 담배를 피우지 않은
                          사람과 같아진다고 하니 지금부터라도 금연하시길 바랍니다.</p>
                      </li>
                      <li>
                        <p className="strong">당뇨병이 있는 경우</p>
                        <p className="disc">식사요법과 약물요법을 병행하여 소변에는 당이 나이지 않도록 조절해야하며, 식후 2시간 혈당치는 많아도
                          200mg%이하가 되록 해야합니다.</p>
                      </li>
                    </ol>
                  </div>
                </div>
                <div className={inTab === 'in_tab05' ? 'in_cont_area1 active_cont' : 'in_cont_area1'}>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">당뇨병</p>
                    <p className="in_cont_txt">
                      당뇨치료의 궁극적인 목표는 당뇨병의 여러 증상과 급성 및 만성 합병증의 발생을 예방하여 일생동안 정상적인 일상 생활을 영위할 수 있게 하는데 있습니다.
                      <br />
                      이러한 목표달성을 위해서는 혈당을 계속적으로 정상화 시키려는 노력이 중요합니다.
                    </p>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">당뇨병이란?</p>
                    <p className="in_cont_txt">
                      췌장에서 분비되는 호르몬인 인슐린의 양이 부족하거나 작용하는 힘이 약해져서 당(포도당)이 세포 속으로 들어가지 못해 에너지로 이용되지 못하여 혈액 내에
                      쌓이고 또 소변으로 배설되는 질환입니다.
                    </p>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">당뇨병의 진단기준</p>
                    <p className="in_cont_txt">
                      혈당이 70 -110 ㎎/㎗이면 정상이고, 이보다 높은 경우는 당뇨 위험이 있는지 꾸준히 검사하셔야 합니다.
                    </p>
                    <ol className="num_list">
                      <li>
                        <p className="strong">당뇨병의 진단기준</p>
                        <p className="disc">
                          - 당뇨병의 증상이 있고 하루 중 때에 상관없이 일회 혈당치가 200mg/dl을 넘을 때 <br />
                          - 공복혈당치(8시간 이상 금식 후)가 126mg/dl 이상일 때<br />
                          - 경구 당부하검사상 식후 2시간 혈당이 200mg/dl을 넘을 때
                        </p>
                      </li>
                      <li>
                        <p className="strong">당대사 장애</p>
                        <p className="disc">
                          정상인과 당뇨병의 중간단계에 있어 향후 당뇨병으로 진전될 수 있거나, 당뇨병의 합병증인 심혈관질환을 일으킬 수 있는 위험이 있는
                          환자군<br />
                          - 공복 혈당장애 : 공복혈당치가 110mg/dl 이상 125mg/dl 이하일 때<br />
                          - 당내인성 장애 : 경구 당부하검사상 2시간 혈당치가 140mg/dl 이상 200mg
                        </p>
                      </li>
                    </ol>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">당뇨병의 분류</p>
                    <ol className="num_list">
                      <li>
                        <p className="strong">인슐린의존형 당뇨병 (제 1형)</p>
                        <p className="disc">인슐린분비 세포파괴로 인슐린 분비가 결핍되어 나타납니다. 주로 소아에서 발생하며 인슐린 치료가 반드시 필요합니다.</p>
                      </li>
                      <li>
                        <p className="strong">인슐린비의존형 당뇨병 (제 2형)</p>
                        <p className="disc">
                          비만이나 스트레스등으로 인하여 인슐린 분비 저하 또는 인슐린 저항이 생겨 당뇨병이 발생하는 것입니다. <br />
                          초기에 식사와 운동요법에 의하여 체중을 감량하고 근육을 키우면 당뇨병이 호전되는 경우가 많습니다.
                        </p>
                      </li>
                      <li>
                        <p className="strong">임신성 당뇨병</p>
                        <p className="disc">
                          임신으로 인한 당내성의 증가로 당뇨가 발생하는 것으로 임신 전부터 당뇨병이 있는 사람과 구별됩니다.<br />
                          2~3%의 임산부에서 발병하며, 적절한 혈당조절이 되지 않을 경우에는 거대아, 기형아, 사산아 들의 영향을 초래할 수 있습니다.<br />
                          산모가 비만한 경우, 고혈압이 있거나 요당이 나오는 경우는 보통 임신 24 주~28 주에 반드시 임신성 당뇨병 검사를 받아야 합니다.
                        </p>
                      </li>
                      <li>
                        <p className="strong">기타 형태의 당뇨병</p>
                        <p className="disc">
                          췌장질환, 내분비질환, 특정한 약물, 화학물질, 인슐린 혹은 인슐린 수용체 이상, 유전적 증후군에 의해 2차적으로 당뇨병이 유발되는
                          경우가 있습니다.
                        </p>
                      </li>
                    </ol>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">당뇨병의 합병증을 예방하려면</p>
                    <div className="in_cont_flex">
                      <div className="flex_in_left2">
                        <ul className="dot_list3">
                          <li>혈당조절</li>
                          <li>혈압조절</li>
                          <li>혈중 지질농도 조절</li>
                          <li>금연</li>
                          <li>적절한 운동과 식사조절</li>
                        </ul>
                      </div>
                      <div className="flex_in_img2"><img src={thumb2275} alt="" /></div>
                    </div>
                  </div>
                </div>
                <div className={inTab === 'in_tab06' ? 'in_cont_area1 active_cont' : 'in_cont_area1'}>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">비만</p>
                    <p className="in_cont_txt">
                      비만이란 주로 체내의 피하에 지방이 많이 쌓여 있는 상태를 말하는데 일반적으로 에너지 섭취량이 소비량을 초과하여 남은 열량이 지방으로 과다하게 축적되는
                      것을 말합니다. <br />
                      그러나 비만은 단순히 몸무게가 많이 나가는 것과는 다릅니다. 비만문제의 포인트는 체지방 관리입니다.
                    </p>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">비만의 판단기준</p>
                    <p className="in_cont_txt">
                      증상이 있을 수도 없을 수도 있습니다. 대부분의 환자에게는 고혈압에 의한 합병증이 일단 발생한 후에 증상이 발생합니다.
                    </p>
                    <ol className="num_list">
                      <li>
                        <p className="strong">표준 체중법</p>
                        <p className="disc">
                          표준체중 = (신장-100)x0.9 <br />
                          비만도= (실측체중-표준체중) / 표준체중 x 100 %<br />
                          - 실제 체중이 표준체중에 비해서 10% 이상은 과체중,<br />
                          - 20% 이상은 비만
                        </p>
                      </li>
                      <li>
                        <p className="strong">체질량지수법(BMI)</p>
                        <p className="disc">
                          체질량지수법(BMI) = 체중(kg) /신장(m2)<br />
                          - 22인 경우는 최적의 표준<br />
                          - 20~24는 정상<br />
                          - 20 이하면 왜소형<br />
                          - 24~26.5이면 과체중<br />
                          - 26.5 이상이면 비만으로 판정하고 있습니다.
                        </p>
                      </li>
                      <li>
                        <p className="strong">허리와 엉덩이 둘레비(WHR)</p>
                        <p className="disc">
                          여자는 0.90 이상, 남자 1.00 이상 → 복부비만<br />
                          여자 0.75 이하, 남자 0.85 이하 → 하체비만<br />
                          복부비만은 질환의 위험율과 사망율이 하체 비만자보다 훨씬 높기 때문에 성인병을 예방하기 위해서는 복부비만이 되지 않도록 해야합니다.
                        </p>
                      </li>
                      <li>
                        <p className="strong">피부의 두께측정법</p>
                        <p className="disc">삼두박근, 이두박근, 견갑골하부, 복부, 대퇴부(허벅지) 등의 피부 두께를 측정하여 축적된 지방량을 계산합니다.</p>
                      </li>
                    </ol>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">비만의 합병증</p>
                    <p className="in_cont_txt">고혈압, 당뇨병, 고지혈증, 동맥경화증, 관절염, 고뇨산혈증, 두통, 지방간 등</p>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">비만의 치료방법</p>
                    <div className="in_cont_flex">
                      <div className="flex_in_left2">
                        <p className="in_cont_txt">
                          다이어트란 단순히 살을 빼는 것만을 의미하는 것이 아니라 균형 잡힌 식단, 균형 잡힌 영향의 의미를 뜻하고 있습니다. <br />
                          다이어트는 어느 한 가지 방법으로는 성공 할 수 없으며 개인에 따라 비만의 원인을 정확히 분석하여 그에 맞게 여러 가지 요법을 종합한
                          프로그램에 의해 시행되어야 합니다.
                        </p>
                        <ol className="num_list">
                          <li>
                            <p className="strong">식이요법</p>
                            <p className="disc">설탕, 지방, 술 등을 절제하고 간식, 과일을 지나치게 먹지 않습니다.</p>
                          </li>
                          <li>
                            <p className="strong">운동요법</p>
                            <p className="disc">규칙적인 유산소운동(2km 도보, 1km 조깅, 300m수영)</p>
                          </li>
                          <li>
                            <p className="strong">약물요법</p>
                            <p className="disc">다른 비만 치료로 적절한 체중감량이 되지 않을 경우에 단기간 동안 보조요법으로 사용될 수 있는
                              방법으로 엄격한 의학적 검사와 진찰을 통해서 개개인에게 맞도록 안전하게 처방 되는 것이 중요합니다.</p>
                          </li>
                          <li>
                            <p className="strong">행동수정요법</p>
                            <p className="disc">정규직 식사습관, 천천히 먹는 습관, 규칙적인 운동 등</p>
                          </li>
                        </ol>
                      </div>
                      <div className="flex_in_img2"><img src={thumb2276} alt="" /></div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div className={outerTab === 'out_tab02' ? 'cont_area active_cont' : 'cont_area'}>
                <DoctorListSection doctors={doctors} loading={loadingDocs} onShowSchedule={setScheduleDoctor} />
              </div>
            </div>
          </>
        )}

        {/* ===== 중재시술/유방클리닉 ===== */}
        {code === 'intervention' && (
          <>
            <div className="con_area">
              <div className="tab_area">
                <button type="button" className={outerTab === 'out_tab01' ? 'btn_tab active_tab' : 'btn_tab'} onClick={() => setOuterTab('out_tab01')}><span>진료과 소개</span></button>
                <button type="button" className={outerTab === 'out_tab02' ? 'btn_tab active_tab' : 'btn_tab'} onClick={() => setOuterTab('out_tab02')}><span>의료진 소개</span></button>
              </div>
              <div className={outerTab === 'out_tab01' ? 'cont_area active_cont' : 'cont_area'}>
              <div className="emergency_sec first_sec">
                <p className="info_tit">중재시술/유방클리닉</p>
                <p className="info_disc">
                  영상장비를 통하여 인체 내부를 관찰하면서 미세 의료기구를 체내에 삽입하여 내과적 시술(약물 주입)과 외과적 시술(절개,성형)을 수행하는 의학기술로서 환자의 고통을
                  최소화하며 진단과 치료가 가능하다는 큰 장점이 있습니다.
                </p>
              </div>
              <div className="emergency_sec">
                <div className="in_tab_area">
                  <button type="button" className={inTab === 'in_tab01' ? 'btn_in_tab1 active_tab' : 'btn_in_tab1'} onClick={() => setInTab('in_tab01')}><span>맘모톰</span></button>
                  <button type="button" className={inTab === 'in_tab02' ? 'btn_in_tab1 active_tab' : 'btn_in_tab1'} onClick={() => setInTab('in_tab02')}><span>갑상선고주파열치료</span></button>
                  <button type="button" className={inTab === 'in_tab03' ? 'btn_in_tab1 active_tab' : 'btn_in_tab1'} onClick={() => setInTab('in_tab03')}><span>하지정맥류</span></button>
                </div>
                <div className={inTab === 'in_tab01' ? 'in_cont_area1 active_cont' : 'in_cont_area1'}>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">맘모톰이란?</p>
                    <p className="in_cont_txt">맘모톰(Mammotome)이란 1995년 이후부터 전 세계적으로 이미 3백만 명 이상의 여성과 함께해 온 최소 침습적
                      유방조직 (MIBB: Minimaly Invasive Breast Biopsy) 장비입니다.
                      <br />외과적 수술을 하지 않고도 유방암의 정확한 진단에 필수적인 적정량의 유방 조직을 채취할 수 있습니다.</p>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">맘모톰 검사가 필요한 경우</p>
                    <p className="in_cont_txt">맘모톰은 조직검사와 시술을 동시에 진행할 수 있는 첨단장비입니다.</p>
                    <ol className="num_list">
                      <li>암이 의심되거나 기존의 조직검사로 진단이 불분명한 경우</li>
                      <li>유방 종양이 발견된 분 중 유방암 가족력이 있는 경우</li>
                      <li>종양이 있으나 상당기간 동안 검사가 불가능한 경우 등</li>
                    </ol>
                    <p className="in_cont_txt mt15">위에 해당하는 경우 검사를 시행합니다.</p>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">맘모톰의 장점</p>
                    <div className="h_table">
                      <table>
                        <caption>맘모톰의 장점표</caption>
                        <colgroup>
                          <col style={{ width: '20%' }} />
                          <col />
                          <col />
                        </colgroup>
                        <thead>
                          <tr>
                            <th></th>
                            <th className="bd_l_0">맘모톰</th>
                            <th>외과적수술</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>상처크기</th>
                            <td>3mm 이하</td>
                            <td>2~6mm</td>
                          </tr>
                          <tr>
                            <th>마취</th>
                            <td>부분마취</td>
                            <td>전신 또는 부분마취</td>
                          </tr>
                          <tr>
                            <th>봉합</th>
                            <td>접착테이프</td>
                            <td>봉합사로 봉합</td>
                          </tr>
                          <tr>
                            <th>소요시간</th>
                            <td>30분~1시간</td>
                            <td>1~2시간</td>
                          </tr>
                          <tr>
                            <th>흉터</th>
                            <td>6개월 내에 거의 사라짐</td>
                            <td>봉합부위 흉터</td>
                          </tr>
                          <tr>
                            <th>입원여부</th>
                            <td>외래 혹은 단기입원</td>
                            <td>안정 혹은 입원</td>
                          </tr>
                        </tbody>
                      </table>
                      <ul className="table_lifo_list">
                        <li>특수 제작된 자동 바늘을 이용하여, 바늘을 한번만 삽입하고도 여러개의 조직을 얻을 수 있습니다.</li>
                        <li>다수의 큰 조직을 채취함으로써 외과적 수술만큼 정확도가 높은 진단을 받을 수 있습니다.</li>
                        <li>시술 후 상처는 3mm이하로 매우 작아 미용적인 면에서 환자의 만족도가 매우 높습니다.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">맘모톰 시술방법</p>
                    <ol className="num_list">
                      <li>초음파 영상을 통해 위치를 확인하고 피부에 작은 절개를 가해 맘모톰 바늘을 삽입합니다.</li>
                      <li>초음파 영상을 확인하며 바늘 내부의 커터가 이상병변의 조직을 잘라냅니다.</li>
                      <li>출혈을 예방하기 위해 시술 부위를 압박합니다.</li>
                      <li>절개부위는 봉합하지 않고, 반창고를 이용하여 시술을 마무리 합니다.</li>
                    </ol>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">시술 전&amp;후 주의사항</p>
                    <ol className="num_list">
                      <li>아스피린 등 항응고제를 복용하는 경우는 반드시 미리 말씀해주세요.</li>
                      <li>시술 직후 1시간 정도 안정을 취하세요.</li>
                      <li>가슴에 감은 탄력붕대는 2일 정도 후에 풀고, 붕대 제거 후 2일간은 스포츠 브라로 고정해주십시오.</li>
                      <li>샤워는 검사 3일 후부터 가능합니다.</li>
                      <li>검사 후 약간의 통증이 있을 수 있으나 점차 호전되니 크게 걱정하실 필요는 없습니다. 필요한 경우 의사의 처방에 따라 진통제를 복용하실 수 있습니다.</li>
                      <li>시술 후 약 1주일 동안은 과격한 운동을 삼가셔야 합니다.</li>
                      <li>조직 검사 결과는 1주일 정도 소요되므로 외래 통원 치료를 하면서 조직 검사 결과를 확인하시기 바랍니다.</li>
                    </ol>
                  </div>
                </div>
                <div className={inTab === 'in_tab02' ? 'in_cont_area1 active_cont' : 'in_cont_area1'}>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">갑상선 고주파 절제술이란?</p>
                    <p className="in_cont_txt">갑상선 고주파 절제술이란 (Radiofrequenty Ablation of Benign thyroid nodule)
                      초음파 유도하에 종양내부에 가느다란 바늘을 삽입한 후 고주파 마찰열을 이용하여 종양을 괴사시키는
                      치료법입니다. 환부를 절개하여 종양을 제거하는 외과적 수술이 아닌 미세한 바늘을 삽입해 종양을 제거하는 비수술적 치료법으로 재발이 극히 적고
                      미용적으로도 종양이 큰 폭으로 줄어들어서 효과적인 치료법입니다.</p>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">고주파 치료의 적응증</p>
                    <ul className="dot_list3">
                      <li>통증, 이물감, 압박 등 갑상선 결절로 인한 증상이 있는 경우</li>
                      <li>호흡곤란, 목소리 변화, 음식을 삼킬 때의 통증</li>
                      <li>결절에 의한 미용 상의 문제</li>
                      <li>결절의 악성변화에 대한 우려가 있는 경우</li>
                      <li>결절의 크기가 2cm이상이거나 갑작스런 크기 변화가 있는 경우</li>
                    </ul>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">갑상선 고주파 절제술의 장점</p>
                    <ol className="num_list">
                      <li>피부에 수술 흉터가 남지 않습니다.</li>
                      <li>국소 마취만으로 시술이 가능합니다.</li>
                      <li>수술에 비해 통증이 적고 갑상선 조직 손상이 없으므로 시술 후 갑상선 기능의 변화가 없습니다.</li>
                      <li>경우에 따라 입원을 요할 수 있으나 대부분 외래로도 치료가 가능합니다.</li>
                      <li>시술 후 당일 신체활동이 크지 않은 일상 생활이 가능합니다.</li>
                    </ol>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">갑상선 고주파 치료방법</p>
                    <ol className="num_list">
                      <li>초음파 유도하에 시술 부위를 확인 한 후 국소 마취를 합니다.</li>
                      <li>종양 내부에 바늘을 삽입한 후 열치료를 시작합니다. 이 때 목 부위에 약간의 불편감을 느낄 수 있습니다.</li>
                      <li>시술 후 충분히 휴식을 취하고 별다른 합병증이 발생되지 않으면 귀가가 가능합니다.</li>
                      <li>시술 3일 후까지 약간의 붓는 느낌이 있을 수 있습니다. 불편감이 장기간 지속되는 경우에는 외래로 내원하셔서 상담을 받으시기 바랍니다.</li>
                    </ol>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">주의사항</p>
                    <ol className="num_list">
                      <li>아스피린 등 항응고제를 복용하는 경우는 반드시 미리 말씀해주세요.</li>
                      <li>시술 당일은 휴식을 취하는 것이 좋습니다.</li>
                      <li>시술 후 자가운전이 어려울 수 있으므로 보호자 동반을 권합니다.</li>
                    </ol>
                  </div>
                </div>
                <div className={inTab === 'in_tab03' ? 'in_cont_area1 active_cont' : 'in_cont_area1'}>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">하지정맥류란?</p>
                    <p className="in_cont_txt">
                      고혈압은 성인병의 주범 중 하나입니다. <br />
                      성인병에 결렸다고 하더라도 걱정만 가득 끌어 안고 계실 필요는 없습니다. 잘만 관리하면 건강한 사람 못지 않게 즐거운 삶을 영위할 수 있습니다.
                    </p>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">하지정맥류의 발생원인 및 분류</p>
                    <p className="in_cont_txt">
                      정맥류의 발생 원인으로는 원발성(일차성) 판막부전, 속발성(이차성) 판막부전, 관통정맥 판막부전, 유전적 원인, 비만, 운동 부족, 자세, 직업,
                      호르몬 등이 관련되어 있는 것으로 알려져 있습니다.
                    </p>
                    <ul className="dot_list3 mt15">
                      <li><strong className="t_bk">하지정맥류의 형태학적 분류 (크기와 색조에 따른 분류)</strong></li>
                    </ul>
                    <ol className="num_list">
                      <li><strong>복재형:</strong> 대복재정맥이나 소복재정맥의 혈관이 팽창,돌출,사행을 보이는 상태</li>
                      <li><strong>분지형:</strong> 복재정맥의 곁가지 또는 관통정맥에서 기인하는 혈관들이 부분적으로 확장된 상태</li>
                      <li><strong>망상형:</strong> 직경 2~3mm의 정맥이 그물 형태로 확장된 상태</li>
                      <li><strong>거미줄형:</strong> 직경 1mm 이하의 가는 정맥이 확장된 상태</li>
                    </ol>
                    <p className="in_tnumb_228"><img src={thumb2281} alt="" /></p>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">하지정맥류의 증상</p>
                    <ol className="num_list">
                      <li>다리가 아프거나 무겁고 피로감이 느껴진다.</li>
                      <li>혈관이 확장되고 다리가 붓거나 단단해진다.</li>
                      <li>다리가 저리며 경련이 생긴다.</li>
                      <li>정맥류 주위의 피부색 변화, 피부염이 발생한다.</li>
                      <li>운동시 통증을 느끼거나 쥐가 나는 일이 있다.</li>
                      <li>정도가 심한 경우 피부궤양,출혈,부종,통증,피부색의 변화 등이 발생한다.</li>
                    </ol>
                  </div>
                  <div className="in_cont_sec">
                    <p className="in_cont_tit">정맥류의 치료</p>
                    <p className="in_cont_txt">
                      정맥류의 분류에 따라서 복재형, 분지형은 레이저 시술, 혈관내 거품경화요법을 이용하여 치료하며 망상형, 거미줄형은 경화요법을 우선적 치료방법으로 합니다.
                    </p>
                    <ol className="num_list">
                      <li><strong>압박요법:</strong> 대복재정맥이나 소복재 정맥의 혈관이 팽창, 돌출, 사행을 보이는 상태</li>
                      <li>
                        <strong>정맥류 레이저 시술</strong>
                        (Endovenous Laser Therapy, EVLT)
                        <p className="in_cont_txt mt10">정맥내로 미세한 광섬유를 넣어 혈관내벽에 레이저를 직접 조사하는 방법입니다. 손상을 받은
                          혈관의 굵기가 감소되어 정맥혈의 역류가 차단됩니다. <br />
                          팽창마취(Tumescent anesthesia)를 통한 비침습적 시술로 흉터가 거의 남지 않는 것이 최대 장점이며 전신 마취가 필요없고
                          통증이 적으며 시술 후 바로 일상생활로 복귀가 가능합니다.</p>
                        <p className="in_tnumb_228"><img src={thumb2282} alt="" /></p>
                      </li>
                      <li className="mt80">
                        <div className="in_cont_flex">
                          <div className="flex_in_left2">
                            <strong>혈관내 거품경화요법</strong> (Fluoroguided Endovenous Foam Sclerotherapy, EFS, Catheter 경화요법)
                            <p className="mt10">투시촬영하에 정맥 조영술을 시행하며 정맥류의 전반적인 상태를 평가하고 미세도관을 사용하여 정맥류의
                              기시부에 위치시킨 후 혈관내로 직접 경화제를 주사하는 방법입니다. 정맥류의 작은 가지까지 치료하여 경피적 경화요법이나
                              정맥절제술을 최소화 시킬 수 있어 흉터가 없는 치료법입니다.</p>
                          </div>
                          <div className="flex_in_img2">
                            <img src={thumb2283} alt="" />
                          </div>
                        </div>
                      </li>
                      <li className="mt80">
                        <div className="in_cont_flex">
                          <div className="flex_in_left2">
                            <strong>경화주사요법</strong> (Sclerotherapy)
                            <p className="mt10">육안 혹은 초음파 유도하에 확장된 혈관이나 원인이 되는 부위의 혈관에 경화제를 경피적으로 직접 주사한
                              뒤 일정기간 동안 압박하여 치료하는 방법입니다. <br />
                              수술을 하지 않는다는 장점이 있으며 수술과 병행하여 주로 시행되고 있습니다.</p>
                          </div>
                          <div className="flex_in_img2">
                            <img src={thumb2284} alt="" />
                          </div>
                        </div>
                      </li>
                      <li className="mt80">
                        <div className="in_cont_flex">
                          <div className="flex_in_left2">
                            <strong>보행정맥절제술</strong> (Ambulatory phlebectomy)
                            <p className="mt10">국소 마취하에 정맥류 부위에 약 2mm정도의 작은 피부 절개를 한 후 작은 기구로 정맥류 혈관을
                              빼내어 제거하는 방법입니다. <br />
                              미세 절개로 상처가 거의 남지 않으며 시술 후 정상 생활이 가능합니다.</p>
                          </div>
                          <div className="flex_in_img2">
                            <img src={thumb2285} alt="" />
                          </div>
                        </div>
                      </li>
                      <li className="mt80">
                        <div className="in_cont_flex">
                          <div className="flex_in_left">
                            <strong>관통정맥류의 치료</strong>
                            <p className="mt10">초음파 검사상 관통정맥류의 치료가 필요하다고 판단되면 <br />
                              수술적 결찰술, 초음파 유도하 경화요법 혹은 레이저 치료등을 시행합니다.</p>
                          </div>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
              </div>
              <div className={outerTab === 'out_tab02' ? 'cont_area active_cont' : 'cont_area'}>
                <DoctorListSection doctors={doctors} loading={loadingDocs} onShowSchedule={setScheduleDoctor} />
              </div>
            </div>
          </>
        )}

        {/* ===== 뇌신경질환클리닉 ===== */}
        {code === 'neuro' && (
          <>
            <div className="con_area">
              <div className="tab_area">
                <button type="button" className={outerTab === 'out_tab01' ? 'btn_tab active_tab' : 'btn_tab'} onClick={() => setOuterTab('out_tab01')}><span>진료과 소개</span></button>
                <button type="button" className={outerTab === 'out_tab02' ? 'btn_tab active_tab' : 'btn_tab'} onClick={() => setOuterTab('out_tab02')}><span>의료진 소개</span></button>
              </div>
              <div className={outerTab === 'out_tab01' ? 'cont_area active_cont' : 'cont_area'}>
              <div className="emergency_sec first_sec">
                <p className="info_tit">뇌신경질환클리닉</p>
                <p className="info_disc">
                  신경과는 중추 및 말초신경계 질환을 다루는 과로 가장 흔한 질환인 두통과 어지럼증 및 노인인구 증가로 인한 퇴행성 질환(치매, 파킨스병 등)을 다루며 뇌졸중(중풍)및
                  운동장애 그외 뇌전증(간질,말초신경, 뇌수막염,실신, 수면장애 등) 질환을 다루는 과입니다.
                </p>
              </div>
              <div className="emergency_sec">
                <div className="in_cont_sec">
                  <p className="in_cont_tit">신경과 진료안내</p>
                  <div className="in_cont_imgarea mt0">
                    <ul className="imgarea2_2_9">
                      <li>
                        <p className="img"><img src={thumb2291} alt="" /></p>
                        <p className="name">뇌혈류 초음파 진단기 TCD</p>
                      </li>
                      <li>
                        <p className="img"><img src={thumb2292} alt="" /></p>
                        <p className="name">뇌파(EEG) 검사기</p>
                      </li>
                      <li>
                        <p className="img"><img src={thumb2293} alt="" /></p>
                        <p className="name">근전도/유발전위 검사기</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="in_cont_sec">
                  <p className="in_cont_tit">진료안내</p>
                  <div className="in_cont_flex">
                    <ul className="dot_list3 wd33p">
                      <li>뇌졸중(중풍)</li>
                      <li>뇌출혈</li>
                      <li>두통(편두통,긴장성 두통)</li>
                      <li>어지럼증</li>
                      <li>치매</li>
                      <li>말초신경장애</li>
                    </ul>
                    <ul className="dot_list3 wd33p">
                      <li>파킨슨병</li>
                      <li>간질</li>
                      <li>근무력증</li>
                      <li>하지불안증후군</li>
                      <li>안면신경마비</li>
                      <li>수근관증후군</li>
                    </ul>
                  </div>
                </div>
                <div className="in_cont_sec">
                  <p className="in_cont_tit">검사안내</p>
                  <div className="in_cont_flex">
                    <div className="h_table half">
                      <table>
                        <caption>뇌신경질환 클리닉 검사안내표</caption>
                        <thead>
                          <tr>
                            <th>신경생리학검사</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td>근전도검사(EMC)</td></tr>
                          <tr><td>경동맥 초음파 검사</td></tr>
                          <tr><td>뇌혈류 검사(TCD)</td></tr>
                          <tr><td>뇌파 검사(EEG)</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="h_table half">
                      <table>
                        <caption>뇌신경질환 클리닉 검사안내표</caption>
                        <thead>
                          <tr>
                            <th>영상검사</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td>MRI</td></tr>
                          <tr><td>C.T</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div className={outerTab === 'out_tab02' ? 'cont_area active_cont' : 'cont_area'}>
                <DoctorListSection doctors={doctors} loading={loadingDocs} onShowSchedule={setScheduleDoctor} />
              </div>
            </div>
          </>
        )}

        {/* ===== 요로결석클리닉 ===== */}
        {code === 'urolithiasis' && (
          <>
            <div className="con_area">
              <div className="tab_area">
                <button type="button" className={outerTab === 'out_tab01' ? 'btn_tab active_tab' : 'btn_tab'} onClick={() => setOuterTab('out_tab01')}><span>진료과 소개</span></button>
                <button type="button" className={outerTab === 'out_tab02' ? 'btn_tab active_tab' : 'btn_tab'} onClick={() => setOuterTab('out_tab02')}><span>의료진 소개</span></button>
              </div>
              <div className={outerTab === 'out_tab01' ? 'cont_area active_cont' : 'cont_area'}>
              <div className="emergency_sec first_sec">
                <p className="info_tit">요로결석클리닉</p>
                <p className="info_disc">
                  신장(콩팥)에서 체질적으로 형성되는 돌로서 소변과 함께 체외로 배출되지 못하고 요관(신장에서 소변이 방광으로 내려가는 좁은 길)에 걸리는 상태를 요로결석 이라고
                  합니다. <br />
                  요로결석은 비뇨기과 통증의 가장 흔한 원인 중 하나로 전체인구의 약 10% 정도가 평생 한 번쯤 걸리는 질환입니다.
                </p>
                <div className="in_cont_sec mt50">
                  <div className="in_cont_imgarea mt0">
                    <ul className="imgarea2_2_10">
                      <li>
                        <p className="img"><img src={thumb22101} alt="" /></p>
                        <p className="name">심한 옆구리 통증</p>
                      </li>
                      <li>
                        <p className="img"><img src={thumb22102} alt="" /></p>
                        <p className="name">허리 통증</p>
                      </li>
                      <li>
                        <p className="img"><img src={thumb22103} alt="" /></p>
                        <p className="name">하복부 통증</p>
                      </li>
                      <li>
                        <p className="img"><img src={thumb22104} alt="" /></p>
                        <p className="name">혈뇨, 오줌소태 잔뇨감, 빈뇨 배뇨시 요도통증 고환(음낭)통증</p>
                      </li>
                      <li>
                        <p className="img"><img src={thumb22105} alt="" /></p>
                        <p className="name">복부팽만감</p>
                      </li>
                      <li>
                        <p className="img"><img src={thumb22106} alt="" /></p>
                        <p className="name">오심과 구토</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="in_cont_sec">
                  <p className="in_cont_tit">요로결석의 치료</p>
                  <ol className="num_list">
                    <li>소변검사</li>
                    <li>신장요관방광 촬영술(KUB)</li>
                    <li>배설성 요로 조형술(IVP)</li>
                    <li>초음파 촬영술</li>
                    <li>복부단층 촬영술</li>
                  </ol>
                  <ul className="dot_list3 mt15">
                    <li><strong className="t_bk">체외충격파쇄석기의 분쇄효과</strong></li>
                  </ul>
                  <p className="in_cont_txt mt15">
                    체외충격파쇄석술은 요관결석치료의 최신 치료 방법으로 시술시 통증이 경미하여 마취 등의 전처치가 필요 없으며 약 40분 동안 체외에서 충격파을 발생시켜,
                    체내의 결석을 분해하는 방법입니다. <br />
                    체외충격파쇄석술 치료 후 일상생활은 모두 가능하며 결석의 크기와 강도에 따라 추가 쇄석술이 필요할 수도 있으며, 수액치료 등의 추가 치료 및 입원치료 등도
                    가능합니다.
                  </p>
                  <div className="in_cont_imgarea">
                    <ul className="imgarea2_2_10">
                      <li>
                        <p className="img"><img src={thumb22107} alt="" /></p>
                        <p className="name">시술 전 신장결석</p>
                      </li>
                      <li>
                        <p className="img"><img src={thumb22108} alt="" /></p>
                        <p className="name">시술 후 분쇄된 결석</p>
                      </li>
                      <li>
                        <p className="img"><img src={thumb22109} alt="" /></p>
                        <p className="name">시술 전 X선 사진</p>
                      </li>
                      <li>
                        <p className="img"><img src={thumb221010} alt="" /></p>
                        <p className="name">시술 후 X선 사진</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="in_cont_sec">
                  <p className="in_cont_tit">메디인병원 요로결석 치료장비</p>
                  <div className="in_cont_imgarea">
                    <p className="img_ct"><img src={thumb221011} alt="" /></p>
                  </div>
                </div>
              </div>
              </div>
              <div className={outerTab === 'out_tab02' ? 'cont_area active_cont' : 'cont_area'}>
                <DoctorListSection doctors={doctors} loading={loadingDocs} onShowSchedule={setScheduleDoctor} />
              </div>
            </div>
          </>
        )}

        {/* ===== 신경통증클리닉 ===== */}
        {code === 'painclinic' && (
          <>
            <div className="con_area">
              <div className="tab_area">
                <button type="button" className={outerTab === 'out_tab01' ? 'btn_tab active_tab' : 'btn_tab'} onClick={() => setOuterTab('out_tab01')}><span>진료과 소개</span></button>
                <button type="button" className={outerTab === 'out_tab02' ? 'btn_tab active_tab' : 'btn_tab'} onClick={() => setOuterTab('out_tab02')}><span>의료진 소개</span></button>
              </div>
              <div className={outerTab === 'out_tab01' ? 'cont_area active_cont' : 'cont_area'}>
                <div className="emergency_sec">
                  <p className="info_tit">신경통증클리닉</p>
                  <p className="info_disc">
                    신경통증클리닉은 통증을 가능한 조기에 적극적인 치료를 함으로써 만성통증으로 진행되는 것을 막고 지속적인 관리를 통해 보다 안정적인 일상생활을 유지할 수 있도록
                    합니다.
                  </p>
                </div>
                <div className="emergency_sec">
                  <p className="info_tit">신경통증클리닉 진료분야</p>
                  <ul className="info_disc dot_list3">
                    <li>척추협착증</li>
                    <li>디스크돌출증</li>
                    <li>추관절질환</li>
                    <li>척추수술후증후군</li>
                    <li>척추압박골절</li>
                    <li>근근막통증증후군</li>
                    <li>근골격퇴행성질환</li>
                    <li>대상포진</li>
                    <li>대상포진후신경통</li>
                    <li>오십견</li>
                    <li>수족냉증</li>
                    <li>다한증</li>
                    <li>당뇨병성신경통증</li>
                    <li>긴장성 두통</li>
                    <li>경추성 두통</li>
                    <li>섬유근통</li>
                  </ul>
                </div>
              </div>
              <div className={outerTab === 'out_tab02' ? 'cont_area active_cont' : 'cont_area'}>
                <DoctorListSection doctors={doctors} loading={loadingDocs} onShowSchedule={setScheduleDoctor} />
              </div>
            </div>
          </>
        )}

    </SubPageLayout>
    {scheduleDoctor && (
      <ScheduleModal doctor={scheduleDoctor} onClose={() => setScheduleDoctor(null)} />
    )}
    </>
  )
}
