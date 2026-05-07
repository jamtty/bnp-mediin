import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'
import emergencyImg2113 from '../../assets/images/emergency_img2_1_13.png'
import thumb2113_1 from '../../assets/images/thumb2_1_13_1.png'
import thumb2113_2 from '../../assets/images/thumb2_1_13_2.png'
import thumb2113_3 from '../../assets/images/thumb2_1_13_3.png'
import thumb2113_4 from '../../assets/images/thumb2_1_13_4.png'
import { fetchDoctorsByDept, type DoctorItem } from '../../api/doctor'
import DoctorScheduleModal from '../../components/DoctorScheduleModal'

const deptNames: Record<string, string> = {
  internal: '내과',
  cardiology: '심장내과',
  respiratory: '호흡기내과',
  gastroenterology: '소화기내과',
  nephrology: '신장내과',
  rheumatology: '류마티스내과',
  neurology: '신경과',
  surgery: '외과',
  obstetrics: '산부인과',
  orthopedics: '정형외과',
  urology: '비뇨의학과',
  painclinic: '신경통증클리닉',
  anesthesiology: '마취통증의학과',
  labmedicine: '진단검사의학과',
  radiology: '영상의학과',
  emergency: '응급의학과',
  criticalcare: '중환자의학과',
}

const deptThirdItems = Object.entries(deptNames).map(([code, name]) => ({
  label: name,
  to: `/department/intro/${code}`,
}))

