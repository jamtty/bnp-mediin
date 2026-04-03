import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

export default function HistoryPage() {
  return (
    <SubPageLayout
      visualClass="vs3"
      visualTitle="병원소개"
      contentsClass="sub03"
      lnbItems={lnbItems}
    >
      <h3 className="cont_tit">병원연혁</h3>
    </SubPageLayout>
  )
}
