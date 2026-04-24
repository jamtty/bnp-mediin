import FuneralSubPageLayout from '../../components/FuneralSubPageLayout'

export default function FuneralGuidePage() {
  return (
    <FuneralSubPageLayout>
      <h3 className="cont_tit">메디인병원 장례식장 이용방법 안내</h3>
      <div className="con_area">
        <div className="useinfo_area">
          <div className="useinfo_sec">
            <p className="useinfo_tit">장소별 장례식장 이용절차</p>
            <ul>
              <li>
                <p className="li_tit">운명하신 장소가 <span className="t_sky">본 메디인 병원</span>인 경우</p>
                <p className="li_cont">저희 메디인 장례식장의 장례지도사들이 해당 병실로 모시러 가서 안내하겠습니다.</p>
              </li>
              <li>
                <p className="li_tit">운명하신 장소가 <span className="t_sky">타 병원</span>인 경우</p>
                <p className="li_cont">
                  저희 메디인 장례식장(031-570-9093)으로 전화하시면 고인이 계신 병원으로 앰뷸런스를 보내드립니다.<br />
                  유족분들은 퇴원 정산을 하시고 고인이 사망하신 병원에서 사망진단서를 발급 (6부 이상) 받아 놓으시기 바랍니다.
                </p>
              </li>
              <li>
                <p className="li_tit">운명하신 장소가 <span className="t_sky">자택</span>인 경우</p>
                <p className="li_cont">
                  저희 메디인 장례식장(031-570-9093)으로 전화하시면 고인이 운명하신 자택으로 앰뷸런스를 보내드립니다.<br />
                  이때 고인의 이송 여부는 경찰의 지시에 따라야 하며, 특히 사망의 종류가 외인사 또는 기타 및 불상의 경우, 반드시 조사 후 발급되는 검시 필증 또는 검사 지휘서를 제출하셔야 염습/입관이 가능합니다.
                </p>
              </li>
            </ul>
          </div>
          <div className="useinfo_sec">
            <p className="useinfo_tit">장례절차 이용안내</p>
            <ul>
              <li>
                <p className="li_tit">영정사진 준비</p>
                <p className="li_cont">
                  영정사진을 준비하지 못하신 경우 신분증 또는 핸드폰에 저장되어 있는 사진을 문자나 카톡으로 보내주시면 됩니다.<br />
                  미리 영정사진을 준비하신 분께서는 직접 가지고 오시면 됩니다.
                </p>
              </li>
              <li>
                <p className="li_tit">화장예약</p>
                <p className="li_cont">
                  원활한 장례절차를 위해 화장예약을 가장 먼저 해드리고 있사오니 유족께서는 장례방법을 결정해 주시면 됩니다.<br />
                  만약 화장으로 결정하셨다가 매장으로 변경하실 경우 화장예약 취소 방법은 간단하오니 걱정하지 않으셔도 됩니다.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </FuneralSubPageLayout>
  )
}
