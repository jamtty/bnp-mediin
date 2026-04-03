import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'
import greetingsImg from '../../assets/images/greetings_img.png'

export default function GreetingPage() {
  return (
    <SubPageLayout
      visualClass="vs3"
      visualTitle="병원소개"
      contentsClass="sub03"
      lnbItems={lnbItems}
    >
      <h3 className="cont_tit">병원장인사말</h3>
      <div className="con_area">
        <div className="greetings_area">
          <div className="hd_img">
            <img src={greetingsImg} alt="병원장 이학수" />
            <div className="hd_name">
              대표원장 <strong>이학수</strong>
            </div>
          </div>
          <div className="hd_cont">
            <dl>
              <dt>
                안녕하십니까? <br />
                메디인병원 대표원장 <strong className="t_bk">이학수</strong>입니다.
              </dt>
              <dd>
                메디인 병원은 지난 2003년 파주명지병원으로 개원하여<br />
                2022년 파주지역 최초 민간종합병원으로 승격하였습니다.<br /><br />

                메디인병원은 파주민간종합병원 최초 보건복지부 급성기 병원 4주기 의료기관 인증 /<br />
                / 포괄 2차 종합병원 선정/ 우수검사실 신임인증 / 전자의무기록시스템 인증 <br />
                / 마취 적정성 평가 1등급 / 약제급여 급성상기도감염 항생제처방률 1등급 <br />
                / 산재보험 의료기관평가 최우수 기관선정 / 만성폐쇄성폐질환 1등급 <br />
                / 감염예방관리료 차등제1등급 / 항생제 적정성 평가 1등급 <br />
                / 수술의 예방적 항생제 적정성 평가결과 1등급&nbsp;<br />
                / 병원표준화사망비 적정성평가 A그룹(사망비가 낮은 기관) 선정 되는 등 <br />
                다양한 분야에서 우수한 성과를 이루어냈습니다.<br /><br />

                메디인 병원은 수준 높은 의료서비스와 환자 중심의 진료로 <br />
                지난 20년 동안 파주시 지역주민들의 건강을 지켜왔으며, <br />
                경기북부지역 대표 종합병원으로 성장해 나가고 있습니다. <br />
                앞으로도 더욱 발전하는 메디인병원이 될 수 있도록 많은 관심과 성원을 부탁드립니다. <br />
                환자분들께 최고의 의료 서비스를 제공하기 위해 항상 노력하겠습니다.
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </SubPageLayout>
  )
}
