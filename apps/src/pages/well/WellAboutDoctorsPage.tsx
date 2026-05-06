import { useState, useEffect } from 'react'
import WellSubPageLayout from '../../components/WellSubPageLayout'
import { fetchDoctorsByDept, parseSchedule, type DoctorItem, type ScheduleJson } from '@/api/doctor'

const SCHEDULE_DAY_LABELS = [
  { key: 'mon',  label: '월' },
  { key: 'tue',  label: '화' },
  { key: 'wed',  label: '수' },
  { key: 'thu',  label: '목' },
  { key: 'fri',  label: '금' },
  { key: 'sat1', label: '토(1주)' },
  { key: 'sat2', label: '토(2주)' },
  { key: 'sat3', label: '토(3주)' },
  { key: 'sat4', label: '토(4주)' },
  { key: 'sat5', label: '토(5주)' },
]

function ScheduleModal({ doctor, onClose }: { doctor: DoctorItem; onClose: () => void }) {
  const schedule: ScheduleJson | null = parseSchedule(doctor.schedule_json)
  const career = doctor.doc_career?.split('\n').filter(Boolean) ?? []

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
                  <strong className="name">{doctor.doc_name}</strong>
                  {doctor.doc_title && <span className="major">{doctor.doc_title}</span>}
                </div>
                <dl>
                  {career.length > 0 && (
                    <>
                      <dt>{doctor.career_label ?? '약력'}</dt>
                      <dd><ul>{career.map((line, i) => <li key={i}>{line}</li>)}</ul></dd>
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
                                <th colSpan={5}>토</th>
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

export default function WellAboutDoctorsPage() {
  const [doctors, setDoctors] = useState<DoctorItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState('')
  const [activeDoctor, setActiveDoctor] = useState<DoctorItem | null>(null)

  useEffect(() => {
    fetchDoctorsByDept('hpcenter')
      .then(setDoctors)
      .catch((err) => setError(err instanceof Error ? err.message : '의료진 정보를 불러오지 못했습니다.'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <WellSubPageLayout>
      <h3 className="cont_tit">건강증진센터 의료진 소개</h3>
      <div className="con_area">
        {loading && <p style={{ padding: '2rem', textAlign: 'center' }}>로딩중...</p>}
        {error && <p style={{ padding: '2rem', color: '#c00', textAlign: 'center' }}>{error}</p>}
        {!loading && !error && (
          <div className="medical_staff_list">
            {doctors.map((doc) => {
              const career = doc.doc_career?.split('\n').filter(Boolean) ?? []
              return (
                <div className="medical_staff" key={doc.id}>
                  <div className="ms_thumb">
                    {doc.img_url ? (
                      <img src={doc.img_url} alt={doc.doc_name} />
                    ) : (
                      <div style={{ width: '100%', height: '100%', background: '#e0e0e0' }} />
                    )}
                  </div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">{doc.doc_name}</strong>
                      {doc.doc_title && <span className="major">{doc.doc_title}</span>}
                    </div>
                    <dl>
                      <dt>{doc.career_label ?? '약력'}</dt>
                      <dd>
                        <ul>
                          {career.map((line, i) => <li key={i}>{line}</li>)}
                        </ul>
                      </dd>
                    </dl>
                    {doc.schedule_json && (
                      <button type="button" onClick={() => setActiveDoctor(doc)}>
                        <i className="ico_calendar"></i>
                        <span>진료시간표</span>
                      </button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
      {activeDoctor && (
        <ScheduleModal doctor={activeDoctor} onClose={() => setActiveDoctor(null)} />
      )}
    </WellSubPageLayout>
  )
}