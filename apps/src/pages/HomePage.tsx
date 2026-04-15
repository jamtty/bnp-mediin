import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PopupLayer from '../components/PopupLayer'
import SiteBannerPopup from '../components/SiteBannerPopup'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import vsTitLogo from '../assets/images/vs_tit_logo2025.png'
import vsTit from '../assets/images/vs_tit.png'
import mainVideo from '../assets/images/mediyin.mp4'
import slide1 from '../assets/images/m_special_slide1.png'
import slide2 from '../assets/images/m_special_slide2.png'
import slide3 from '../assets/images/m_special_slide3.png'
import slide4 from '../assets/images/m_special_slide4.png'
import slide5 from '../assets/images/m_special_slide5.png'
import slide6 from '../assets/images/m_special_slide6.png'
import slide7 from '../assets/images/m_special_slide7.png'
import slide8 from '../assets/images/m_special_slide8.png'
import slide9 from '../assets/images/m_special_slide9.png'
import slide10 from '../assets/images/m_special_slide10.png'

export default function HomePage() {
  const swiperRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState(0)
  const [newsList, setNewsList] = useState<
    Array<{
      bmt_idx: number
      bmt_name: string
      bd_idx: number
      bd_field_2: string
      bd_title: string
      bd_content: string
      inputdate: string
      tFileVo: { file_src: string; file_cn: string } | null
    }>
  >([])
  const [moreHref, setMoreHref] = useState('/main/board/1/board_list.do')
  const [activePopup, setActivePopup] = useState<string | null>(null)

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current!, {
      modules: [Navigation],
      slidesPerView: 4,
      spaceBetween: 80,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        270: { slidesPerView: 1, spaceBetween: 20 },
        640: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 30 },
        1024: { slidesPerView: 3, spaceBetween: 50 },
        1280: { slidesPerView: 4, spaceBetween: 0 },
      },
    })
    return () => {
      swiper.destroy()
    }
  }, [])

  useEffect(() => {
    const params = new URLSearchParams()
    const BMT_IDX_MAP: Record<number, number[]> = {
      0: [1, 2, 3, 4],
      1: [1],
      2: [2],
      3: [3],
      4: [4],
    }
    const MORE_HREF_MAP: Record<number, string> = {
      0: '/main/board/1/board_list.do',
      1: '/main/board/1/board_list.do',
      2: '/main/board/2/board_list.do',
      3: '/main/board/3/board_list.do',
      4: '/main/board/4/board_list.do',
    }
    const bmtIdxArr = BMT_IDX_MAP[activeTab] ?? [activeTab]
    bmtIdxArr.forEach((idx) => params.append('bmtIdxArr', String(idx)))
    params.append('pageSize', '4')

    fetch(`/board/board_main_list.json?${params}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.result === 'success' && data.paging.result.length > 0) {
          setNewsList(data.paging.result)
          setMoreHref(MORE_HREF_MAP[activeTab] ?? '/main/board/1/board_list.do')
        }
      })
      .catch(() => {})
  }, [activeTab])
  return (
    <div className="wrap">
      <SiteHeader />
      <div id="container">
        <div className="main_visual_wrap">
          <video className="bg-video__content" autoPlay muted loop>
            <source src={mainVideo} type="video/mp4" />
          </video>
          <div className="visual_txt_box">
            <div className="tit_img">
              <img src={vsTitLogo} alt="vs_tit_logo" />
            </div>
            <div className="txt">
              <p className="vs_tt">
                <img src={vsTit} alt="MEDI-IN HOSPITAL" />
              </p>
              <p className="vs_txt">
                메디인 병원,
                <br />
                보건복지부 의료기관 <br className="pc_hide" />
                인증병원
              </p>
            </div>
          </div>
        </div>
        <div className="main_quick_area">
          <div className="main_quick_menu">
            <div className="quick_item cs_type">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                }}
              >
                <dl>
                  <dt>
                    빠른예약
                    <p className="btn_reserv">예약하러가기</p>
                  </dt>
                  <dd>
                    <ul>
                      <li>
                        <strong className="label">·진료예약 콜센터</strong>
                        <span>1566-1991</span>
                      </li>
                      <li>
                        <strong className="label">·건강증진센터</strong>
                        <span>031)570-9026~7</span>
                      </li>
                      <li>
                        <strong className="label">·장례식장</strong>
                        <span>031)570-9093</span>
                      </li>
                      <li>
                        <strong className="label">·응급실</strong>
                        <span>031)570-7911</span>
                      </li>
                    </ul>
                  </dd>
                </dl>
                <i className="ico_m_qc4"></i>
              </a>
            </div>
            <div className="quick_item">
              <Link to="/department/intro">
                <dl>
                  <dt>진료과안내</dt>
                  <dd>
                    메디인병원의 진료과 및 <br />
                    의료진을 소개합니다.
                  </dd>
                </dl>
                <i className="ico_m_qc1"></i>
              </Link>
            </div>
            <div className="quick_item">
              <a href="https://www.medi-yin.co.kr/well/" target="_blank" rel="noreferrer">
                <dl>
                  <dt>건강증진센터</dt>
                  <dd>건강증진센터 안내</dd>
                </dl>
                <i className="ico_m_qc2"></i>
              </a>
            </div>
            <div className="quick_item">
              <a href="https://www.medi-yin.co.kr/fune/" target="_blank" rel="noreferrer">
                <dl>
                  <dt>장례식장</dt>
                  <dd>
                    마지막 가시는길 <br />
                    가족의 마음으로 <br />
                    메디인병원이 함께합니다.
                  </dd>
                </dl>
                <i className="ico_m_qc3"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="main_menu">
          <ul>
            <li>
              <Link to="/care/certificate">
                <i className="ico_menu menu1"></i>
                <p>증명서발급</p>
              </Link>
            </li>
            <li>
              <Link to="/news/press">
                <i className="ico_menu menu2"></i>
                <p>보도자료</p>
              </Link>
            </li>
            <li>
              <Link to="/news/notice">
                <i className="ico_menu menu3"></i>
                <p>공지사항</p>
              </Link>
            </li>
            <li>
              <Link to="/community/voice">
                <i className="ico_menu menu4"></i>
                <p>고객마당</p>
              </Link>
            </li>
            <li>
              <Link to="/about/greeting">
                <i className="ico_menu menu5"></i>
                <p>병원소개</p>
              </Link>
            </li>
            <li>
              <Link to="/about/floormap">
                <i className="ico_menu menu6"></i>
                <p>층별안내도</p>
              </Link>
            </li>
            <li>
              <Link to="/about/organization">
                <i className="ico_menu menu7"></i>
                <p>조직도</p>
              </Link>
            </li>
            <li>
              <Link to="/about/location">
                <i className="ico_menu menu8"></i>
                <p>오시는길</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="main_special_sec">
          <dl className="special_tit">
            <dt>
              <p className="t_sm">SPECIAL CLINIC</p>
              <strong>특수클리닉</strong>
            </dt>
            <dd>메디인 병원의 특수클리닉을 소개합니다.</dd>
          </dl>
          <div className="special_slide">
            <div className="swiper" ref={swiperRef}>
              <div className="swiper-wrapper">
                {[
                  { href: '/department/clinic/endoscopy',    img: slide1,  name: '내시경 클리닉' },
                  { href: '/department/clinic/arthroplasty', img: slide2,  name: '인공관절 클리닉' },
                  { href: '/department/clinic/spine',        img: slide3,  name: '척추 클리닉' },
                  { href: '/department/clinic/hand',         img: slide4,  name: '수지접합 클리닉' },
                  { href: '/department/clinic/anus',         img: slide5,  name: '항문 클리닉' },
                  { href: '/department/clinic/laparoscopy',  img: slide6,  name: '복강경 클리닉' },
                  { href: '/department/clinic/adult-disease',img: slide7,  name: '성인병 클리닉' },
                  { href: '/department/clinic/intervention', img: slide8,  name: '중재시술 클리닉' },
                  { href: '/department/clinic/neuro',        img: slide9,  name: '뇌신경질환 클리닉' },
                  { href: '/department/clinic/urolithiasis', img: slide10, name: '요로결석 클리닉' },
                ].map((item) => (
                  <div key={item.href} className="slide_item swiper-slide">
                    <Link to={item.href}>
                      <div className="special_img">
                        <img src={item.img} alt={item.name} />
                      </div>
                      <div className="special_name">{item.name}</div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
        <div className="main_news_sec">
          <div className="news_tit">
            <p className="t_sm">MEDI-IN NEWS</p>
            <strong>메디인 소식</strong>
          </div>
          <div className="news_cont_wrap">
            <div className="news_top">
              <button
                type="button"
                className={`btn_tab${activeTab === 0 ? ' active_tab' : ''}`}
                aria-label="메디인 소식 전체"
                onClick={() => setActiveTab(0)}
              >
                전체
              </button>
              <button
                type="button"
                className={`btn_tab${activeTab === 1 ? ' active_tab' : ''}`}
                aria-label="메디인 소식 중 공지사항"
                onClick={() => setActiveTab(1)}
              >
                공지사항
              </button>
              <button
                type="button"
                className={`btn_tab${activeTab === 2 ? ' active_tab' : ''}`}
                aria-label="메디인 소식 중 건강정보"
                onClick={() => setActiveTab(2)}
              >
                건강정보
              </button>
              <button
                type="button"
                className={`btn_tab${activeTab === 3 ? ' active_tab' : ''}`}
                aria-label="메디인 소식 중 보도자료"
                onClick={() => setActiveTab(3)}
              >
                보도자료
              </button>
              <button
                type="button"
                className={`btn_tab${activeTab === 4 ? ' active_tab' : ''}`}
                aria-label="메디인 소식 중 메디TV"
                onClick={() => setActiveTab(4)}
              >
                메디TV
              </button>
            </div>
            <a href={moreHref} className="btn_more" title="메디인 소식 더보기">
              더보기<i className="ico_plus"></i>
            </a>
            <div className="news_cont">
              {newsList.map((item, i) => (
                <div key={i} className="news_item">
                  {item.bmt_idx === 3 ? (
                    <a href={item.bd_field_2} target="_blank" rel="noreferrer">
                      <span className="state_news">{item.bmt_name}</span>
                      {item.tFileVo && (
                        <div className="bbs_thumb">
                          <img
                            src={`https://medi-in.co.kr${item.tFileVo.file_src}`}
                            alt={item.tFileVo.file_cn}
                          />
                        </div>
                      )}
                      <p className="news_tit">{item.bd_title}</p>
                      <p className="news_txt">{item.bd_content}</p>
                      <p className="news_date">{item.inputdate.substring(0, 10)}</p>
                    </a>
                  ) : (
                    <a href={`/main/board/${item.bmt_idx}/${item.bd_idx}/board_view.do`}>
                      <span className={item.bmt_idx === 1 ? 'state_notice' : 'state_news'}>
                        {item.bmt_name}
                      </span>
                      {item.tFileVo && (
                        <div className="bbs_thumb">
                          <img
                            src={`https://medi-in.co.kr${item.tFileVo.file_src}`}
                            alt={item.tFileVo.file_cn}
                          />
                        </div>
                      )}
                      <p className="news_tit">{item.bd_title}</p>
                      <p className="news_txt">{item.bd_content}</p>
                      <p className="news_date">{item.inputdate.substring(0, 10)}</p>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="main_location_sec">
          <div className="location_info">
            <p className="loca_info_tt">MEDI-IN HOSPITAL</p>
            <p className="loca_info_txt">
              2022년 3월 2일부로 메디인병원이 종합병원으로 새롭게 출발 합니다. <br />
              정보화 시대와 온라인 진료 시대에 발 맞추어 질 좋은 의료와 친절한 병원으로서
              <br className="m_hide" />
              파주 경기북부지역의 건강의 파수꾼이 되고, 최신장비와 최고의 기술로
              <br className="m_hide" />
              헌신적인 진료와 정직한 의료서비스를 통해 지역사회에 봉사하며
              <br className="m_hide" />
              항상 정(情)을 나누는 병원으로 기억되고자 힘쓰겠습니다.
            </p>
            <dl className="loca_address">
              <dt>주소</dt>
              <dd>경기도 파주시 금릉역로 190</dd>
            </dl>
          </div>
          <div className="location_map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.2329379577604!2d126.76416531619739!3d37.761135979762095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c8df309acfcc1%3A0xce382349c5005ff!2z66mU65SU7J2467OR7JuQ!5e0!3m2!1sko!2skr!4v1660683620567!5m2!1sko!2skr"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <SiteFooter onOpenPopup={setActivePopup} />
      <PopupLayer activePopup={activePopup} onClose={() => setActivePopup(null)} />
      <SiteBannerPopup site="MAIN" />
    </div>
  )
}
