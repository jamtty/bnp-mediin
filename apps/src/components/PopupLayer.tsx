import { useState } from 'react'

interface PopupLayerProps {
  activePopup: string | null
  onClose: () => void
}

function FastReservPopup({ onClose }: { onClose: () => void }) {
  const [agreed, setAgreed] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = () => {
    if (!agreed) {
      alert('개인정보처리방침에 동의 해주세요.')
      return
    }
    if (!name.trim()) {
      alert('이름은 필수값 입니다.')
      return
    }
    if (!phone.trim()) {
      alert('연락처는 필수값 입니다.')
      return
    }
    // TODO: 백엔드 연동
    alert(
      '상담신청이 완료 되었습니다.\n 전문상담원이 전화 드리겠습니다. \n (상담원 통화 후 예약이 확정됩니다.)',
    )
    setName('')
    setPhone('')
    setAgreed(false)
    onClose()
  }

  return (
    <div className="pop" id="fast_reserv">
      <div className="pop-wrap">
        <div className="pop-box">
          <div className="fast_reserv_sec">
            <div className="pop_top">
              <div className="pop_tit">
                <strong>
                  빠른예약 상담
                  <br />
                  (상담원 통화 후 예약이 확정됩니다.)
                </strong>
                <button type="button" className="btn-pop-close" onClick={onClose}>
                  <span>close</span>
                </button>
              </div>
              <div className="pop_disc">
                상담시간 : 평일 09:00~18:00 / 공휴일 제외
                <br />
                장례식장은 24시간 상담가능하니 031-570-9093으로 바로 연락하시면 됩니다.
              </div>
            </div>
            <div className="pop_cont">
              <div className="pop_agree">
                <input
                  type="checkbox"
                  id="rt_pri_yn"
                  name="rt_pri_yn"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                />
                <label htmlFor="rt_pri_yn" style={{ fontSize: '17px' }}>
                  성함과 연락처를 남겨주시면 전문상담원이 빠른 예약을 도와드립니다. <br /> 개인정보
                  이용에 동의합니다.
                </label>
              </div>
              <div className="pop_form">
                <ul>
                  <li>
                    <label htmlFor="rt_name">· 성명</label>
                    <input
                      type="text"
                      id="rt_name"
                      name="rt_name"
                      placeholder="성명을 입력해주세요"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </li>
                  <li>
                    <label htmlFor="rt_phone">· 연락처</label>
                    <input
                      type="text"
                      id="rt_phone"
                      name="rt_phone"
                      placeholder="연락처를 입력해주세요"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    />
                  </li>
                </ul>
                <button type="button" className="btn_confirm confirm" onClick={handleSubmit}>
                  <span>신청하기</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PopupLayer({ activePopup, onClose }: PopupLayerProps) {
  if (!activePopup) return null

  return (
    <>
      <div className="pop_bg" onClick={onClose}></div>

      {/* 빠른예약 */}
      {activePopup === 'fast_reserv' && <FastReservPopup onClose={onClose} />}

      {/* 병원윤리강령 */}
      <div
        className={`pop${activePopup === 'hospital_ethics' ? '' : ' hide'}`}
        id="hospital_ethics"
      >
        <div className="pop-wrap">
          <div className="pop-box">
            <div className="base_cont">
              <div className="pop_tit">
                <strong>병원윤리강령</strong>
                <button type="button" className="btn-pop-close" onClick={onClose}>
                  <span>close</span>
                </button>
              </div>
              <div className="pop_cont">
                <div className="base_info_cont">
                  <p>
                    우리 병원은 인간생명의 존엄성을 인식하고 박애와 봉사 정신으로, 우리의 강령을
                    아래와 같이 다짐한다.
                  </p>
                  <ol className="num_list">
                    <li>
                      병원은, 의료가 제1의 의무임을 인식하고 모든 환자에게 최선의 진료를 제공한다.
                    </li>
                    <li>병원은, 항시 구급진료태세를 완비하고 사랑과 정성으로 환자를 보호한다.</li>
                    <li>
                      병원은, 직원이 인화와 협동적 노력으로 친절하고 윤리적인 진료분위기를 조성한다.
                    </li>
                    <li>
                      병원은, 부단한 연구와 교육훈련으로 의료발전에 기여하고 환자의 신뢰를 높인다.
                    </li>
                    <li>
                      병원은, 진료환경을 청결히 유지하고 감염 및 화재예방 등 안전관리에 주의의무를
                      다한다.
                    </li>
                    <li>병원은, 관계법규를 준수하고 모든 거래행위를 공정무사하게 처리한다.</li>
                    <li>병원은, 환자진료의 비밀을 지키고 환자의 신앙적 관습을 존중한다.</li>
                    <li>
                      병원은, 유관기관 및 단체와 상호협력하고 지역사회주민의 보건증진에 노력한다.
                    </li>
                    <li>
                      병원은, 도의적이며 적정한 홍보활동을 하고 타병원을 비방하거나 환자유인행위를
                      하지 않는다.
                    </li>
                    <li>
                      병원은, 환자관리, 시설장비 및 진료활동에 과학적이고 객관적인 표준을 유지 향상
                      시킨다.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 환자의 권리와 의무 */}
      <div
        className={`pop${activePopup === 'rights_responsibilities' ? '' : ' hide'}`}
        id="rights_responsibilities"
      >
        <div className="pop-wrap">
          <div className="pop-box">
            <div className="base_cont">
              <div className="pop_tit">
                <strong>환자의 권리와 의무</strong>
                <button type="button" className="btn-pop-close" onClick={onClose}>
                  <span>close</span>
                </button>
              </div>
              <div className="pop_cont">
                <div className="base_info_cont">
                  <div className="base_sec">
                    <p className="base_sec_tt">환자의 권리</p>
                    <ol className="num_list">
                      <li>
                        <strong className="t_blue">진료 받을 권리:</strong> 환자는 자신의 건강보호와
                        증진을 위하여 적절한 보건의료서비스를 받을 권리를 갖고, 성별ᆞ나이ᆞ종교ᆞ신분
                        및 경제적 사정 등을 이유로 건강에 관한 권리를 침해받지 아니하며, 의료인은
                        정당한 사유 없이 진료를 거부하지 못한다.
                      </li>
                      <li>
                        <strong className="t_blue">알권리 및 자기결정권:</strong> 환자는 담당
                        의사ᆞ간호사 등으로부터 질병 상태, 치료 방법, 의학적 연구 대상 여부, 장기이식
                        여부, 부작용 등 예상 결과 및 진료 비용에 관하여 충분한 설명을 듣고 자세히
                        물어볼 수 있으며, 이에 관한 동의 여부를 결정할 권리를 가진다.
                      </li>
                      <li>
                        <strong className="t_blue">비밀을 보호받을 권리:</strong> 환자는 진료와
                        관련된 신체상ᆞ건강상의 비밀과 사생활의 비밀을 침해받지 아니하며, 의료인과
                        의료기관은 환자의 동의를 받거나 범죄 수사 등 법률에서 정한 경우 외에는
                        비밀을 누설ᆞ발표하지 못한다.
                      </li>
                      <li>
                        <strong className="t_blue">상담ᆞ조정을 신청할 권리:</strong> 환자는
                        의료서비스 관련 분쟁이 발생한 경우, 한국의료분쟁조정중재원 등에 상담 및 조정
                        신청을 할 수 있다.
                      </li>
                      <li>
                        <strong className="t_blue">
                          안전한 의료환경에서 의료서비스를 제공 받을 권리:
                        </strong>{' '}
                        환자는 환자의 진료정보가 보호되고 환자안전이 유지되는 의료기관에서
                        의료서비스를 받을 권리가 있다.
                      </li>
                    </ol>
                  </div>
                  <div className="base_sec">
                    <p className="base_sec_tt">환자의 의무</p>
                    <ol className="num_list">
                      <li>
                        <strong className="t_blue">의료인에 대한 신뢰ᆞ존중 의무:</strong> 환자는
                        자신의 건강 관련 정보를 의료인에게 정확히 알리고, 의료인의 치료계획을
                        신뢰하고 존중하여야 한다.
                      </li>
                      <li>
                        <strong className="t_blue">부정한 방법으로 진료를 받지 않을 의무:</strong>{' '}
                        환자는 진료 전에 본인의 신분을 밝혀야 하고, 다른 사람의 명의로 진료를 받는
                        등 거짓이나 부정한 방법으로 진료를 받지 아니한다.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 개인정보처리방침 */}
      <div className={`pop${activePopup === 'privacy_pop' ? '' : ' hide'}`} id="privacy_pop">
        <div className="pop-wrap">
          <div className="pop-box">
            <div className="base_cont">
              <div className="pop_tit">
                <strong>개인정보처리방침</strong>
                <button type="button" className="btn-pop-close" onClick={onClose}>
                  <span>close</span>
                </button>
              </div>
              <div className="pop_cont">
                <div className="base_info_cont">
                  <div className="base_table">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <p>수집하는 개인정보의 항목 및 수집방법</p>
                            <p>개인정보 수집에 대한 동의</p>
                            <p>동의철회 / 회원탈퇴 방법</p>
                            <p>개인정보의 열람 및 정정</p>
                            <p>개인정보의 보유 및 이용</p>
                            <p>CCTV 설치ㆍ운영</p>
                          </td>
                          <td>
                            <p>수집한 개인정보의 처리위탁</p>
                            <p>개인정보 수집방법</p>
                            <p>개인정보 파기절차 및 방법</p>
                            <p>개인정보 제공 및 공유</p>
                            <p>이용자 및 법정대리인의 권리와 그 행사방법</p>
                            <p>개인정보의 기술적 / 관리적 보호 대책</p>
                          </td>
                          <td>
                            <p>웹 사이트 이용 중 다른 사람의 개인정보 취득</p>
                            <p>개인정보보호책임자 및 담당자의 연락처</p>
                            <p>권익침해 구제방법</p>
                            <p>링크 사이트 및 웹페이지</p>
                            <p>공지의 의무</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    메디인병원(이하 병원)은 의료법, 개인정보보호법, 정보통신망 이용촉진 및 정보보호
                    등에 관한 법률, 통신비밀보호법, 전기통신사업법 등 병원이 준수하여야 할 관련
                    법령상의 개인정보보호 규정을 준수하며, 관련 법령에 의거한 개인정보처리방침을
                    정하여 이용자 권익 보호에 최선을 다하고 있습니다. 개인정보 처리방침은 다음과
                    같은 내용을 담고 있습니다. (개인정보보호법 제 30조)
                  </p>
                  <div className="base_sec">
                    <p className="base_sec_tt">수집하는 개인정보의 항목 및 수집방법</p>
                    <p>
                      병원은 진료예약, 상담 등 각종 서비스의 원활한 제공과 예약확인, 상담 답변 등
                      각종 정보 제공을 위한 온라인 및 오프라인에서의 공지, 통계분석자료로 활용을
                      위해 최소한의 정보를 필수 사항으로 수집합니다.
                    </p>
                    <ol className="num_list2">
                      <li>
                        <p className="t_blue">가. 진료예약 신청 시</p>필수항목 : 성명, 주민등록번호,
                        주소, 연락처(주택, 핸드폰), 진료과목, 이메일 주소
                      </li>
                      <li>
                        <p className="t_blue">나. 접수 시</p>필수항목 : 성명, 주민등록번호,
                        전화번호, 핸드폰번호, 주소, 신용카드번호(카드결제 시), 의료보험증번호 <br />
                        선택사항: 종교
                      </li>
                      <li>
                        <p className="t_blue">다. 수납 시</p>필수항목 : 카드사명,
                        신용카드번호(카드결제 시), 핸드폰번호(현금영수증) 등 결제 승인 정보 <br />
                        선택항목 : 통장계좌번호(환자 금액정산 시)
                      </li>
                      <li>
                        <p className="t_blue">라. 입원 시</p>필수항목 : 보호자 정보(환자와의 관계,
                        성명, 주민등록번호, 전화번호, 주소) <br />
                        선택항목 : 종교, 위험환자 실시간 동선
                      </li>
                      <li>
                        <p className="t_blue">마. 의무기록 정정 시</p>필수항목 : 정보주체의
                        등록번호, 이름, 전화번호, 생년월일, 신분증 사본, 주치의 동의서명
                      </li>
                      <li>
                        <p className="t_blue">바. 진료기록 사본 발급</p>필수항목 : 환자 등록번호,
                        성명, 연락처, 주민등록번호, 신분증 사본, 주치의 동의서명(의학적 판단 필요
                        시)
                      </li>
                      <li>
                        <p className="t_blue">사. 자동으로 수집, 저장되는 정보</p>병원 홈페이지를
                        이용할 경우 서비스 이용기록, 방문 일시, 접속 로그, 쿠키, 접속 IP 정보 등이
                        자동적으로 수집, 저장됩니다.
                      </li>
                      <li>
                        <p className="t_blue">자. 부가 서비스 및 이벤트 응모 과정</p>해당 서비스 및
                        이벤트에서 필요로 하며 추가 수집에 대해 동의 받은 항목이 수집될 수 있습니다.
                      </li>
                    </ol>
                  </div>
                  <div className="base_sec">
                    <p className="base_sec_tt">개인정보 수집에 대한 동의</p>
                    <p>
                      회원님께서 서비스 가입신청서, 변경신청서 등에 서명하시거나, 홈페이지 회원
                      가입을 통하여 "동의한다"버튼을 클릭하는 행위 등을 병원의 개인정보처리방침 및
                      이용약관에 따른 개인정보 수집에 동의한 것으로 봅니다.
                    </p>
                  </div>
                  <div className="base_sec">
                    <p className="base_sec_tt">동의철회 / 회원탈퇴 방법</p>
                    <p>
                      회원탈퇴는 병원 홈페이지 마이페이지의 [회원정보수정] → 『회원탈퇴』를 클릭하여
                      직접 회원탈퇴를 하시거나 총무팀으로 서면, 전화 또는 Fax등으로 연락하시면 지체
                      없이 귀하의 개인정보를 파기하는 등 필요한 조치를 하겠습니다.
                    </p>
                  </div>
                  <div className="base_sec">
                    <p className="base_sec_tt">개인정보의 열람 및 정정</p>
                    <p>
                      회원님께서는 언제든지 등록되어 있는 자신의 개인정보를 열람하거나 정정하실 수
                      있습니다. 개인정보의 오류에 대한 정정을 요구할 경우, 정정을 완료하기 전까지
                      해당 개인정보를 이용하지 않습니다.
                    </p>
                  </div>
                  <div className="base_sec">
                    <p className="base_sec_tt">개인정보의 보유 및 이용</p>
                    <ol className="num_list2">
                      <li>
                        <p className="t_blue">가. 보유하고 있는 개인정보</p>
                        병원은 법령의 규정에 근거하여 보유하고 있는 주요 개인 정보파일은 다음과
                        같습니다.
                        <div className="base_table">
                          <table>
                            <thead>
                              <tr>
                                <th colSpan={3}>주요개인정보파일</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th>개인정보파일명</th>
                                <td colSpan={2}>진료기록부 등</td>
                              </tr>
                              <tr>
                                <th>보유목적</th>
                                <td colSpan={2}>환자진료</td>
                              </tr>
                              <tr>
                                <th>보유근거</th>
                                <td colSpan={2}>의료법 제19조, 제21조, 제22조, 제23조</td>
                              </tr>
                              <tr>
                                <th>보유기간</th>
                                <td colSpan={2}>개인정보에 대한 1년 마다 주기적으로 관리함</td>
                              </tr>
                              <tr>
                                <th>기록항목</th>
                                <td colSpan={2}>기본식별정보, 개인속성정보, 의료정보</td>
                              </tr>
                              <tr>
                                <th rowSpan={2}>사용부서</th>
                                <td>의무기록팀</td>
                                <td>02-2030-3311</td>
                              </tr>
                              <tr>
                                <td>원무팀 외래접수 창구 / 원무팀 입원소속 창구</td>
                                <td>전화번호, 주소 등 기본 인적사항</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </li>
                      <li>
                        <p className="t_blue">나. 회원관리</p>회원제 서비스 이용 및 제한적 본인
                        확인제에 따른 본인확인, 개인식별, 불량회원의 부정 이용방지와 비인가 사용방지
                        등
                      </li>
                      <li>
                        <p className="t_blue">다. 신규 서비스 개발 및 마케팅ㆍ광고에의 활용</p>신규
                        서비스 개발 및 맞춤 서비스 제공, 통계학적 특성에 따른 서비스 제공 및 광고
                        게재 등
                      </li>
                      <li>
                        <p className="t_blue">라. 진료서비스</p>진료 / 건진 예약, 조회 및 진료를
                        위한 본인 확인 절차에 사용
                      </li>
                      <li>
                        <p className="t_blue">마. 진료협력센터 홈페이지 및 Mobile 이용서비스</p>
                        진료의뢰, 의뢰환자 조회 및 진료협력센터 홈페이지 및 Mobile 이용에 따른 본인
                        확인 절차에 사용
                      </li>
                      <li>
                        <p className="t_blue">바. 개인정보의 파기</p>
                        - 회원가입정보의 경우 : 회원가입을 탈퇴하거나 회원에서 제명된 때 모두
                        파기됨. <br />
                        - 설문조사, 행사 등의 목적을 위하여 수집한 경우 : 당해 설문조사, 행사 등이
                        종료한 때 <br />- 진료서비스의 제공을 위하여 수집한 경우 : 의료법에 명시된
                        진료기록 보관 기준에 준하여 보관
                      </li>
                    </ol>
                  </div>
                  <div className="base_sec">
                    <p className="base_sec_tt">CCTV 설치ㆍ운영</p>
                    <p>본 병원은 아래와 같이 영상정보처리기기를 설치ㆍ운영하고 있습니다.</p>
                    <ol className="num_list2">
                      <li>
                        <p className="t_blue">가. 설치근거 및 목적</p>시설안전, 화재예방, 도난예방,
                        환자안전 등을 위한 감시 및 녹화
                      </li>
                      <li>
                        <p className="t_blue">나. 설치 대수 및 위치, 촬영범위</p>영상정보처리기기
                        대수 : 총100대 <br />
                        영상정보처리기기 위치 : 각 층 입구 및 통로, 주차시설 입출차, 외곽 광장{' '}
                        <br />
                        영상정보처리기기 촬영범위 : 각층 병동 복도, 각층 엘리베이터 문앞, 비상문앞,
                        출입구, 통로
                      </li>
                      <li>
                        <p className="t_blue">다. 담당부서 및 관리책임자</p>운영관리 : 시설안전팀
                        (박종식 031-570-9081) <br />
                        유지보수관리 : 시설안전팀 (성기영 031-570-9084)
                      </li>
                      <li>
                        <p className="t_blue">
                          라. 영상정보의 촬영시간, 보관기간, 보관장소 및 처리방법
                        </p>
                        촬영시간 : 24시간 촬영 <br />
                        보관기간 : 14일 ~ 1개월 <br />
                        보관장소 : 방재실
                      </li>
                      <li>
                        <p className="t_blue">바. 정보주체의 영상정보 열람 등 요구에 대한 조치</p>
                        정보주체 자신이 촬영된 경우 또는 명백히 정보주체의 생명ㆍ신체ㆍ재산 이익을
                        위해 필요한 경우에 한해 열람을 허용함
                      </li>
                      <li>
                        <p className="t_blue">사. 영상정보보호를 위한 기술적 관리적ㆍ물리적 조치</p>
                        내부관리계획 수립, 접근통제 및 접근권한 제한, 영상정보의 안전한
                        저장ㆍ전송기술 적용 등
                      </li>
                    </ol>
                  </div>
                  <div className="base_sec">
                    <p className="base_sec_tt">수집한 개인정보의 처리위탁</p>
                    <div className="base_table">
                      <table>
                        <thead>
                          <tr>
                            <th>위탁업체</th>
                            <th>이용목적</th>
                            <th>개인정보항목</th>
                            <th>개인정보의 보유 및 이용기간</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>녹십자</td>
                            <td>진단검사의학과 위탁, 검체검사 진행</td>
                            <td>환자식별정보 및 검체 검사 결과</td>
                            <td>위탁계약 종료시까지</td>
                          </tr>
                          <tr>
                            <td>(주) KTIS</td>
                            <td>환자확인 및 진료 예약, 취소 등에 관한 업무</td>
                            <td>등록번호, 성명, 주민번호, 연락처, 주소 등</td>
                            <td>위탁계약 종료시까지</td>
                          </tr>
                          <tr>
                            <td>BNP21</td>
                            <td>홈페이지 유지 운영관리</td>
                            <td>홈페이지에서 수집한 개인정보 일체</td>
                            <td>위탁계약 종료시까지</td>
                          </tr>
                          <tr>
                            <td>(주)엔에스스마트</td>
                            <td>무인수납 키오스크 유지보수 관리</td>
                            <td>환자인적사항, 처방정보, 보험자격 등</td>
                            <td>위탁계약 종료시까지</td>
                          </tr>
                          <tr>
                            <td>(주)새롬소프트</td>
                            <td>환자확인 및 건진 예약, 취소 등에 관한 업무</td>
                            <td>등록번호, 성명, 주민번호, 연락처, 주소 등</td>
                            <td>위탁계약 종료시까지</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="base_sec">
                    <p className="base_sec_tt">개인정보 수집방법</p>
                    <p>
                      병원은 홈페이지, 서면양식, 팩스, 전화, 상담 게시판, 이메일, 이벤트 응모 등을
                      통해 개인정보를 수집합니다.
                    </p>
                  </div>
                  <div className="base_sec">
                    <p className="base_sec_tt">개인정보 파기절차 및 방법</p>
                    <p>
                      이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체
                      없이 파기합니다.
                    </p>
                    <ol className="num_list2">
                      <li>
                        <p className="t_blue">가. 파기절차</p>이용자가 회원가입 등을 위해 입력한
                        정보는 목적이 달성된 후 별도의 DB로 옮겨져 내부 방침 및 기타 관련 법령에
                        의한 정보보호 사유에 따라 일정 기간 저장된 후 파기됩니다.
                      </li>
                      <li>
                        <p className="t_blue">나. 파기방법</p>종이에 출력된 개인정보는 분쇄기로
                        분쇄하거나 소각을 통하여 파기합니다. <br />
                        전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을
                        사용하여 삭제합니다.
                      </li>
                    </ol>
                  </div>
                  <div className="base_sec">
                    <p className="base_sec_tt">이용자 및 법정대리인의 권리와 그 행사방법</p>
                    <p>
                      이용자 및 법정 대리인은 언제든지 등록되어 있는 자신 혹은 당해 만 14세 미만
                      아동의 개인정보를 조회하거나 수정할 수 있으며 가입해지를 요청할 수도 있습니다.
                    </p>
                  </div>
                  <div className="base_sec">
                    <p className="base_sec_tt">개인정보의 기술적 / 관리적 보호 대책</p>
                    <ol className="num_list2">
                      <li>
                        <p className="t_blue">가. 비밀번호 암호화</p>회원 아이디(ID)의 비밀번호는
                        암호화되어 저장 및 관리되고 있어 본인만이 알고 있습니다.
                      </li>
                      <li>
                        <p className="t_blue">나. 해킹 등에 대비한 대책</p>병원은 해킹이나 컴퓨터
                        바이러스 등에 의해 회원의 개인정보가 유출되거나 훼손되는 것을 막기 위해
                        최선을 다하고 있습니다.
                      </li>
                      <li>
                        <p className="t_blue">다. 처리 직원의 최소화 및 교육</p>병원의 개인정보관련
                        처리 직원은 담당자에 한정시키고 있고 이를 위한 별도의 비밀번호를 부여하여
                        정기적으로 갱신하고 있습니다.
                      </li>
                      <li>
                        <p className="t_blue">라. 개인정보보호전담기구의 운영</p>병원 내
                        개인정보보호전담기구 등을 통하여 개인정보처리방침의 이행사항 및 담당자의
                        준수여부를 확인하여 문제가 발견될 경우 즉시 수정합니다.
                      </li>
                    </ol>
                  </div>
                  <div className="base_sec">
                    <p className="base_sec_tt">개인정보보호책임자 및 담당자의 연락처</p>
                    <ol className="num_list2">
                      <li>
                        <p className="t_blue">가. 개인정보보호 책임자</p>성명 : 행정부원장 신기수{' '}
                        <br />
                        전화번호 : 031-570-7902
                      </li>
                      <li>
                        <p className="t_blue">나. 개인정보 보호 실무 담당자</p>성명 : 경영지원팀
                        강석창 과장 <br />
                        전화번호 : 031-570-7924
                      </li>
                      <li>
                        <p className="t_blue">다. 보안 실무 담당자</p>성명 : 의료정보팀 조병성 부장{' '}
                        <br />
                        전화번호 : 1566-1991 (내선 2610)
                      </li>
                    </ol>
                  </div>
                  <div className="base_sec">
                    <p className="base_sec_tt">권익침해 구제방법</p>
                    <p>
                      대검찰청 사이버수사과(http://www.spp.go.kr) <br />
                      경찰청사이버안전국(http://cyberbureau.police.go.kr) <br />
                      개인정보 분쟁조정위원회(http://www.kopico.go.kr)
                    </p>
                  </div>
                  <div className="base_sec">
                    <p className="base_sec_tt">링크 사이트 및 웹페이지</p>
                    <p>
                      병원 홈페이지에 링크되어 있는 웹사이트들이 개인정보를 수집하는 행위에 대해서는
                      본 병원의 "개인정보처리방침"이 적용되지 않음을 알려드립니다.
                    </p>
                  </div>
                  <div className="base_sec">
                    <p className="base_sec_tt">공지의 의무</p>
                    <p>
                      현 개인정보처리방침 내용 추가, 삭제 및 수정이 있을 시에는 개정 최소 7일전부터
                      홈페이지의 공지사항을 통해 고지할 것입니다.
                      <br />
                      <br />
                      공고일자 : 2022년 04월 01일
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 이용약관 */}
      <div className={`pop${activePopup === 'user_info_pop' ? '' : ' hide'}`} id="user_info_pop">
        <div className="pop-wrap">
          <div className="pop-box">
            <div className="base_cont">
              <div className="pop_tit">
                <strong>이용약관</strong>
                <button type="button" className="btn-pop-close" onClick={onClose}>
                  <span>close</span>
                </button>
              </div>
              <div className="pop_cont">
                <div className="base_info_cont">
                  <p>
                    메디인병원(이하 병원)은 고객님의 개인정보를 매우 중요시하며 개인정보보호법을
                    준수하고 있습니다.
                  </p>
                  <div className="base_sec">
                    <p className="base_sec_tt">제1장 총칙</p>
                    <p>제1조(목적)</p>
                    <p>
                      본 약관은 병원에서 운영하는 홈페이지에서 제공하는 온라인서비스(이하서비스)의
                      이용에 관한 사항을 규정함을 목적으로 합니다.
                    </p>
                    <p className="mt20">제2조(정의)</p>
                    <ol className="num_list">
                      <li>
                        이용자(회원) : 홈페이지에 로그인하여 본 약관에 따라 병원이 제공하는 서비스를
                        받는 사람을 말합니다.
                      </li>
                      <li>
                        운영자 : 서비스의 전반적인 관리와 원활한 운영을 위하여 병원에서 선정한
                        사람을 말합니다.
                      </li>
                      <li>
                        연결사이트 : 홈페이지와 하이퍼링크 등으로 연결된 웹 사이트를 말합니다.
                      </li>
                      <li>
                        개인정보 : 당해 정보에 포함되어 있는 이름, 주민등록번호 등의 사항에 의하여
                        특정 개인을 식별할 수 있는 정보를 말합니다.
                      </li>
                      <li>해지 : 이용자가 서비스 개통 후 이용계약을 해약하는 것을 말합니다.</li>
                    </ol>
                    <p className="mt20">제3조(약관의 게시 및 변경)</p>
                    <ol className="num_list">
                      <li>
                        병원은 본 약관의 내용과 상호, 병원 소재지, 이메일 등을 이용자가 알 수 있도록
                        홈페이지에 게시합니다.
                      </li>
                      <li>
                        병원은 불가피한 사정이 있는 경우 관계법령을 위배하지 않는 범위에서 본 약관을
                        개정할 수 있습니다.
                      </li>
                      <li>
                        병원은 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과
                        함께 서비스화면에 그 적용일자 7일 이전부터 공지합니다.
                      </li>
                      <li>
                        이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 관계법령 또는
                        상관례에 따릅니다.
                      </li>
                    </ol>
                    <p className="mt20">제4조(서비스의 내용 및 변경)</p>
                    <ol className="num_list">
                      <li>
                        병원은 다음의 서비스를 제공합니다.
                        <ol>
                          <li>① 병원의 의료진 및 진료일정 안내</li>
                          <li>② 병원 또는 연결사이트를 통해 제공되는 각종 예약 서비스</li>
                          <li>③ 병원 또는 연결사이트를 통해서 제공되는 건강상담 서비스</li>
                          <li>④ 병원에서 제공하는 건강정보</li>
                          <li>⑤ 병원에서 제공하는 기타서비스</li>
                        </ol>
                      </li>
                      <li>
                        병원은 불가피한 사정이 있는 경우 제공하는 서비스의 내용을 변경할 수 있으며,
                        이 경우 변경된 서비스의 내용 및 제공일자를 명시하여 그 제공일자 이전 7일부터
                        공지합니다.
                      </li>
                    </ol>
                    <p className="mt20">제5조(서비스의 중단)</p>
                    <ol className="num_list">
                      <li>
                        병원은 시스템 등 장치의 보수점검교체 및 고장, 통신의 두절, 기타 불가항력적
                        사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.
                      </li>
                    </ol>
                  </div>
                  <div className="base_sec">
                    <p className="base_sec_tt">제2장 회원의 가입 및 탈퇴</p>
                    <p className="mt20">제6조(회원가입)</p>
                    <ol className="num_list">
                      <li>
                        이용자는 병원의 정한 양식에 따라 회원정보를 기입한 후 본 약관에 동의한다는
                        의사표시를 함으로써 회원가입을 신청합니다.
                      </li>
                      <li>회원가입계약의 성립시기는 병원이 승낙한 시점으로 합니다.</li>
                      <li>
                        회원은 등록사항에 변경이 있는 경우, 직접 수정하거나 이메일 또는 기타
                        방법으로 병원에 그 변경사항을 알려야 합니다.
                      </li>
                    </ol>
                    <p className="mt20">제7조(회원탈퇴 및 자격의상실 등)</p>
                    <ol className="num_list">
                      <li>
                        회원은 병원에 언제든지 탈퇴를 요청할 수 있으며 병원은 즉시 회원탈퇴를
                        처리합니다.
                      </li>
                      <li>
                        회원이 다음 각호의 사유(허위 내용 등록, 다른 사람의 서비스 이용 방해, 부정한
                        방법 등)에 해당하는 경우, 병원은 회원자격을 상실시킬 수 있습니다.
                      </li>
                    </ol>
                    <p className="mt20">제8조(회원에 대한 통지)</p>
                    <ol className="num_list">
                      <li>
                        병원은 회원에 대한 통지를 하는 경우, 회원이 병원에 제공한 전자우편 주소 또는
                        전화번호로 할 수 있습니다.
                      </li>
                      <li>
                        병원은 불특정다수 회원에 대한 통지의 경우 게시판에 게시함으로써 개별통지에
                        갈음할 수 있습니다.
                      </li>
                    </ol>
                    <p className="mt20">제9조(진료예약의 신청 및 성립)</p>
                    <ol className="num_list">
                      <li>이용자는 홈페이지 상에서 이하의 방법에 의하여 진료예약을 신청합니다.</li>
                      <li>
                        병원은 제1항의 예약신청에 대하여 신청 내용에 허위, 기재누락, 오기가 있는
                        경우 등에 해당하지 않는 한 승낙합니다.
                      </li>
                      <li>
                        병원의 승낙 통지가 이용자의 전자우편으로 도달된 때에 예약이 성립된 것으로
                        봅니다.
                      </li>
                    </ol>
                  </div>
                  <div className="base_sec">
                    <p className="base_sec_tt">제3장 개인정보의 보호</p>
                    <p>제10조(이용자의 개인정보보호)</p>
                    <p>
                      병원은 관련법령이 정하는 바에 따라서 이용자 등록정보를 포함한 이용자의
                      개인정보를 보호하기 위하여 노력합니다.
                    </p>
                  </div>
                  <div className="base_sec">
                    <p className="base_sec_tt">제4장 서비스에 관한 책임의 제한</p>
                    <p>제11조(건강상담서비스)</p>
                    <ol className="num_list">
                      <li>
                        병원은 이용자의 상담 내용이 상담의사를 제외한 제3자에게 유출되지 않도록
                        최선을 다해 보안을 유지하려고 노력합니다.
                      </li>
                      <li>
                        이용자의 상담요청에 대한 종합적이고 적절한 답변을 위하여 의사들은 상담
                        내용과 답변을 참고할 수 있습니다.
                      </li>
                      <li>
                        상담에 대한 답변 내용은 각 전문 의사의 의학적 지식을 바탕으로 한 주관적인
                        답변으로 병원의 공식적인 의견이 될 수 없으며, 상담내용에 대하여 병원은
                        일체의 책임을 지지 않습니다.
                      </li>
                    </ol>
                    <p className="mt20">제12조(건강정보 제공 서비스)</p>
                    <ol className="num_list">
                      <li>
                        병원에서 제공하는 건강관련정보는 개략적이며 일반적인 것으로서 전문적인
                        의학적 진단, 진료, 치료를 대신할 수 없습니다.
                      </li>
                      <li>
                        병원은 제공하는 건강관련정보는 전적으로 이용자의 판단에 따라 이용되는
                        것으로서, 어떠한 책임도 지지 않습니다.
                      </li>
                    </ol>
                    <p className="mt20">제13조(병원과 연결 사이트간의 관계)</p>
                    <p>
                      병원은 연결 사이트가 독자적으로 제공하는 재화, 용역, 서비스에 의하여 이용자와
                      행하는 거래에 대해서 어떠한 보증책임을 지지 않습니다.
                    </p>
                  </div>
                  <div className="base_sec">
                    <p className="base_sec_tt">제5장 병원 및 이용자의 의무</p>
                    <p>제14조(병원의 의무)</p>
                    <ol className="num_list">
                      <li>
                        병원은 법령과 본 약관이 정하는 바에 따라 지속적이고, 안정적으로 서비스를
                        제공하는 데 최선을 다합니다.
                      </li>
                      <li>
                        병원은 이용자의 개인신상정보의 보안에 대하여 기술적 안전 조치를 강구하고
                        관리에 만전을 기합니다.
                      </li>
                      <li>
                        병원은 이용자가 원하지 않는 영리목적의 광고성이메일을 발송하지 않습니다.
                      </li>
                    </ol>
                    <p className="mt20">제15조(이용자의 주민등록번호 및 비밀번호에 대한 의무)</p>
                    <ol className="num_list">
                      <li>
                        주민등록번호와 비밀번호에 관한 모든 관리의 책임은 이용자에게 있습니다.
                      </li>
                      <li>
                        이용자는 자신의 주민등록번호 및 비밀번호를 제3자에게 이용하게 해서는 안
                        됩니다.
                      </li>
                    </ol>
                    <p className="mt20">제16조(이용자의 의무)</p>
                    <ol className="num_list">
                      <li>
                        이용자는 신청 또는 변경 시 허위내용의 등록, 병원에 게시된 정보의 변경,
                        타인의 지적재산권 침해 등의 행위를 하여서는 안 됩니다.
                      </li>
                    </ol>
                  </div>
                  <div className="base_sec">
                    <p className="base_sec_tt">제6장 기타</p>
                    <p>제17조(저작권의 귀속 및 이용제한)</p>
                    <ol className="num_list">
                      <li>
                        병원이 작성한 저작물에 대한 저작권 기타 지적재산권은 병원에 귀속합니다.
                      </li>
                      <li>
                        이용자는 홈페이지를 이용함으로써 얻은 정보를 병원의 사전 승낙 없이
                        영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.
                      </li>
                    </ol>
                    <p className="mt20">제18조(분쟁해결)</p>
                    <ol className="num_list">
                      <li>
                        본 이용약관에 규정된 것을 제외하고 발생하는 서비스 이용에 관한 분쟁은 최대한
                        쌍방합의에 의해 해결하도록 합니다.
                      </li>
                      <li>
                        병원은 이용자로부터 제출되는 불만사항 및 의견이 정당하다고 판단하는 경우
                        우선적으로 그 사항을 처리합니다.
                      </li>
                    </ol>
                    <p className="mt20">제19조(재판권 및 준거법)</p>
                    <ol className="num_list">
                      <li>
                        병원과 이용자간에 서비스 이용으로 발생한 분쟁에 관한 소송은 민사소송법상의
                        관할법원으로 합니다.
                      </li>
                      <li>병원과 이용자간에 제기된 전자거래 소송에는 한국법을 적용합니다.</li>
                    </ol>
                    <p className="mt20">* 부칙(방침 변경에 따른 공지 의무)</p>
                    <p>
                      이 개인정보 처리방침은 2018년 7월에 제정되었으며 법령•정책 또는 보안기술의
                      변경에 따라 내용의 추가•삭제 및 수정이 있을 시에는 변경되는 개인정보처리방침을
                      시행하기 최소 7일전에 병원 홈페이지를 통해 변경 이유 및 내용 등을 공지하도록
                      하겠습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