function DoctorListSection({
  doctors,
  loading,
  onShowSchedule,
  currentDeptName,
}: {
  doctors: DoctorItem[]
  loading: boolean
  onShowSchedule: (doctor: DoctorItem) => void
  currentDeptName: string
}) {
  if (loading) {
    return <p style={{ padding: '20px 0', color: '#888' }}>의료진 정보를 불러오는 중입니다...</p>
  }
  if (doctors.length === 0) {
    return <p className="no_doctor_msg">등록된 의료진이 없습니다.</p>
  }
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
                <strong className="name">
                  {doctor.doc_name}{doctor.doc_title ? ` ${doctor.doc_title}` : ''}
                </strong>
                {currentDeptName && <span className="major">{currentDeptName}</span>}
              </div>
              {career.length > 0 && (
                <dl>
                  <dt>{doctor.career_label ?? '약력'}</dt>
                  <dd>
                    <ul>
                      {career.map((line, i) => <li key={i}>{line}</li>)}
                    </ul>
                  </dd>
                </dl>
              )}
              <button type="button" onClick={() => onShowSchedule(doctor)}>
                <i className="ico_calendar"></i>
                <span>진료시간표</span>
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function DeptDetailPage() {
  const { code } = useParams<{ code: string }>()
  const [activeTab, setActiveTab] = useState('tab01')
  const [doctors, setDoctors] = useState<DoctorItem[]>([])
  const [loadingDocs, setLoadingDocs] = useState(false)
  const [scheduleDoctor, setScheduleDoctor] = useState<DoctorItem | null>(null)
  const deptName = code ? deptNames[code] : undefined

  useEffect(() => {
    setActiveTab('tab01')
    setDoctors([])
    if (code) {
      setLoadingDocs(true)
      fetchDoctorsByDept(code)
        .then(setDoctors)
        .catch(() => {})
        .finally(() => setLoadingDocs(false))
    }
  }, [code])

  if (!deptName) {
    return (
      <SubPageLayout
        visualClass="vs2"
        visualTitle="진료과안내"
        contentsClass="sub02"
        lnbItems={lnbItems}
      >
        <h3 className="cont_tit">진료과 소개</h3>
        <div className="con_area">
          <p>해당 진료과 정보를 찾을 수 없습니다.</p>
          <Link to="/department/intro">진료과 목록으로 돌아가기</Link>
        </div>
      </SubPageLayout>
    )
  }

  return (
    <SubPageLayout
      visualClass="vs2"
      visualTitle="진료과안내"
      contentsClass="sub02"
      lnbItems={lnbItems}
      thirdLevelLabel={deptName}
      thirdLevelItems={deptThirdItems}
    >
      <h3 className="cont_tit">{deptName}</h3>
      <div className="con_area">
        <div className="tab_area">
          <button
            type="button"
            className={activeTab === 'tab01' ? 'btn_tab active_tab' : 'btn_tab'}
            onClick={() => setActiveTab('tab01')}
          >
            <span>진료과 소개</span>
          </button>
          <button
            type="button"
            className={activeTab === 'tab02' ? 'btn_tab active_tab' : 'btn_tab'}
            onClick={() => setActiveTab('tab02')}
          >
            <span>의료진 소개</span>
          </button>
        </div>

        {/* ===== 내과 ===== */}
        {code === 'internal' && (
          <>
            <div className={activeTab === 'tab01' ? 'cont_area active_cont' : 'cont_area'}>
              <div className="emergency_sec">
                <p className="info_tit">내과</p>
                <p className="info_disc">
                  내과는 신장, 심장, 폐를 비롯한 위, 간 대장, 소장 등 소화기암 등 기타
                  병변, 고혈압, 당뇨병, 성인병 전염병 등 통상적으로 발생하는 모든 질환들에
                  대하여 치료 관리하는 진료과입니다. 최근 빠른 고령화로 인한 노인성 질환 및
                  성인병 등 합병증 관리를 통합적으로 진단 치료합니다.
                </p>
              </div>
              <div className="emergency_sec">
                <p className="info_tit">내과 진료분야</p>
                <ul className="info_disc dot_list3">
                  <li>소화기 내과, 위, 대장내시경, 만성폐색성 폐질환, 기관지천식</li>
                  <li>역류성 식도염, 위궤양, 과민성대장증후군</li>
                  <li>상,하복부 초음파</li>
                  <li>성인병, 노인병</li>
                  <li>두드러기, 고혈압, 고지혈증, 심부전, 협심증</li>
                  <li>갑상선 질환, 당뇨, 심장초음파</li>
                </ul>
              </div>
            </div>
            <div className={activeTab === 'tab02' ? 'cont_area active_cont' : 'cont_area'}>
              <DoctorListSection doctors={doctors} loading={loadingDocs} onShowSchedule={setScheduleDoctor} currentDeptName={deptName ?? ""} />
            </div>
          </>
        )}
        {/* ===== 심장내과 ===== */}
        {code === 'cardiology' && (
          <>
            <div className={activeTab === 'tab01' ? 'cont_area active_cont' : 'cont_area'}>
              <div className="emergency_sec">
                <p className="info_tit">심장내과</p>
                <p className="info_disc">
                  심장내과는 신장, 심장, 폐를 비롯한 위, 간, 대장, 소장 등 소화기암 등 기타
                  병변, 고혈압, 당뇨병, 성인병 전염병 등 통상적으로 발생하는 모든 질환들에
                  대하여 치료 관리하는 진료과입니다. 최근 빠른 고령화로 인한 노인성 질환 및
                  성인병 등 합병증 관리를 통합적으로 진단 치료합니다.
                </p>
              </div>
              <div className="emergency_sec">
                <p className="info_tit">심장내과 진료분야</p>
                <ul className="info_disc dot_list3">
                  <li>허혈성 심질환</li>
                  <li>고혈압</li>
                  <li>고지혈증</li>
                  <li>심부전</li>
                  <li>부정맥</li>
                  <li>심장판막질환</li>
                </ul>
              </div>
            </div>
            <div className={activeTab === 'tab02' ? 'cont_area active_cont' : 'cont_area'}>
              <DoctorListSection doctors={doctors} loading={loadingDocs} onShowSchedule={setScheduleDoctor} currentDeptName={deptName ?? ""} />
            </div>
          </>
        )}
        {/* ===== 호흡기내과 ===== */}
        {code === 'respiratory' && (
          <>
            <div className={activeTab === 'tab01' ? 'cont_area active_cont' : 'cont_area'}>
              <div className="emergency_sec">
                <p className="info_tit">호흡기내과</p>
                <p className="info_disc">
                  호흡기 내과는 기관지, 폐장, 폐를 둘러싸고 있는 흉막에 발생하는 질환을 다루고 있습니다. <br />
                  폐렴이나 폐결핵, 폐섬유증, 간질성 폐질환, 폐색전증이나 폐고혈압, 흉수, 기흉, 천식 등 폐와 흉막질환에 대한 다양한 진단과 치료를 하고 있습니다. <br />
                  정확한 진단을 위해 기관지내시경과 폐기능검사를 시행합니다.
                </p>
              </div>
              <div className="emergency_sec">
                <p className="info_tit">호흡기내과 진료분야</p>
                <ul className="info_disc dot_list3">
                  <li>폐암의 조기 진단</li>
                  <li>폐렴, 기관지염, 간질성 폐질환</li>
                  <li>기관지 확장증, 폐기종, 만성폐쇄성 폐질환</li>
                  <li>폐결핵, 잠복결핵, 비결핵항산균</li>
                  <li>천식 및 알레르기 비염, 만성기침</li>
                  <li>흉수 및 늑막염 등 각종 흉막질환</li>
                  <li>호흡부전, 중환자의학</li>
                  <li>인후염, 부비동염, 급성 상기도 감염</li>
                  <li>금연치료</li>
                </ul>
              </div>
            </div>
            <div className={activeTab === 'tab02' ? 'cont_area active_cont' : 'cont_area'}>
              <DoctorListSection doctors={doctors} loading={loadingDocs} onShowSchedule={setScheduleDoctor} currentDeptName={deptName ?? ""} />
            </div>
          </>
        )}
        {/* ===== 소화기내과 ===== */}
        {code === 'gastroenterology' && (
          <>
            <div className={activeTab === 'tab01' ? 'cont_area active_cont' : 'cont_area'}>
              <div className="emergency_sec">
                <p className="info_tit">소화기내과</p>
                <p className="info_disc">
                  소화기 내과는 음식물의 소화와 흡수, 체내 저장 및 주요 생체활성물질의 합성 및 해독작용, 배설 등 생명유지에 필수적인 역할을 담당합니다. <br />메디인 병원 소화기내과는 소화기와 관련된 식도, 위, 소장, 대장, 간 췌장 및 담낭을 치료합니다.
                </p>
                <p className="info_disc">
                  <br />
                  <span><b style={{ fontSize: 'larger', fontWeight: 'bold' }}>소화기 내과 시술 ERCP(내시경역행담췌관조영술)</b></span> <br />
                  ERCP는 담관 및 췌관과 연관된 질환이 의심되거나 발생한 경우 시행됩니다.
                </p>
                <p className="info_disc">
                  <br />
                  가장 흔하게 시행되는 경우는 급성담관염으로, 담석이 담관을 막아서 생기는 질환이며 패혈증으로 진행할 수 있어 ERCP를 통한 빠른 담석제거가 필요한 질환입니다. <br />
                  한편 담석으로 인해 발생한 급성췌장염에서도 ERCP가 필요한 경우가 있습니다.
                </p>
              </div>
              <div className="emergency_sec">
                <p className="info_tit">소화기내과 진료분야</p>
                <ul className="info_disc dot_list3">
                  <li>위,대장 질환 및 치료내시경시술</li>
                  <li>급성 및 만성간질환</li>
                  <li>췌담도질환 및 담도내시경치료</li>
                </ul>
              </div>
            </div>
            <div className={activeTab === 'tab02' ? 'cont_area active_cont' : 'cont_area'}>
              <DoctorListSection doctors={doctors} loading={loadingDocs} onShowSchedule={setScheduleDoctor} currentDeptName={deptName ?? ""} />
            </div>
          </>
        )}
        {/* ===== 신장내과 ===== */}
        {code === 'nephrology' && (
          <>
            <div className={activeTab === 'tab01' ? 'cont_area active_cont' : 'cont_area'}>
              <div className="emergency_sec">
                <p className="info_tit">신장내과</p>
                <p className="info_disc">
                  신장 내과는 신장/비뇨기계의 질환 중 내과적인 치료를 하는 진료과입니다.
                </p>
              </div>
              <div className="emergency_sec">
                <p className="info_tit">신장내과 진료분야</p>
                <ul className="info_disc dot_list3">
                  <li>사구체신염</li>
                  <li>신증후군</li>
                  <li>만성신부전</li>
                  <li>급성신부전</li>
                  <li>급성신우염</li>
                  <li>방광염</li>
                  <li>당뇨병성 신증</li>
                  <li>혈액투석</li>
                  <li>단백뇨</li>
                </ul>
              </div>
            </div>
            <div className={activeTab === 'tab02' ? 'cont_area active_cont' : 'cont_area'}>
              <DoctorListSection doctors={doctors} loading={loadingDocs} onShowSchedule={setScheduleDoctor} currentDeptName={deptName ?? ""} />
            </div>
          </>
        )}
        {/* ===== 류마티스내과 ===== */}
        {code === 'rheumatology' && (
          <>
            <div className={activeTab === 'tab01' ? 'cont_area active_cont' : 'cont_area'}>
              <div className="emergency_sec">
                <p className="info_tit">류마티스내과</p>
                <p className="info_disc">
                  <span style={{ fontWeight: 600 }}>류마티스</span>란 관절과 그 주변 조직에 관련된 모든 질환을 통칭하는 말로, 일반적으로 '관절 질환'으로 이해할 수 있습니다.<br />
                  하지만 단순히 관절의 문제가 아니라, <span style={{ fontWeight: 600 }}>전신적인 이상</span>으로 인해 발생하는 경우도 많습니다.
                </p>
                <p className="info_disc">
                  예를 들어 <span style={{ fontWeight: 600 }}>통풍</span>은 혈액 내 요산(대사산물)이 비정상적으로 증가하면서 요산이 관절에 쌓여 급성 염증과 심한 통증을 일으키는 <span style={{ fontWeight: 600 }}>대표적인 류마티스 질환</span>입니다.<br />
                  또한 <span style={{ fontWeight: 600 }}>자가면역질환</span>처럼, 면역체계의 이상으로 인해 자신의 관절이나 조직을 공격하면서 생기는 <span style={{ fontWeight: 600 }}>만성 염증성 질환</span>도 있습니다.
                </p>
                <p className="info_disc">
                  대표적으로 <span style={{ fontWeight: 600 }}>류마티스관절염, 전신홍반루푸스(SLE), 강직성 척추염, 쇼그렌 증후군, 베체트병</span> 등이 이에 해당합니다.<br />
                  이처럼 류마티스 질환은 단순한 관절 통증에서부터 <span style={{ fontWeight: 600 }}>대사장애, 면역 이상, 전신 염증 반응</span>에 이르기까지 복합적이고 광범위한 질환군이기 때문에 <span style={{ fontWeight: 600 }}>정밀한 진단과 전문적인 치료</span>가 반드시 필요합니다.<br />
                  <span style={{ fontWeight: 600 }}>류마티스내과</span>는 이러한 다양한 <span style={{ fontWeight: 600 }}>관절 및 면역계 질환</span>을 전문적으로 진료하는 내과의 세부 진료 분야입니다.
                </p>
                <p className="info_disc">
                  저희 류마티스내과는 최신 진단 장비와 치료 지침을 바탕으로 환자 개개인의 증상과 생활환경에 맞춘 <span style={{ fontWeight: 600 }}>맞춤형 치료</span>를 제공합니다.
                </p>
              </div>
              <div className="emergency_sec">
                <p className="info_tit">이런 증상이 있다면 류마티스내과 진료가 필요합니다</p>
                <ul className="info_disc dot_list3">
                  <li>관절통, 관절 붓기</li>
                  <li>허리 통증, 전신 근육통</li>
                  <li>입마름, 안구 건조</li>
                  <li>뺨 발진, 원발형 발진</li>
                  <li>구강 궤양, 재발성 포도막염</li>
                  <li>손발 피부색 변화, 피부경화 등</li>
                </ul>
              </div>
              <div className="emergency_sec">
                <p className="info_tit">주요 진료 질환</p>
                <ul className="info_disc dot_list3">
                  <li>류마티스관절염</li>
                  <li>강직성 척추염</li>
                  <li>통풍</li>
                  <li>골관절염(퇴행성 관절염)</li>
                  <li>전신홍반루푸스(SLE)</li>
                  <li>쇼그렌증후군</li>
                  <li>재발류마티즘</li>
                  <li>류마티스다발근통</li>
                  <li>섬유근통증후군</li>
                  <li>전신경화증</li>
                  <li>염증근질환</li>
                  <li>혼합결합조직병</li>
                </ul>
              </div>
            </div>
            <div className={activeTab === 'tab02' ? 'cont_area active_cont' : 'cont_area'}>
              <DoctorListSection doctors={doctors} loading={loadingDocs} onShowSchedule={setScheduleDoctor} currentDeptName={deptName ?? ""} />
            </div>
          </>
        )}
        {/* ===== 신경과 ===== */}
        {code === 'neurology' && (
          <>
            <div className={activeTab === 'tab01' ? 'cont_area active_cont' : 'cont_area'}>
              <div className="emergency_sec">
                <p className="info_tit">신경과</p>
                <p className="info_disc">
                  신경과는 중추신경계와 말초신경계 질환을 치료하며, 퇴행성질환 및 신경병성 근육질환 자율신경이상질환 및 신경계 질환을 진단하고 치료합니다.
                </p>
              </div>
              <div className="emergency_sec">
                <p className="info_tit">신경과 진료분야</p>
                <ul className="info_disc dot_list3">
                  <li>두통</li>
                  <li>어지럼증</li>
                  <li>뇌졸중</li>
                  <li>치매</li>
                  <li>파킨슨</li>
                  <li>뇌전증</li>
                  <li>수면장애</li>
                  <li>실신 등 각종 신경장애</li>
                </ul>
              </div>
            </div>
            <div className={activeTab === 'tab02' ? 'cont_area active_cont' : 'cont_area'}>
              <DoctorListSection doctors={doctors} loading={loadingDocs} onShowSchedule={setScheduleDoctor} currentDeptName={deptName ?? ""} />
            </div>
          </>
        )}
        {/* ===== 외과 ===== */}
        {code === 'surgery' && (
          <>
            <div className={activeTab === 'tab01' ? 'cont_area active_cont' : 'cont_area'}>
              <div className="emergency_sec">
                <p className="info_tit">외과</p>
                <p className="info_disc">
                  외과는 수술적 치료를 통해 각종 질환을 치료하는 진료과로서 우리 병원은 대장, 항문을 전문으로 하며 치핵, 치열 치료 및 단일통로 복강경 수술(충수, 탈장,
                  담낭), 화상 치료 등을 전문적으로 치료합니다.
                </p>
              </div>
              <div className="emergency_sec">
                <p className="info_tit">외과 진료분야</p>
                <ul className="info_disc dot_list3">
                  <li>단일통로 복강경 수술(충수,탈장,담낭)</li>
                  <li>화상치료</li>
                  <li>항문외과 분야 복강경담낭절제술</li>
                  <li>충수염</li>
                  <li>치루</li>
                  <li>치열</li>
                  <li>치핵 등</li>
                </ul>
              </div>
            </div>
            <div className={activeTab === 'tab02' ? 'cont_area active_cont' : 'cont_area'}>
              <DoctorListSection doctors={doctors} loading={loadingDocs} onShowSchedule={setScheduleDoctor} currentDeptName={deptName ?? ""} />
            </div>
          </>
        )}
        {/* ===== 산부인과 ===== */}
        {code === 'obstetrics' && (
          <>
            <div className={activeTab === 'tab01' ? 'cont_area active_cont' : 'cont_area'}>
              <div className="emergency_sec">
                <p className="info_tit">산부인과</p>
                <p className="info_disc">
                  메디인 병원 산부인과에서는 부인과 질환을 진료합니다.(분만실은 운영하지 않습니다.)
                </p>
              </div>
              <div className="emergency_sec">
                <p className="info_tit">산부인과 진료분야</p>
                <ul className="info_disc dot_list3">
                  <li>단일공 복강경 수술, 자궁난소보존수술</li>
                  <li>자궁경 수술</li>
                  <li>여성 회음부 수술[질성형, 소음순성형, 음핵성형]</li>
                  <li>피임, 폐경, 갱년기 관리</li>
                  <li>일반 부인과 질환</li>
                  <li>유방, 갑상선 검진</li>
                  <li>자궁경부암 예방접종</li>
                </ul>
              </div>
            </div>
            <div className={activeTab === 'tab02' ? 'cont_area active_cont' : 'cont_area'}>
              <DoctorListSection doctors={doctors} loading={loadingDocs} onShowSchedule={setScheduleDoctor} currentDeptName={deptName ?? ""} />
            </div>
          </>
        )}
        {/* ===== 정형외과 ===== */}
        {code === 'orthopedics' && (
          <>
            <div className={activeTab === 'tab01' ? 'cont_area active_cont' : 'cont_area'}>
              <div className="emergency_sec">
                <p className="info_tit">정형외과</p>
                <p className="info_disc">
                  정형외과는 몸을 구성하는 뼈, 혈관, 신경, 힘줄, 근육, 인대 등에 발생하는 질환이나 외상을 치료하는 진료과이며, 최근 빠른 고령화로 인한 퇴행성 관절 질환
                  등의 증가로 더욱이 더 중요시되고 있는 진료과입니다.
                </p>
              </div>
              <div className="emergency_sec">
                <p className="info_tit">정형외과 진료분야</p>
                <ul className="info_disc dot_list3">
                  <li>슬관절</li>
                  <li>고관절 퇴행성 관절염</li>
                  <li>무혈성괴사</li>
                  <li>인공관절 치환술</li>
                  <li>류마티스관절염</li>
                  <li>오십견</li>
                  <li>회전근개 파열</li>
                  <li>터널증후군</li>
                  <li>관절염</li>
                  <li>스포츠손상</li>
                  <li>골절 등</li>
                </ul>
              </div>
            </div>
            <div className={activeTab === 'tab02' ? 'cont_area active_cont' : 'cont_area'}>
              <DoctorListSection doctors={doctors} loading={loadingDocs} onShowSchedule={setScheduleDoctor} currentDeptName={deptName ?? ""} />
            </div>
          </>
        )}
        {/* ===== 비뇨의학과 ===== */}
        {code === 'urology' && (
          <>
            <div className={activeTab === 'tab01' ? 'cont_area active_cont' : 'cont_area'}>
              <div className="emergency_sec">
                <p className="info_tit">비뇨의학과</p>
                <p className="info_disc">
                  비뇨의학과는 신장, 요관, 방관, 요도 등 소변에 관련된 장기와 전립선, 고환, 음경 등 생식기관 관련된 질환을 다루는 진료과입니다. <br />
                  비뇨의학과에서는 신장(腎臟)·수뇨관(輸尿管)·방광(膀胱) 및 요도(尿道) 등의 비뇨기관과 고환·전립선(前立腺)·음낭·음경 등의 남성 성기에 생기는 질환을
                  진료합니다.<br />
                  본원에서는 24시간 운영하는 응급실과 협조하여 초음파, 조영제 단층촬영 등의 검사를 통해 요관결석을 진단하여 체외충격파쇄석술로 결석을 분쇄, 제거하는 치료를
                  주로 하고 있으며 전신증상을 동반한 노인성 배뇨곤란, 신우신염, 전립선염 등의 질환은 신장내과와 협진하여 입원치료도 가능합니다. 다만, 수술 등 비뇨기외과적 진료는 하고 있지 않습니다.
                </p>
              </div>
              <div className="emergency_sec">
                <p className="info_tit">비뇨의학과 진료분야</p>
                <ul className="info_disc dot_list3">
                  <li>요로결석</li>
                  <li>배뇨곤란</li>
                  <li>요실금</li>
                  <li>전립선비대증 등</li>
                </ul>
              </div>
              <div className="emergency_sec">
                <p className="emergency_img"><img src={emergencyImg2113} alt="" /></p>
                <div className="in_cont_sec">
                  <div className="in_cont_imgarea">
                    <p className="in_cont_img_tit"><strong>[ESWL]</strong> 체외충격파쇄석기의 분쇄효과</p>
                    <ul className="imgarea2_2_5_2">
                      <li>
                        <p className="img"><img src={thumb2113_1} alt="" /></p>
                        <p className="name">시술 전 신장결석</p>
                      </li>
                      <li>
                        <p className="img"><img src={thumb2113_2} alt="" /></p>
                        <p className="name">시술 후 분쇄된 결석</p>
                      </li>
                      <li>
                        <p className="img"><img src={thumb2113_3} alt="" /></p>
                        <p className="name">시술 전 X선 사진</p>
                      </li>
                      <li>
                        <p className="img"><img src={thumb2113_4} alt="" /></p>
                        <p className="name">시술 후 X선 사진</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className={activeTab === 'tab02' ? 'cont_area active_cont' : 'cont_area'}>
              <DoctorListSection doctors={doctors} loading={loadingDocs} onShowSchedule={setScheduleDoctor} currentDeptName={deptName ?? ""} />
            </div>
          </>
        )}
        {/* ===== 신경통증클리닉 ===== */}
        {code === 'painclinic' && (
          <>
            <div className={activeTab === 'tab01' ? 'cont_area active_cont' : 'cont_area'}>
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
                  <li><span style={{ fontFamily: 'inherit', letterSpacing: '-0.02em' }}>당뇨병성신경통증</span></li>
                </ul>
              </div>
            </div>
            <div className={activeTab === 'tab02' ? 'cont_area active_cont' : 'cont_area'}>
              <DoctorListSection doctors={doctors} loading={loadingDocs} onShowSchedule={setScheduleDoctor} currentDeptName={deptName ?? ""} />
            </div>
          </>
        )}
        {/* ===== 마취통증의학과 ===== */}
        {code === 'anesthesiology' && (
          <>
            <div className={activeTab === 'tab01' ? 'cont_area active_cont' : 'cont_area'}>
              <div className="emergency_sec">
                <p className="info_tit">마취통증의학과</p>
                <p className="info_disc">
                  마취 통증의학과는 외과 수술 시 필요한 전신마취와 부분마취, 내과적 검사 및 처치에 필요한 수면치료, 수술 후 통증을 포함한 급성 및 만성통증에 대하여 진단과
                  치료를 합니다.
                </p>
              </div>
              <div className="emergency_sec">
                <p className="info_tit">마취통증의학과 진료분야</p>
                <ul className="info_disc dot_list3">
                  <li>전신마취 , 부분마취</li>
                  <li>내과적 검사 및 처치에 필요한 수면치료</li>
                  <li>수술 시 마취 관리</li>
                  <li>수술 후 통증을 포함한 급성 및 만성통증에 대한 진단과 치료</li>
                </ul>
              </div>
            </div>
            <div className={activeTab === 'tab02' ? 'cont_area active_cont' : 'cont_area'}>
              <DoctorListSection doctors={doctors} loading={loadingDocs} onShowSchedule={setScheduleDoctor} currentDeptName={deptName ?? ""} />
            </div>
          </>
        )}
        {/* ===== 진단검사의학과 ===== */}
        {code === 'labmedicine' && (
          <>
            <div className={activeTab === 'tab01' ? 'cont_area active_cont' : 'cont_area'}>
              <div className="emergency_sec">
                <p className="info_tit">진단검사의학과</p>
                <p className="info_disc">
                  환자로부터 채취한 혈액, 소변, 객담 및 각종 체액 등의 검체를 검사하여 질병의 진단, 치료 및 예후판정을 가능하게 하는 부서입니다.
                </p>
              </div>
              <div className="emergency_sec">
                <p className="info_tit">진단검사의학과 진료분야</p>
                <ul className="info_disc dot_list3">
                  <li>임상화학</li>
                  <li>진단혈액</li>
                  <li>진단면역</li>
                  <li>진단유전</li>
                  <li>임상미생물</li>
                  <li>혈액은행 등</li>
                </ul>
              </div>
            </div>
            <div className={activeTab === 'tab02' ? 'cont_area active_cont' : 'cont_area'}>
              <DoctorListSection doctors={doctors} loading={loadingDocs} onShowSchedule={setScheduleDoctor} currentDeptName={deptName ?? ""} />
            </div>
          </>
        )}
        {/* ===== 영상의학과 ===== */}
        {code === 'radiology' && (
          <>
            <div className={activeTab === 'tab01' ? 'cont_area active_cont' : 'cont_area'}>
              <div className="emergency_sec">
                <p className="info_tit">영상의학과</p>
                <p className="info_disc">
                  영상의학과는 MRI, CT, X-ray, 초음파검사등 영상검사와 판독을 통해 환자를 진단하고 치료방향을 결정합니다. 최근 영상장비를 이용한 중재시술등 검사와
                  치료를 동시에 시행합니다.
                </p>
              </div>
              <div className="emergency_sec">
                <p className="info_tit">영상의학과 진료분야</p>
                <ul className="info_disc dot_list3">
                  <li>중재시술클리닉</li>
                  <li>맘모톰,갑상선고주사절제술</li>
                  <li>하지정맥류</li>
                  <li>영상판독의</li>
                </ul>
              </div>
            </div>
            <div className={activeTab === 'tab02' ? 'cont_area active_cont' : 'cont_area'}>
              <DoctorListSection doctors={doctors} loading={loadingDocs} onShowSchedule={setScheduleDoctor} currentDeptName={deptName ?? ""} />
            </div>
          </>
        )}
        {/* ===== 응급의학과 ===== */}
        {code === 'emergency' && (
          <>
            <div className={activeTab === 'tab01' ? 'cont_area active_cont' : 'cont_area'}>
              <div className="emergency_sec">
                <p className="info_tit">응급의학과</p>
                <p className="info_disc">
                  응급실은 연중 무휴로 24시간 진료가 가능하며 급성기 질환이나 손상으로인한 신속한 진료 및 처치를 시행하여 환자의 생명을 구하고 골든타임을 지키기 위하여
                  전문의가 24시간 상주하며 환자분들에게 신속한 진료를 제공합니다.
                </p>
              </div>
              <div className="emergency_sec">
                <p className="info_tit">응급의학과 진료분야</p>
                <ul className="info_disc dot_list3">
                  <li>응급의학</li>
                  <li>외상질환</li>
                  <li>전문 심폐소생술</li>
                  <li>독성학</li>
                  <li>중환자관리</li>
                  <li>급성 복통 및 응급영상의학(복부초음파)</li>
                  <li>급성 흉통 및 호흡곤란(심장초음파)</li>
                </ul>
              </div>
            </div>
            <div className={activeTab === 'tab02' ? 'cont_area active_cont' : 'cont_area'}>
              <DoctorListSection doctors={doctors} loading={loadingDocs} onShowSchedule={setScheduleDoctor} currentDeptName={deptName ?? ""} />
            </div>
          </>
        )}
        {/* ===== 중환자의학과 ===== */}
        {code === 'criticalcare' && (
          <>
            <div className={activeTab === 'tab01' ? 'cont_area active_cont' : 'cont_area'}>
              <div className="emergency_sec">
                <p className="info_tit">중환자의학과</p>
                <p className="info_disc">
                  중환자의학과는 위급한 상태의 환자분들을 24시간 집중적으로 치료하고 모니터링 하는 특수 치료 구역입니다.<br /><br />
                  저희 의료진은 전문성과 경험을 바탕으로 환자분들의 빠른 회복을 위해 최선을 다하고 있습니다.<br />
                  감염 예방과 환자 안정 유지를 위해 면회는 제한적으로 운영되고 있으며, 정해진 시간에만 가능하오니 협조 부탁드립니다.
                </p>
                <ul className="dot_list3 mt30">
                  <li>최신 중환자 모니터링 시스템 도입</li>
                  <li>회복을 위한 최적의 집중 치료 환경</li>
                  <li>중환자 전담 의료진과 간호 인력 24시간 상주</li>
                  <li>환자 중심의 맞춤형 안심 시스템 운영</li>
                  <li>감염 예방과 심리적 안정을 위한 맞춤형 병상 구조</li>
                </ul>
              </div>
              <div className="emergency_sec">
                <p className="info_tit">중환자의학과 진료분야</p>
                <ol className="num_list">
                  <li>호흡기계 중환 치료<br /> - 급성 호흡부전, 폐렴, 급성호흡곤란증후군(ARDS), 기계환기 치료 등</li>
                  <li>심혈관계 중환 치료<br /> - 급성 심근경색, 심부전, 부정맥, 심정지 후 회복 치료 등</li>
                  <li>신경계 중환 치료<br /> - 뇌출혈, 뇌경색, 외상성 뇌손상, 의식저하 환자 등</li>
                  <li>외상 및 수술 후 중환 치료<br /> - 대수술 후 회복기, 다발성 외상 환자, 대량 출혈 등</li>
                  <li>패혈증 및 감염성 질환<br /> - 전신 감염(패혈증), 중증 폐렴, 요로감염, 혈류감염 등</li>
                  <li>신장 및 간 기능 이상<br /> - 급성 신부전, 투석 치료 환자, 간부전 등</li>
                  <li>약물 중독 및 대사성 질환<br /> - 약물중독, 당뇨성 케톤산증, 전해질 이상 등</li>
                </ol>
              </div>
            </div>
            <div className={activeTab === 'tab02' ? 'cont_area active_cont' : 'cont_area'}>
              <DoctorListSection doctors={doctors} loading={loadingDocs} onShowSchedule={setScheduleDoctor} currentDeptName={deptName ?? ""} />
            </div>
          </>
        )}
      </div>
      {scheduleDoctor && (
        <DoctorScheduleModal doctor={scheduleDoctor} onClose={() => setScheduleDoctor(null)} currentDeptName={deptName ?? ""} />
      )}
    </SubPageLayout>
  )
}