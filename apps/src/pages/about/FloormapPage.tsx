import { useState, useEffect, useRef } from 'react'
import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const floorImages = import.meta.glob<string>(
  '../../assets/images/floor/**/*.{jpg,png}',
  { eager: true, import: 'default' }
)

const img = (path: string): string => {
  const key = path.replace('/resource/images/floor/', '../../assets/images/floor/')
  return floorImages[key] ?? path
}

type FloorData = {
  label: string
  info: string[]
  images: string[]
}

const floors: FloorData[] = [
  {
    label: '전경',
    info: ['전경'],
    images: Array.from({ length: 30 }, (_, i) => img(`/resource/images/floor/0F/floor0f_${String(i + 1).padStart(2, '0')}.png`)),
  },
  {
    label: '4F',
    info: ['간호간병통합서비스 병동', '42병동'],
    images: Array.from({ length: 12 }, (_, i) => img(`/resource/images/floor/4F_${i + 1}.jpg`)),
  },
  {
    label: '3F',
    info: ['31병동', '32병동'],
    images: [
      ...Array.from({ length: 11 }, (_, i) => img(`/resource/images/floor/3F_${i + 1}.jpg`)),
      img('/resource/images/floor/3F_11_2.jpg'),
      ...Array.from({ length: 6 }, (_, i) => img(`/resource/images/floor/3F_${i + 12}.jpg`)),
    ],
  },
  {
    label: '2F',
    info: ['수술실', '중환자실', '진단검사의학과', '채혈실', '물리치료실', '운동치료실', '도수치료실', '약제팀', '종합행정실', '의료정보팀', '교육실'],
    images: Array.from({ length: 19 }, (_, i) => img(`/resource/images/floor/2F_${i + 1}.jpg`)),
  },
  {
    label: '1F',
    info: ['신경통증클리닉', '정형외과', '신경외과', '척추비수술센터', '척추센터', '관절센터', '비뇨의학과', '신경과', '응급실', '방재실', '원무팀', '진료협력센터'],
    images: [
      img('/resource/images/floor/1F_1.jpg'),
      img('/resource/images/floor/1F_2.jpg'),
      img('/resource/images/floor/1F_3.jpg'),
      img('/resource/images/floor/1F_4.jpg'),
      img('/resource/images/floor/1F_4_2.jpg'),
      img('/resource/images/floor/1F_5.jpg'),
      img('/resource/images/floor/1F_6.jpg'),
      img('/resource/images/floor/1F_7.jpg'),
      img('/resource/images/floor/1F_8.jpg'),
      img('/resource/images/floor/1F_10.jpg'),
      img('/resource/images/floor/1F_11.jpg'),
      img('/resource/images/floor/1F_12.jpg'),
      img('/resource/images/floor/1F_14.jpg'),
      img('/resource/images/floor/1F_14_2.jpg'),
      img('/resource/images/floor/1F_15.jpg'),
      img('/resource/images/floor/1F_16.jpg'),
      img('/resource/images/floor/1F_17.jpg'),
      img('/resource/images/floor/1F_18.jpg'),
      img('/resource/images/floor/1F_19.jpg'),
      img('/resource/images/floor/1F_20.jpg'),
      img('/resource/images/floor/1F_21.jpg'),
      img('/resource/images/floor/1F_22.jpg'),
      img('/resource/images/floor/1F_23.jpg'),
      img('/resource/images/floor/1F_24.jpg'),
      img('/resource/images/floor/1F_25.jpg'),
      img('/resource/images/floor/1F_26.jpg'),
    ],
  },
  {
    label: 'B1F',
    info: ['내과', '외과', '산부인과', '건강증진센터', '내시경실', '영상의학과', 'CT실', 'MRI실', 'ANGIO실', '인공신장실', '편의점', '장례식장'],
    images: Array.from({ length: 30 }, (_, i) => img(`/resource/images/floor/B1F_${i + 1}.jpg`)),
  },
  {
    label: 'B2F',
    info: ['중앙공급실', '물품창고', '기계실', '전기실', '용역사무실', '세탁실'],
    images: [],
  },
]

