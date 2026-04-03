import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'
import msLhs from '../../assets/images/ms_lhs.jpg'
import msLsh from '../../assets/images/ms_lsh.jpg'
import msPhy from '../../assets/images/ms_phy.jpg'
import msLsi from '../../assets/images/ms_lsi.jpg'
import msCjh from '../../assets/images/ms_cjh.jpg'
import msLyh from '../../assets/images/ms_LYH.jpg'
import msKms from '../../assets/images/ms_kms.jpg'
import msOys from '../../assets/images/ms_oys.png'
import msLjh from '../../assets/images/ms_ljh260302.jpg'
import msPdj from '../../assets/images/ms_pdj.png'
import msKsh from '../../assets/images/ms_ksh.jpg'
import msLshPng from '../../assets/images/ms_lsh.png'
import msLsw from '../../assets/images/ms_lsw.jpg'
import msKty from '../../assets/images/ms_kty.jpg'
import msKth from '../../assets/images/ms_kth.jpg'
import msLsf from '../../assets/images/ms_lsf.jpg'
import msSwy from '../../assets/images/ms_swy.jpg'
import msJih from '../../assets/images/ms_jih.jpg'
import msLjhO from '../../assets/images/ms_ljh.jpg'
import msLjm from '../../assets/images/ms_ljm.jpg'
import msCsh from '../../assets/images/ms_csh.jpg'
import msSsc from '../../assets/images/ms_ssc.jpg'
import msKs from '../../assets/images/ms_ks.jpg'
import emergencyImg2113 from '../../assets/images/emergency_img2_1_13.png'
import thumb2113_1 from '../../assets/images/thumb2_1_13_1.png'
import thumb2113_2 from '../../assets/images/thumb2_1_13_2.png'
import thumb2113_3 from '../../assets/images/thumb2_1_13_3.png'
import thumb2113_4 from '../../assets/images/thumb2_1_13_4.png'
import msKyd from '../../assets/images/ms_kyd.jpg'
import msLjg from '../../assets/images/ms_ljg.jpg'
import msJhy from '../../assets/images/ms_jhy.jpg'
import msKsw from '../../assets/images/ms_ksw.jpg'
import msKsm from '../../assets/images/ms_ksm.jpg'
import msKjh from '../../assets/images/ms_kjh.jpg'
import msCgm from '../../assets/images/ms_cgm.jpg'
import msKbw from '../../assets/images/ms_kbw.jpg'
import msCsi from '../../assets/images/ms_csi.jpg'
import msKhg from '../../assets/images/ms_khg.jpg'
import msSkm from '../../assets/images/ms_skm.jpg'
import msLss from '../../assets/images/ms_lss.jpg'
import msAym from '../../assets/images/ms_aym.jpg'

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

