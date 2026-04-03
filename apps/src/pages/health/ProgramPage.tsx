import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

export default function ProgramPage() {
  return (
    <SubPageLayout
      visualClass="vs5"
      visualTitle="건강증진센터"
      contentsClass="sub05"
      lnbItems={lnbItems}
    >
      <h3 className="cont_tit">건강검진프로그램</h3>
    </SubPageLayout>
  )
}
