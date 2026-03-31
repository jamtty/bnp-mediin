import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

export default function OutpatientPage() {
    return (
        <SubPageLayout visualClass="vs1" visualTitle="진료안내" contentsClass="sub01" lnbItems={lnbItems}>
            <h3 className="sub_tit">외래진료안내</h3>
        </SubPageLayout>
    )
}
