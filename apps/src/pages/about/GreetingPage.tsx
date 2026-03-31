import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

export default function GreetingPage() {
    return (
        <SubPageLayout visualClass="vs3" visualTitle="병원소개" contentsClass="sub03" lnbItems={lnbItems}>
            <h3 className="sub_tit">병원장인사말</h3>
        </SubPageLayout>
    )
}
