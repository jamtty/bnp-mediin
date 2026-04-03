import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

export default function PressPage() {
  return (
    <SubPageLayout
      visualClass="vs4"
      visualTitle="병원소식"
      contentsClass="sub04"
      lnbItems={lnbItems}
    >
      <h3 className="cont_tit">보도자료</h3>
    </SubPageLayout>
  )
}
