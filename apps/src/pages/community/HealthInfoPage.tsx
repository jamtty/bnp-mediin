import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

export default function HealthInfoPage() {
    return (
        <SubPageLayout visualClass="vs8" visualTitle="고객마당" contentsClass="sub08" lnbItems={lnbItems}>
            <h3 className="sub_tit">건강정보</h3>
        </SubPageLayout>
    )
}
