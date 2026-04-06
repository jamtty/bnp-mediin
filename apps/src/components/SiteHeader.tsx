import { useState } from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../assets/images/logo_new.png'
import SideFixMenu from './SideFixMenu'
import PopupLayer from './PopupLayer'

export default function SiteHeader() {
  const [gnbActive, setGnbActive] = useState(false)
  const [sideFixClosed, setSideFixClosed] = useState(false)
  const [activePopup, setActivePopup] = useState<string | null>(null)

  return (
    <div
      id="header"
      className={gnbActive ? 'open_menu' : ''}
      onMouseLeave={() => setGnbActive(false)}
    >
      <div className="section">
        <h1 className="logo">
          <Link to="/">
            <img src={logoImg} alt="메디인병원" />
          </Link>
        </h1>
        <div className="gnb_wrap" onMouseEnter={() => setGnbActive(true)}>
          <SideFixMenu sideFixClosed={sideFixClosed} setSideFixClosed={setSideFixClosed} onOpenPopup={setActivePopup} />
          <div className="gnb_item">
            <Link to="/care/outpatient" className="gnb_link">
              진료안내
            </Link>
            <div className="gnb_sub">
              <ul>
                <li>
                  <Link to="/care/outpatient">외래진료안내</Link>
                </li>
                <li>
                  <Link to="/care/emergency">응급실 진료안내</Link>
                </li>
                <li>
                  <Link to="/care/admission">입퇴원절차안내</Link>
                </li>
                <li>
                  <Link to="/care/certificate">증명서발급안내</Link>
                </li>
                <li>
                  <Link to="/care/non-covered">비급여수가안내</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="gnb_item">
            <Link to="/department/intro" className="gnb_link">
              진료과안내
            </Link>
            <div className="gnb_sub">
              <ul>
                <li>
                  <Link to="/department/intro">진료과소개</Link>
                </li>
                <li>
                  <Link to="/department/clinic">클리닉소개</Link>
                </li>
                <li>
                  <Link to="/department/special">특수센터소개</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="gnb_item">
            <Link to="/about/greeting" className="gnb_link">
              병원소개
            </Link>
            <div className="gnb_sub">
              <ul>
                <li>
                  <Link to="/about/greeting">병원장인사말</Link>
                </li>
                <li>
                  <Link to="/about/mission">설립목적,미션,비전</Link>
                </li>
                <li>
                  <Link to="/about/history">병원연혁</Link>
                </li>
                <li>
                  <Link to="/about/logo">로고</Link>
                </li>
                <li>
                  <Link to="/about/organization">조직도</Link>
                </li>
                <li>
                  <Link to="/about/floormap">층별안내도</Link>
                </li>
                <li>
                  <Link to="/about/location">오시는 길</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="gnb_item">
            <Link to="/news/notice" className="gnb_link">
              병원소식
            </Link>
            <div className="gnb_sub">
              <ul>
                <li>
                  <Link to="/news/notice">공지사항</Link>
                </li>
                <li>
                  <Link to="/news/press">보도자료</Link>
                </li>
                <li>
                  <Link to="/news/recruit">채용정보</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="gnb_item">
            <a href="https://www.medi-yin.co.kr/well/" target="_blank" rel="noreferrer" className="gnb_link">
              건강증진센터
            </a>
            <div className="gnb_sub">
              <ul>
                <li>
                  <a href="https://www.medi-yin.co.kr/well/" target="_blank" rel="noreferrer">
                    건강검진프로그램
                  </a>
                </li>
                <li>
                  <a href="https://www.medi-yin.co.kr/well/" target="_blank" rel="noreferrer">
                    검진준비 및 유의사항
                  </a>
                </li>
                <li>
                  <a href="https://www.medi-yin.co.kr/well/" target="_blank" rel="noreferrer">
                    검사종류
                  </a>
                </li>
                <li>
                  <a href="https://www.medi-yin.co.kr/well/" target="_blank" rel="noreferrer">
                    센터소개
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="gnb_item">
            <Link to="/cooperation" className="gnb_link">
              진료협력센터
            </Link>
            <div className="gnb_sub">
              <ul>
                <li>
                  <Link to="/cooperation">진료협력센터</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="gnb_item">
            <a href="https://www.medi-yin.co.kr/fune/" target="_blank" rel="noreferrer" className="gnb_link">
              장례식장
            </a>
            <div className="gnb_sub">
              <ul>
                <li>
                  <a href="https://www.medi-yin.co.kr/fune/" target="_blank" rel="noreferrer">
                    현재빈소분향현황
                  </a>
                </li>
                <li>
                  <a href="https://www.medi-yin.co.kr/fune/" target="_blank" rel="noreferrer">
                    이용방법안내
                  </a>
                </li>
                <li>
                  <a href="https://www.medi-yin.co.kr/fune/" target="_blank" rel="noreferrer">
                    빈소시설 이용 안내
                  </a>
                </li>
                <li>
                  <a href="https://www.medi-yin.co.kr/fune/" target="_blank" rel="noreferrer">
                    기타시설 안내
                  </a>
                </li>
                <li>
                  <a href="https://www.medi-yin.co.kr/fune/" target="_blank" rel="noreferrer">
                    오시는길
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="gnb_item">
            <Link to="/community/health-info" className="gnb_link">
              고객마당
            </Link>
            <div className="gnb_sub">
              <ul>
                <li>
                  <Link to="/community/health-info">건강정보</Link>
                </li>
                <li>
                  <Link to="/community/consultation">건강상담</Link>
                </li>
                <li>
                  <Link to="/community/voice">고객의소리</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn_menu"
          aria-label="메뉴 열기"
          onClick={() => setGnbActive((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <PopupLayer activePopup={activePopup} onClose={() => setActivePopup(null)} />
    </div>
  )
}
