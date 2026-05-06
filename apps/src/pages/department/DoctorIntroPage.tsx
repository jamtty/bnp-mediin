import { useState, useEffect } from 'react'
import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'
import { fetchPublicDoctors, parseSchedule, DEPT_CODE_MAP, type DoctorItem } from '../../api/doctor'

const DEPT_FILTER_LIST = [
  { code: 'all', label: '전체' },
  ...Object.entries(DEPT_CODE_MAP).map(([code, label]) => ({ code, label })),
]

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
                  <strong className="name">
                    {doctor.doc_name}{doctor.doc_title ? ` ${doctor.doc_title}` : ''}
                  </strong>
                  {doctor.doc_major && <span className="major">{doctor.doc_major}</span>}
                </div>
                <dl>
                  {specialty.length > 0 && (
                    <>
                      <dt>진료분야</dt>
                      <dd>
                        <ul>
                          {specialty.map((line, i) => <li key={i}>{line}</li>)}
                        </ul>
                      </dd>
                    </>
                  )}
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
                                    <td key={d.key}>
                                      {schedule
                                        ? ((schedule[period] as Record<string, string>)[d.key] || '-')
                                        : '-'
                                      }
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

function DoctorCard({ doctor, onShowSchedule }: { doctor: DoctorItem; onShowSchedule: (d: DoctorItem) => void }) {
  return (
    <div className="doctor_card">
      <div className="doctor_card_img">
        {doctor.img_url ? (
          <img src={doctor.img_url} alt={doctor.doc_name} />
        ) : (
          <div className="doctor_card_img_empty">
            <span>사진없음</span>
          </div>
        )}
      </div>
      <div className="doctor_card_info">
        <p className="doctor_card_name">
          {doctor.doc_name}
          {doctor.doc_title ? ` ${doctor.doc_title}` : ''}
        </p>
        {doctor.doc_major && (
          <p className="doctor_card_major">{doctor.doc_major}</p>
        )}
        <button
          type="button"
          className="doctor_card_schedule_btn"
          onClick={() => onShowSchedule(doctor)}
        >
          <i className="ico_calendar"></i>
          <span>진료시간표</span>
        </button>
      </div>
    </div>
  )
}

export default function DoctorIntroPage() {
  const [allDoctors, setAllDoctors] = useState<DoctorItem[]>([])
  const [activeDept, setActiveDept] = useState<string>('all')
  const [loading, setLoading] = useState(true)
  const [scheduleDoctor, setScheduleDoctor] = useState<DoctorItem | null>(null)

  useEffect(() => {
    setLoading(true)
    fetchPublicDoctors()
      .then(setAllDoctors)
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  // 실제 데이터가 있는 진료과만 필터 버튼에 표시
  const existingDeptCodes = [...new Set(allDoctors.map((d) => d.dept_code))]
  const visibleFilters = DEPT_FILTER_LIST.filter(
    (f) => f.code === 'all' || existingDeptCodes.includes(f.code),
  )

  const filtered =
    activeDept === 'all'
      ? allDoctors
      : allDoctors.filter((d) => d.dept_code === activeDept)

  // 선택된 진료과별로 그룹화 (전체 선택 시)
  const groupedByDept: { code: string; label: string; doctors: DoctorItem[] }[] =
    activeDept === 'all'
      ? existingDeptCodes
          .map((code) => ({
            code,
            label: DEPT_CODE_MAP[code] ?? code,
            doctors: allDoctors.filter((d) => d.dept_code === code),
          }))
          .filter((g) => g.doctors.length > 0)
      : []

  return (
    <SubPageLayout
      visualClass="vs2"
      visualTitle="진료과안내"
      contentsClass="sub02"
      lnbItems={lnbItems}
    >
      <h3 className="cont_tit" style={{ marginBottom: 50 }}>의료진소개</h3>
      <div className="con_area">
        {/* 진료과 필터 */}
        <div className="doctor_dept_filter">
          {visibleFilters.map((f) => (
            <button
              key={f.code}
              type="button"
              className={activeDept === f.code ? 'active' : ''}
              onClick={() => setActiveDept(f.code)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {loading && (
          <p style={{ padding: '40px 0', color: '#888', textAlign: 'center' }}>
            의료진 정보를 불러오는 중입니다...
          </p>
        )}

        {!loading && filtered.length === 0 && (
          <p className="no_doctor_msg">등록된 의료진이 없습니다.</p>
        )}

        {!loading && activeDept === 'all' && groupedByDept.length > 0 && (
          <>
            {groupedByDept.map((group) => (
              <div key={group.code} className="doctor_dept_section">
                <h4 className="doctor_dept_section_title">{group.label}</h4>
                <div className="doctor_card_list">
                  {group.doctors.map((doctor) => (
                    <DoctorCard key={doctor.id} doctor={doctor} onShowSchedule={setScheduleDoctor} />
                  ))}
                </div>
              </div>
            ))}
          </>
        )}

        {!loading && activeDept !== 'all' && filtered.length > 0 && (
          <div className="doctor_dept_section">
            <h4 className="doctor_dept_section_title">
              {DEPT_CODE_MAP[activeDept] ?? activeDept}
            </h4>
            <div className="doctor_card_list">
              {filtered.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} onShowSchedule={setScheduleDoctor} />
              ))}
            </div>
          </div>
        )}
      </div>
      {scheduleDoctor && (
        <ScheduleModal doctor={scheduleDoctor} onClose={() => setScheduleDoctor(null)} />
      )}
    </SubPageLayout>
  )
}
