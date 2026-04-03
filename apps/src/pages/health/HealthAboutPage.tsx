import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

export default function HealthAboutPage() {
  return (
    <SubPageLayout
      visualClass="vs5"
      visualTitle="건강증진센터"
      contentsClass="sub05"
      lnbItems={lnbItems}
    >
      <h3 className="cont_tit">센터소개</h3>
    </SubPageLayout>
  )
}
