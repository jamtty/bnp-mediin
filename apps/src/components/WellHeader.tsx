import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../assets/images/logo_new.png'
import PopupLayer from './PopupLayer'
import SiteBannerPopup from './SiteBannerPopup'

export const gnbItems = [
  {
    label: '건강검진프로그램',
    to: '/well/program/nhis',
    activeBase: '/well/program',
    sub: [
      { label: '국민건강보험공단 건강검진', to: '/well/program/nhis' },
      { label: '기본검진프로그램', to: '/well/program/basic' },
      { label: '정밀검진프로그램', to: '/well/program/precision' },
    ],
  },
  { label: '검진준비 및 유의사항', to: '/well/preparation', sub: [] },
  { label: '검사종류', to: '/well/exams', sub: [] },
  {
    label: '센터소개',
    to: '/well/about/intro',
    activeBase: '/well/about',
    sub: [
      { label: '센터소개', to: '/well/about/intro' },
      { label: '의료진 소개', to: '/well/about/doctors' },
    ],
  },
]

interface WellHeaderProps {
  activePopup: string | null
  onOpenPopup: (id: string) => void
  onClosePopup: () => void
}

export default function WellHeader({ activePopup, onOpenPopup, onClosePopup }: WellHeaderProps) {
  const [gnbActive, setGnbActive] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSubOpen, setMobileSubOpen] = useState<number | null>(null)
  const [sideFixClosed, setSideFixClosed] = useState(false)
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
            <Link to="/well">
              <img src={logoImg} alt="메디인병원" />
              <strong>건강증진센터</strong>
            </Link>
          </h1>
          <div className="gnb_wrap" onMouseEnter={() => setGnbActive(true)}>
            {/* 사이드 퀵 메뉴 */}
            <div id="side_fix" className={sideFixClosed ? 'close_side' : ''}>
              <button
                type="button"
                className="btn_side_toggle"
                onClick={() => setSideFixClosed((v) => !v)}
              >
                사이드퀵 메뉴 열고 닫기
              </button>
              <div className="quick_wrap">
                <div className="quick_tit">
                  <span>QUICK MENU</span>
                  <p>바로가기</p>
                </div>
                <div className="quick_cont">
                  <div className="quick_item">
                    <button
                      type="button"
                      className="quick_link"
                      onClick={() => onOpenPopup('fast_reserv')}
                    >
                      <i className="ico_quick1"></i>
                      <p>빠른예약</p>
                    </button>
                  </div>
                  <div className="quick_item">
                    <a href="/main/content/view/MN04070000.do" className="quick_link">
                      <i className="ico_quick2"></i>
                      <p>셔틀버스<br />운행안내</p>
                    </a>
                  </div>
                  <div className="quick_item">
                    <a
                      href="/main/content/view/MN01050000.do?kakaoPay"
                      className="quick_link"
                    >
                      <i className="ico_quick3"></i>
                      <p>카카오페이<br />증명서발급</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* GNB */}
            {gnbItems.map((item, idx) => (
              <div className="gnb_item" key={item.to + idx}>
                <p className="gnb_main">
                  <Link
                    to={item.to}
                    className={`gnb_link${location.pathname.startsWith(item.activeBase ?? item.to) ? ' active' : ''}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  <button
                    type="button"
                    className="btn_gnb_toggle pc_hide"
                    onClick={() => toggleMobileSub(idx)}
                  >
                    열기
                  </button>
                </p>
                <div className={`gnb_sub${mobileSubOpen === idx ? ' open' : ''}`}>
                  <ul>
                    {item.sub.map((s) => (
                      <li key={s.label}>
                        <Link to={s.to} onClick={() => setMobileOpen(false)}>
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
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
      <SiteBannerPopup site="WELL" />
      <PopupLayer activePopup={activePopup} onClose={onClosePopup} />
    </>
  )
}