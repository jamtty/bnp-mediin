import { useState, useEffect } from 'react'
import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'
import { fetchPublicDoctors, DEPT_CODE_MAP, type DoctorItem } from '../../api/doctor'

const DEPT_FILTER_LIST = [
  { code: 'all', label: '전체' },
  ...Object.entries(DEPT_CODE_MAP).map(([code, label]) => ({ code, label })),
]

function DoctorCard({ doctor }: { doctor: DoctorItem }) {
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
      </div>
    </div>
  )
}

export default function DoctorIntroPage() {
  const [allDoctors, setAllDoctors] = useState<DoctorItem[]>([])
  const [activeDept, setActiveDept] = useState<string>('all')
  const [loading, setLoading] = useState(true)

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
                    <DoctorCard key={doctor.id} doctor={doctor} />
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
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          </div>
        )}
      </div>
    </SubPageLayout>
  )
}
