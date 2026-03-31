import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

export default function LogoPage() {
    return (
        <SubPageLayout visualClass="vs3" visualTitle="병원소개" contentsClass="sub03" lnbItems={lnbItems}>
            <h3 className="sub_tit">로고</h3>
        </SubPageLayout>
    )
}
