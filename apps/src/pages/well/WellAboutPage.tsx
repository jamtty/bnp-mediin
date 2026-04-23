import WellSubPageLayout from '../../components/WellSubPageLayout'
import introImg from '../../assets/images/hpcenter/intro_img.png'

export default function WellAboutPage() {
  return (
    <WellSubPageLayout>
      <h3 className="cont_tit">센터소개</h3>
      <div className="con_area">
        <div className="intro_wrap">
          <div className="intro_img"><img src={introImg} alt="" /></div>
          <dl>
            <dt>
              <p className="intro_tit">'건강하다'</p>
              라는 것은 <br />
              정신적으로나 육체적으로 아무 탈이 없고 튼튼하다, <br />
              <strong>밝고 건강한 꿈의 상태</strong>를 말합니다.
            </dt>
            <dd>
              <p>평균 수명이 높아진 현대사회에서 오래 사는 것보다 건강하게 사는 것이 더 중요하다고 생각합니다.</p>
              <p>예고 없이 찾아오는 질환은 조기검진과 조기치료가 최고의 방법입니다. <br />
                정기적인 건강검진으로 초기 치료를 하여 질 좋은 삶을 향상시키시기 바랍니다.</p>
              <p>메디인병원 건강증진센터에서는 꾸준한 노력으로 항상 여러분과 함께 할 것입니다.</p>
              <p>감사합니다.</p>
            </dd>
          </dl>
        </div>
      </div>
    </WellSubPageLayout>
  )
}


