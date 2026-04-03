import { useEffect, useRef, useState } from 'react'
import Swiper from 'swiper'
import { Keyboard, Navigation, Scrollbar } from 'swiper/modules'
import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'
import icoCertificate1_1 from '../../assets/images/ico_certificate1_1.svg'
import icoCertificate1_2 from '../../assets/images/ico_certificate1_2.svg'
import icoCertificate1_3 from '../../assets/images/ico_certificate1_3.svg'
import icoCertificate1_4 from '../../assets/images/ico_certificate1_4.svg'
import icoCertificate1_5 from '../../assets/images/ico_certificate1_5.svg'
import icoCertificate1_6 from '../../assets/images/ico_certificate1_6.svg'
import icoCertificate1_7 from '../../assets/images/ico_certificate1_7.svg'
import icoCertificate1_8 from '../../assets/images/ico_certificate1_8.svg'
import icoCertificate1_9 from '../../assets/images/ico_certificate1_9.svg'
import kakaopayLogo from '../../assets/images/kakaopay_logo.svg'
import kakaopayStep1 from '../../assets/images/kakaopay_step1.png'
import kakaopayStep2 from '../../assets/images/kakaopay_step2.png'
import kakaopayStep3 from '../../assets/images/kakaopay_step3.png'
import kakaopayStep6 from '../../assets/images/kakaopay_step6.png'
import kakaopayStep7 from '../../assets/images/kakaopay_step7.png'
import kakaopayStep8 from '../../assets/images/kakaopay_step8.png'
import kakaopayStep9 from '../../assets/images/kakaopay_step9.png'
import qrBannerPc from '../../assets/images/qr_banner_pc.png'
import qrBannerM from '../../assets/images/qr_banner_m.png'

