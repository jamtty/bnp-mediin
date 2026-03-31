import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

export default function FuneralOtherPage() {
    return (
        <SubPageLayout visualClass="vs7" visualTitle="장례식장" contentsClass="sub07" lnbItems={lnbItems}>
            <h3 className="sub_tit">기타시설 안내</h3>
        </SubPageLayout>
    )
}
