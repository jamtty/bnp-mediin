import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

export default function MissionPage() {
  return (
    <SubPageLayout
      visualClass="vs3"
      visualTitle="병원소개"
      contentsClass="sub03"
      lnbItems={lnbItems}
    >
      <h3 className="cont_tit">설립목적,미션,비전</h3>
      <div className="con_area">
        <div className="emergency_sec first_sec">
          <p className="info_tit">병원 설립목적</p>
          <p className="info_disc">
            지역사회의 건강을 최우선으로 하여 파주시민의 삶의 질을 높이고 경기북부지역의 의료자치를 실현하는 병원을 목표로 한다.
          </p>
        </div>
        <div className="emergency_sec">
          <p className="info_tit">미션과 비전</p>
          <div className="vision_area">
            <div className="vision_item">
              <div className="vision_simbol"><span>Mission<br />Statement</span></div>
              <div className="vision_cont">
                <ul className="dot_list3">
                  <li><span className="t_emerald">환자중심의 인술</span>로 최상의 진료를 제공하여 지역의료발전에 공헌한다.</li>
                </ul>
              </div>
            </div>

            <div className="vision_item">
              <div className="vision_simbol"><span>Vision<br />Statement</span></div>
              <div className="vision_cont">
                <ul className="dot_list3">
                  <li>양질의 진료를 바탕으로<br /><span className="t_emerald">지역의료자치</span>를 실현하는 병원</li>
                  <li><span className="t_emerald">인술로 믿음 주는</span> 지역최고의 병원</li>
                  <li><span className="t_emerald">인재들이 같이 일하고 싶은</span> 일등병원</li>
                </ul>
              </div>
            </div>

            <div className="vision_item">
              <div className="vision_simbol"><span>Strategies</span></div>
              <div className="vision_cont">
                <ul className="dot_list3">
                  <li>특성화 전략추진</li>
                  <li>건강증진센터 차별화</li>
                  <li>응급실을 통한 <span className="t_blue">지역거점병원</span> 추진</li>
                  <li><span className="t_blue">고객중심</span>의 관계관리 강화</li>
                  <li>경영진과 직원의 <span className="t_blue">의사소통</span> 강화</li>
                </ul>
              </div>
            </div>

            <div className="vision_item">
              <div className="vision_simbol"><span>Core Value</span></div>
              <div className="vision_cont">
                <ul className="dot_list3">
                  <li>CUSTOMER FIRST<span className="t_blue">(고객우선)</span></li>
                  <li>COOPERATION<span className="t_blue">(협력)</span></li>
                  <li>PROFESSIONALISM<span className="t_blue">(전문의식)</span></li>
                  <li>PASSION<span className="t_blue">(열정)</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubPageLayout>
  )
}
