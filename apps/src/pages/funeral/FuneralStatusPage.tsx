import FuneralSubPageLayout from '../../components/FuneralSubPageLayout'

export default function FuneralStatusPage() {
  return (
    <FuneralSubPageLayout>
      <h3 className="cont_tit">현재 빈소 분향 현황</h3>
      <p className="cont_tit_disc">마지막 가시는 길 가족의 마음으로 메디인병원이 함께하겠습니다.</p>
      <div className="con_area">
        <div className="frame_zoom" style={{ height: 'fit-content' }}>
          <iframe
            src="https://e-iris.co.kr/display/parlor/iframe/358"
            frameBorder={0}
            id="myframe"
            style={{ width: 'inherit', height: 'inherit', minHeight: '600px', WebkitTransform: 'scale(1)' }}
          />
        </div>
      </div>
    </FuneralSubPageLayout>
  )
}
