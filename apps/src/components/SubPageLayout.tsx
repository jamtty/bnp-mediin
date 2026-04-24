import type { ReactNode } from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import PopupLayer from './PopupLayer'
import subV1 from '../assets/images/sub_v1.png'
import subV2 from '../assets/images/sub_v2.png'
import subV3 from '../assets/images/sub_v3.png'
import subV4 from '../assets/images/sub_v4.png'
import subV5 from '../assets/images/sub_v5.png'
import subV8 from '../assets/images/sub_v8.png'

const visualImgMap: Record<string, string> = {
  vs1: subV1,
  vs2: subV2,
  vs3: subV3,
  vs4: subV4,
  vs5: subV5,
  vs8: subV8,
}

interface LnbItem {
  label: string
  to?: string
  href?: string
  external?: boolean
}

interface Props {
  visualClass: string
  visualTitle: string
  contentsClass?: string
  lnbItems?: LnbItem[]
  thirdLevelLabel?: string
  thirdLevelItems?: LnbItem[]
  children?: ReactNode
}

const topMenuItems = [
  { label: '진료안내', to: '/care/outpatient', paths: ['/care'] },
  { label: '진료과안내', to: '/department/intro', paths: ['/department'] },
  { label: '병원소개', to: '/about/greeting', paths: ['/about'] },
  { label: '병원소식', to: '/news/notice', paths: ['/news'] },
  { label: '건강증진센터', href: '/well/program', external: true, paths: ['/well'] },
  { label: '진료협력센터', to: '/cooperation', paths: ['/cooperation'] },
  { label: '장례식장', href: '/funeral', external: true, paths: ['/funeral'] },
  { label: '고객마당', to: '/community/voice', paths: ['/community'] },
]

export default function SubPageLayout({
  visualClass,
  visualTitle,
  contentsClass,
  lnbItems,
  thirdLevelLabel,
  thirdLevelItems,
  children,
}: Props) {
  const location = useLocation()
  const [topOpen, setTopOpen] = useState(false)
  const [lnbOpen, setLnbOpen] = useState(false)
  const [thirdOpen, setThirdOpen] = useState(false)
  const [activePopup, setActivePopup] = useState<string | null>(null)

  const activeTopMenu = topMenuItems.find((item) =>
    item.paths.some((p) => location.pathname.startsWith(p)),
  )

  const activeLnbItem = lnbItems?.find((item) => item.to && location.pathname.startsWith(item.to))

  return (
    <div id="container">
      <SiteHeader />
      <div className={`sub_visual ${visualClass}`}>
        <img src={visualImgMap[visualClass] ?? subV1} alt="" />
        <h2 className="vi_txt">{visualTitle}</h2>
      </div>
      <div className="breadcrumb">
        <div className="section">
          <Link to="/" className="link_home" title="메인으로 이동">
            <i className="ico_home"></i>
          </Link>
          <div className={`link_sec${topOpen ? ' open' : ''}`}>
            <button type="button" className="link_active" onClick={() => setTopOpen((v) => !v)}>
              {activeTopMenu?.label ?? visualTitle}
            </button>
            <div className="link_list">
              <ul>
                {topMenuItems.map((item) =>
                  item.external ? (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="gnb_link"
                        onClick={() => setTopOpen(false)}
                      >
                        {item.label}
                      </a>
                    </li>
                  ) : (
                    <li
                      key={item.label}
                      className={
                        location.pathname.startsWith(item.paths?.[0] ?? '__') ? 'active' : ''
                      }
                    >
                      <Link to={item.to!} className="gnb_link" onClick={() => setTopOpen(false)}>
                        {item.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
          {lnbItems && lnbItems.length > 0 && (
            <div className={`link_sec${lnbOpen ? ' open' : ''}`}>
              <button type="button" className="link_active" onClick={() => setLnbOpen((v) => !v)}>
                {activeLnbItem?.label ?? lnbItems[0].label}
              </button>
              <div className="link_list">
                <ul>
                  {lnbItems.map((item) =>
                    item.external ? (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="gnb_link"
                          onClick={() => setLnbOpen(false)}
                        >
                          {item.label}
                        </a>
                      </li>
                    ) : (
                      <li
                        key={item.label}
                        className={item.to === location.pathname ? 'active' : ''}
                      >
                        <Link to={item.to!} className="gnb_link" onClick={() => setLnbOpen(false)}>
                          {item.label}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          )}
          {thirdLevelLabel && thirdLevelItems && thirdLevelItems.length > 0 && (
            <div className={`link_sec${thirdOpen ? ' open' : ''}`}>
              <button type="button" className="link_active" onClick={() => setThirdOpen((v) => !v)}>
                {thirdLevelLabel}
              </button>
              <div className="link_list">
                <ul>
                  {thirdLevelItems.map((item) => (
                    <li
                      key={item.label}
                      className={item.to === location.pathname ? 'active' : ''}
                    >
                      <Link to={item.to!} className="gnb_link" onClick={() => setThirdOpen(false)}>
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
      <div className={`content${contentsClass ? ` ${contentsClass}` : ''}`}>{children}</div>
      <SiteFooter onOpenPopup={setActivePopup} />
      <PopupLayer activePopup={activePopup} onClose={() => setActivePopup(null)} />
    </div>
  )
}
