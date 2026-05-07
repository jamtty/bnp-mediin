import { useEffect } from 'react'
import { parseSchedule, type DoctorItem } from '../api/doctor'

export const DEFAULT_SCHEDULE_DAY_LABELS = [
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

interface Props {
  doctor: DoctorItem
  onClose: () => void
  currentDeptName: string
  scheduleDayLabels?: Array<{ key: string; label: string }>
}

export default function DoctorScheduleModal({
  doctor,
  onClose,
  currentDeptName,
  scheduleDayLabels = DEFAULT_SCHEDULE_DAY_LABELS,
}: Props) {
  const schedule = parseSchedule(doctor.schedule_json)
  const specialty = doctor.doc_specialty?.split('\n').filter(Boolean) ?? []
  const weekLabels = scheduleDayLabels.slice(0, 5)
  const satLabels  = scheduleDayLabels.slice(5)

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
                  {currentDeptName && <span className="major">{currentDeptName}</span>}
                </div>
                <dl>
                  <>
                    <dt>진료분야</dt>
                    <dd>{specialty.length > 0 ? <ul>{specialty.map((line, i) => <li key={i}>{line}</li>)}</ul> : '-'}</dd>
                  </>
                  <>
                    <dt>진료일정</dt>
                    <dd>
                      <div className="medical_schedule">
                        <table>
                          <caption>진료일정표</caption>
                          <thead>
                            <tr>
                              <th rowSpan={2}>구분</th>
                              {weekLabels.map((d) => (
                                <th key={d.key} rowSpan={2}>{d.label}</th>
                              ))}
                              <th colSpan={satLabels.length}>토</th>
                            </tr>
                            <tr>
                              {satLabels.map((d) => (
                                <th key={d.key}>{d.label.replace('토(', '').replace(')', '')}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {(['am', 'pm'] as const).map((period) => (
                              <tr key={period}>
                                <td>{period === 'am' ? '오전' : '오후'}</td>
                                {scheduleDayLabels.map((d) => (
                                  <td key={d.key}>
                                    {schedule
                                      ? ((schedule[period] as Record<string, string>)[d.key] || '-')
                                      : '-'}
                                  </td>
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
