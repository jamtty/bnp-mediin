import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

import locaMapMo1 from '../../assets/images/loca_map_mo1.svg'
import locaMapPc1 from '../../assets/images/loca_map_pc1.svg'
import locaMapMo2 from '../../assets/images/loca_map_mo2.svg'
import locaMapPc2 from '../../assets/images/loca_map_pc2.svg'
import locaMapMo3 from '../../assets/images/loca_map_mo3.svg'
import locaMapPc3 from '../../assets/images/loca_map_pc3.svg'
import locaMapMo4 from '../../assets/images/loca_map_mo4.svg'
import locaMapPc4 from '../../assets/images/loca_map_pc4.svg'
import locaShuttleMo from '../../assets/images/loca_shuttle_mo.svg'
import locaShuttlePc from '../../assets/images/loca_shuttle_pc.svg'
import shuttleTimetable from '../../assets/images/shuttle_timetable.png'
import way00 from '../../assets/images/way_00.jpg'
import way01 from '../../assets/images/way_01.jpg'
import way02 from '../../assets/images/way_02.jpg'
import way03 from '../../assets/images/way_03.jpg'
import way04 from '../../assets/images/way_04.jpg'
import way05 from '../../assets/images/way_05.jpg'
import way06 from '../../assets/images/way_06.jpg'
import way07 from '../../assets/images/way_07.jpg'

export default function LocationPage() {
  return (
    <SubPageLayout
      visualClass="vs3"
      visualTitle="병원소개"
      contentsClass="sub03"
      lnbItems={lnbItems}
    >
      <h3 className="cont_tit">오시는 길</h3>
      <div className="con_area">
        <div className="location_wrap">
          <div className="map_area">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.232757111911!2d126.76416531607273!3d37.7611402207151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c8dec86766ba5%3A0x44ea68f453d896a2!2z6rK96riw64-EIO2MjOyjvOyLnCDquIjrponsl63roZwgMTkw!5e0!3m2!1sko!2skr!4v1662411544845!5m2!1sko!2skr"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="location_area">
            <div className="loca_sec">
              <i className="ico_loca1"></i>
              <div className="loca_cont">
                <p className="loca_tit">자동차</p>
                <ul className="loca_list">
                  <li>
                    <div className="loca_box">
                      <span><strong className="label">자유로 </strong></span>
                      <span>문발IC</span>
                      <span>56번 도로</span>
                      <span>359번 도로</span>
                      <span>아리랑로타리</span>
                      <span>메디인병원</span>
                    </div>
                  </li>
                  <li>
                    <div className="loca_box">
                      <span><strong className="label">자유로 </strong></span>
                      <span>통일동산IC</span>
                      <span>문산제일고삼거리</span>
                      <span>순달교차로</span>
                      <span>금촌초등학교</span>
                      <span>아리랑로타리</span>
                      <span>메디인병원</span>
                    </div>
                  </li>
                  <li>
                    <div className="loca_box">
                      <span><strong className="label">수도권제1순환고속도로</strong></span>
                      <span>고양JC</span>
                      <span>평택파주고속도로(서울-문산)</span>
                      <span>금촌IC</span>
                      <span>가나무로</span>
                      <span>금릉역로</span>
                      <span>메디인병원</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="loca_sec">
              <i className="ico_loca2"></i>
              <div className="loca_cont">
                <p className="loca_tit">버스</p>
                <div className="loca_info_wrap">
                  <div className="loca_info">
                    <p className="loca_info_tit">034, 034-1 버스 노선(교하차고지&lt;--&gt;신성교하차고지)</p>
                    <picture>
                      <source srcSet={locaMapMo1} media="(max-width: 768px)" />
                      <img src={locaMapPc1} alt="" />
                    </picture>
                  </div>
                  <div className="loca_info">
                    <p className="loca_info_tit">025 버스 노선(풀무골&lt;--&gt;야동동)</p>
                    <picture>
                      <source srcSet={locaMapMo2} media="(max-width: 768px)" />
                      <img src={locaMapPc2} alt="" />
                    </picture>
                  </div>
                  <div className="loca_info">
                    <p className="loca_info_tit">022 버스 노선(월롱시민공원&lt;--&gt;월롱시민공원)</p>
                    <picture>
                      <source srcSet={locaMapMo3} media="(max-width: 768px)" />
                      <img src={locaMapPc3} alt="" />
                    </picture>
                  </div>
                  <div className="loca_info">
                    <p className="loca_info_tit">071 버스 노선(금촌역&lt;--&gt;금촌역)</p>
                    <picture>
                      <source srcSet={locaMapMo4} media="(max-width: 768px)" />
                      <img src={locaMapPc4} alt="" />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
            <div className="loca_sec">
              <i className="ico_loca3"></i>
              <div className="loca_cont" id="bus">
                <p className="loca_tit">지하철</p>
                <ul className="loca_metro">
                  <li>
                    <span className="metro_line">경의</span>
                    <p className="metro_txt">
                      경의중앙선 <strong className="t_emerald">금촌역</strong> 1번출구 700m <br className="pc_hide" />(도보 약 10분)
                    </p>
                  </li>
                  <li>
                    <span className="metro_line">경의</span>
                    <p className="metro_txt">
                      경의중앙선 <strong className="t_emerald">금릉역</strong> 1번출구 700m <br className="pc_hide" />(도보 약 10분)
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="loca_sec">
              <i className="ico_loca4"></i>
              <div className="loca_cont">
                <p className="loca_tit">셔틀버스</p>
                <div className="shuttle_area">
                  <div className="shuttle_line">
                    <picture>
                      <source srcSet={locaShuttleMo} media="(max-width: 768px)" />
                      <img src={locaShuttlePc} alt="" />
                    </picture>
                  </div>
                  <div className="shuttle_timetable">
                    <p className="tit">· 운행시간표</p>
                    <p className="time_img"><img src={shuttleTimetable} alt="" /></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="main_quick_menu loca_sec2">
              <div className="quick_item"><img src={way00} alt="" style={{ width: '650px' }} /></div>
              <div className="quick_item"><img src={way01} alt="" style={{ width: '650px' }} /></div>
            </div>
            <div className="main_quick_menu loca_sec2">
              <div className="quick_item"><img src={way02} alt="" style={{ width: '650px' }} /></div>
              <div className="quick_item"><img src={way03} alt="" style={{ width: '650px' }} /></div>
            </div>
            <div className="main_quick_menu loca_sec2">
              <div className="quick_item"><img src={way04} alt="" style={{ width: '650px' }} /></div>
              <div className="quick_item"><img src={way05} alt="" style={{ width: '650px' }} /></div>
            </div>
            <div className="main_quick_menu loca_sec2">
              <div className="quick_item"><img src={way06} alt="" style={{ width: '650px' }} /></div>
              <div className="quick_item"><img src={way07} alt="" style={{ width: '650px' }} /></div>
            </div>
          </div>
        </div>
      </div>
    </SubPageLayout>
  )
}
