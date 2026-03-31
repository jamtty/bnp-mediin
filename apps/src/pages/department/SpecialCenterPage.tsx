import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

export default function SpecialCenterPage() {
    return (
        <SubPageLayout visualClass="vs2" visualTitle="진료과안내" contentsClass="sub02" lnbItems={lnbItems}>
            <h3 className="sub_tit">특수센터소개</h3>
        </SubPageLayout>
    )
}
