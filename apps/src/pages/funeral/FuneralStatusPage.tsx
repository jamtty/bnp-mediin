import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

export default function FuneralStatusPage() {
  return (
    <SubPageLayout
      visualClass="vs7"
      visualTitle="장례식장"
      contentsClass="sub07"
      lnbItems={lnbItems}
    >
      <h3 className="cont_tit">현재빈소분향현황</h3>
    </SubPageLayout>
  )
}
