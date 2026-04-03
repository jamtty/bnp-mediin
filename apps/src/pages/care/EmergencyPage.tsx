import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'
import icoEmergency1 from '../../assets/images/ico_emergency1.svg'
import icoEmergency2 from '../../assets/images/ico_emergency2.svg'
import icoEmergency3 from '../../assets/images/ico_emergency3.svg'
import icoEmergency4 from '../../assets/images/ico_emergency4.svg'
import icoEmergency5 from '../../assets/images/ico_emergency5.svg'

export default function EmergencyPage() {
  return (
    <SubPageLayout
      visualClass="vs1"
      visualTitle="진료안내"
      contentsClass="sub01"
      lnbItems={lnbItems}
    >
      <h3 className="cont_tit">응급실 진료안내</h3>
      <div className="con_area">
        <div className="reserv_info_area">
          <div className="emergency_sec">
            <p className="info_tit">응급진료 접수·진료시간</p>
            <p className="info_disc">
              메디인병원 응급실은 연중 무휴로 24시간 진료가 가능하며 급성기 질환이나 손상으로인한
              신속한 진료 및 처치를 시행하여 <br />
              환자의 생명을 구하고 골든타임을 지키기 위하여 전문의가 24시간 상주하며 환자분들에게
              신속한 진료를 제공합니다.
            </p>
            <div className="h_table">
              <table>
                <caption>응급실 정보표</caption>
                <colgroup>
                  <col />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">응급실 진료안내</th>
                    <th scope="col">메디인병원 응급실 전화</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>24시간 진료</td>
                    <td>031-570-7911 , 7912</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="emergency_sec">
            <p className="info_tit">응급진료절차</p>
            <div className="emergency_step">
              <ol>
                {[
                  { src: icoEmergency1, label: '환자 분류∙접수' },
                  { src: icoEmergency2, label: '진료' },
                  { src: icoEmergency3, label: '검사' },
                  { src: icoEmergency4, label: '처치' },
                  { src: icoEmergency5, label: '결정' },
                ].map((step) => (
                  <li key={step.label}>
                    <img src={step.src} alt={step.label} />
                    <p>{step.label}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </SubPageLayout>
  )
}
