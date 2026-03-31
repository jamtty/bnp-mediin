import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

export default function MissionPage() {
    return (
        <SubPageLayout visualClass="vs3" visualTitle="병원소개" contentsClass="sub03" lnbItems={lnbItems}>
            <h3 className="sub_tit">설립목적,미션,비전</h3>
        </SubPageLayout>
    )
}
