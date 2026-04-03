import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

export default function PreparationPage() {
  return (
    <SubPageLayout
      visualClass="vs5"
      visualTitle="건강증진센터"
      contentsClass="sub05"
      lnbItems={lnbItems}
    >
      <h3 className="cont_tit">검진준비 및 유의사항</h3>
    </SubPageLayout>
  )
}
