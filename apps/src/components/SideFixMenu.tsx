import { useState } from 'react'
import { Link } from 'react-router-dom'
import PopupLayer from './PopupLayer'

export default function SideFixMenu() {
  const [sideFixClosed, setSideFixClosed] = useState(false)
  const [activePopup, setActivePopup] = useState<string | null>(null)

  return (
    <>
      <div id="side_fix" className={sideFixClosed ? 'close_side' : ''}>
        <button
          type="button"
          className="btn_side_toggle"
          onClick={() => setSideFixClosed((prev) => !prev)}
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
                onClick={() => setActivePopup('fast_reserv')}
              >
                <i className="ico_quick1"></i>
                <p>빠른예약</p>
              </button>
            </div>
            <div className="quick_item">
              <Link to="/about/location#bus" className="quick_link">
                <i className="ico_quick2"></i>
                <p>
                  셔틀버스
                  <br />
                  운행안내
                </p>
              </Link>
            </div>
            <div className="quick_item">
              <Link to="/care/certificate" className="quick_link">
                <i className="ico_quick3"></i>
                <p>
                  카카오페이
                  <br />
                  증명서발급
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <PopupLayer activePopup={activePopup} onClose={() => setActivePopup(null)} />
    </>
  )
}
