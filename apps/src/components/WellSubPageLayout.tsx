import type { ReactNode } from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import WellHeader, { gnbItems } from './WellHeader'
import SiteFooter from './SiteFooter'
import subV1 from '../assets/images/hpcenter/sub_v1.png'
import subV2 from '../assets/images/hpcenter/sub_v2.png'
import subV3 from '../assets/images/hpcenter/sub_v3.png'
import subV4 from '../assets/images/hpcenter/sub_v4.png'

const subVisualMap: Record<string, string> = {
  '/well/program': subV1,
  '/well/preparation': subV2,
  '/well/exams': subV3,
  '/well/about': subV4,
}

interface Props {
  children?: ReactNode
}

export default function WellSubPageLayout({
  children,
}: Props) {
  const location = useLocation()
  const [lnbOpen, setLnbOpen] = useState(false)
  const [topOpen, setTopOpen] = useState(false)
  const [activePopup, setActivePopup] = useState<string | null>(null)

  const activeGnb = gnbItems.find(
    (item) =>
      location.pathname === item.to ||
      location.pathname.startsWith((item.activeBase ?? item.to) + '/') ||
      item.sub.some((s) => location.pathname === s.to || location.pathname.startsWith(s.to + '/')),
  ) ?? gnbItems[0]

  const subVisualKey = activeGnb.activeBase ?? activeGnb.to
  const subVisualImg = subVisualMap[subVisualKey] ?? subV1

  const breadcrumbLnb = activeGnb.sub

  const activeLnbItem = breadcrumbLnb.find((item) => location.pathname === item.to)
    ?? breadcrumbLnb.find((item) => location.pathname.startsWith(item.to))

  return (
    <div id="container" className={location.pathname.startsWith('/well/about/intro') ? 'intro_bg' : undefined}>
      <WellHeader
        activePopup={activePopup}
        onOpenPopup={setActivePopup}
        onClosePopup={() => setActivePopup(null)}
      />
      <div className="sub_visual vs5">
        <img src={subVisualImg} alt="" />
        <h2 className="vi_txt">{activeGnb.label}</h2>
      </div>
      <div className="breadcrumb">
        <div className="section">
          <Link to="/well" className="link_home" title="건강증진센터 홈으로 이동">
            <i className="ico_home"></i>
          </Link>

          {/* 1단계: GNB 상위 메뉴 */}
          <div className={`link_sec${topOpen ? ' open' : ''}`}>
            <button
              type="button"
              className="link_active"
              onClick={() => setTopOpen((v) => !v)}
            >
              {activeGnb.label}
            </button>
            <div className="link_list">
              <ul>
                {gnbItems.map((item) => (
                  <li key={item.to} className={item.to === activeGnb.to ? 'active' : ''}>
                    <Link to={item.to} onClick={() => setTopOpen(false)}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 2단계: LNB */}
          {breadcrumbLnb.length > 0 && (
            <div className={`link_sec${lnbOpen ? ' open' : ''}`}>
              <button
                type="button"
                className="link_active"
                onClick={() => setLnbOpen((v) => !v)}
              >
                {activeLnbItem?.label ?? breadcrumbLnb[0].label}
              </button>
              <div className="link_list">
                <ul>
                  {breadcrumbLnb.map((item) => (
                    <li key={item.label} className={item.to === location.pathname ? 'active' : ''}>
                      <Link to={item.to} onClick={() => setLnbOpen(false)}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="content">{children}</div>
      <SiteFooter onOpenPopup={setActivePopup} />
    </div>
  )
}