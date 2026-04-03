import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

export default function OutpatientPage() {
  return (
    <SubPageLayout
      visualClass="vs1"
      visualTitle="진료안내"
      contentsClass="sub01"
      lnbItems={lnbItems}
    >
      <h3 className="cont_tit">외래진료안내</h3>
      <div className="con_area">
        <div className="reserv_info_area">
          <div className="info_time_sec">
            <p className="info_tit">진료시간안내</p>
            <p className="info_disc">
              외래 접수 시간은 환자수에 따라 다소 조정될 수 있습니다. 응급환자는 휴일 없이 24시간
              진료합니다.
            </p>
            <div className="info_box_area">
              <div className="info_box">
                <i className="ico_reserv1"></i>
                <p className="info_box_tit">평일</p>
                <p className="info_box_time">09:00 - 18:00</p>
                {/* <p className="info_box_disc">(18시 이후 응급실 진료)</p> */}
              </div>
              <div className="info_box">
                <i className="ico_reserv2"></i>
                <p className="info_box_tit">토요일</p>
                <p className="info_box_time">09:00 - 13:00</p>
                {/* <p className="info_box_disc">(13시 이후 응급실 진료)</p> */}
              </div>
              <div className="info_box">
                <i className="ico_reserv3"></i>
                {/* 0930 : 16번 : 시간삭제, 야간 및 휴일진료일 -> 24시간 응급실 진료로 수정 */}
                <p className="info_box_tit">24시간 응급실 진료</p>
              </div>
              <div className="info_box">
                <i className="ico_reserv4"></i>
                <p className="info_box_tit">건강증진센터</p>
                {/* 0930 : 16번 : 시간 수정 */}
                <p className="info_box_time">07:30 ~ 16:30</p>
                <p className="info_box_disc">(토요일 07:30 ~ 12:30)</p>
              </div>
              <div className="info_box">
                <i className="ico_reserv5"></i>
                <p className="info_box_tit">점심시간</p>
                {/* 0930 : 16번 : 시간 수정 */}
                <p className="info_box_time">13:00 ~ 14:00</p>
              </div>
            </div>
          </div>
          <div className="info_step_sec">
            <p className="info_tit">외래진료절차</p>
            <div className="info_step_area">
              <div className="step_box1 m_hide">
                <div className="box hd_box">
                  <dl>
                    <dt>초진</dt>
                    <dd>진료신청서,건강보험증,신분증</dd>
                  </dl>
                </div>
                <div className="box line_box arrow_box">
                  <strong>입원결정서 발급</strong>
                </div>
                <div className="box">
                  <dl className="bd_box">
                    {/* 0930 : 15번 : 원무부 -> 원무팀으로 수정 */}
                    <dt>원무팀 입·퇴원계</dt>
                    <dd>입원수속</dd>
                  </dl>
                </div>
                <div className="step_next">
                  <span>
                    당일접수
                    <br />
                    전화예약
                  </span>
                </div>
              </div>
              <div className="step_box2 m_hide">
                <div className="box hd_box arrow_box">
                  <dl>
                    <dt>재진</dt>
                    <dd>건강보험증,신분증</dd>
                  </dl>
                </div>
                <div className="box line_box arrow_box">
                  <strong>접수/수납창구</strong>
                </div>
                <div className="box line_box arrow_box step_prev">
                  <strong>진료실</strong>
                </div>
                <div className="box arrow_box step_next2">
                  <dl className="bd_box gray_box">
                    {/* 0930 : 15번 : 원무부 -> 원무팀으로 수정 */}
                    <dt>원무팀 수납창구</dt>
                    <dd>진료비 수납</dd>
                  </dl>
                </div>
                <div className="box line_box arrow_box">
                  <strong>검사,촬영,투약 특수검사 예약</strong>
                </div>
                <div className="box end_box">
                  <strong>귀가</strong>
                </div>
              </div>
              <div className="step_box3 m_hide">
                <div className="box hd_box">
                  <dl>
                    <dt>예약재진</dt>
                    <dd>건강보험증,신분증,진료예약증</dd>
                  </dl>
                </div>
                <div className="box line_box arrow_box">
                  <strong>원외 처방전 발급</strong>
                </div>
                {/* <div className="box line_box arrow_box"><strong>원내 약국에서 처방전 수령</strong></div> */}
                <div className="box line_box">
                  <strong>외부약국</strong>
                </div>
              </div>
              <div className="pc_hide">
                <img src="/resource/images/reserv_info_step.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubPageLayout>
  )
}
