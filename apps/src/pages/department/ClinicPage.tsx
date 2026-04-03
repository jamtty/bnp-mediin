import { Link } from 'react-router-dom'
import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

const clinics = [
  { code: 'endoscopy',     icon: 'ico_dpt17', name: '내시경클리닉' },
  { code: 'arthroplasty',  icon: 'ico_dpt18', name: '인공관절클리닉' },
  { code: 'spine',         icon: 'ico_dpt19', name: '척추클리닉' },
  { code: 'hand',          icon: 'ico_dpt20', name: '수지접합클리닉' },
  { code: 'anus',          icon: 'ico_dpt21', name: '항문클리닉' },
  { code: 'laparoscopy',   icon: 'ico_dpt22', name: '복강경클리닉' },
  { code: 'adult-disease', icon: 'ico_dpt23', name: '성인병클리닉' },
  { code: 'intervention',  icon: 'ico_dpt24', name: '중재시술/유방클리닉' },
  { code: 'neuro',         icon: 'ico_dpt25', name: '뇌신경질환클리닉' },
  { code: 'urolithiasis',  icon: 'ico_dpt26', name: '요로결석클리닉' },
  { code: 'painclinic',    icon: 'ico_dpt3',  name: '신경통증클리닉' },
]

export default function ClinicPage() {
  return (
    <SubPageLayout
      visualClass="vs2"
      visualTitle="진료과안내"
      contentsClass="sub02"
      lnbItems={lnbItems}
    >
      <h3 className="cont_tit">클리닉 소개</h3>
      <div className="con_area">
        <div className="sub_list">
          <ul>
            {clinics.map((clinic) => (
              <li key={clinic.code}>
                <Link to={`/department/clinic/${clinic.code}`}>
                  <i className={clinic.icon}></i>
                  <p className="dpt_name">{clinic.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SubPageLayout>
  )
}
