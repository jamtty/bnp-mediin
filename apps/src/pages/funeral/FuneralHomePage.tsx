import { useEffect, useRef, useState } from 'react'
import Swiper from 'swiper'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import FuneralHeader from '../../components/FuneralHeader'
import SiteFooter from '../../components/SiteFooter'
import main1Pc from '../../assets/images/funeral/main1_pc.png'
import main1Mo from '../../assets/images/funeral/main1_mo.png'
import main2Pc from '../../assets/images/funeral/main2_pc.png'
import main2Mo from '../../assets/images/funeral/main2_mo.png'
import main3Pc from '../../assets/images/funeral/main3_pc.png'
import main3Mo from '../../assets/images/funeral/main3_mo.png'

const slides = [
  { pc: main1Pc, mo: main1Mo },
  { pc: main2Pc, mo: main2Mo },
  { pc: main3Pc, mo: main3Mo },
]

export default function FuneralHomePage() {
  const visualRef = useRef<HTMLDivElement>(null)
  const paginationRef = useRef<HTMLDivElement>(null)
  const swiperInst = useRef<Swiper | null>(null)
  const [activePopup, setActivePopup] = useState<string | null>(null)

  useEffect(() => {
    if (!visualRef.current) return
    const sw = new Swiper(visualRef.current, {
      modules: [Pagination, Autoplay],
      loop: true,
      speed: 1000,
      autoplay: { delay: 2500, disableOnInteraction: false },
      pagination: { el: paginationRef.current ?? undefined, clickable: true },
    })
    swiperInst.current = sw
    return () => { sw.destroy(); swiperInst.current = null }
  }, [])

  return (
    <div id="container">
      <FuneralHeader
        activePopup={activePopup}
        onOpenPopup={setActivePopup}
        onClosePopup={() => setActivePopup(null)}
      />
      <div className="main_wrap">
        <div className="main_visual">
          <div className="swiper" ref={visualRef}>
            <div className="swiper-wrapper">
              {slides.map((slide, i) => (
                <div className="swiper-slide" key={i}>
                  <picture>
                    <source srcSet={slide.mo} media="(max-width: 768px)" />
                    <img src={slide.pc} alt="" />
                  </picture>
                  <p className="slide_txt">
                    마지막 가시는 길, <br />
                    가족의 마음으로 <strong>메디인병원</strong>이{' '}
                    <br className="pc_hide" />함께합니다.
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="visual_quick_area">
            <div className="quick_info">
              <a href="/funeral/location" className="btn_loca">
                <p>오시는 길</p>
                <i className="ico_quick1"></i>
              </a>
              <a href="/funeral/guide" className="btn_info">
                <p>이용안내</p>
                <i className="ico_quick2"></i>
              </a>
              <div className="inq_box">
                <dl>
                  <dt><i className="ico_tel"></i> 문의안내</dt>
                  <dd>T. <a href="tel:031-570-9093" className="tel_area">031) 570-9093</a></dd>
                </dl>
                <p className="inq_info">※24시간 전화상담 가능</p>
              </div>
            </div>
            <div className="swiper-pagination" ref={paginationRef}></div>
          </div>
        </div>
        <div className="main_list_area">
          <iframe
            src="https://e-iris.co.kr/display/parlor/iframe/358"
            frameBorder={0}
            id="myframe"
            style={{ width: '100%', minHeight: 700 }}
          ></iframe>
          <button type="button" className="btn_more pc_hide"><span>더보기</span></button>
        </div>
      </div>
      <SiteFooter onOpenPopup={setActivePopup} />
    </div>
  )
}