export default function CertificatePage() {
  const [activeTab, setActiveTab] = useState('tab01')
  const [activeInTab1, setActiveInTab1] = useState('in_tab01_01')
  const [activeInTab2, setActiveInTab2] = useState('in_tab02_01')
  const swiperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!swiperRef.current) return
    const swiperInstance = new Swiper(swiperRef.current, {
      modules: [Keyboard, Navigation, Scrollbar],
      slidesPerView: 1,
      centeredSlides: false,
      slidesPerGroupSkip: 1,
      grabCursor: true,
      keyboard: { enabled: true },
      breakpoints: {
        769: {
          slidesPerView: 4,
          slidesPerGroup: 1,
        },
      },
      scrollbar: { el: '.swiper-scrollbar' },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
    return () => swiperInstance.destroy(true, true)
  }, [])

  return (
    <SubPageLayout
      visualClass="vs1"
      visualTitle="진료안내"
      contentsClass="sub01"
      lnbItems={lnbItems}
    >
      <h3 className="cont_tit">
        <span style={{ fontFamily: 'inherit', letterSpacing: '-0.02em' }}>증명서 발급 안내</span>
        <br />
      </h3>
      <div className="con_area">
        <div className="tab_area">
          <button
            type="button"
            className={`btn_tab${activeTab === 'tab01' ? ' active_tab' : ''}`}
            onClick={() => setActiveTab('tab01')}
          >
            <span>제증명</span>
          </button>
          <button
            type="button"
            className={`btn_tab${activeTab === 'tab02' ? ' active_tab' : ''}`}
            onClick={() => setActiveTab('tab02')}
          >
            <span>의무기록</span>
          </button>
          <button
            type="button"
            className={`btn_tab${activeTab === 'tab03' ? ' active_tab' : ''}`}
            onClick={() => setActiveTab('tab03')}
          >
            <span>영상자료</span>
          </button>
          {/* 0930 : 25번 : 카카오페이 증명서 신청 탭 추가 */}
          <button
            type="button"
            className={`btn_tab${activeTab === 'tab04' ? ' active_tab' : ''}`}
            onClick={() => setActiveTab('tab04')}
          >
            <span>카카오페이 증명서 신청</span>
          </button>
        </div>
        {/* 제증명 */}
        <div className={`cont_area${activeTab === 'tab01' ? ' active_cont' : ''}`} id="tab01">
          <div className="emergency_sec">
            <p className="info_tit">외래 환자의 경우 절차</p>
            <div className="emergency_step">
              <ol>
                <li>
                  <img src={icoCertificate1_1} alt="" />
                  <p>해당 진료과 접수</p>
                </li>
                <li>
                  <img src={icoCertificate1_2} alt="" />
                  <p>주치의에게 요청</p>
                </li>
                <li>
                  <img src={icoCertificate1_3} alt="" />
                  <p>증명서 발급</p>
                </li>
                <li>
                  <img src={icoCertificate1_4} alt="" />
                  <p>증명서 발급비 수납</p>
                </li>
                <li>
                  <img src={icoCertificate1_5} alt="" />
                  <p>
                    직원날인 및 연번호 <br />
                    교부 후 발급
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div className="emergency_sec">
            <p className="info_tit">입원환자의 경우 절차</p>
            <div className="emergency_step">
              <ol>
                <li>
                  <img src={icoCertificate1_6} alt="" />
                  <p>간호사에게 신청</p>
                </li>
                <li>
                  <img src={icoCertificate1_7} alt="" />
                  <p>증명서 발급</p>
                </li>
                <li>
                  <img src={icoCertificate1_8} alt="" />
                  <p>증명서 발급비 수납</p>
                </li>
                <li>
                  <img src={icoCertificate1_9} alt="" />
                  <p>
                    직원날인 및 연번호 <br />
                    교부 후 발급
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div className="emergency_sec">
            <div className="in_tab_area">
              <button
                type="button"
                className={`btn_in_tab1${activeInTab1 === 'in_tab01_01' ? ' active_tab' : ''}`}
                onClick={() => setActiveInTab1('in_tab01_01')}
              >
                <span>구비서류</span>
              </button>
              <button
                type="button"
                className={`btn_in_tab1${activeInTab1 === 'in_tab01_02' ? ' active_tab' : ''}`}
                onClick={() => setActiveInTab1('in_tab01_02')}
              >
                <span>발급안내</span>
              </button>
            </div>
            <div
              className={`in_cont_area1${activeInTab1 === 'in_tab01_01' ? ' active_cont' : ''}`}
              id="in_tab01_01"
            >
              {/* <p className="info_alert"><span>의료법 제17조(진단서 등)에 의거하여, 진단서의 경우, 진료기록부등의 경우와 달리 환자의 의식이 있는
										경우에는 대리인에게 위임이 불가합니다.</span></p>*/}
              <div className="document_list">
                <ul>
                  <li>
                    <i className="ico_hangeul"></i>
                    <p>진료기록 열람 및 사본발급 동의서</p>
                    <a href="/file/FileDown.do?atchFileId=FID00000002&fileSn=4" className="btn">
                      다운로드
                    </a>
                  </li>
                  <li>
                    <i className="ico_word"></i>
                    <p>진료기록 열람 및 사본발급 동의서</p>
                    <a href="/file/FileDown.do?atchFileId=FID00000002&fileSn=1" className="btn">
                      다운로드
                    </a>
                  </li>
                  <li>
                    <i className="ico_pptx"></i>
                    <p>진료기록 열람 및 사본발급 동의서</p>
                    <a href="/file/FileDown.do?atchFileId=FID00000002&fileSn=5" className="btn">
                      다운로드
                    </a>
                  </li>
                  <li>
                    <i className="ico_hangeul"></i>
                    <p>진료기록 열람 및 사본발급 위임장</p>
                    <a href="/file/FileDown.do?atchFileId=FID00000002&fileSn=3" className="btn">
                      다운로드
                    </a>
                  </li>
                  <li>
                    <i className="ico_word"></i>
                    <p>진료기록 열람 및 사본발급 위임장</p>
                    <a href="/file/FileDown.do?atchFileId=FID00000002&fileSn=2" className="btn">
                      다운로드
                    </a>
                  </li>
                  <li>
                    <i className="ico_pptx"></i>
                    <p>진료기록 열람 및 사본발급 위임장</p>
                    <a href="/file/FileDown.do?atchFileId=FID00000002&fileSn=0" className="btn">
                      다운로드
                    </a>
                  </li>
                </ul>
              </div>
              <div className="h_table">
                <p className="table_label">
                  환자가 사망하거나, 의식이 없는 경우 진단서 발급 시 구비서류
                </p>
                <div className="m_scroll wd500">
                  <table>
                    <caption>환자가 사망하거나, 의식이 없는 경우 진단서 발급 시 구비서류표</caption>
                    <colgroup>
                      <col style={{ width: '33%' }} />
                      <col style={{ width: '25%' }} />
                      <col />
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col">발급자</th>
                        <th scope="col">발급가능 요건</th>
                        <th scope="col">발급요청 시 서류</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="t_15">
                          환자의 친족 <br />
                          (환자의 배우자, 직계존속·비속 또는 배우자의 직계존속)
                        </td>
                        <td className="t_15">환자가 사망하거나 의식이 없는 경우</td>
                        <td className="t_left">
                          <ul className="dot_list2">
                            <li>발급요청자의 신분증 사본 </li>
                            <li>환자와의 관계를 증명하는 서류 (가족관계증명서 또는 등본 등)</li>
                            <li>
                              환자의 상태를 알 수 있는 서류 (사망사실이나 의식불명에 대한 내용이
                              기재된 진단서 등)
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="t_15">환자의 형제·자매</td>
                        <td className="t_15">
                          환자가 사망하거나 의식이 없는 경우로, <br />
                          환자의 친족이 없는 경우
                        </td>
                        <td className="t_left">
                          <ul className="dot_list2">
                            <li>발급요청자의 신분증 사본</li>
                            <li>환자와의 관계를 증명하는 서류 (가족관계증명서 또는 등본 등)</li>
                            <li>
                              환자의 상태를 알 수 있는 서류(사망사실이나 의식불명에 대한 내용이
                              기재된 진단서 등)
                            </li>
                            <li>환자의 친족이 없음을 증명·확인하는 증명서 또는 확인서</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="h_table">
                <p className="table_label">진단서 사본 재발급 또는 확인서 등 발급 시 구비서류</p>
                <div className="m_scroll wd500">
                  <table>
                    <caption>진단서 사본 재발급 또는 확인서 등 발급 시 구비서류표</caption>
                    <colgroup>
                      <col style={{ width: '20%' }} />
                      <col style={{ width: '35%' }} />
                      <col />
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col">신청인</th>
                        <th scope="col">구비서류</th>
                        <th scope="col">비고</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="t_15">환자본인</td>
                        <td className="t_15">환자 본인 신분증</td>
                        <td className="t_left t_15">
                          <p className="t_red">
                            ※ 통상 만10세 이상부터(의사능력이 있는 경우) 환자본인이 신분증 지참 시
                            직접 신청 가능
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="t_15">환자(만19세미만)의 친권자</td>
                        <td className="t_left">
                          <ul className="dot_list2">
                            <li>친권자의 신분증</li>
                            <li>친권자임을 확인할 수 있는 서류(가족관계증명서 등)</li>
                          </ul>
                        </td>
                        <td className="t_left t_15">
                          <p className="t_red">※ 환자 대신 친권자가 대리인에게 위임 가능함 </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="t_15">
                          환자의 친족 <br />
                          (환자의 배우자,환자의 직계 존·비속, <br />
                          배우자의 직계존속)
                        </td>
                        <td className="t_left">
                          <ul className="dot_list2">
                            <li>신청인 신분증</li>
                            <li>친족관계를 확인할 수 있는 서류(등본 또는 가족관계증명서 등)</li>
                            <li>환자가 자필 서명한 동의서(만14세이상인 경우)</li>
                          </ul>
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td className="t_15">
                          대리인 <br />
                          (형제·자매,보험사직원,자부,사위등)
                        </td>
                        <td className="t_left">
                          <ul className="dot_list2">
                            <li>신청인 신분증</li>
                            <li>환자의 신분증 사본</li>
                            <li>환자가 자필 서명한 동의서</li>
                            <li>환자가 자필 서명한 위임장</li>
                          </ul>
                        </td>
                        <td className="t_left t_15">
                          <p className="t_red">※ 만 19세 미만 환자의 친권자에게 위임을 받는 경우</p>
                          <ul className="dot_list2">
                            <li>신청인 신분증</li>
                            <li>친권자의 신분증사본</li>
                            <li>친권자임을 확인할 수 있는 서류(가족관계증명서 등)</li>
                            <li>친권자가 자필 서명한 동의서</li>
                            <li>친권자가 자필 서명한 위임장</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <ul className="table_lifo_list">
                  <li>동의서, 위임장은 법정양식인 별지 제9호의 2,3서식으로 작성 </li>
                  <li>동의서 위임장에는 반드시 자필 서명이 필요 (도장,지장은 안됨)</li>
                </ul>
              </div>
              <div className="h_table">
                <p className="table_label">
                  환자의 동의를 받을 수 없는 경우의 진단서사본 재발급 및 확인서 발급 시 구비서류
                  안내
                </p>
                <div className="m_scroll wd500">
                  <table>
                    <caption>
                      환자의 동의를 받을 수 없는 경우의 진단서사본 재발급 및 확인서 발급 시 구비서류
                      안내표
                    </caption>
                    <colgroup>
                      <col style={{ width: '20%' }} />
                      <col style={{ width: '35%' }} />
                      <col />
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col">구분</th>
                        <th scope="col">구비서류</th>
                        <th scope="col">비고</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="t_15">환자사망</td>
                        <td className="t_15">사망자일 경우: 사망사실확인서(사망 진단서)</td>
                        <td className="t_left t_15" rowSpan={4}>
                          <ul className="dot_list2">
                            <li>신청인의 신분증 </li>
                            <li>가족관계증명서 등 친족관계를 확인 할 수 있는 서류</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="t_15">의식불명</td>
                        <td className="t_15">의식불명일 경우 : 의식불명 진단서</td>
                      </tr>
                      <tr>
                        <td className="t_15">행방불명</td>
                        <td className="t_15">행방불명일 경우: 행방불명 확인 서류</td>
                      </tr>
                      <tr>
                        <td className="t_15">의사무능력자</td>
                        <td className="t_15">의사무능력자일 경우:의사무능력자 진단서</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <ul className="table_lifo_list">
                  <li>
                    환자의 친족(환자의 배우자 또는 환자의 직계존속, 배우자의 직계존속)이 없는
                    경우에만 환자의 형제자매가 진단서사본 또는 확인서를 신청할 수 있으며, 신청권이
                    있는 친족이 다른 대리인을 선임할 수 있습니다.{' '}
                  </li>
                  <li>
                    환자가 복대리인 선임 동의 시 위임 받은 친족 또는 대리인이 다른 대리인에게
                    진단서사본을 위임할 수 있습니다. (동의서에 복대리인 선임을 허용한다는 문구 명시
                    필요)
                  </li>
                </ul>
              </div>
              <div className="gray_dash_box">
                <i className="ico_useinfo_simbol"></i>
                <dl>
                  <dt>이용안내</dt>
                  <dd>
                    <ul>
                      <li>
                        - 신분증 : 주민등록증, 여권, 운전면허증, 그밖의 공공기관에서 발행한 본인임을
                        확인할 수 있는 신분증만 해당됨
                      </li>
                      <li>- 친족 : 환자의 배우자, 직계존속 · 비속 또는 배우자의 직계 존속</li>
                      <li>- 동의서에는 동의 내용, 날짜, 범위가 명확히 기재되어야 합니다.</li>
                      <li>
                        - 동의서는 반드시 환자 본인의 자필 서명이 들어가야 합니다.(도장,지장은 안됨)
                      </li>
                    </ul>
                  </dd>
                </dl>
              </div>
            </div>
            <div
              className={`in_cont_area1${activeInTab1 === 'in_tab01_02' ? ' active_cont' : ''}`}
              id="in_tab01_02"
            >
              <p className="info_alert">
                <span>
                  의료법 시행규칙 15조에 의거하여 진단서 보존기간은 3년으로 보존기한이 지난 진단서는
                  재발행 신청을 할 수 없습니다.{' '}
                </span>
              </p>
              <div className="gray_dash_box">
                <i className="ico_useinfo_simbol"></i>
                <dl>
                  <dt>제증명 발급 시 유의사항</dt>
                  <dd>
                    <ul>
                      <li>
                        - 진단서(소견서)는 환자 본인이 요청해서 발급받아야 합니다. (의식이 없거나
                        사망한 경우 상단의 구비서류 참조)
                      </li>
                      <li>- 진단서 발급비용은 진찰료와는 별도로 부담하셔야 합니다.</li>
                      <li>
                        - 출생증명서는 분만 퇴원당일 각층 원무통합창구(무료1부)에서 교부하며, 3년이
                        지난 출생증명서 발급 요청 시 산부인과 외래 접수 후 신청하셔야 합니다.
                      </li>
                      <li>
                        - 진단서는 발급일로부터 3년간만 재발급이 가능하며, 각층 원무통합창구에서
                        재발급 가능합니다.
                      </li>
                      <li>
                        - 병무용진단서 또는 연령감정서(치과) 발급 시 반 명함 사진 2장이 필요합니다.
                      </li>
                    </ul>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        {/* 의무기록 */}
        <div className={`cont_area${activeTab === 'tab02' ? ' active_cont' : ''}`} id="tab02">
          <div className="emergency_sec">
            <p className="info_tit">의무기록 사본발급 절차</p>
            <div className="emergency_step">
              <ol>
                <li>
                  <img src={icoCertificate1_1} alt="" />
                  <p>해당 진료과 접수</p>
                </li>
                <li>
                  <img src={icoCertificate1_2} alt="" />
                  <p>주치의에게 요청</p>
                </li>
                <li>
                  <img src={icoCertificate1_3} alt="" />
                  <p>증명서 발급</p>
                </li>
                <li>
                  <img src={icoCertificate1_4} alt="" />
                  <p>증명서 발급비 수납</p>
                </li>
                <li>
                  <img src={icoCertificate1_5} alt="" />
                  <p>
                    직원날인 및 연번호 <br />
                    교부 후 발급
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div className="emergency_sec">
            <p className="info_tit">검사결과지 사본발급 절차</p>
            <div className="emergency_step">
              <ol>
                <li>
                  <img src={icoCertificate1_6} alt="" />
                  <p>간호사에게 신청</p>
                </li>
                <li>
                  <img src={icoCertificate1_7} alt="" />
                  <p>증명서 발급</p>
                </li>
                <li>
                  <img src={icoCertificate1_8} alt="" />
                  <p>증명서 발급비 수납</p>
                </li>
                <li>
                  <img src={icoCertificate1_9} alt="" />
                  <p>
                    직원날인 및 연번호 <br />
                    교부 후 발급
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div className="emergency_sec">
            <div className="in_tab_area">
              <button
                type="button"
                className={`btn_in_tab2${activeInTab2 === 'in_tab02_01' ? ' active_tab' : ''}`}
                onClick={() => setActiveInTab2('in_tab02_01')}
              >
                <span>구비서류</span>
              </button>
              <button
                type="button"
                className={`btn_in_tab2${activeInTab2 === 'in_tab02_02' ? ' active_tab' : ''}`}
                onClick={() => setActiveInTab2('in_tab02_02')}
              >
                <span>발급안내</span>
              </button>
            </div>
            <div
              className={`in_cont_area2${activeInTab2 === 'in_tab02_01' ? ' active_cont' : ''}`}
              id="in_tab02_01"
            >
              <p className="info_alert">
                <span>
                  환자의 의무기록은 의료법 제21조2항에 의거하여, 환자가 아닌 다른사람에게 환자의
                  관한 기록을 열람하게 하거나, 그 사본을 내주는 등 내용을 확인하게 하여서는 아니
                  되나, <br />
                  의료법 제21조3항, 의료법 시행규칙 제13조3(기록 열람 등의 요건)을 충족할 경우만
                  사본발급이 가능합니다.
                </span>
              </p>
              <div className="document_list">
                <ul>
                  <li>
                    <i className="ico_hangeul"></i>
                    <p>진료기록 열람 및 사본발급 동의서</p>
                    <a href="/file/FileDown.do?atchFileId=FID00000002&fileSn=4" className="btn">
                      다운로드
                    </a>
                  </li>
                  <li>
                    <i className="ico_word"></i>
                    <p>진료기록 열람 및 사본발급 동의서</p>
                    <a href="/file/FileDown.do?atchFileId=FID00000002&fileSn=1" className="btn">
                      다운로드
                    </a>
                  </li>
                  <li>
                    <i className="ico_pptx"></i>
                    <p>진료기록 열람 및 사본발급 동의서</p>
                    <a href="/file/FileDown.do?atchFileId=FID00000002&fileSn=5" className="btn">
                      다운로드
                    </a>
                  </li>
                  <li>
                    <i className="ico_hangeul"></i>
                    <p>진료기록 열람 및 사본발급 위임장</p>
                    <a href="/file/FileDown.do?atchFileId=FID00000002&fileSn=3" className="btn">
                      다운로드
                    </a>
                  </li>
                  <li>
                    <i className="ico_word"></i>
                    <p>진료기록 열람 및 사본발급 위임장</p>
                    <a href="/file/FileDown.do?atchFileId=FID00000002&fileSn=2" className="btn">
                      다운로드
                    </a>
                  </li>
                  <li>
                    <i className="ico_pptx"></i>
                    <p>진료기록 열람 및 사본발급 위임장</p>
                    <a href="/file/FileDown.do?atchFileId=FID00000002&fileSn=0" className="btn">
                      다운로드
                    </a>
                  </li>
                </ul>
              </div>

              <div className="h_table">
                <p className="table_label">의료법 시행규칙 제13조의3 (기록 열람 등의 요건)</p>
                <div className="m_scroll wd500">
                  <table>
                    <caption>의료법 시행규칙 제13조의3 (기록 열람 등의 요건)표</caption>
                    <colgroup>
                      <col style={{ width: '20%' }} />
                      <col style={{ width: '35%' }} />
                      <col />
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col">신청인</th>
                        <th scope="col">구비서류</th>
                        <th scope="col">비고</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="t_15">환자본인</td>
                        <td className="t_15">환자 본인 신분증</td>
                        <td className="t_left t_15">
                          <p className="t_red">
                            ※ 통상 만10세 이상부터(의사능력이 있는 경우) 환자본인이 신분증 지참 시
                            직접 신청 가능
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="t_15">환자(만19세미만)의 친권자</td>
                        <td className="t_left">
                          <ul className="dot_list2">
                            <li>친권자의 신분증</li>
                            <li>친족관계를 확인할 수 있는 서류(등본 또는 가족관계증명서 등)</li>
                            <li>환자가 자필 서명한 동의서(만14세이상인경우)</li>
                          </ul>
                        </td>
                        <td className="t_left t_15">
                          <p className="t_red">※ 환자 대신 친권자가 대리인에게 위임 가능함 </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="t_15">
                          환자의 친족 <br />
                          (환자의 배우자,환자의 직계 존·비속, <br />
                          배우자의 직계존속)
                        </td>
                        <td className="t_left">
                          <ul className="dot_list2">
                            <li>신청인 신분증</li>
                            <li>친족관계를 확인할 수 있는 서류(등본 또는 가족관계증명서 등)</li>
                            <li>환자가 자필 서명한 동의서(만14세이상인 경우)</li>
                          </ul>
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td className="t_15">
                          대리인 <br />
                          (형제·자매,보험사직원,자부,사위등)
                        </td>
                        <td className="t_left">
                          <ul className="dot_list2">
                            <li>신청인 신분증</li>
                            <li>환자의 신분증 사본</li>
                            <li>환자가 자필 서명한 동의서</li>
                            <li>환자가 자필 서명한 위임장</li>
                          </ul>
                        </td>
                        <td className="t_left t_15">
                          <p className="t_red">※ 만 19세 미만 환자의 친권자에게 위임을 받는 경우</p>
                          <ul className="dot_list2">
                            <li>신청인 신분증</li>
                            <li>친권자의 신분증사본</li>
                            <li>친권자임을 확인할 수 있는 서류(가족관계증명서 등)</li>
                            <li>친권자가 자필 서명한 동의서</li>
                            <li>친권자가 자필 서명한 위임장</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <ul className="table_lifo_list">
                  <li>
                    신분증 : 주민등록증, 여권, 운전면허증 등 그 밖의 공공기관에서 발행한 본인임을
                    확인할 수 있는 신분증{' '}
                  </li>
                  <li>동의서, 위임장은 별지 제9호의 2,3서식(법정양식)으로 작성하여야 합니다.</li>
                  <li>동의서에는 동의내용, 날짜, 범위가 명확이 기재되어야 합니다.</li>
                  <li>
                    동의서 및 위임장은 반드시 환자본인의 자필 서명이 들어가야 합니다. (도장, 지장은
                    안됨)
                  </li>
                  <li>
                    만 14세 미만이 단독 서류 신청 시 의사능력이 있으면(통상 만 10세이상) 발급이
                    가능하나 본인 신분증이 있어야 합니다.
                  </li>
                  <li>
                    환자 본인이 복 대리인 선임에 동의한 경우에 한하여 그 친족 또는 대리인은 사본
                    발급을 위한 복 대리인 선임이 가능하며, 반드시 동의서나 위임장에 복 대리인 선임을
                    허용한다는 문구 명시가 필요합니다.
                  </li>
                </ul>
              </div>
              <div className="h_table">
                <p className="table_label">
                  환자의 동의를 받을 수 없는 경우의 진단서사본 재발급 및 확인서 발급 시 구비서류
                  안내
                </p>
                <div className="m_scroll wd500">
                  <table>
                    <caption>
                      환자의 동의를 받을 수 없는 경우의 진단서사본 재발급 및 확인서 발급 시 구비서류
                      안내표
                    </caption>
                    <colgroup>
                      <col style={{ width: '20%' }} />
                      <col style={{ width: '35%' }} />
                      <col />
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col">신청인</th>
                        <th scope="col">환자</th>
                        <th scope="col">비고</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="t_15" rowSpan={4}>
                          친족이 신청할 경우 <br />
                          (환자의 배우자, 환자의 직계존속·비속, 배우자의 직계존속)
                        </td>
                        <td className="t_15">환자가 사망한 경우</td>
                        <td className="t_left t_15">
                          <ul className="dot_list2">
                            <li>사본발급을 요청하는 자의 신분증 사본</li>
                            <li>
                              가족관계증명서, 주민등록표 등본 등 친족관계를 확인할 수 있는 서류
                            </li>
                            <li>사망사실을 확인할 수 있는 서류(사망진단서 등)</li>
                          </ul>
                          <p className="t_red">
                            * 가족관계증명서 또는 제적등본에 환자의 사망 표시가 되어 있으면
                            사망진단서는 제외
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="t_15 t_bd_l">
                          환자가 의식불명 또는 의식불명은 아니지만 중증의 질환, <br />
                          부상으로 자필 서명을 할 수 없는 경우
                        </td>
                        <td className="t_left t_15">
                          <ul className="dot_list2">
                            <li>사본발급을 요청하는 자의 신분증 사본</li>
                            <li>
                              가족관계증명서, 주민등록표 등본 등 친족관계를 확인할 수 있는 서류
                            </li>
                            <li>
                              환자가 의식불명 또는 중증의 질환, 부상으로 자필 서명을 할 수 없음을
                              확인할 수 있는 진단서
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="t_15 t_bd_l">환자가 행방불명인 경우</td>
                        <td className="t_left t_15">
                          <ul className="dot_list2">
                            <li>사본발급을 요청하는 자의 신분증 사본</li>
                            <li>
                              가족관계증명서, 주민등록표 등본 등 친족관계를 확인할 수 있는 서류
                            </li>
                            <li>
                              주민등록표 등본, 법원의 실종선고 결정문 사본 등 행방불명 사실을 확인할
                              수 있는 서류{' '}
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="t_15 t_bd_l">환자가 의사무능력자인 경우</td>
                        <td className="t_left t_15">
                          <ul className="dot_list2">
                            <li>사본발급을 요청하는 자의 신분증 사본</li>
                            <li>
                              가족관계증명서, 주민등록표 등본 등 친족관계를 확인할 수 있는 서류
                            </li>
                            <li>
                              법원의 금치산 선고 결정문 사본 또는 의사무능력자 임을 증명하는 정신과
                              전문의 의 진단서{' '}
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="t_15" rowSpan={3}>
                          친족이 없어 환자의 형제자매가 신청하는 경우 <br />
                          (의료법 제21조제3항, 시행규칙 제13조의3의 제1항 및 제3항)
                        </td>
                        <td className="t_15">환자가 사망한 경우</td>
                        <td className="t_left t_15">
                          <ul className="dot_list2">
                            <li>사본발급을 요청하는 자의 신분증 사본</li>
                            <li>부모님 이름을 기준으로 발급한 가족관계증명서</li>
                            <li>사망사실을 확인할 수 있는 서류(사망진단서 등)</li>
                            <li>
                              친족이 없음을 증명하는 서류 (진료기록 열람 및 사본발급을 위한
                              확인서){' '}
                            </li>
                          </ul>
                          <p className="t_red">
                            * 가족관계증명서 또는 제적등본에 환자의 사망 표시가 되어 있으면
                            사망진단서는 제외
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="t_15 t_bd_l">
                          환자가 의식불명 또는 의식불명은 아니지만 중증의 질환, <br />
                          부상으로 자필 서명을 할 수 없는 경우
                        </td>
                        <td className="t_left t_15">
                          <ul className="dot_list2">
                            <li>사본발급을 요청하는 자의 신분증 사본</li>
                            <li>부모님 이름을 기준으로 발급한 가족관계증명서</li>
                            <li>
                              환자가 의식불명 또는 중증의 질환, 부상으로 자필 서명을 할 수 없음을
                              확인할 수 있는 진단서
                            </li>
                            <li>
                              친족이 없음을 증명하는 서류 (진료기록 열람 및 사본발급을 위한
                              확인서){' '}
                            </li>
                          </ul>
                        </td>
                      </tr>

                      <tr>
                        <td className="t_15 t_bd_l">환자가 의사무능력자인 경우</td>
                        <td className="t_left t_15">
                          <ul className="dot_list2">
                            <li>사본발급을 요청하는 자의 신분증 사본</li>
                            <li>부모님 이름을 기준으로 발급한 가족관계증명서</li>
                            <li>
                              법원의 금치산 선고 결정문 사본 또는 의사무능력자 임을 증명하는 정신과
                              전문의 의 진단서{' '}
                            </li>
                            <li>
                              친족이 없음을 증명하는 서류 (진료기록 열람 및 사본발급을 위한
                              확인서){' '}
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <ul className="table_lifo_list">
                  <li>
                    환자동의가 불가한 상황에서 사본발급 신청권이 있는 친족이 대리인을 선임할 경우
                    대리인이 사본신청이 가능합니다.
                  </li>
                  <li>
                    환자의 친족(환자의 배우자 또는 환자의 직계존속, 배우자의 직계존속)이 없는
                    경우에만 환자의 형제자매가 의무기록 사본을 신청할 수 있으며, 신청권이 있는
                    친족이 다른 대리인을 선임할 수 있습니다
                  </li>
                  <li>
                    환자가 복대리인 선임 동의 시 위임 받은 친족 또는 대리인이 다른 대리인에게
                    의무기록 사본을을 위임할 수 있습니다.(동의서에 복대리인 선임을 허용한다는 문구
                    명시 필요)
                  </li>
                </ul>
              </div>
              <div className="gray_dash_box">
                <i className="ico_useinfo_simbol"></i>
                <dl>
                  <dt>이용안내</dt>
                  <dd>
                    <ul>
                      <li>
                        - 신분증 : 주민등록증, 여권, 운전면허증, 그밖의 공공기관에서 발행한 본인임을
                        확인할 수 있는 신분증만 해당됨
                      </li>
                      <li>- 친족 : 환자의 배우자, 직계존속 · 비속 또는 배우자의 직계 존속</li>
                      <li>- 동의서에는 동의 내용, 날짜, 범위가 명확히 기재되어야 합니다.</li>
                      <li>
                        - 동의서는 반드시 환자 본인의 자필 서명이 들어가야 합니다.(도장,지장은 안됨)
                      </li>
                    </ul>
                  </dd>
                </dl>
              </div>
            </div>
            <div
              className={`in_cont_area2${activeInTab2 === 'in_tab02_02' ? ' active_cont' : ''}`}
              id="in_tab02_02"
            >
              <p className="info_alert">
                <span>
                  신분증을 지참하지 않은 경우는 신분확인이 되지 않으므로 환자정보보호를 위해
                  사본발급이 불가능합니다.
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* 영상자료 */}
        <div className={`cont_area${activeTab === 'tab03' ? ' active_cont' : ''}`} id="tab03">
          <div className="emergency_sec">
            <p className="info_tit">영상자료 절차</p>
            <div className="emergency_step">
              <ol>
                <li>
                  <img src={icoCertificate1_1} alt="" />
                  <p>해당 진료과 접수</p>
                </li>
                <li>
                  <img src={icoCertificate1_2} alt="" />
                  <p>주치의에게 요청</p>
                </li>
                <li>
                  <img src={icoCertificate1_3} alt="" />
                  <p>증명서 발급</p>
                </li>
                <li>
                  <img src={icoCertificate1_4} alt="" />
                  <p>증명서 발급비 수납</p>
                </li>
                <li>
                  <img src={icoCertificate1_5} alt="" />
                  <p>
                    직원날인 및 연번호 <br />
                    교부 후 발급
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div className="emergency_sec">
            <p className="info_tit">검사결과지 사본발급 절차</p>
            <div className="emergency_step">
              <ol>
                <li>
                  <img src={icoCertificate1_6} alt="" />
                  <p>간호사에게 신청</p>
                </li>
                <li>
                  <img src={icoCertificate1_7} alt="" />
                  <p>증명서 발급</p>
                </li>
                <li>
                  <img src={icoCertificate1_8} alt="" />
                  <p>증명서 발급비 수납</p>
                </li>
                <li>
                  <img src={icoCertificate1_9} alt="" />
                  <p>
                    직원날인 및 연번호 <br />
                    교부 후 발급
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div className="emergency_sec">
            <div className="in_tab_area">
              <button type="button" className="btn_in_tab3 active_tab" data-in-tab="in_tab03_01">
                <span>구비서류</span>
              </button>
            </div>
            <div className="in_cont_area3 active_cont" id="in_tab03_01">
              <p className="info_alert">
                <span>
                  의료법 시행규칙 제13조의3(기록 열람 등의 요건)을 충족할 경우만 사본발급이
                  가능합니다. 신분증을 지참하지 않은 경우는 신분확인이 되지 않으므로 환자정보보호를
                  위해 사본발급이 불가능합니다.{' '}
                </span>
              </p>
              <div className="document_list">
                <ul>
                  <li>
                    <i className="ico_hangeul"></i>
                    <p>진료기록 열람 및 사본발급 동의서</p>
                    <a href="/file/FileDown.do?atchFileId=FID00000002&fileSn=4" className="btn">
                      다운로드
                    </a>
                  </li>
                  <li>
                    <i className="ico_word"></i>
                    <p>진료기록 열람 및 사본발급 동의서</p>
                    <a href="/file/FileDown.do?atchFileId=FID00000002&fileSn=1" className="btn">
                      다운로드
                    </a>
                  </li>
                  <li>
                    <i className="ico_pptx"></i>
                    <p>진료기록 열람 및 사본발급 동의서</p>
                    <a href="/file/FileDown.do?atchFileId=FID00000002&fileSn=5" className="btn">
                      다운로드
                    </a>
                  </li>
                  <li>
                    <i className="ico_hangeul"></i>
                    <p>진료기록 열람 및 사본발급 위임장</p>
                    <a href="/file/FileDown.do?atchFileId=FID00000002&fileSn=3" className="btn">
                      다운로드
                    </a>
                  </li>
                  <li>
                    <i className="ico_word"></i>
                    <p>진료기록 열람 및 사본발급 위임장</p>
                    <a href="/file/FileDown.do?atchFileId=FID00000002&fileSn=2" className="btn">
                      다운로드
                    </a>
                  </li>
                  <li>
                    <i className="ico_pptx"></i>
                    <p>진료기록 열람 및 사본발급 위임장</p>
                    <a href="/file/FileDown.do?atchFileId=FID00000002&fileSn=0" className="btn">
                      다운로드
                    </a>
                  </li>
                </ul>
              </div>

              <div className="h_table">
                <p className="table_label">영상자료 복사 시 구비서류 안내</p>
                <div className="m_scroll wd500">
                  <table>
                    <caption>영상자료 복사 시 구비서류 안내표</caption>
                    <colgroup>
                      <col style={{ width: '20%' }} />
                      <col style={{ width: '35%' }} />
                      <col />
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col">신청인</th>
                        <th scope="col">구비서류</th>
                        <th scope="col">비고</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="t_15">환자본인</td>
                        <td className="t_15">환자 본인 신분증</td>
                        <td className="t_left t_15">
                          <p className="t_red">
                            ※ 통상 만10세 이상부터(의사능력이 있는 경우) 환자본인이 신분증 지참 시
                            직접 신청 가능
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="t_15">환자(만19세미만)의 친권자</td>
                        <td className="t_left">
                          <ul className="dot_list2">
                            <li>친권자의 신분증</li>
                            <li>친족관계를 확인할 수 있는 서류(등본 또는 가족관계증명서 등)</li>
                            <li>환자가 자필 서명한 동의서(만14세이상인경우)</li>
                          </ul>
                        </td>
                        <td className="t_left t_15">
                          <p className="t_red">※ 환자 대신 친권자가 대리인에게 위임 가능함 </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="t_15">
                          환자의 친족 <br />
                          (환자의 배우자,환자의 직계 존·비속, <br />
                          배우자의 직계존속)
                        </td>
                        <td className="t_left">
                          <ul className="dot_list2">
                            <li>신청인 신분증</li>
                            <li>친족관계를 확인할 수 있는 서류(등본 또는 가족관계증명서 등)</li>
                            <li>환자가 자필 서명한 동의서(만14세이상인 경우)</li>
                          </ul>
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td className="t_15">
                          대리인 <br />
                          (형제·자매,보험사직원,자부,사위등)
                        </td>
                        <td className="t_left">
                          <ul className="dot_list2">
                            <li>신청인 신분증</li>
                            <li>환자의 신분증 사본</li>
                            <li>환자가 자필 서명한 동의서</li>
                            <li>환자가 자필 서명한 위임장</li>
                          </ul>
                        </td>
                        <td className="t_left t_15">
                          <p className="t_red">※ 만 19세 미만 환자의 친권자에게 위임을 받는 경우</p>
                          <ul className="dot_list2">
                            <li>신청인 신분증</li>
                            <li>친권자의 신분증사본</li>
                            <li>친권자임을 확인할 수 있는 서류(가족관계증명서 등)</li>
                            <li>친권자가 자필 서명한 동의서</li>
                            <li>친권자가 자필 서명한 위임장</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <ul className="table_lifo_list">
                  <li>
                    신분증 : 주민등록증, 여권, 운전면허증 등 그 밖의 공공기관에서 발행한 본인임을
                    확인할 수 있는 신분증{' '}
                  </li>
                  <li>동의서, 위임장은 별지 제9호의 2,3서식(법정양식)으로 작성하여야 합니다.</li>
                  <li>동의서에는 동의내용, 날짜, 범위가 명확이 기재되어야 합니다.</li>
                  <li>
                    동의서 및 위임장은 반드시 환자본인의 자필 서명이 들어가야 합니다. (도장, 지장은
                    안됨)
                  </li>
                  <li>
                    만 14세 미만이 단독 서류 신청 시 의사능력이 있으면(통상 만 10세이상) 발급이
                    가능하나 본인 신분증이 있어야 합니다.
                  </li>
                  <li>
                    환자 본인이 복 대리인 선임에 동의한 경우에 한하여 그 친족 또는 대리인은 사본
                    발급을 위한 복 대리인 선임이 가능하며, 반드시 동의서나 위임장에 복 대리인 선임을
                    허용한다는 문구 명시가 필요합니다.
                  </li>
                </ul>
              </div>
              <div className="h_table">
                <p className="table_label">영상자료 복사 시 구비서류 안내</p>
                <div className="m_scroll wd500">
                  <table>
                    <caption>영상자료 복사 시 구비서류 안내표</caption>
                    <colgroup>
                      <col style={{ width: '20%' }} />
                      <col style={{ width: '35%' }} />
                      <col />
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col">신청인</th>
                        <th scope="col">환자</th>
                        <th scope="col">비고</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="t_15" rowSpan={4}>
                          친족이 신청할 경우 <br />
                          (환자의 배우자, 환자의 직계존속·비속, 배우자의 직계존속)
                        </td>
                        <td className="t_15">환자가 사망한 경우</td>
                        <td className="t_left t_15">
                          <ul className="dot_list2">
                            <li>사본발급을 요청하는 자의 신분증 사본</li>
                            <li>
                              가족관계증명서, 주민등록표 등본 등 친족관계를 확인할 수 있는 서류
                            </li>
                            <li>사망사실을 확인할 수 있는 서류(사망진단서 등)</li>
                          </ul>
                          <p className="t_red">
                            * 가족관계증명서 또는 제적등본에 환자의 사망 표시가 되어 있으면
                            사망진단서는 제외
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="t_15 t_bd_l">
                          환자가 의식불명 또는 의식불명은 아니지만 중증의 질환, <br />
                          부상으로 자필 서명을 할 수 없는 경우
                        </td>
                        <td className="t_left t_15">
                          <ul className="dot_list2">
                            <li>사본발급을 요청하는 자의 신분증 사본</li>
                            <li>
                              가족관계증명서, 주민등록표 등본 등 친족관계를 확인할 수 있는 서류
                            </li>
                            <li>
                              환자가 의식불명 또는 중증의 질환, 부상으로 자필 서명을 할 수 없음을
                              확인할 수 있는 진단서
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="t_15 t_bd_l">환자가 행방불명인 경우</td>
                        <td className="t_left t_15">
                          <ul className="dot_list2">
                            <li>사본발급을 요청하는 자의 신분증 사본</li>
                            <li>
                              가족관계증명서, 주민등록표 등본 등 친족관계를 확인할 수 있는 서류
                            </li>
                            <li>
                              주민등록표 등본, 법원의 실종선고 결정문 사본 등 행방불명 사실을 확인할
                              수 있는 서류{' '}
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="t_15 t_bd_l">환자가 의사무능력자인 경우</td>
                        <td className="t_left t_15">
                          <ul className="dot_list2">
                            <li>사본발급을 요청하는 자의 신분증 사본</li>
                            <li>
                              가족관계증명서, 주민등록표 등본 등 친족관계를 확인할 수 있는 서류
                            </li>
                            <li>
                              법원의 금치산 선고 결정문 사본 또는 의사무능력자 임을 증명하는 정신과
                              전문의 의 진단서{' '}
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="t_15" rowSpan={3}>
                          친족이 없어 환자의 형제자매가 신청하는 경우 <br />
                          (의료법 제21조제3항, 시행규칙 제13조의3의 제1항 및 제3항)
                        </td>
                        <td className="t_15">환자가 사망한 경우</td>
                        <td className="t_left t_15">
                          <ul className="dot_list2">
                            <li>사본발급을 요청하는 자의 신분증 사본</li>
                            <li>부모님 이름을 기준으로 발급한 가족관계증명서</li>
                            <li>사망사실을 확인할 수 있는 서류(사망진단서 등)</li>
                            <li>
                              친족이 없음을 증명하는 서류 (진료기록 열람 및 사본발급을 위한
                              확인서){' '}
                            </li>
                          </ul>
                          <p className="t_red">
                            * 가족관계증명서 또는 제적등본에 환자의 사망 표시가 되어 있으면
                            사망진단서는 제외
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="t_15 t_bd_l">
                          환자가 의식불명 또는 의식불명은 아니지만 중증의 질환, <br />
                          부상으로 자필 서명을 할 수 없는 경우
                        </td>
                        <td className="t_left t_15">
                          <ul className="dot_list2">
                            <li>사본발급을 요청하는 자의 신분증 사본</li>
                            <li>부모님 이름을 기준으로 발급한 가족관계증명서</li>
                            <li>
                              환자가 의식불명 또는 중증의 질환, 부상으로 자필 서명을 할 수 없음을
                              확인할 수 있는 진단서
                            </li>
                            <li>
                              친족이 없음을 증명하는 서류 (진료기록 열람 및 사본발급을 위한
                              확인서){' '}
                            </li>
                          </ul>
                        </td>
                      </tr>

                      <tr>
                        <td className="t_15 t_bd_l">환자가 의사무능력자인 경우</td>
                        <td className="t_left t_15">
                          <ul className="dot_list2">
                            <li>사본발급을 요청하는 자의 신분증 사본</li>
                            <li>부모님 이름을 기준으로 발급한 가족관계증명서</li>
                            <li>
                              법원의 금치산 선고 결정문 사본 또는 의사무능력자 임을 증명하는 정신과
                              전문의 의 진단서{' '}
                            </li>
                            <li>
                              친족이 없음을 증명하는 서류 (진료기록 열람 및 사본발급을 위한
                              확인서){' '}
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <ul className="table_lifo_list">
                  <li>
                    환자동의가 불가한 상황에서 사본발급 신청권이 있는 친족이 대리인을 선임할 경우
                    대리인이 사본신청이 가능합니다.
                  </li>
                  <li>
                    환자의 친족(환자의 배우자 또는 환자의 직계존속, 배우자의 직계존속)이 없는
                    경우에만 환자의 형제자매가 의무기록 사본을 신청할 수 있으며, 신청권이 있는
                    친족이 다른 대리인을 선임할 수 있습니다
                  </li>
                  <li>
                    환자가 복대리인 선임 동의 시 위임 받은 친족 또는 대리인이 다른 대리인에게
                    의무기록 사본을을 위임할 수 있습니다.(동의서에 복대리인 선임을 허용한다는 문구
                    명시 필요)
                  </li>
                </ul>
              </div>
              <div className="gray_dash_box">
                <i className="ico_useinfo_simbol"></i>
                <dl>
                  <dt>이용안내</dt>
                  <dd>
                    <ul>
                      <li>
                        - 신분증 : 주민등록증, 여권, 운전면허증, 그밖의 공공기관에서 발행한 본인임을
                        확인할 수 있는 신분증만 해당됨
                      </li>
                      <li>- 친족 : 환자의 배우자, 직계존속 · 비속 또는 배우자의 직계 존속</li>
                      <li>- 동의서에는 동의 내용, 날짜, 범위가 명확히 기재되어야 합니다.</li>
                      <li>
                        - 동의서는 반드시 환자 본인의 자필 서명이 들어가야 합니다.(도장,지장은 안됨)
                      </li>
                    </ul>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        {/* s: 0930 : 25번 : 카카오페이 증명서 신청 추가 */}
        <div className={`cont_area${activeTab === 'tab04' ? ' active_cont' : ''}`} id="tab04">
          <div className="kakaopay_emergency">
            <div className="kakaopay_top">
              <p className="kakao_logo">
                <img src={kakaopayLogo} alt="kakaopay" />
              </p>
              <p className="kakao_yell_box">
                <span>
                  병원에 가지 않아도 집에서 편안하게 카카오톡에서 증명서를 발급 받을 수 있습니다.
                </span>
              </p>
            </div>
            <div className="kakaopay_info">
              <dl>
                <dt>카카오페이 서류발급 서비스</dt>
                <dd>
                  병원에 방문하지 않아도 카카오톡에서 기본영수증,입원확인서,통원확인서 등 증명서류를
                  모바일로 신청하고 제출할 수 있는 병원 서류 발급 서비스를 메디인병원에서
                  시행합니다. <br />
                  메디인병원 증명서 발급이 필요하면 카카오톡에서 간편하게 발급해보세요.
                  <br />
                  카카오톡을 열고 다음과 같이 따라하시면 됩니다.
                </dd>
              </dl>
            </div>
            <div className="kakaopay_swiper swiper" ref={swiperRef}>
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <p className="step_num">STEP 1</p>
                  <p className="step_disc">카카오톡 - 설정</p>
                  <div className="step_img">
                    <img src={kakaopayStep1} alt="" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <p className="step_num">STEP 2</p>
                  <p className="step_disc">카카오페이 - 전체</p>
                  <div className="step_img">
                    <img src={kakaopayStep2} alt="" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <p className="step_num">STEP 3</p>
                  <p className="step_disc">보험 - 병원비 청구</p>
                  <div className="step_img">
                    <img src={kakaopayStep3} alt="" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <p className="step_num">STEP 4</p>
                  <p className="step_disc">병원서류 발급 선택</p>
                  <div className="step_img">
                    <img src={kakaopayStep6} alt="" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <p className="step_num">STEP 5</p>
                  <p className="step_disc">'메디인병원' 입력</p>
                  <div className="step_img">
                    <img src={kakaopayStep7} alt="" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <p className="step_num">STEP 6</p>
                  <p className="step_disc">진료받은 사람 선택</p>
                  <div className="step_img">
                    <img src={kakaopayStep8} alt="" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <p className="step_num">STEP 7</p>
                  <p className="step_disc">필요한 서류 선택 후 신청</p>
                  <div className="step_img">
                    <img src={kakaopayStep9} alt="" />
                  </div>
                  <div className="step_img">
                    <br />
                  </div>
                </div>
              </div>
              <div className="swiper-scrollbar"></div>
              <div className="swiper-nav-area">
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>
            </div>
            <div className="kakaopay_foot">
              <dl>
                <dd>
                  <br />
                  <br />
                  <a
                    href="https://kakaopay-mycerti.tobecon.io/api/qr/hospital?type=ADDITIONAL&hospitalCode=HOS00276"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={qrBannerPc} alt="" className="m_hide" style={{ border: 0 }} />
                    <img src={qrBannerM} alt="" className="pc_hide" style={{ border: 0 }} />
                  </a>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        {/* e: 0930 : 25번 : 카카오페이 증명서 신청 추가 */}
      </div>
    </SubPageLayout>
  )
}

