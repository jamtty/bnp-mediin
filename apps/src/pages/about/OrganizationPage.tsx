import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'
import organizationChartPc from '../../assets/images/organization_chart_pc.svg'
import organizationChartMo from '../../assets/images/organization_chart_mo.svg'

export default function OrganizationPage() {
  return (
    <SubPageLayout
      visualClass="vs3"
      visualTitle="병원소개"
      contentsClass="sub03"
      lnbItems={lnbItems}
    >
      <h3 className="cont_tit">조직도</h3>
      <div className="con_area">
        <div className="organization_chart">
          <picture>
            <source media="(max-width: 767px)" srcSet={organizationChartMo} />
            <img src={organizationChartPc} alt="조직도" />
          </picture>
        </div>
      </div>
    </SubPageLayout>
  )
}
