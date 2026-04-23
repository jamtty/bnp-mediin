import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Swiper from 'swiper'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import WellHeader from '../../components/WellHeader'
import SiteFooter from '../../components/SiteFooter'
import bnrImg1 from '../../assets/images/hpcenter/cooperation_guide.jpg'
import main1Pc from '../../assets/images/hpcenter/main1_pc.png'
import main1Mo from '../../assets/images/hpcenter/main1_mo.png'
import main2Pc from '../../assets/images/hpcenter/main2_pc.png'
import main2Mo from '../../assets/images/hpcenter/main2_mo.png'
import main3Pc from '../../assets/images/hpcenter/main3_pc.png'
import main3Mo from '../../assets/images/hpcenter/main3_mo.png'
import doctorIntroducePc from '../../assets/images/hpcenter/m_doctor_introduce.png'
import doctorIntroduceMo from '../../assets/images/hpcenter/m_doctor_introduce_m.png'
import userInfoPc from '../../assets/images/hpcenter/m_user_info.png'
import userInfoMo from '../../assets/images/hpcenter/m_user_info_m.png'

export default function WellHomePage() {
  const visualRef = useRef<HTMLDivElement>(null)
  const paginationRef = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)
  const swiperInst = useRef<Swiper | null>(null)
  const [activePopup, setActivePopup] = useState<string | null>(null)

  useEffect(() => {
    if (!visualRef.current) return
    const sw = new Swiper(visualRef.current, {
      modules: [Pagination, Autoplay],
      loop: true,
      autoplay: { delay: 5000, disableOnInteraction: false },
      pagination: {
        el: paginationRef.current ?? undefined,
        clickable: true,
      },
    })
    swiperInst.current = sw
    return () => { sw.destroy(); swiperInst.current = null }
  }, [])

  const handleTogglePause = () => {
    if (!swiperInst.current) return
    if (paused) {
      swiperInst.current.autoplay.start()
    } else {
      swiperInst.current.autoplay.stop()
    }
    setPaused((v) => !v)
  }

  const programs = [
    {
      ico: 'ico_pro1',
      title: '기본 건강검진',
      desc: '국가 기본 건강검진 항목을 포함한\n기본 건강상태 확인 검진 프로그램입니다.',
      to: '/well/program',
    },
    {
      ico: 'ico_pro2',
      title: '종합 건강검진',
      desc: '심층적인 검사 항목을 통해\n건강 상태를 보다 정밀하게 확인합니다.',
      to: '/well/program',
    },
    {
      ico: 'ico_pro3',
      title: '특화 건강검진',
      desc: '개인 맞춤형 특화 검진으로\n특정 질환에 대한 예방·조기발견이 가능합니다.',
      to: '/well/program',
    },
  ]

  const quickBanners = [
    {
      title: '의료진 소개',
      desc: '메디인병원 건강증진센터의\n의료진을 소개합니다.',
      imgPc: doctorIntroducePc,
      imgMo: doctorIntroduceMo,
      to: '/well/doctor',
    },
    {
      title: '검진준비 및 유의사항',
      desc: '건강증진 센터 방문시\n검진 준비사항 및 유의사항 안내입니다.',
      imgPc: userInfoPc,
      imgMo: userInfoMo,
      to: '/well/preparation',
    },
  ]

  return (
    <div id="container">
      <WellHeader
        activePopup={activePopup}
        onOpenPopup={setActivePopup}
        onClosePopup={() => setActivePopup(null)}
      />

      <div className="main_wrap">
        {/* ── 메인 비주얼 ── */}
        <div className="main_visual">
          <div className="swiper" ref={visualRef}>
            <div className="swiper-wrapper">
              {[
                { pc: main1Pc, mo: main1Mo },
                { pc: main2Pc, mo: main2Mo },
                { pc: main3Pc, mo: main3Mo },
              ].map((slide, i) => (
                <div className="swiper-slide" key={i}>
                  <picture>
                    <source srcSet={slide.mo} media="(max-width: 768px)" />
                    <img src={slide.pc} alt="" />
                  </picture>
                  <div className="slide_txt_box">
                    <p className="slide_txt">
                      행복하고 건강한 삶, <br /><strong>메디인병원</strong>과 <br className="pc_hide" />함께하세요.
                    </p>
                    <p className="slide_txt2">
                      메디인병원 건강증진센터는 편안하고 쾌적한 환경 속에 <br className="m_hide" />
                      최신의 장비를 도입하여 환자분들의 다양한 요구를 만족시킬 수 있는 <br className="m_hide" />
                      검진 프로그램을 고객님들께 실시하고 있습니다.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="swiper_controll">
            <button type="button" className="btn_pause" onClick={handleTogglePause}>
              {paused ? 'play' : 'pause'}
            </button>
            <div className="swiper-pagination" ref={paginationRef}></div>
          </div>
        </div>

        {/* ── 프로그램 안내 ── */}
        <div className="main_program_info">
          <p className="in_tit">건강검진 프로그램 안내</p>
          <div className="in_program_list">
            {programs.map((prog, i) => (
              <div className="in_item" key={i}>
                <div className="item_box">
                  <i className={prog.ico}></i>
                  <dl>
                    <dt>{prog.title}</dt>
                    <dd>
                      {prog.desc.split('\n').map((line, j, arr) => (
                        <span key={j}>{line}{j < arr.length - 1 && <br />}</span>
                      ))}
                    </dd>
                  </dl>
                </div>
                <Link to={prog.to} className="btn_more"><span>MORE</span></Link>
              </div>
            ))}
          </div>
        </div>

        {/* ── 빠른배너 ── */}
        <div className="main_quick_bnr">
          {quickBanners.map((bnr, i) => (
            <div className="bnr_item" key={i}>
              <Link to={bnr.to}>
                <picture>
                  <source srcSet={bnr.imgMo} media="(max-width: 768px)" />
                  <img src={bnr.imgPc} alt="" />
                </picture>
                <dl>
                  <dt>{bnr.title}</dt>
                  <dd>
                    {bnr.desc.split('\n').map((line, j, arr) => (
                      <span key={j}>{line}{j < arr.length - 1 && <br />}</span>
                    ))}
                  </dd>
                </dl>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <SiteFooter onOpenPopup={setActivePopup} />
    </div>
  )
}

