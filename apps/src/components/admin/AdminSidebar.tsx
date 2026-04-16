import { Link, useLocation } from 'react-router-dom'

type MenuSection = {
  sectionLabel?: string
  items: { label: string; to: string; icon: string }[]
}

export const sideMenuSections: MenuSection[] = [
  {
    items: [
      { label: '대시보드', to: '/admin', icon: 'dashboard' },
    ],
  },
  {
    sectionLabel: '운영관리',
    items: [
      { label: '건강상담 관리', to: '/admin/consultation', icon: 'forum' },
      { label: '고객의소리 관리', to: '/admin/voice', icon: 'record_voice_over' },
      { label: '빠른예약 관리', to: '/admin/fast-reserve', icon: 'event_available' },
      { label: '팝업 관리', to: '/admin/popup-banner', icon: 'web_asset' },
      { label: '의료진 관리', to: '/admin/doctor', icon: 'medical_services' },
    ],
  },
  {
    sectionLabel: '게시판',
    items: [
      { label: '공지사항 관리', to: '/admin/notice', icon: 'campaign' },
      { label: '보도자료 관리', to: '/admin/press', icon: 'newspaper' },
      { label: '채용정보 관리', to: '/admin/recruit', icon: 'work' },
      { label: '건강정보 관리', to: '/admin/health-info', icon: 'health_and_safety' },
    ],
  },
]

// 기존 코드와의 하위호환을 위해 sideMenuItems 도 export
export const sideMenuItems = sideMenuSections.flatMap((s) => s.items)

export default function AdminSidebar() {
  const location = useLocation()

  return (
    <aside className="adm_sidebar">
      <div className="adm_logo">
        <Link to="/" target="_blank" rel="noopener noreferrer">
          메디인병원
        </Link>
      </div>
      <nav className="adm_nav">
        <ul>
          {sideMenuSections.map((section, si) => (
            <li key={si} className="adm_nav_section">
              {section.sectionLabel && (
                <span className="adm_nav_section_label">{section.sectionLabel}</span>
              )}
              <ul>
                {section.items.map((item) => (
                  <li key={item.to}>
                    <a
                      href={item.to}
                      className={
                        item.to === '/admin'
                          ? location.pathname === '/admin'
                            ? 'active'
                            : ''
                          : location.pathname.startsWith(item.to)
                            ? 'active'
                            : ''
                      }
                    >
                      <span className="material-icons">{item.icon}</span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
