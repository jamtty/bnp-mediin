import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PopupLayer from '../components/PopupLayer'
import SiteBannerPopup from '../components/SiteBannerPopup'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
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
import { fetchActiveBanners, type MainBannerItem } from '../api/mainBanner'
import { fetchNoticeList } from '../api/notice'
import { fetchHealthInfoList, fetchMediTvList, fetchPressList, fetchOgImage } from '../api/board'
import { toAbsUrl } from '../utils/uploadUrl'
import { getYouTubeThumbnailUrl } from '../utils/youtube'

type HomeNewsItem = {
  id: number
  category: 'notice' | 'health-info' | 'press' | 'medi-tv'
  categoryLabel: string
  title: string
  summary: string
  createdAt: string
  imageUrl: string | null
  href: string
  isExternal?: boolean
}

const HOME_NEWS_TABS = [
  { key: 'all', label: '전체', moreHref: '/news/notice' },
  { key: 'notice', label: '공지사항', moreHref: '/news/notice' },
  { key: 'health-info', label: '건강정보', moreHref: '/community/health-info' },
  { key: 'press', label: '보도자료', moreHref: '/news/press' },
  { key: 'medi-tv', label: '메디TV', moreHref: '/news/medi-tv' },
] as const

const stripHtml = (value: string | null | undefined): string =>
  (value ?? '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()

const extractFirstImageUrl = (value: string | null | undefined): string | null => {
  const match = (value ?? '').match(/<img[^>]+src=["']([^"']+)["']/i)
  return match ? toAbsUrl(match[1]) : null
}

export default function HomePage() {
  const swiperRef    = useRef<HTMLDivElement>(null)
  const bannerRef    = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState(0)
  const [banners, setBanners] = useState<MainBannerItem[]>([])
  const [homeNews, setHomeNews] = useState<Record<string, HomeNewsItem[]>>({
    all: [],
    notice: [],
    'health-info': [],
    press: [],
    'medi-tv': [],
  })
  const [newsLoading, setNewsLoading] = useState(false)
  const [activePopup, setActivePopup] = useState<string | null>(null)

  // 메인 배너 로드
  useEffect(() => {
    fetchActiveBanners()
      .then(setBanners)
      .catch(() => {})
  }, [])

  // 메인 배너 스와이퍼 (배너 로드 후 초기화)
  useEffect(() => {
    if (!bannerRef.current || banners.length === 0) return
    const sw = new Swiper(bannerRef.current, {
      modules: [Navigation, Pagination, Autoplay],
      loop: banners.length > 1,
      autoplay: banners.length > 1 ? { delay: 5000, disableOnInteraction: false } : false,
      navigation: {
        nextEl: '.main_banner_next',
        prevEl: '.main_banner_prev',
      },
      pagination: {
        el: '.main_banner_pagination',
        type: 'fraction',
      },
    })
    return () => { sw.destroy() }
  }, [banners])

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
    setNewsLoading(true)
    Promise.all([
      fetchNoticeList({ page: 1, size: 4 }),
      fetchHealthInfoList({ page: 1, size: 4 }),
      fetchPressList({ page: 1, size: 4 }),
      fetchMediTvList({ page: 1, size: 4 }),
    ])
      .then(async ([noticeRes, healthRes, pressRes, mediTvRes]) => {
        const noticeItems: HomeNewsItem[] = noticeRes.items.slice(0, 4).map((item) => ({
          id: item.id,
          category: 'notice',
          categoryLabel: '공지사항',
          title: item.title,
          summary: stripHtml(item.content),
          createdAt: item.created_at,
          imageUrl: extractFirstImageUrl(item.content),
          href: `/news/notice/${item.id}`,
        }))

        const healthItems: HomeNewsItem[] = healthRes.items.slice(0, 4).map((item) => ({
          id: item.id,
          category: 'health-info',
          categoryLabel: '건강정보',
          title: item.title,
          summary: stripHtml(item.content),
          createdAt: item.created_at,
          imageUrl: toAbsUrl(item.thumbnail) || extractFirstImageUrl(item.content),
          href: `/community/health-info/${item.id}`,
        }))

        // 보도자료: external_url이 있는 아이템의 og:image를 병렬 패치
        const pressRawItems = pressRes.items.slice(0, 4)
        const pressOgImages = await Promise.all(
          pressRawItems.map((item) =>
            item.external_url ? fetchOgImage(item.external_url) : Promise.resolve(null)
          )
        )
        const pressItems: HomeNewsItem[] = pressRawItems.map((item, i) => ({
          id: item.id,
          category: 'press',
          categoryLabel: '보도자료',
          title: item.title,
          summary: stripHtml(item.press_name ? `${item.press_name} ${item.external_url ?? ''}` : item.external_url),
          createdAt: item.created_at,
          imageUrl: pressOgImages[i] ?? null,
          href: item.external_url || '/news/press',
          isExternal: Boolean(item.external_url),
        }))

        const mediTvItems: HomeNewsItem[] = mediTvRes.items.slice(0, 4).map((item) => ({
          id: item.id,
          category: 'medi-tv',
          categoryLabel: '메디TV',
          title: item.title,
          summary: stripHtml(item.content),
          createdAt: item.created_at,
          imageUrl: getYouTubeThumbnailUrl(item.youtube_url) ?? toAbsUrl(item.thumbnail),
          href: item.youtube_url || '/news/medi-tv',
          isExternal: true,
        }))

        const allItems = [...noticeItems, ...healthItems, ...pressItems, ...mediTvItems]
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          .slice(0, 4)

        setHomeNews({
          all: allItems,
          notice: noticeItems,
          'health-info': healthItems,
          press: pressItems,
          'medi-tv': mediTvItems,
        })
      })
      .catch(() => {
        setHomeNews({ all: [], notice: [], 'health-info': [], press: [], 'medi-tv': [] })
      })
      .finally(() => setNewsLoading(false))
  }, [])

  const currentNewsKey = HOME_NEWS_TABS[activeTab]?.key ?? 'all'
  const newsList = homeNews[currentNewsKey] ?? []
  const moreHref = HOME_NEWS_TABS[activeTab]?.moreHref ?? '/news/notice'
  return (
    <div className="wrap">
      <SiteHeader />
      <div id="container">
        {/* 메인 배너 슬라이더 */}
        {banners.length > 0 ? (
          <div className="main_banner_slider">
            <div className="swiper main_banner_swiper" ref={bannerRef}>
              <div className="swiper-wrapper">
                {banners.map((banner) => {
                  const img = (
                    <img
                      src={banner.img_url ?? ''}
                      alt={banner.img_ori_name ?? '메인 배너'}
                      className="main_banner_img"
                    />
                  )
                  return (
                    <div className="swiper-slide main_banner_slide" key={banner.id}>
                      {banner.url ? (
                        <a href={banner.url} target={banner.link_target} rel="noopener noreferrer">
                          {img}
                        </a>
                      ) : img}
                    </div>
                  )
                })}
              </div>
              {banners.length > 1 && (
                <>
                  <button className="main_banner_prev" aria-label="이전" />
                  <button className="main_banner_next" aria-label="다음" />
                </>
              )}
            </div>
            <div className="main_banner_pagination" />
          </div>
        ) : (
          <div className="main_banner_placeholder" />
        )}
        {/* 기존 비디오 섹션 (백업)
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
        */}
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
              {newsLoading ? (
                <div className="news_empty">불러오는 중...</div>
              ) : newsList.length === 0 ? (
                <div className="news_empty">표시할 게시물이 없습니다.</div>
              ) : (
                newsList.map((item) => (
                  <div key={`${item.category}-${item.id}`} className="news_item">
                    <a href={item.href} target={item.isExternal ? '_blank' : undefined} rel={item.isExternal ? 'noreferrer noopener' : undefined}>
                      <span className={item.category === 'notice' ? 'state_notice' : 'state_news'}>
                        {item.categoryLabel}
                      </span>
                      {item.imageUrl && (
                        <div className="bbs_thumb main_news_thumb">
                          <img src={item.imageUrl} alt={item.title} />
                        </div>
                      )}
                      <p className="news_tit">{item.title}</p>
                      {/* <p className="news_txt">{item.summary || ' '}</p> */}
                      <p className="news_date">{item.createdAt}</p>
                    </a>
                  </div>
                ))
              )}
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
