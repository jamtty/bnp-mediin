import { useState } from 'react'
import logoImg from '../assets/images/logo_new.png'

export default function SiteHeader() {
    const [gnbActive, setGnbActive] = useState(false)

    return (
        <div id="header" className={gnbActive ? 'open_menu' : ''} onMouseLeave={() => setGnbActive(false)}>
            <div className="section">
                <h1 className="logo">
                    <a href="/"><img src={logoImg} alt="메디인병원" /></a>
                </h1>
                <div className="gnb_wrap" onMouseEnter={() => setGnbActive(true)}>
                    <div className="gnb_item">
                        <a href="/care/outpatient" className="gnb_link">진료안내</a>
                        <div className="gnb_sub">
                            <ul>
                                <li><a href="/care/outpatient">외래진료안내</a></li>
                                <li><a href="/care/emergency">응급실 진료안내</a></li>
                                <li><a href="/care/admission">입퇴원절차안내</a></li>
                                <li><a href="/care/certificate">증명서발급안내</a></li>
                                <li><a href="/care/non-covered">비급여수가안내</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="gnb_item">
                        <a href="/department/intro" className="gnb_link">진료과안내</a>
                        <div className="gnb_sub">
                            <ul>
                                <li><a href="/department/intro">진료과소개</a></li>
                                <li><a href="/department/clinic">클리닉소개</a></li>
                                <li><a href="/department/special">특수센터소개</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="gnb_item">
                        <a href="/about/greeting" className="gnb_link">병원소개</a>
                        <div className="gnb_sub">
                            <ul>
                                <li><a href="/about/greeting">병원장인사말</a></li>
                                <li><a href="/about/mission">설립목적,미션,비전</a></li>
                                <li><a href="/about/history">병원연혁</a></li>
                                <li><a href="/about/logo">로고</a></li>
                                <li><a href="/about/organization">조직도</a></li>
                                <li><a href="/about/floormap">층별안내도</a></li>
                                <li><a href="/about/location">오시는 길</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="gnb_item">
                        <a href="/news/notice" className="gnb_link">병원소식</a>
                        <div className="gnb_sub">
                            <ul>
                                <li><a href="/news/notice">공지사항</a></li>
                                <li><a href="/news/press">보도자료</a></li>
                                <li><a href="/news/recruit">채용정보</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="gnb_item">
                        <a href="/health/program" className="gnb_link">건강증진센터</a>
                        <div className="gnb_sub">
                            <ul>
                                <li><a href="/health/program">건강검진프로그램</a></li>
                                <li><a href="/health/preparation">검진준비 및 유의사항</a></li>
                                <li><a href="/health/exams">검사종류</a></li>
                                <li><a href="/health/about">센터소개</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="gnb_item">
                        <a href="/cooperation" className="gnb_link">진료협력센터</a>
                        <div className="gnb_sub">
                            <ul>
                                <li><a href="/cooperation">진료협력센터</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="gnb_item">
                        <a href="/funeral/status" className="gnb_link">장례식장</a>
                        <div className="gnb_sub">
                            <ul>
                                <li><a href="/funeral/status">현재빈소분향현황</a></li>
                                <li><a href="/funeral/guide">이용방법안내</a></li>
                                <li><a href="/funeral/facilities">빈소시설 이용 안내</a></li>
                                <li><a href="/funeral/other">기타시설 안내</a></li>
                                <li><a href="/funeral/location">오시는길</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="gnb_item">
                        <a href="/community/health-info" className="gnb_link">고객마당</a>
                        <div className="gnb_sub">
                            <ul>
                                <li><a href="/community/health-info">건강정보</a></li>
                                <li><a href="/community/consultation">건강상담</a></li>
                                <li><a href="/community/voice">고객의소리</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn_menu" aria-label="메뉴 열기" onClick={() => setGnbActive(prev => !prev)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    )
}
