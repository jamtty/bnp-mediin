import { useState, useEffect } from 'react'
import WellSubPageLayout from '../../components/WellSubPageLayout'
import DoctorScheduleModal from '../../components/DoctorScheduleModal'
import { fetchDoctorsByDept, type DoctorItem } from '@/api/doctor'

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
                    <button type="button" onClick={() => setActiveDoctor(doc)}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
      {activeDoctor && (
        <DoctorScheduleModal doctor={activeDoctor} onClose={() => setActiveDoctor(null)} currentDeptName="건강증진센터" />
      )}
    </WellSubPageLayout>
  )
}