export default function DeptDetailPage() {
  const { code } = useParams<{ code: string }>()
  const [activeTab, setActiveTab] = useState('tab01')
  const deptName = code ? deptNames[code] : undefined

  useEffect(() => {
    setActiveTab('tab01')
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
              <div className="medical_staff_list">
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msLhs} alt="이학수" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">이학수 원장</strong>
                      <span className="major">내과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>한양대학교 학사 석사 박사</li>
                          <li>대한초음파학회 회원</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail02')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msLsh} alt="이성희" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">이성희 진료과장</strong>
                      <span className="major">내과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>한양대학교 의과대학원 석/박사</li>
                          <li>한양대학교병원 소화기 내과 전임의</li>
                          <li>소화기내시경학회 정회원</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail01')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msPhy} alt="박호용" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">박호용 내과계 진료부원장</strong>
                      <span className="major">내과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>한양대학교 의과대학원 석사</li>
                          <li>삼성서울병원 소화기 내과 임상강사</li>
                          <li>소화기 내과 학회 정회원</li>
                          <li>소화기내시경학회 정회원</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail04')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msLsi} alt="이상일" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">이상일 진료과장</strong>
                      <span className="major">내과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>동국대의대 졸업</li>
                          <li>성균관의대 내과 외래교수</li>
                          <li>내과학회 정회원</li>
                          <li>한국 심장초음파학회 정회원</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail05')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
              </div>
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
              <div className="medical_staff_list">
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msCjh} alt="최정호" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">최정호 진료과장</strong>
                      <span className="major">심장내과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>연세대학교 의과대학 졸업</li>
                          <li>연세대학교 의과대학원 석사</li>
                          <li>신촌 세브란스병원 심장혈관 병원 전임의</li>
                          <li>인천국제성모병원 심장내과 교수</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail01')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
              </div>
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
              <div className="medical_staff_list">
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msLyh} alt="이요한" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">이요한 진료과장</strong>
                      <span className="major">호흡기내과</span>
                    </div>
                    <dl>
                      <dt>학력 및 경력</dt>
                      <dd>
                        <ul>
                          <li>연세대학교 의과대학 학사</li>
                          <li>연세대학교 대학원 의학석사</li>
                          <li>연세대학교 세브란스기독병원 수련의/전공의</li>
                          <li>순천향대학교 서울병원 내과 전임의</li>
                          <li>검단탑병원 호흡기내과 과장</li>
                          <li>한림병원 호흡기내과 과장</li>
                          <li>김포우리병원 호흡기내과 과장</li>
                          <li>다니엘종합병원 호흡기내과 과장</li>
                          <li>대한내과학회 평생회원</li>
                          <li>대한임상초음파학회 평생회원</li>
                          <li>대한결핵 및 호흡기학회 정회원</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail07')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
              </div>
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
              <div className="medical_staff_list">
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msKms} alt="강문수" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">강문수 진료과장</strong>
                      <span className="major">소화기내과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>한양대학교 의학박사</li>
                          <li>한양대학교 내과전공의</li>
                          <li>강북삼성의료원 소화기내과 전임의</li>
                          <li>성균관의대 외래교수</li>
                          <li>김포우리병원 소화기내과 과장</li>
                          <li>대한내과학회 평생회원</li>
                          <li>대한소화기내과학회 평생회원 및 소화기내과분과전문의</li>
                          <li>대한내시경학회 평생회원 및 내시경인정의</li>
                          <li>대한췌담도내과학회 평생회원 및 췌담도내시경인정의</li>
                          <li>대한간학회 정회원</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail06')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
              </div>
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
              <div className="medical_staff_list">
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msOys} alt="오영승" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">오영승 진료과장</strong>
                      <span className="major">신장내과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>건양대학교 의과대학 졸업</li>
                          <li>가톨릭 중앙의료원 전공의</li>
                          <li>순천향대학교 부천병원 신장내과 임상강사</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail01')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msLjh} alt="이준한" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">이준한 진료과장</strong>
                      <span className="major">신장내과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>한양대학교 의과대학 졸업</li>
                          <li>한양대학병원 수련의/전공의</li>
                          <li>한양대학교 서울병원 신장내과 전임의</li>
                          <li>한양대학교 구리병원 임상전문교수 (hospitalist)</li>
                          <li>강남효 요양병원 신장내과 과장</li>
                          <li>미사강변 요양병원 신장내과 과장</li>
                          <li>아너스힐 김포병원 신장내과 과장</li>
                          <li>아너스힐 시흥병원 신장내과 과장</li>
                          <li>내과전문의</li>
                          <li>투석 전문의</li>
                          <li>대한내과학회 정회원</li>
                          <li>대한신장내과학회 정회원</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail02')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
              </div>
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
              <div className="medical_staff_list">
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msPdj} alt="박대진" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">박대진 진료과장</strong>
                      <span className="major">류마티스내과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>한양대학교 의학과 석사, 박사</li>
                          <li>한양대학교병원 인턴, 레지던트, 전임의</li>
                          <li>연세대학교 원주세브란스기독병원 임상조교수</li>
                          <li>前 향남스마트병원 내과 과장 (류마티스내과 전문의)</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail01')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
              </div>
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
              <div className="medical_staff_list">
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msKsh} alt="김성희" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">김성희 진료과장</strong>
                      <span className="major">신경과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>이화여자대학교 신경과 전공의</li>
                          <li>분당서울대학교 신경과 전임의 및 진료의사</li>
                          <li>경북대학교 신경과 임상교수</li>
                          <li>이화여자대학교 신경과 임상교수</li>
                          <li>뉴성민병원 신경과 과장</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail02')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msLshPng} alt="이서현" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">이서현 진료과장</strong>
                      <span className="major">신경과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>계명대학교 의과대학 졸업</li>
                          <li>계명대학교 동산병원 전공의</li>
                          <li>대한신경과학회 정회원</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail03')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
              </div>
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
              <div className="medical_staff_list">
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msLsw} alt="이승원" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">이승원 진료과장</strong>
                      <span className="major">외과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>대한외과학회 정회원</li>
                          <li>대한 항문외과 평생회원</li>
                          <li>대장내시경 세부전문의</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail01')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
              </div>
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
              <div className="medical_staff_list">
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msKty} alt="김태용" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">김태용 진료과장</strong>
                      <span className="major">산부인과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>서울대학교 의과대학 졸업</li>
                          <li>삼성서울병원 수련의</li>
                          <li>부산문화병원 전공의</li>
                          <li>분당서울대병원 부인종양 임상강사</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail01')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
              </div>
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
              <div className="medical_staff_list">
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msKth} alt="권태형" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">권태형 원장</strong>
                      <span className="major">정형외과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>한양대학교 대학원 석/박사</li>
                          <li>대한정형외과 학회 평생회원</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail01')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msLsf} alt="이성필" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">이성필 원장</strong>
                      <span className="major">정형외과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>한양대학교병원 수부 및 상지외과 전임의</li>
                          <li>대한정형외과학회 정회원</li>
                          <li>대한견관절, 주관절학회 정회원</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail02')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msSwy} alt="서우영" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">서우영 외과계 진료부원장</strong>
                      <span className="major">정형외과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>한양대학교병원 정형외과 임상교수</li>
                          <li>원주 성지병원 관절센터 과장</li>
                          <li>대한족부관절학회 기획위원</li>
                          <li>대한관절경학회 정회원</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail03')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msJih} alt="주일한" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">주일한 진료과장</strong>
                      <span className="major">정형외과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>한양대학교병원 견주관절 / 수부 전임의</li>
                          <li>한양대학교병원 정형외과 외래교수</li>
                          <li>대한견주관절의학회 정회원</li>
                          <li>대한수부외과학회 정회원</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail04')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msLjhO} alt="이재호" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">이재호 진료과장</strong>
                      <span className="major">정형외과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>한양대학교병원 외상 및 하지외과 전임의 수료</li>
                          <li>한양대학교병원 정형외과 외래교수</li>
                          <li>대한슬관절학회 정회원</li>
                          <li>대한골절학회 정회원</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail05')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msLjm} alt="이제민" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">이제민 진료과장</strong>
                      <span className="major">정형외과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>정형외과 의학박사</li>
                          <li>단국대학교병원 정형외과 전임 부교수</li>
                          <li>단국대학교병원 권역외상센터 외상전담의</li>
                          <li>분당 서울대학교병원 척추 전임의</li>
                          <li>대한정형외과학회 정회원</li>
                          <li>대한척추외과학회 정회원</li>
                          <li>대한경추연구학회 정회원 (현직 인사위원장)</li>
                          <li>대한고관절학회 정회원</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail07')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msCsh} alt="최시훈" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">최시훈 진료과장</strong>
                      <span className="major">정형외과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>정형외과 의학박사</li>
                          <li>스포츠의학 인증전문의</li>
                          <li>한양대학교병원 외상 및 하지외과 전임의 수료</li>
                          <li>한양대학교병원 정형외과 외래교수</li>
                          <li>대한정형외과학회 정회원</li>
                          <li>대한스포츠의학회 정회원</li>
                          <li>대한골절학회 정회원</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail08')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msSsc} alt="신성철" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">신성철 진료과장</strong>
                      <span className="major">정형외과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>세브란스병원 인공관절 및 관절경 전임의</li>
                          <li>연세대학교 의과대학 세브란스병원 외래교수</li>
                          <li>대한슬관절학회 정회원</li>
                          <li>대한정형외과 스포츠의학회 정회원</li>
                          <li>2025 ISAKOS (국제 관절경·스포츠의학회) 구연발표</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail09')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
              </div>
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
              <div className="medical_staff_list">
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msKs} alt="김석" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">김석 원장</strong>
                      <span className="major">비뇨의학과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>한양대학교 의학대학원 박사</li>
                          <li>을지대학교 의과대학 외래교수</li>
                          <li>석비뇨기과 원장</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail01')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
              </div>
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
              <div className="medical_staff_list">
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msKyd} alt="" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">권용덕 진료과장</strong>
                      <span className="major">신경통증클리닉</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>한양대학교 의과대학 졸업</li>
                          <li>한양대학교 마취통증의학과 전공의</li>
                          <li>고려대학교 마취통증의학과 전임의</li>
                          <li>세연마취통증의학과의원 부원장</li>
                          <li>서울고든병원 마취통증의학과 원장</li>
                          <li>대한통증학회 통증분과 인증의</li>
                          <li>대한통증학회 정회원</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail02')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
              </div>
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
              <div className="medical_staff_list">
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msLjg} alt="" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">이재기 진료과장</strong>
                      <span className="major">마취통증의학과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>한양대학교 의과대학원 석사</li>
                          <li>한양대학교 마취통증학과 전공의</li>
                          <li>마취통증의학회 회원</li>
                        </ul>
                      </dd>
                    </dl>
                  </div>
                </div>
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msJhy} alt="" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">조희영 진료과장</strong>
                      <span className="major">마취통증의학과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>한양대학교졸업</li>
                          <li>한양대학교 전공의</li>
                          <li>제주한마음병원 진료부원장</li>
                        </ul>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
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
              <div className="medical_staff_list">
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msKsw} alt="" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">권석운 과장</strong>
                      <span className="major">진단검사의학과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>서울의대 졸업</li>
                          <li>서울의대 박사</li>
                          <li>서울대병원 진단검사의학과 전공의, 전임의</li>
                          <li>서울아산병원 진단검사의학과 교수</li>
                        </ul>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
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
              <div className="medical_staff_list">
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msLhs} alt="" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">이학수 원장</strong>
                      <span className="major">영상의학과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>한양대학교 학사 석사 박사</li>
                          <li>을지대학교병원 영상의학과교수</li>
                          <li>대한방사선의학회 회원</li>
                          <li>대한초음파학회 회원</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail01')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msKsm} alt="" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">김선미 진료과장</strong>
                      <span className="major">영상의학과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>한양대학교 의과대학 졸업</li>
                          <li>한일병원 영상의학과 과장</li>
                          <li>대한초음파 학회 정회원</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail02')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msKjh} alt="" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">권재현 진료과장</strong>
                      <span className="major">영상의학과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>경북대학교 졸업</li>
                          <li>경북대학교 전공의</li>
                          <li>서울아산병원 전임의</li>
                          <li>동국대 일산병원 영상의학과 교수</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail03')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
              </div>
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
              <div className="medical_staff_list">
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msCgm} alt="" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">최규만 진료실장</strong>
                      <span className="major">응급의학과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>연세대학교 공과대학 졸업</li>
                          <li>국립경상대학교 의학전문대학원 의학석사</li>
                          <li>국립중앙의료원 인턴 수료</li>
                          <li>국립중앙의료원 응급의학과 전공의 수료</li>
                          <li>아산충무병원 응급의학과 과장</li>
                          <li>한림대학교 강남성심병원 응급의학과 진료교수</li>
                          <li>밀양윤병원 응급의학과 실장</li>
                          <li>김포뉴고려병원 응급의학과 과장</li>
                          <li>대한응급의학과 정회원</li>
                          <li>대한응급의학과 지도전문의</li>
                          <li>밀양소방서 구급지도의사</li>
                          <li>경상남도 구급지도 협의회 위원</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail06')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msKbw} alt="" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">강바우 진료과장</strong>
                      <span className="major">응급의학과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>서울대학교 자연과학대학 생명과학부 졸업</li>
                          <li>강원대학교 의과대학 의학전문대학원 졸업</li>
                          <li>강원대학교병원 인턴 수료</li>
                          <li>강원대학교병원 응급의학과 전공의 수료</li>
                          <li>응급의학과 전문의</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail07')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msCsi} alt="" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">조수임 진료과장</strong>
                      <span className="major">응급의학과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>응급의학과 전문의</li>
                          <li>The University of Sydney, bachelor of medical science 졸업</li>
                          <li>국립경상대학교 의학전문대학원 의학석사</li>
                          <li>국립중앙의료원 인턴 수료</li>
                          <li>국립중앙의료원 응급의학과 전공의 수료</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail08')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msKhg} alt="" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">김형규 진료과장</strong>
                      <span className="major">응급의학과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>한림대학교 의학과 졸업</li>
                          <li>한림대학교 강동성심병원 응급의학과 전공의 수료</li>
                          <li>삼척의료원 응급의학과 과장</li>
                          <li>아산충무병원 응급의학과 과장</li>
                          <li>경기도의료원 수원병원 응급의학과 과장</li>
                          <li>밀양 윤병원 응급의학과 과장</li>
                          <li>평택성모병원 응급의학과 과장</li>
                          <li>충청북도 충주의료원 응급의학과 과장</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail01')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msSkm} alt="" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">성강민 진료과장</strong>
                      <span className="major">응급의학과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>응급의학과 전문의</li>
                          <li>건국대학교병원 전공의</li>
                          <li>충주건국대병원 임상조교수</li>
                          <li>추병원 응급실 과장</li>
                          <li>한일병원 응급실 과장</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail09')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msLss} alt="" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">이상수 진료과장</strong>
                      <span className="major">응급의학과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>충남대학교 의과대학 의학과 졸업</li>
                          <li>가천대 길병원 응급의학과 전공의 수료</li>
                          <li>응급의학과 전문의 자격 취득</li>
                          <li>BLS(Basic Life Support) Provider</li>
                          <li>ELS-Resuscitation 과정 수료</li>
                          <li>ELS-Trauma 과정 수료</li>
                          <li>대한응급의학회 정회원</li>
                          <li>대한응급의료지도 의사협의회 정회원</li>
                          <li>전 비에스종합병원 응급의학과 과장</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail10')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
              </div>
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
              <div className="medical_staff_list">
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msAym} alt="" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">안영모 진료실장</strong>
                      <span className="major">응급의학과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>국립 경상대학교 의과대학 학사</li>
                          <li>가천대학교 의학전문대학 석사</li>
                          <li>가천대 길병원 응급의학과 전공의 수료</li>
                          <li>인천 기독병원 과장</li>
                          <li>가천대 길병원 외래교수</li>
                          <li>검단 탑종합병원 과장</li>
                          <li>동군산병원 과장</li>
                          <li>남양주 현대병원 과장</li>
                          <li>중앙대학교 병원 외래교수</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail01')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </SubPageLayout>
  )
}