function FloorSlide({ images, floorIndex }: { images: string[]; floorIndex: number }) {
  const swiperElRef = useRef<HTMLDivElement>(null)
  const swiperRef = useRef<Swiper | null>(null)
  const prevRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)
  const paginationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!swiperElRef.current || images.length === 0) return

    const isMobile = window.innerWidth <= 768

    swiperRef.current = new Swiper(swiperElRef.current, {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 10,
      loop: images.length > 1,
      navigation: isMobile ? false : {
        nextEl: nextRef.current,
        prevEl: prevRef.current,
      },
      pagination: isMobile ? {
        el: paginationRef.current,
        clickable: true,
      } : false,
    })

    const handleResize = () => {
      if (!swiperRef.current) return
      const mobile = window.innerWidth <= 768
      swiperRef.current.params.navigation = mobile ? false : {
        nextEl: nextRef.current,
        prevEl: prevRef.current,
      }
      swiperRef.current.params.pagination = mobile ? {
        el: paginationRef.current,
        clickable: true,
      } : false
      swiperRef.current.update()
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      swiperRef.current?.destroy()
      swiperRef.current = null
    }
  }, [images, floorIndex])

  if (images.length === 0) return null

  return (
    <div className="floor_img_area">
      <div className="floor_slide_area">
        <div className="swiper" ref={swiperElRef}>
          <div className="swiper-wrapper">
            {images.map((src, i) => (
              <div className="swiper-slide" key={i}>
                <img src={src} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="swiper-button-prev" ref={prevRef}></div>
        <div className="swiper-button-next" ref={nextRef}></div>
        <div className="swiper-pagination" ref={paginationRef}></div>
      </div>
    </div>
  )
}

export default function FloormapPage() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <SubPageLayout
      visualClass="vs3"
      visualTitle="병원소개"
      contentsClass="sub03"
      lnbItems={lnbItems}
    >
      <h3 className="cont_tit">층별안내도</h3>
      <div className="con_area">
        <div className="emergency_sec first_sec">
          <p className="info_tit">층별안내도</p>
          <p className="info_disc">
            메디인병원의 각 층별 사진을 보고 싶으실 경우, 원하시는 층을 클릭해주시기 바랍니다.
          </p>
          <div className="floor_wrap">
            {floors.map((floor, idx) => (
              <div key={idx} className={`floor_sec${activeIndex === idx ? ' active_sec' : ''}`}>
                <div className="floor_info">
                  <button type="button" onClick={() => setActiveIndex(idx)}>
                    <span className="floor_label">{floor.label}</span>
                    <div className="floor_info_cont">
                      {floor.info.map((item, i) => (
                        <span key={i}>{item}</span>
                      ))}
                    </div>
                  </button>
                </div>
                {activeIndex === idx && (
                  <FloorSlide images={floor.images} floorIndex={idx} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="emergency_sec">
          <p className="info_tit">병상 현황</p>
          <p className="info_disc">메디인병원 병상 현황입니다.</p>
          <div className="in_cont_sec mt50">
            <p className="in_cont_tit">일반병상</p>
            <div className="h_table">
              <table>
                <caption>일반병상 현황표</caption>
                <thead>
                  <tr>
                    <th scope="col">구분</th>
                    <th scope="col">병상수</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>일반병동(3,4층)</td><td>150</td></tr>
                  <tr><td>간호간병통합병동(4층)</td><td>56</td></tr>
                  <tr><td>중환자실</td><td>13</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="in_cont_sec mt50">
            <p className="in_cont_tit">기타병상</p>
            <div className="h_table">
              <table>
                <caption>기타병상 현황표</caption>
                <thead>
                  <tr>
                    <th scope="col">구분</th>
                    <th scope="col">병상수</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>응급실</td><td>18</td></tr>
                  <tr><td>인공신장실</td><td>27</td></tr>
                  <tr><td>수술실</td><td>4</td></tr>
                  <tr><td>회복실</td><td>3</td></tr>
                </tbody>
              </table>
            </div>
            <div className="h_table half_right">
              <table>
                <caption>병상 현황표</caption>
                <thead>
                  <tr>
                    <th scope="col">총계</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>258</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </SubPageLayout>
  )
}