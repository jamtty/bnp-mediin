import WellSubPageLayout from '../../components/WellSubPageLayout'

export default function WellPreparationPage() {
  return (
    <WellSubPageLayout>
      <h3 className="cont_tit">검진 준비 및 유의사항</h3>
      <div className="con_area">
        <div className="precautions_list">
          <div className="prec_item">
            <i className="ico_prec1"></i>
            <p className="prec_tit">금식</p>
            <p className="prec_txt">
              검진 전날 오후 7시 이전에 저녁식사를 가볍게 하신 후 <br className="m_hide" />
              저녁 9시 이후 물을 포함하여 금식하십시오. <br />
              위암 검사가 있는 경우 9시 이후 물을 포함하여 금식하십시오. <br />
              (술,담배,물,껌, 사탕 등 모든 음식물을 포함하여 금식하세요.)
            </p>
          </div>
          <div className="prec_item">
            <i className="ico_prec2"></i>
            <p className="prec_tit">당뇨, 고혈압</p>
            <p className="prec_primary">당뇨, 고혈압 등 지병이 있는 경우</p>
            <p className="prec_txt">
              ※ 고혈압 약은 당일 새벽 4시, 혹은 검사 예약 3시간 전 복용하십시오. <br />
              ※ 당뇨환자는 인슐린 주사 또는 약 복용을 금하십시오.
            </p>
          </div>
          <div className="prec_item">
            <i className="ico_prec3"></i>
            <p className="prec_tit">뇌, 심혈관 질환</p>
            <p className="prec_primary">혈관이나 뇌혈관 질환이 있는 경우</p>
            <p className="prec_txt">
              <strong>※ 아스피린, 플라빅스, 와파린 등 혈전용해제를 복용하는 경우</strong><br />
              고객님의 임의로 중단하지 마시고 반드시 주치의와 꼭! 상의 후 직원에게 미리 알려주십시오.
            </p>
            <p className="prec_txt">
              <strong>※ 최근 1년 이내 심근경색으로 관상동맥 스텐트를 삽입한 경우</strong><br />
              응급검사가 아닐 시 시술 1년 이후에 위내시경 검사를 권유 드립니다.
            </p>
          </div>
          <div className="prec_item">
            <i className="ico_prec4"></i>
            <p className="prec_tit">대장암 검사</p>
            <p className="prec_txt">
              대장암 검사(50세, 대상자)는 대변 검사입니다. <br />
              48시간 이내 대변만 가능하며 검사 용기에 채취 후 냉동 보관(이틀) 가능합니다.
            </p>
          </div>
          <div className="prec_item">
            <i className="ico_prec5"></i>
            <p className="prec_tit">위암 검사</p>
            <p className="prec_txt">
              위암검사는 일반 내시경이며, <br className="m_hide" />
              수면내시경을 원하실 경우 수면비용은 개인부담을 하셔야 합니다.
            </p>
          </div>
          <div className="prec_item">
            <i className="ico_prec6"></i>
            <p className="prec_tit">가벼운 복장</p>
            <p className="prec_txt">
              검진 시 탈의를 하셔야 하므로<br className="m_hide" />
              가벼운 복장으로 오시고 귀중품은 소지하지 마시기 바랍니다.
            </p>
          </div>
          <div className="prec_item">
            <i className="ico_prec7"></i>
            <p className="prec_tit">주차</p>
            <p className="prec_txt">
              자가용 이용 시 무료 주차가 가능합니다. <br />(자차 최대 6시간)
            </p>
          </div>
          <div className="prec_item">
            <i className="ico_prec8"></i>
            <p className="prec_tit">수면내시경</p>
            <p className="prec_txt">
              수면내시경검사 시행 후 자가 운전이 어려우니 <br className="m_hide" />대중교통을 이용하시기 바랍니다.
            </p>
          </div>
        </div>
      </div>
    </WellSubPageLayout>
  )
}


