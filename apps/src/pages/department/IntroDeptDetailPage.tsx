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
  'spine-center': '척추센터',
  'arthroplasty-center': '인공관절센터',
  hpcenter: '건강증진센터',
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

        {/* ===== 척추센터 ===== */}
        {code === 'spine-center' && (
          <>
            <div className={activeTab === 'tab01' ? 'cont_area active_cont' : 'cont_area'}>
              <p className="info_disc">
                척추 질환은 매우 흔하며 지속적인 관리가 필요한 질환입니다. 메디인병원에서는 척추비수술센터도 운영하며 환자 케이스에 따라 다양한 치료법을 제시하여 최적의 치료를
                시행합니다.
              </p>
              <div className="in_cont_sec">
                <p className="in_cont_tit">척추센터 정밀검사</p>
                <ol className="num_list">
                  <li>
                    <p className="strong">컴퓨터단층촬영(CT)</p>
                    <p className="disc">CT란 Computed Tomography의 약어로 X-선을 투과시켜 그 흡수 차이를 컴퓨터로 재구성하여 인체의 단면
                      영상을 얻거나 3차원 입체영상을 얻는 영상진단법입니다. 5mm 이하의 아주 작은 밀도 차이를 구별할 수 있어, 질병의 조기진단과 그 구성 성분도
                      확인할 수 있습니다.</p>
                  </li>
                  <li>
                    <p className="strong">자기공명영상검사(MRI)</p>
                    <p className="disc">
                      MRI란 Magnetic Resonance Imaging의 약어로 방사선이 아닌 자기장을 이용하여 인체 내의 영상 정보를 얻는 첨단 영상
                      검사법입니다. MRI는 이온화 방사선이 아니므로 인체에 무해하고, 3D 영상화가 가능하며 컴퓨터단층촬영(CT)에 비해 해상도가 더 뛰어나 다방향
                      검사 및 정밀진단 검사가 가능합니다.
                    </p>
                  </li>
                  <li>
                    <p className="strong">적외선 체열검사(DITI)</p>
                    <p className="disc">
                      DITI란 Digital Infrared Thermal Imaging의 약어로 인체로부터 방출되는 눈에 보이지 않는 극미량의 열을 적외선으로
                      감지하여 통증이 있는 부위나 질병 부위의 미세한 체온 변화로 이상 유무를 진단하는 검사법입니다. 몸에서 나오는 적외선을 감지하는 방식의
                      검사법이기에 비침습적이고 통증이 없는 검사법입니다. 해부학적, 구조적 이상만 볼 수 있는 다른 검사와 상이하게 신경 손상과 염증 또는 순환장애와
                      같은 생리학적 상태를 진단하는 방법이기 때문에 다른 검사와 병행하여 복합적인 진단이 가능합니다.
                    </p>
                  </li>
                  <li>
                    <p className="strong">근전도검사(EMG)</p>
                    <p className="disc">
                      EMG는 Electromyography의 약어로 신경과 근육에서 발생하는 전기적 신호를 기계를 통해 분석해 말초신경이나 신경 주변 및 근육의
                      이상이 있는지 보기 위한 검사입니다. 근전도 검사에는 바늘로 근육을 찔러 시행하는 근육 내 침근전도 검사와 피부에 전극을 붙여 검사하는 표면
                      근전도 검사가 있습니다. 근육이나 신경의 어느 부위가 손상을 받았으며, 또 그 범위가 어느 정도인지, 질병이 호전되고 있는지, 악화되고 있는지를
                      판별하여 질병의 현상태와 예후를 평가하기 위해 시행됩니다. 신경학적으로 손, 발이 저린 증상이 있거나 근육통, 근력 약화, 안면마비 등의 증상이
                      있을 경우 시행하게 됩니다.
                    </p>
                  </li>
                </ol>
              </div>
              <div className="in_cont_sec">
                <p className="in_cont_tit">비수술치료</p>
                <ol className="num_list">
                  <li>
                    <p className="strong">경막 외 신경차단술</p>
                    <p className="disc">
                      디스크 옆쪽으로 영상증폭장치를 이용해 경막 외 부분에 주삿바늘을 위치시켜주고 신경마취제, 스테로이드, 유착박리제 등을 섞은 약물을 주사해 신경에
                      스며들도록 하여 신경 주변의 부종을 완화해 주고, 통증을 줄여주는 치료 방법입니다.
                    </p>
                    <div className="in_dash_box">
                      <dl>
                        <dt>가. 적응가능 질환</dt>
                        <dd>
                          추간판 탈출증(수핵탈출증, 일명 디스크 질환) <br />
                          척추관협착증<br />
                          초기 척추 전방 전위증<br />
                          대상포진 후 신경통,근육통<br />
                          수술 후 남아있는 요통과 하지 통증, 일자목으로 인한 목 통증 등
                        </dd>
                      </dl>
                    </div>
                  </li>
                  <li className="mt50">
                    <p className="strong">선택적 신경 차단술</p>
                    <p className="disc">
                      척추의 중심 신경에서 빠져나와 허리 통증을 유발하는 문제 신경을 찾아 염증을 억제시키는 스테로이드 약물을 섞어 주사하는 치료법입니다.
                    </p>
                    <div className="in_dash_box">
                      <dl>
                        <dt>가. 적응가능 질환</dt>
                        <dd>
                          좌골 신경통<br />
                          초기 척추 전방 전위증<br />
                          척추관협착증<br />
                          허리디스크,목디스크<br />
                          허리관절염
                        </dd>
                      </dl>
                    </div>
                  </li>
                  <li className="mt50">
                    <p className="strong">경막 외 신경성형술</p>
                    <p className="disc">
                      퇴행성 척추 병변에 대한 비수술적 치료방법의 하나로 디스크 탈출증이나 협착증 또는 척추 수술부위에 얇은 관을 꼬리뼈를 통해 삽입하여 병변 부위의
                      신경부종, 염증 및 유착을 제거하면서 약물을 투여하는 시술로 수술 없이 통증을 치료하는 방법입니다.
                    </p>
                    <div className="in_dash_box">
                      <dl>
                        <dt>가. 적응가능 질환</dt>
                        <dd>
                          추간판 탈출증(디스크)<br />
                          척추관협착증<br />
                          척추 수술 후 통증 증후군<br />
                          초기 척추 전방 전위증<br />
                          디스크 기원성 목통증/허리통증<br />
                          심장질환 등 기저질환으로 인해 수술이 불가능한 경우
                        </dd>
                      </dl>
                    </div>
                  </li>
                  <li className="mt50">
                    <p className="strong">척추관협착증 풍선확장술</p>
                    <p className="disc">
                      퇴행성 척추 병변에 대한 비수술적 치료 방법의 하나로서 척추관 협착증 또는 척추 수술을 받아서 유착이 심한 부위에 지름 1.7mm 정도의 얇은
                      관을 꼬리뼈 구멍을 통해 삽입하여 병변부위에 위치시킨 후 풍선을 부풀려 좁아진 신경 구멍을 넓혀줌으로써 신경부종, 염증 및 유착을 제거하면서
                      약물을 투여하는 시술입니다.
                    </p>
                    <div className="in_dash_box">
                      <dl>
                        <dt>가. 적응가능 질환</dt>
                        <dd>
                          척추관협착증<br />
                          척추 수술 후 통증 증후군<br />
                          초기 척추 전방 전위증<br />
                          경추, 요추 디스크 탈출증으로 인한 방사통<br />
                          심장질환 등 기저질환으로 인해 수술이 불가능한 경우
                        </dd>
                      </dl>
                    </div>
                  </li>
                  <li className="mt50">
                    <p className="strong">고주파 수핵감압술</p>
                    <p className="disc">
                      척추 병변에 대한 비수술적 치료 방법 중 하나로서 방사선 영상장치 유도 하 탈출된 디스크 내로 얇은 바늘을 삽입한 후 병변 부위를 확인하고
                      고주파 발생장치를 연결하여 고주파 열에너지를 가해 탈출 된 디스크의 크기를 감소시켜 신경 압박을 줄여주는 시술 방법입니다.
                    </p>
                    <div className="in_dash_box">
                      <dl>
                        <dt>가. 적응가능 질환</dt>
                        <dd>
                          경추 및 요추 디스크 탈출증<br />
                          만성디스크(경추,요추) 통증<br />
                          심장질환 등 기저질환으로 인해 수술이 불가능한 경우
                        </dd>
                      </dl>
                    </div>
                  </li>
                  <li className="mt50">
                    <p className="strong">경피적 척추성형술</p>
                    <p className="disc">
                      골절 부위에 방사선 조영하에 직경 3-4mm의 시술관을 삽입한 후 골 시멘트를 주입시켜 압박 골절된 척추체를 치료하는 시술입니다.
                    </p>
                    <div className="in_dash_box">
                      <dl>
                        <dt>가. 적응가능 질환</dt>
                        <dd>척추압박골절</dd>
                      </dl>
                    </div>
                  </li>
                  <li className="mt50">
                    <p className="strong">경피적 풍선척추성형술</p>
                    <p className="disc">
                      골절 부위의 척추체 높이를 증가시키기 위해 방사선 조영하에 직경 3-4mm 시술관을 이용하여 풍선을 삽입하고 그 공간에 골 시멘트를 주입시켜
                      압박 골절된 척추체를 치료하는 시술입니다.
                    </p>
                    <div className="in_dash_box">
                      <dl>
                        <dt>가. 적응가능 질환</dt>
                        <dd>척추압박골절</dd>
                      </dl>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            <div className={activeTab === 'tab02' ? 'cont_area active_cont' : 'cont_area'}>
              <DoctorListSection doctors={doctors} loading={loadingDocs} onShowSchedule={setScheduleDoctor} currentDeptName={deptName ?? ""} />
            </div>
          </>
        )}

        {/* ===== 인공관절센터 ===== */}
        {code === 'arthroplasty-center' && (
          <>
            <div className={activeTab === 'tab01' ? 'cont_area active_cont' : 'cont_area'}>
              <div className="emergency_sec">
                <p className="info_tit">인공관절센터</p>
                <p className="info_disc">
                  메디인병원 인공관절센터는 대학 병원급 첨단 장비와 풍부한 임상경험을 갖춘 전문 의료진의 협진을 통해 완성도 높은 정밀 수술이 가능하며 관절의 기능적 회복 및 빠른 신체적 회복 등으로 수술 후 더욱 높은 만족도를 제공합니다.
                </p>
              </div>
              <div className="emergency_sec">
                <div className="in_cont_sec">
                  <p className="in_cont_tit">인공관절센터 진료분야</p>
                  <div className="in_cont_223">
                    <div className="cont_item">
                      <i className="ico_cont_223_21" style={{ width: '360px', height: '250px' }}></i>
                      <div className="in_cont_area">
                        <dl>
                          <dt>무릎 인공관절 치환술</dt>
                          <dd>무릎인공관절 수술은 류마티스 관절염이나 퇴행성 골관절염 등으로 변형된 관절을 인공관절로 바꾸는 수술입니다. 건강보험심사평가원의 통계에 따르면 매년 100만명 이상의 무릎 관절염환자가 병원을 찾는 것으로 알려져 있습니다. 인공관절수술은 3기 또는 4기의 관절염환자에게 시행되는 치료법입니다.</dd>
                        </dl>
                      </div>
                    </div>
                    <div className="cont_item">
                      <i className="ico_cont_223_22" style={{ width: '360px', height: '250px' }}></i>
                      <div className="in_cont_area">
                        <dl>
                          <dt>인공 고관절 치환술</dt>
                          <dd>고관절은 골반과 다리뼈를 잇는 역할을 하는 부위로, 하체 운동성에 큰 영향을 미치는 부위입니다. 인공 고관절 치환 수술은 파괴된 고관절의 일부를 인공물로 대체하여 고관절의 운동 기능을 보존하고 통증을 감소시키며 일상적인 활동을 가능케 하는 치료 방법입니다.</dd>
                        </dl>
                      </div>
                    </div>
                    <div className="cont_item">
                      <i className="ico_cont_223_23" style={{ width: '360px', height: '250px' }}></i>
                      <div className="in_cont_area">
                        <dl>
                          <dt>어깨 역행성 인공관절 전치환술</dt>
                          <dd>어깨를 움직여주는 회전근개 힘줄의 광범위한 파열과 그로 인한 관절염, 상완골 근위부의 심한 분쇄골절 등으로 팔을 올릴 수 없는 가성마비가 있을 때 시행될 수 있는 수술입니다.</dd>
                        </dl>
                      </div>
                    </div>
                    <div className="cont_item">
                      <i className="ico_cont_223_24" style={{ width: '360px', height: '250px' }}></i>
                      <div className="in_cont_area">
                        <dl>
                          <dt>어깨 인공관절 전치환술</dt>
                          <dd>상대적으로 회전근개 힘줄의 기능은 남아있으나, 퇴행성 및 류마티스 관절염, 상완골두의 무혈성 괴사 등으로 통증, 관절 운동의 제한이 있을 때 시행될 수 있는 수술입니다.</dd>
                        </dl>
                      </div>
                    </div>
                    <div className="cont_item">
                      <i className="ico_cont_223_25" style={{ width: '360px', height: '250px' }}></i>
                      <div className="in_cont_area">
                        <dl>
                          <dt>경골 근위부 절골술(휜다리 교정술)</dt>
                          <dd>종아리 안쪽 뼈(피질골)를 인위적으로 절골해 휘어진 다리를 맞춰 체중의 부하를 바깥쪽으로 분산시켜주는 수술입니다. 퇴행성 관절염으로 다리 모양 O자로 변형된 경우, 다리 모양을 곧게 교정하여 체중을 분산시켜 관절염의 진행을 늦추고자 하는 경우 시행되는 치료법입니다.</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={activeTab === 'tab02' ? 'cont_area active_cont' : 'cont_area'}>
              <DoctorListSection doctors={doctors} loading={loadingDocs} onShowSchedule={setScheduleDoctor} currentDeptName={deptName ?? ""} />
            </div>
          </>
        )}

        {/* ===== 건강증진센터 ===== */}
        {code === 'hpcenter' && (
          <>
            <div className={activeTab === 'tab01' ? 'cont_area active_cont' : 'cont_area'}>
              <div className="emergency_sec">
                <p className="info_tit">건강증진센터</p>
                <p className="info_disc">
                  메디인병원 건강증진센터는 편안하고 쾌적한 환경 속에 최신의 장비를 도입하여 환자분들의 다양한 요구를 만족시킬 수 있는 검진 프로그램을 고객님들께 실시하고 있습니다.
                </p>
              </div>
              <div className="emergency_sec">
                <p className="info_tit">건강증진센터 진료분야</p>
                <ul className="info_disc dot_list3">
                  <li>국민건강보험공단 건강검진</li>
                  <li>종합검진</li>
                  <li>정밀검진(암, 뇌, 심장, 호흡기)</li>
                </ul>
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