import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

export default function NoticePage() {
  return (
    <SubPageLayout
      visualClass="vs4"
      visualTitle="병원소식"
      contentsClass="sub04"
      lnbItems={lnbItems}
    >
      <h3 className="cont_tit">공지사항</h3>
    </SubPageLayout>
  )
}
