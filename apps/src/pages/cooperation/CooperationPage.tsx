import SubPageLayout from '../../components/SubPageLayout'
import cooperationGuideImg from '../../assets/images/hpcenter/cooperation_guide.jpg'

const mainWorks = [
  { title: '진료의뢰',    desc: '병·의원 진료의뢰 예약 및 상담' },
  { title: '진료회신',    desc: '개인정보공개 동의한 환자에 한해\n진료기록 회신서 발송 및 관리' },
  { title: '전원회송',    desc: '급성기치료가 끝난 경우 희망하는\n병·의원으로 전원 및 회송' },
  { title: '협력병원관리', desc: '협력병원 체결 진행 및 관리' },
]

const useSteps = [
  '환자 의뢰 및 진료예약',
  '진료접수 및 영상등록',
  '진료',
  '진료결과회신',
  '회송',
]

const useStepDetails = [
  '환자 의뢰 및 진료예약 - 전화, 팩스, 인터넷(진료의뢰 회송중계시스템)',
  '진료접수 및 영상등록 - 1층 원무팀에 지참하신 진료의뢰서, 의무기록 및 영상 CD 전달하여 등록',
  '진료 - 진료접수 및 개인정보 동의서 서명후 진료과 안내',
  '진료결과회신 - 의뢰환자 진료정병 및 검사결과를 포함한 회신서 발송 *개인정보 동의한 환자에 한함',
  '회송 - 의뢰환자 적정진료 및 급성기 치료후 지속적인 치료가 필요한 경우 환자, 보호자와 상의후 의뢰한 병·의원으로 되의뢰 및 회송',
]

const referralFlow = [
  { label: '1차 의료기관' },
  { label: null },
  { label: '메디인 병원' },
  { label: null },
  { label: '3차 의료기관' },
]

const operationHours = [
  { label: '평일',   value: '오전 9시 ~ 18시' },
  { label: '토요일', value: <span style={{ color: 'rgb(255, 0, 0)' }}>휴무</span> },
  { label: '위치',   value: '1층 원무팀 사무실 앞' },
]

const contacts = [
  {
    label: '전용전화',
    values: [
      '031-570-7979',
      <span key="email" style={{ fontSize: '13px', letterSpacing: '-0.26px' }}>
        진료협력센터 이메일 : request@medi-yin.co.kr
      </span>,
    ],
  },
  { label: '전용팩스', values: ['031-570-7999'] },
  { label: '응급실',   values: ['031-570-7911,7912'] },
]

export default function CooperationPage() {
  return (
    <SubPageLayout visualClass="vs6" visualTitle="진료협력센터" contentsClass="sub06">
      <h3 className="cont_tit">진료협력센터</h3>
      <div className="con_area">
        <div className="reserv_info_area">

          {/* 소개 */}
          <div className="info_time_sec">
            <p className="info_tit">진료협력센터 소개</p>
            <p className="info_disc">
              메디인병원 진료협력센터는 지역사회의 보건의료발전 및 주민건강유지를 위해 지역 내 1,3차 의료기관과 협력체계를 구축하고,
              진료 상담, 의뢰, 회송, 전원을 신속하고 원활하게 하기위함이며, 의료관련정보를 공유하고 각 의료기관들 과 공동발전 및
              협력체계 강화 역할을 수행하기 위해 운영하고 있습니다.
            </p>
          </div>

          {/* 주요업무 */}
          <div className="info_step_sec">
            <p className="info_tit">주요업무</p>
            <ul className="main-work">
              {mainWorks.map((work) => (
                <li key={work.title}>
                  <p className="tit"><i></i> {work.title}</p>
                  <p className="des">
                    {work.desc.split('\n').map((line, i) => (
                      <span key={i}>{line}{i < work.desc.split('\n').length - 1 && <br />}</span>
                    ))}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* 이용방법 */}
          <div className="info_step_sec">
            <p className="info_tit">진료협력센터 이용방법</p>
            <div className="main-use">
              <ul>
                {useSteps.map((step) => (
                  <li key={step}>
                    <p className="ico"></p>
                    <p className="des">{step}</p>
                  </li>
                ))}
              </ul>
            </div>
            <ol className="list-num">
              {useStepDetails.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ol>
            <div className="main-use2">
              <ul>
                {referralFlow.map((item, i) => (
                  <li key={i}>
                    <p className="ico"></p>
                    {item.label && <p className="des">{item.label}</p>}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 위치 및 운영시간 */}
          <div className="info_step_sec">
            <p className="info_tit">진료협력센터 위치 및 운영시간</p>
            <div className="main-box-list">
              <ul>
                {operationHours.map((item) => (
                  <li key={item.label}>
                    <p className="ico"></p>
                    <p className="des">{item.label}</p>
                    <p className="des2">{item.value}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 연락처 */}
          <div className="info_step_sec">
            <p className="info_tit">진료협력센터 연락처</p>
            <div className="main-box-list2">
              <ul>
                {contacts.map((contact) => (
                  <li key={contact.label}>
                    <p className="ico"></p>
                    <p className="des">{contact.label}</p>
                    {contact.values.map((val, i) => (
                      <p key={i} className="des2">{val}</p>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="main-box-list2">
            <img
              src={cooperationGuideImg}
              alt="진료협력센터 안내"
              style={{ width: '50%' }}
            />
          </div>

        </div>
      </div>
    </SubPageLayout>
  )
}
