import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

export default function VoicePage() {
    return (
        <SubPageLayout visualClass="vs8" visualTitle="고객마당" contentsClass="sub08" lnbItems={lnbItems}>
            <h3 className="sub_tit">고객의소리</h3>
        </SubPageLayout>
    )
}
