import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../assets/images/logo_new.png'
import PopupLayer from './PopupLayer'

export const gnbItems = [
  { label: '현재빈소분향현황', visualLabel: '현재 빈소 분향 현황', to: '/funeral/status' },
  { label: '메디인병원장례식장이용방법안내', visualLabel: '메디인병원 장례식장 이용방법 안내', to: '/funeral/guide' },
  { label: '빈소시설이용안내', visualLabel: '빈소시설 이용안내', to: '/funeral/facilities' },
  { label: '기타시설이용안내', visualLabel: '기타시설 이용안내', to: '/funeral/other' },
  { label: '오시는길', visualLabel: '오시는 길', to: '/funeral/location' },
]

interface FuneralHeaderProps {
  activePopup: string | null
  onOpenPopup: (id: string) => void
  onClosePopup: () => void
}

export default function FuneralHeader({ activePopup, onClosePopup }: FuneralHeaderProps) {
  const [gnbActive, setGnbActive] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSubOpen, setMobileSubOpen] = useState<number | null>(null)
  const location = useLocation()

  const toggleMobileSub = (idx: number) => {
    setMobileSubOpen((prev) => (prev === idx ? null : idx))
  }

  return (
    <>
      <div
        id="header"
        className={gnbActive || mobileOpen ? 'open_menu' : ''}
        onMouseLeave={() => setGnbActive(false)}
      >
        <div className="section">
          <h1 className="logo">
            <Link to="/funeral">
              <img src={logoImg} alt="메디인병원" />
              <strong>장례식장</strong>
            </Link>
          </h1>
          <div className="gnb_wrap" onMouseEnter={() => setGnbActive(true)}>
            {gnbItems.map((item, idx) => (
              <div className="gnb_item" key={item.to + idx}>
                <p className="gnb_main">
                  <Link
                    to={item.to}
                    className={`gnb_link${location.pathname === item.to || location.pathname.startsWith(item.to + '/') ? ' active' : ''}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  <button
                    type="button"
                    className="btn_gnb_toggle pc_hide"
                    onClick={() => toggleMobileSub(idx)}
                    aria-label="서브메뉴 열기"
                  ></button>
                </p>
                <div className={`gnb_sub${mobileSubOpen === idx ? ' open' : ''}`}>
                  <ul></ul>
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="btn_menu pc_hide"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="메뉴 열기"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <PopupLayer activePopup={activePopup} onClose={onClosePopup} />
    </>
  )
}