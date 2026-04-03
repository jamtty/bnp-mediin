import { Link } from 'react-router-dom'
import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

const depts = [
  { code: 'internal',        icon: 'ico_dpt7',  name: '내과' },
  { code: 'cardiology',      icon: 'ico_dpt9',  name: '심장내과' },
  { code: 'respiratory',     icon: 'ico_dpt32', name: '호흡기내과' },
  { code: 'gastroenterology',icon: 'ico_dpt33', name: '소화기내과' },
  { code: 'nephrology',      icon: 'ico_dpt10', name: '신장내과' },
  { code: 'rheumatology',    icon: 'ico_dpt36', name: '류마티스내과' },
  { code: 'neurology',       icon: 'ico_dpt4',  name: '신경과' },
  { code: 'surgery',         icon: 'ico_dpt6',  name: '외과' },
  { code: 'obstetrics',      icon: 'ico_dpt14', name: '산부인과' },
  { code: 'orthopedics',     icon: 'ico_dpt2',  name: '정형외과' },
  { code: 'urology',         icon: 'ico_dpt13', name: '비뇨의학과' },
  { code: 'painclinic',      icon: 'ico_dpt3',  name: '신경통증클리닉' },
  { code: 'anesthesiology',  icon: 'ico_dpt11', name: '마취통증의학과' },
  { code: 'labmedicine',    icon: 'ico_dpt15', name: '진단검사의학과' },
  { code: 'radiology',       icon: 'ico_dpt12', name: '영상의학과' },
  { code: 'emergency',       icon: 'ico_dpt16', name: '응급의학과' },
  { code: 'criticalcare',    icon: 'ico_dpt35', name: '중환자의학과' },
]

export default function IntroDeptPage() {
  return (
    <SubPageLayout
      visualClass="vs2"
      visualTitle="진료과안내"
      contentsClass="sub02"
      lnbItems={lnbItems}
    >
      <h3 className="cont_tit">진료과 소개</h3>
      <div className="con_area">
        <div className="sub_list">
          <ul>
            {depts.map((dept) => (
              <li key={dept.code}>
                <Link to={`/department/intro/${dept.code}`}>
                  <i className={dept.icon}></i>
                  <p className="dpt_name">{dept.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SubPageLayout>
  )
}
