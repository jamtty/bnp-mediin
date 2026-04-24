import type { ReactNode } from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import FuneralHeader, { gnbItems } from './FuneralHeader'
import SiteFooter from './SiteFooter'
import subV1 from '../assets/images/funeral/sub_v1.png'
import subV2 from '../assets/images/funeral/sub_v2.png'
import subV3 from '../assets/images/funeral/sub_v3.png'
import subV4 from '../assets/images/funeral/sub_v4.png'
import subV5 from '../assets/images/funeral/sub_v5.png'

const visualImgMap: Record<string, string> = {
  '/funeral/status': subV1,
  '/funeral/guide': subV2,
  '/funeral/facilities': subV3,
  '/funeral/other': subV4,
  '/funeral/location': subV5,
}

interface Props {
  children?: ReactNode
}

export default function FuneralSubPageLayout({ children }: Props) {
  const location = useLocation()
  const [lnbOpen, setLnbOpen] = useState(false)
  const [activePopup, setActivePopup] = useState<string | null>(null)

  const activeLnbItem =
    gnbItems.find(
      (item) =>
        location.pathname === item.to || location.pathname.startsWith(item.to + '/'),
    ) ?? gnbItems[0]

  return (
    <div id="container">
      <FuneralHeader
        activePopup={activePopup}
        onOpenPopup={setActivePopup}
        onClosePopup={() => setActivePopup(null)}
      />
      <div className="sub_visual vs7">
        <img src={visualImgMap[activeLnbItem.to] ?? subV1} alt="" />
        <h2 className="vi_txt">{activeLnbItem.visualLabel}</h2>
      </div>
      <div className="breadcrumb">
        <div className="section">
          <Link to="/funeral" className="link_home" title="장례식장 홈으로 이동">
            <i className="ico_home"></i>
          </Link>
          <div className={`link_sec${lnbOpen ? ' open' : ''}`}>
            <button
              type="button"
              className="link_active"
              onClick={() => setLnbOpen((v) => !v)}
            >
              {activeLnbItem.label}
            </button>
            <div className="link_list">
              <ul>
                {gnbItems.map((item) => (
                  <li
                    key={item.to}
                    className={item.to === activeLnbItem.to ? 'active' : ''}
                  >
                    <Link to={item.to} onClick={() => setLnbOpen(false)}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="content">{children}</div>
      <SiteFooter onOpenPopup={setActivePopup} />
    </div>
  )
}