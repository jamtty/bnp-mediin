import { Link } from 'react-router-dom'
import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

const centers = [
  { code: 'cardiovascular',   icon: 'ico_dpt27', name: '심혈관센터' },
  { code: 'spine-nonsurgery', icon: 'ico_dpt28', name: '척추비수술센터' },
  { code: 'spine',            icon: 'ico_dpt29', name: '척추센터' },
  { code: 'joint',            icon: 'ico_dpt30', name: '관절센터' },
  { code: 'arthroplasty',     icon: 'ico_dpt34', name: '인공관절센터' },
  { code: 'checkup',          icon: 'ico_dpt27', name: '검진센터' },
]

export default function SpecialCenterPage() {
  return (
    <SubPageLayout
      visualClass="vs2"
      visualTitle="진료과안내"
      contentsClass="sub02"
      lnbItems={lnbItems}
    >
      <h3 className="cont_tit">특수센터소개</h3>
      <div className="con_area">
        <div className="sub_list">
          <ul>
            {centers.map((center) => (
              <li key={center.code}>
                <Link to={`/department/special/${center.code}`}>
                  <i className={center.icon}></i>
                  <p className="dpt_name">{center.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SubPageLayout>
  )
}
