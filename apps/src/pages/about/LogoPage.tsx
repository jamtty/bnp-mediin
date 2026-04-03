import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'
import ciLogo01 from '../../assets/images/ci_logo01.svg'
import ciLogo02 from '../../assets/images/ci_logo02.svg'
import ciLogo03 from '../../assets/images/ci_logo03.svg'

export default function LogoPage() {
  return (
    <SubPageLayout
      visualClass="vs3"
      visualTitle="병원소개"
      contentsClass="sub03"
      lnbItems={lnbItems}
    >
      <h3 className="cont_tit">로고(CI)</h3>
      <div className="con_area">
        <div className="ci_area">
          <div className="ci_sec">
            <div className="ci_tit"><strong>심볼마크</strong><span>Symbol Mark</span></div>
            <div className="ci_cont">
              <div className="ci_img"><img src={ciLogo01} alt="심볼마크" /></div>
              <div className="ci_txt1">
                <dl>
                  <dt>Concept</dt>
                  <dd>환자의 마음을 헤아려 치료한다는 의미를 담아 의료진과 환자, 두 사람을 겹쳐서 표현. <br />
                    겹쳐진 부분은 병원을 상징하는 녹색 십자를 연상할 수 있도록 함.</dd>
                </dl>
                <p className="ci_info">※ 심볼마크 사용시 이미지 변질이나 왜곡이 없도록 하며, 반드시 컴퓨터 자료에 의한 출력 방식으로 축소 또는 확대 사용한다.</p>
              </div>
            </div>
          </div>
          <div className="ci_sec">
            <div className="ci_tit"><strong>로고 조합</strong><span>Logo Vertical Type</span></div>
            <div className="ci_cont">
              <div className="ci_img"><img src={ciLogo02} alt="로고 조합" /></div>
              <div className="ci_txt2">
                <p className="ci_info">※ 적용매체의 특성에 따라 좌우조합 또는 상하조합 등 <br />
                  적절한 시그니처 타입을 선택·사용하여 본 가이드의 규정에 따라<br />
                  정확하게 사용하여 이미지가 훼손·변형되는 일이 없도록 관리한다.</p>
              </div>
            </div>
          </div>
          <div className="ci_sec">
            <div className="ci_tit"><strong>엠블럼</strong><span>Emblem</span></div>
            <div className="ci_cont">
              <div className="ci_img"><img src={ciLogo03} alt="엠블럼" /></div>
              <div className="ci_txt3">
                <p className="ci_info">※ 엠블럼 사용 시 이미지 변질이나 왜곡이 없도록 하며,<br />
                  반드시 컴퓨터 자료에 의한 출력 방식으로 축소 또는 확대 사용한다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubPageLayout>
  )
}
