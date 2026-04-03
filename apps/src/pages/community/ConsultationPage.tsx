import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

export default function ConsultationPage() {
  return (
    <SubPageLayout
      visualClass="vs8"
      visualTitle="고객마당"
      contentsClass="sub08"
      lnbItems={lnbItems}
    >
      <h3 className="cont_tit">건강상담</h3>
    </SubPageLayout>
  )
}
