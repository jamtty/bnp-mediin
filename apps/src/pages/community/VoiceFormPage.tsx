import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

type VocCategory = '' | 'VC01000000' | 'VC02000000' | 'VC03000000' | 'VC04000000'

const VOC_CATEGORIES: VocCategory[] = ['', 'VC01000000', 'VC02000000', 'VC03000000', 'VC04000000']
const VOC_CATEGORY_LABELS: Record<VocCategory, string> = {
  '': '분류 선택',
  'VC01000000': '칭찬 및 감사',
  'VC02000000': '불편',
  'VC03000000': '제안 및 건의',
  'VC04000000': '기타',
}

export default function VoiceFormPage() {
  const navigate = useNavigate()

  const [category, setCategory] = useState<VocCategory>('')
  const [categoryOpen, setCategoryOpen] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [title, setTitle] = useState('')
  const [agreePrivacy, setAgreePrivacy] = useState(false)
  const [fileCount, setFileCount] = useState(1)
  const [content, setContent] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: API 연동 — POST /api/voice
    navigate('/community/voice')
  }

  return (
    <SubPageLayout
      visualClass="vs8"
      visualTitle="고객마당"
      contentsClass="sub08"
      lnbItems={lnbItems}
    >
      <h3 className="cont_tit">고객의 소리</h3>
      <div className="con_area">
        <div className="bbs_cont">
          <div className="bbs_write">
            <form onSubmit={handleSubmit}>
              <div className="v_table">
                <table>
                  <caption>고객의소리 등록표</caption>
                  <colgroup>
                    <col style={{ width: '25%', maxWidth: '200px' }} />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>*상담분류1</th>
                      <td>
                        <input type="hidden" name="vc_cd" value={category} readOnly />
                        <div className={`select_area wd370${categoryOpen ? ' open' : ''}`}>
                          <button
                            type="button"
                            className="btn_slc_active"
                            onClick={() => setCategoryOpen((v) => !v)}
                          >
                            {VOC_CATEGORY_LABELS[category]}
                          </button>
                          <div className="slc_list">
                            <ul>
                              {VOC_CATEGORIES.map((cat) => (
                                <li key={cat}>
                                  <button type="button" onClick={() => { setCategory(cat); setCategoryOpen(false) }}>
                                    {VOC_CATEGORY_LABELS[cat]}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>*이름</th>
                      <td>
                        <input
                          type="text"
                          name="vc_name"
                          className="wt_ip wd370"
                          placeholder="이름을 입력해주세요."
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>*연락처</th>
                      <td>
                        <input
                          type="text"
                          name="vc_phone"
                          className="wt_ip wd370"
                          placeholder="연락처를 입력해주세요."
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>*비밀번호</th>
                      <td>
                        <input
                          type="text"
                          name="vc_pwd"
                          className="wt_ip wd370"
                          placeholder="비밀번호를 입력해주세요."
                          maxLength={4}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <span className="t_red">※ 비밀번호는 숫자 4자리 입니다.</span>
                      </td>
                    </tr>
                    <tr>
                      <th>*제목</th>
                      <td>
                        <input
                          type="text"
                          name="vc_title"
                          className="wt_ip wd100p"
                          placeholder="제목을 입력해주세요."
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>*내용</th>
                      <td>
                        <textarea
                          name="vc_cont"
                          className="wt_textarea"
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>*첨부파일</th>
                      <td>
                        <div className="file_add_area">
                          <button
                            type="button"
                            className="btn_del"
                            onClick={() => setFileCount((n) => n + 1)}
                          >
                            추가
                          </button>
                        </div>
                        <div style={{ paddingTop: '5px' }}>
                          {Array.from({ length: fileCount }, (_, i) => (
                            <div className="formText" key={i} style={{ paddingTop: i > 0 ? '5px' : undefined }}>
                              <input type="file" name="attfile" title="첨부파일" />
                              <button
                                type="button"
                                className="btn_del"
                                style={{ height: '25px', borderRadius: '5px', padding: '0 10px', background: '#707070', fontSize: '15px', color: '#fff' }}
                                onClick={() => setFileCount((n) => Math.max(1, n - 1))}
                              >
                                삭제
                              </button>
                            </div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="agree_area">
                <div className="agree_privacy">
                  <div className="base_info_cont">
                    <div className="base_table">
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <p>수집하는 개인정보의 항목 및 수집방법 </p>
                              <p>개인정보 수집에 대한 동의 </p>
                              <p>동의철회 / 회원탈퇴 방법</p>
                              <p>개인정보의 열람 및 정정 </p>
                              <p>개인정보의 보유 및 이용 </p>
                              <p>CCTV 설치ㆍ운영</p>
                            </td>
                            <td>
                              <p>수집한 개인정보의 처리위탁 </p>
                              <p>개인정보 수집방법 </p>
                              <p>개인정보 파기절차 및 방법 </p>
                              <p>개인정보 제공 및 공유 </p>
                              <p>이용자 및 법정대리인의 권리와 그 행사방법 </p>
                              <p>개인정보의 기술적 / 관리적 보호 대책</p>
                            </td>
                            <td>
                              <p>웹 사이트 이용 중 다른 사람의 개인정보 취득 </p>
                              <p>개인정보보호책임자 및 담당자의 연락처 </p>
                              <p>권익침해 구제방법 </p>
                              <p>링크 사이트 및 웹페이지 </p>
                              <p>공지의 의무 </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p>메디인병원(이하 병원)은 의료법, 개인정보보호법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 통신비밀보호법, 전기통신사업법 등
                      병원이 준수하여야 할 관련
                      법령상의 개인정보보호 규정을 준수하며, 관련 법령에 의거한 개인정보처리방침을 정하여 이용자 권익 보호에 최선을 다하고 있습니다. 개인정보
                      처리방침은 다음과
                      같은 내용을 담고 있습니다. (개인정보보호법 제 30조)
                    </p>
                    <div className="base_sec">
                      <p className="base_sec_tt">수집하는 개인정보의 항목 및 수집방법</p>
                      <p>병원은 진료예약, 상담 등 각종 서비스의 원활한 제공과 예약확인, 상담 답변 등 각종 정보 제공을 위한 온라인 및 오프라인에서의
                        공지, 통계분석자료로
                        활용을 위해 최소한의 정보를 필수 사항으로 수집합니다.</p>
                    </div>
                    <div className="base_sec">
                      <p className="base_sec_tt">환자의 의무</p>
                      <ol className="num_list2">
                        <li>
                          <p className="t_blue">가. 진료예약 신청 시</p>
                          필수항목 : 성명, 주민등록번호, 주소, 연락처(주택, 핸드폰), 진료과목, 이메일 주소
                        </li>
                        <li>
                          <p className="t_blue">나.접수 시</p>
                          필수항목 : 성명, 주민등록번호, 전화번호, 핸드폰번호, 주소, 신용카드번호(카드결제 시), 의료보험증번호
                          <br />선택사항: 종교
                        </li>
                        <li>
                          <p className="t_blue">다. 수납 시</p>
                          필수항목 : 카드사명, 신용카드번호(카드결제 시), 핸드폰번호(현금영수증) 등 결제 승인 정보 <br />선택항목 :
                          통장계좌번호(환자 금액정산 시)
                        </li>
                        <li>
                          <p className="t_blue">라. 입원 시</p>
                          필수항목 : 보호자 정보(환자와의 관계, 성명, 주민등록번호, 전화번호, 주소) <br />선택항목 : 종교, 위험환자 실시간 동선
                        </li>
                        <li>
                          <p className="t_blue">마. 의무기록 정정 시</p>
                          필수항목 : 정보주체의 등록번호, 이름, 전화번호, 생년월일, 신분증 사본, 주치의 동의서명 대리인일 경우 구비서류 별도 필요
                        </li>
                        <li>
                          <p className="t_blue">바. 진료기록 사본 발급</p>
                          필수항목 : 환자 등록번호, 성명, 연락처, 주민등록번호, 신분증 사본, 주치의 동의서명(의학적 판단 필요 시) 대리인일 경우 구비서류 별도 필요
                        </li>
                        <li>
                          <p className="t_blue">사. 자동으로 수집, 저장되는 정보</p>
                          병원 홈페이지를 이용할 경우 다음과 같은 정보는 자동적으로 수집, 저장됩니다. <br />
                          서비스 이용 과정이나 서비스 제공 업무 처리 과정에서 다음과 같은 정보들이 자동으로 생성되어 수집될 수 있습니다. <br />
                          <strong>- 서비스 이용기록, 방문 일시, 접속 로그, 쿠키, 접속 IP 정보 등 </strong><br />
                          위와 같이 자동 수집ㆍ저장되는 정보는 이용자 여러분에게 보다 나은 서비스를 제공하기 위한 통계분석과 이용자와 웹사이트간의
                          원활한 의사소통 등에 활용될 것입니다. <br />
                          다만, 법령의 규정에 따라 관련기관에 이러한 정보를 제출하게 되어 있을 경우도 있다는 것을 유념하시기 바랍니다.
                        </li>
                        <li>
                          <p className="t_blue">자. 부가 서비스 및 이벤트 응모 과정</p>
                          해당 서비스의 이용자에 한해서만 아래와 같은 정보들이 수집될 수 있습니다. <br />
                          해당 서비스 및 이벤트에서 필요로 하며 추가 수집에 대해 동의 받은 항목 <br />
                          병원 홈페이지에서는 이용자의 인종 및 민족, 사상 및 신조, 출신지 및 본적지, 정치적 성향 및 범죄기록 등 고객의 기본적
                          인권을 침해할 우려가 있는 민감한 개인정보를 수집하지 않습니다.
                        </li>
                      </ol>
                    </div>
                    <div className="base_sec">
                      <p className="base_sec_tt">개인정보 수집에 대한 동의</p>
                      <p>회원님께서 서비스 가입신청서, 변경신청서 등에 서명하시거나, 홈페이지 회원 가입을 통하여 &quot;동의한다&quot;버튼을 클릭하는 행위 등을
                        병원의 개인정보처리방침 및 이용약관에 따른 개인정보 수집에 동의한 것으로 봅니다.</p>
                    </div>
                    <div className="base_sec">
                      <p className="base_sec_tt">동의철회 / 회원탈퇴 방법</p>
                      <p>철회하실 수 있습니다. 회원탈퇴는 병원 홈페이지 마이페이지의[회원정보수정] → 『회원탈퇴』를 클릭하여 직접 회원탈퇴를 하시거나
                        총무팀으로 서면, 전화 또는 Fax등으로 연락하시면 지체 없이 귀하의 개인정보를 파기하는 등 필요한 조치를 하겠습니다.</p>
                    </div>
                    <div className="base_sec">
                      <p className="base_sec_tt">개인정보의 열람 및 정정</p>
                      <p>회원님께서는 언제든지 등록되어 있는 자신의 개인정보를 열람하거나 정정하실 수 있습니다. 개인정보의 열람 및 정정을 하고자 할 경우
                        [마이페이지] → 『회원정보수정』을 통해 직접 열람 또는 정정이 가능합니다.</p>
                      <p>또한 개인정보의 오류에 대한 정정을 요구할 경우, 정정을 완료하기 전까지 해당 개인정보를 이용하지 않습니다. 또한 잘못된 개인정보를
                        제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체 없이 통지하여 정정이 이루어지도록 조치하겠습니다.</p>
                    </div>
                    <div className="base_sec">
                      <p className="base_sec_tt">개인정보의 보유 및 이용</p>
                      <ol className="num_list2">
                        <li>
                          <p className="t_blue">가. 보유하고 있는 개인정보</p>
                          병원은 법령의 규정에 근거하여 보유하고 있는 주요 개인 정보파일은 다음과 같습니다. <br />
                          - 성명, 생년월일, 성별, 전화번호, 이메일, 희망 아이디, 비밀번호, 병원 내 위치정보 : 서비스 이용에 따른 가입 및 본인 식별에 이용
                          <br />
                          - 이메일 수신여부 : 소식 및 고지사항 전달, 불만처리 등을 위한 원활한 의사소통 경로의 확보, 새로운 서비스 및 이벤트 정보 등의 안내
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
                                  <td>원무팀 외래접수 창구 <br />원무팀 입원소속 창구</td>
                                  <td>전화번호, 주소 등 기본 인적사항</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </li>
                        <li>
                          <p className="t_blue">나. 회원관리</p>
                          회원제 서비스 이용 및 제한적 본인 확인제에 따른 본인확인, 개인식별, 불량회원의 부정 이용방지와 비인가 사용방지,
                          가입의사 확인, 만14세 미만 아동 개인정보 수집 시 법정 대리인 동의여부 확인, 추후 법정 대리인 본인 확인, 분쟁 조정을 위한 기록보존,
                          불만처리 등 민원처리, 고지사항 전달
                        </li>
                        <li>
                          <p className="t_blue">다. 신규 서비스 개발 및 마케팅ㆍ광고에의 활용</p>
                          신규 서비스 개발 및 맞춤 서비스 제공, 통계학적 특성에 따른 서비스 제공 및 광고 게재, 서비스의 유효성 확인, 이벤트
                          및 광고성 정보 제공 및 참여기회 제공, 접속빈도 파악, 회원의 서비스이용에 대한 통계
                        </li>
                        <li>
                          <p className="t_blue">라. 진료서비스</p>
                          진료 / 건진 예약, 조회 및 진료를 위한 본인 확인 절차에 사용<br />
                          진료 / 예약 / 입원예정 및 검사 예정에 대한 Mobile 안내<br />
                          진료비계산서, 내역서, 재증명서 발송 및 약품 / 건진물품 발송<br />
                          진단 및 치료를 위한 진료 서비스와 진료비 청구, 수납, 환불 등의 원무 서비스<br />
                          교육, 연구, 진료서비스에 필요한 최소한의 분석 자료<br />
                          온라인수탁, 외부검사 및 임상시험 심사 등을 위한 기초자료<br />
                          민원 / 고충 처리 등을 위한 의사소통의 경로 확보<br />
                          의료법, 형법 등 관계 법령에 의거한 정보 제공<br />
                          감염병 역학관리 및 위험환자 동선 확보<br />
                          협력 병ㆍ의원 진료 의뢰/회신 시 정보제공
                        </li>
                        <li>
                          <p className="t_blue">마. 진료협력센터 홈페이지 및 Mobile 이용서비스</p>
                          진료의뢰, 의뢰환자 조회 및 진료협력센터 홈페이지 및 Mobile 이용에 따른 본인 확인 절차에 사용 <br />
                          회송 서비스 제공을 위한 자료 <br />
                          환자 회신, 회송서 발송(우편, 문자, 이메일 등) <br />
                          신규 서비스 개발 및 신규 서비스 개발 위한 자료 <br />
                          교육, 연구, 진료서비스에 필요한 분석자료 <br />
                          진료협력센터 홈페이지 운영 및 통계분석자료 활용 <br />
                          전문 진료 분야에 따른 분야별, 학회, 간담회 초청대상 선정 자료 <br />
                          의학정보 및 행사 안내, 홍보 마케팅 자료 제공, DM발송, 이벤트 등 광고성 정보 전달
                        </li>
                        <li>
                          <p className="t_blue">바. 개인정보의 파기</p>
                          - 회원가입정보의 경우 : 회원가입을 탈퇴하거나 회원에서 제명된 때 모두 파기되며, 단, 로그인 ID의 경우 재사용 방지를 위해 영구 보관됨.
                          <br />
                          - 진료협력센터 홈페이지 회원가입 정보의 경우 : 진료협력센터 홈페이지 회원가입을 탈퇴하거나 회원에서 제명된 때 가입 정보 및 가입 기록
                          파기되며, 단, 진료정보(의뢰환자 및 병원 관리 위함)와 연관된 데이터의 경우에 한하여 보관됨. <br />
                          - 설문조사, 행사 등의 목적을 위하여 수집한 경우 : 당해 설문조사, 행사 등이 종료한 때 <br />
                          - 진료서비스의 제공을 위하여 수집한 경우 : 의료법에 명시된 진료기록 보관 기준에 준하여 보관 <br />
                          ㄱ. 병원은 이용자들의 개인정보를 &quot;개인정보의 보유 및 이용&quot;에서 고지한 범위 내에서 사용하며, <br />
                          이용자의 사전 동의 없이는 동 제공범위를 초과하여 이용하거나 원칙적으로 이용자의 개인정보를 외부에 공개하지 않습니다.
                          <br />
                          - 이용자들이 사전에 공개에 동의한 경우 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우
                          <br />
                          - 수집목적을 달성한 경우에도 보존할 필요성이 있는 경우
                        </li>
                      </ol>
                    </div>
                    <div className="base_sec">
                      <p className="base_sec_tt">CCTV 설치ㆍ운영</p>
                      <p>본 병원은 아래와 같이 영상정보처리기기를 설치ㆍ운영하고 있습니다. </p>
                      <ol className="num_list2">
                        <li>
                          <p className="t_blue">가. 설치근거 및 목적</p>
                          시설안전, 화재예방, 도난예방, 환자안전 등을 위한 감시 및 녹화
                        </li>
                        <li>
                          <p className="t_blue">나. 설치 대수 및 위치, 촬영범위</p>
                          영상정보처리기기 대수 : 총100대 <br />
                          영상정보처리기기 위치 : 각 층 입구 및 통로, 주차시설 입출차, 외곽 광장 <br />
                          영상정보처리기기 촬영범위 : 각층 병동 복도, 각층 엘리베이터 문앞, 비상문앞, 출입구, 통로
                        </li>
                        <li>
                          <p className="t_blue">다. 담당부서 및 관리책임자</p>
                          운영관리 : 시설안전팀 (박종식 031-570-9081) <br />
                          유지보수관리 : 시설안전팀 (성기영 031-570-9084)
                        </li>
                        <li>
                          <p className="t_blue">라. 영상정보의 촬영시간, 보관기간, 보관장소 및 처리방법</p>
                          촬영시간 : 24시간 촬영 <br />
                          보관기간 : 14일 ~ 1개월 <br />
                          보관장소 : 방재실 <br />
                          마. 영상정보 확인방법 및 장소 <br />
                          시설안전팀 (방재실)
                        </li>
                        <li>
                          <p className="t_blue">바. 정보주체의 영상정보 열람 등 요구에 대한 조치</p>
                          정보주체 자신이 촬영된 경우 또는 명백히 정보주체의 생명ㆍ신체ㆍ재산 이익을 위해 필요한 경우에 한해 열람을 허용함 <br />
                          정보주체의 열람 등 청구에도 불구하고 아래와 같은 경우에는 개인영상정보 열람 등 청구를 거부할 수 있습니다. <br />
                          개인영상정보의 보관기간이 경과하여 파기한 경우 <br />
                          기타 정보주체의 열람 등 요구를 거부할 만한 정당한 사유가 존재하는 경우
                        </li>
                        <li>
                          <p className="t_blue">사. 영상정보보호를 위한 기술적 관리적ㆍ물리적 조치</p>
                          내부관리계획 수립, 접근통제 및 접근권한 제한, 영상정보의 안전한 저장ㆍ전송기술 적용, 처리기록 보관 및 위ㆍ변조
                          방지조치, 보관시설 마련 및 잠금장치 설치 등
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
                              <td>지단검사의학과 위탁, 검체검사 진행 </td>
                              <td>환자식별정보 및 검체 검사 결과 </td>
                              <td>위탁계약 종료시까지</td>
                            </tr>
                            <tr>
                              <td>녹십자</td>
                              <td>지단검사의학과 위탁, 검체검사 진행</td>
                              <td>환자식별정보 및 검체 검사 결과</td>
                              <td>위탁계약 종료시까지</td>
                            </tr>
                            <tr>
                              <td>(주) KTIS</td>
                              <td>환자확인 및 진료 예약, 취소 등에 관한 업무 </td>
                              <td>등록번호, 성명, 주민번호, 연락처, 주소 등 예약에 필요한 사항 </td>
                              <td>위탁계약 종료시까지</td>
                            </tr>
                            <tr>
                              <td>BNP21</td>
                              <td>홈페이지 유지 운영관리</td>
                              <td>홈페이지에서 수집한 개인정보 일체 </td>
                              <td>위탁계약 종료시까지</td>
                            </tr>
                            <tr>
                              <td>(주)엔에스스마트 </td>
                              <td>무인수납 키오스크 유지보수 관리 </td>
                              <td>환자인적사항, 처방정보 , 보험자격 등 </td>
                              <td>위탁계약 종료시까지</td>
                            </tr>
                            <tr>
                              <td>(주)새롬소프트</td>
                              <td>환자확인 및 건진 예약, 취소 등에 관한 업무 </td>
                              <td>등록번호, 성명, 주민번호, 연락처, 주소 등 예약에 필요한 사항 </td>
                              <td>위탁계약 종료시까지</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="base_sec">
                      <p className="base_sec_tt">개인정보 수집방법</p>
                      <p>병원은 다음과 같은 방법으로 개인정보를 수집합니다. <br />
                        - 홈페이지, 서면양식, 팩스, 전화, 상담 게시판, 이메일, 이벤트 응모 등 </p>
                    </div>
                    <div className="base_sec">
                      <p className="base_sec_tt">개인정보 파기절차 및 방법</p>
                      <p>이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다.</p>
                      <ol className="num_list2">
                        <li>
                          <p className="t_blue">가. 파기절차</p>
                          이용자가 회원가입 등을 위해 입력한 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침
                          및 기타 관련 법령에 의한 정보보호 사유에 따라(개인정보의 보유 및 이용 참조)일정 기간 저장된 후 파기됩니다. <br />
                          동 개인정보는 법률에 의한 경우가 아니고서는 보유되는 이외의 다른 목적으로 이용되지 않습니다.
                        </li>
                        <li>
                          <p className="t_blue">나. 파기방법</p>
                          종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다. <br />
                          전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
                        </li>
                      </ol>
                    </div>
                    <div className="base_sec">
                      <p className="base_sec_tt">이용자 및 법정대리인의 권리와 그 행사방법</p>
                      <p>- 이용자 및 법정 대리인은 언제든지 등록되어 있는 자신 혹은 당해 만 14세 미만 아동의 개인정보를 조회하거나 수정할 수 있으며
                        가입해지를 요청할 수도 있습니다. <br />
                        - 이용자 혹은 만 14세 미만 아동의 개인정보 조회, 수정을 위해서는 &apos;개인정보변경&apos;(또는 &apos;회원정보수정&apos;등)을,
                        가입해지(동의철회)를 위해서는
                        &quot;회원탈퇴&quot;를 클릭하여 본인 확인 절차를 거치신 후 직접 열람, 정정 또는 탈퇴가 가능합니다. <br />
                        - 혹은 개인정보보호담당자에게 서면, 전화 또는 이메일로 연락하시면 지체 없이 조치하겠습니다. <br />
                        - 이용자가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다.
                        또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체 없이 통지하여 정정이 이루어지도록 하겠습니다. <br />
                        - 병원은 이용자 혹은 법정 대리인의 요청에 의해 해지 또는 삭제된 개인정보는 &quot;개인정보의 보유 및 이용&quot;에 명시된 바에 따라
                        처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.</p>
                    </div>
                    <div className="base_sec">
                      <p className="base_sec_tt">개인정보의 기술적 / 관리적 보호 대책</p>
                      <p>병원은 이용자들의 개인정보를 처리함에 있어 개인정보가 분실, 도난, 유출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과
                        같은 기술적 / 관리적 대책을 강구하고 있습니다.</p>
                      <ol className="num_list2">
                        <li>
                          <p className="t_blue">가. 비밀번호 암호화</p>
                          회원 아이디(ID)의 비밀번호는 암호화되어 저장 및 관리되고 있어 본인만이 알고 있으며, 개인정보의 확인 및 변경도
                          비밀번호를 알고 있는 본인에 의해서만 가능합니다.
                        </li>
                        <li>
                          <p className="t_blue">나. 해킹 등에 대비한 대책</p>
                          병원은 해킹이나 컴퓨터 바이러스 등에 의해 회원의 개인정보가 유출되거나 훼손되는 것을 막기 위해 최선을 다하고 있습니다.
                          <br />
                          개인정보의 훼손에 대비해서 자료를 수시로 백업하고 있고, 최신 백신프로그램을 이용하여 이용자들의 개인정보나 자료가
                          유출되거나 손상되지 않도록 방지하고 있으며, 암호화 통신 등을 통하여 네트워크상에서 개인정보를 안전하게 전송할 수 있도록 하고 있습니다. <br />
                          침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있으며, 기타 시스템적으로 보안성을 확보하기 위한 가능한 모든
                          기술적 장치를 갖추려 노력하고 있습니다.
                        </li>
                        <li>
                          <p className="t_blue">다. 처리 직원의 최소화 및 교육</p>
                          병원의 개인정보관련 처리 직원은 담당자에 한정시키고 있고 이를 위한 별도의 비밀번호를 부여하여 정기적으로 갱신하고 있으며,
                          담당자에 대한 수시 교육을 통하여 개인정보처리방침의 준수를 항상 강조하고 있습니다.
                        </li>
                        <li>
                          <p className="t_blue">라. 개인정보보호전담기구의 운영</p>
                          병원 내 개인정보보호전담기구 등을 통하여 개인정보처리방침의 이행사항 및 담당자의 준수여부를 확인하여 문제가 발견될 경우
                          즉시 수정하고 바로 잡을 수 있도록 노력하고 있습니다. <br />
                          단, 이용자 본인의 부주의나 인터넷상의 문제로 ID, 비밀번호, 주민등록번호 등 개인정보가 유출되어 발생한 문제에 대해
                          병원은 일체의 책임을 지지 않습니다.
                        </li>
                      </ol>
                    </div>
                    <div className="base_sec">
                      <p className="base_sec_tt">웹 사이트 이용 중 다른 사람의 개인정보 취득</p>
                      <p>본 병원이 운영하는 웹사이트에서 이메일 주소 등 식별할 수 있는 개인정보를 이메일 수집 프로그램이나 그 밖의 기술적 장치를 이용하여
                        무단으로 취득 또는 배포하여서는 안됩니다. 허위 또는 부정한 방법으로 개인정보를 열람 또는 제공받은 자는 관계 법규에 의하여 처벌을 받을 수
                        있습니다.</p>
                    </div>
                    <div className="base_sec">
                      <p className="base_sec_tt">개인정보보호책임자 및 담당자의 연락처</p>
                      <p>귀하께서는 병원의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보보호책임자 혹은 담당부서로 신고하실 수
                        있습니다.</p>
                      <ol className="num_list2">
                        <li>
                          <p className="t_blue">가. 개인정보보호 책임자</p>
                          -성명 : 행정부원장 신기수 <br />
                          -전화번호 : 031-570-7902
                        </li>
                        <li>
                          <p className="t_blue">나. 개인정보 보호 실무 담당자</p>
                          -성명 : 경영지원팀 강석창 과장 <br />
                          -전화번호 : 031-570-7924
                        </li>
                        <li>
                          <p className="t_blue">다. 보안 실무 담당자</p>
                          -성명 : 의료정보팀 조병성 부장 <br />
                          -전화번호 : 1566-1991 (내선 2610)
                        </li>
                      </ol>
                    </div>
                    <div className="base_sec">
                      <p className="base_sec_tt">권익침해 구제방법</p>
                      <p>아래의 기관은 본 병원과는 별개의 기관으로서, 병원 홈페이지의 자체적인 개인정보 불만처리, 피해구제 결과에 만족하지 못하시거나 보다
                        자세한 도움이 필요하시면 문의하시기 바랍니다.</p>
                      <p>대검찰청 사이버수사과(http://www.spp.go.kr) <br />
                        경찰청사이버안전국(http://cyberbureau.police.go.kr) <br />
                        개인정보 분쟁조정위원회(http://www.kopico.go.kr)</p>
                    </div>
                    <div className="base_sec">
                      <p className="base_sec_tt">링크 사이트 및 웹페이지</p>
                      <p>병원 홈페이지에 링크되어 있는 웹사이트들이 개인정보를 수집하는 행위에 대해서는 본 병원의 &quot;개인정보처리방침&quot;이 적용되지 않음을
                        알려드립니다.</p>
                    </div>
                    <div className="base_sec">
                      <p className="base_sec_tt">공지의 의무</p>
                      <p>현 개인정보처리방침 내용 추가, 삭제 및 수정이 있을 시에는 개정 최소 7일전부터 홈페이지의 &apos;공지사항&apos;을 통해 고지할 것입니다.
                        <br /><br />
                        공고일자 : 2022년 04월 01일</p>
                    </div>
                  </div>
                </div>
                <div className="agree_chk_area">
                  <div className="chk_area">
                    <input
                      type="checkbox"
                      id="agree_chk"
                      name="agree_chk"
                      checked={agreePrivacy}
                      onChange={(e) => setAgreePrivacy(e.target.checked)}
                    />
                    <label htmlFor="agree_chk">개인정보처리방침에 동의합니다. (필수)</label>
                  </div>
                </div>
              </div>
              <div className="bbs_btn_area">
                <button type="button" className="btn btn_gray" onClick={() => navigate('/community/voice')}>
                  <span>취소</span>
                </button>
                <button type="submit" className="btn btn_emerald">
                  <span>접수</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </SubPageLayout>
  )
}