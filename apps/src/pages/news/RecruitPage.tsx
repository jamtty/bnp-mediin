import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

export default function RecruitPage() {
  return (
    <SubPageLayout
      visualClass="vs4"
      visualTitle="병원소식"
      contentsClass="sub04"
      lnbItems={lnbItems}
    >
      <h3 className="cont_tit">채용정보</h3>
    </SubPageLayout>
  )
}
