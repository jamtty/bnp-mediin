import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'
import icoAdmission1 from '../../assets/images/ico_admission1.svg'
import icoAdmission2 from '../../assets/images/ico_admission2.svg'
import icoAdmission3 from '../../assets/images/ico_admission3.svg'
import icoAdmission4 from '../../assets/images/ico_admission4.svg'
import icoAdmission5 from '../../assets/images/ico_admission5.svg'
import icoAdmission6 from '../../assets/images/ico_admission6.svg'
import icoAdmission7 from '../../assets/images/ico_admission7.svg'
import icoAdmission8 from '../../assets/images/ico_admission8.svg'
import icoLifeGuide1 from '../../assets/images/ico_life_guide1.svg'
import icoLifeGuide2 from '../../assets/images/ico_life_guide2.svg'
import icoLifeGuide3 from '../../assets/images/ico_life_guide3.svg'
import icoLifeGuide4 from '../../assets/images/ico_life_guide4.svg'
import icoLifeGuide5 from '../../assets/images/ico_life_guide5.svg'
import icoLifeGuide6 from '../../assets/images/ico_life_guide6.svg'
import icoLifeGuide7 from '../../assets/images/ico_life_guide7.svg'
import icoLifeGuide8 from '../../assets/images/ico_life_guide8.svg'
import icoLifeGuide9 from '../../assets/images/ico_life_guide9.svg'

export default function AdmissionPage() {
  return (
    <SubPageLayout
      visualClass="vs1"
      visualTitle="진료안내"
      contentsClass="sub01"
      lnbItems={lnbItems}
    >
      <h3 className="cont_tit">입·퇴원 절차안내</h3>
      <div className="con_area">
        {/* 입퇴원 절차 */}
        <div className="cont_area active_cont" id="tab01">
          <div className="emergency_sec">
            <p className="info_tit">입원 절차안내</p>
            <div className="emergency_step">
              <ol>
                <li>
                  <img src={icoAdmission1} alt="" />
                  <p>진료</p>
                </li>
                <li>
                  <img src={icoAdmission2} alt="" />
                  <p>병원시설</p>
                  <p className="t_disc">입원이 필요한경우 입원 결정</p>
                </li>
                <li>
                  <img src={icoAdmission3} alt="" />
                  <p>입원대기</p>
                  <p className="t_disc">응급환자는 당일 입원</p>
                </li>
                <li>
                  <img src={icoAdmission4} alt="" />
                  <p>원무과 입원 수속</p>
                  <p className="t_disc">입원 당일 수속 병실 배정</p>
                </li>
                <li>
                  <img src={icoAdmission5} alt="" />
                  <p>입원</p>
                  <p className="t_disc">병실안내</p>
                </li>
              </ol>
            </div>
          </div>
          <div className="emergency_sec">
            <p className="info_tit">입원 시 준비사항</p>
            <ol className="num_list">
              <li>신청인 신분증</li>
              <li>
                본인이 입원 수속이 어려운 경우 친족관계를 확인할 수 있는 서류(등본 또는
                가족관계증명서 등)
              </li>
              <li>
                중간 진료비 및 퇴원비 납부는 각 은행에서 온라인으로 입금이 가능합니다.
                <br />
                (입금하신 후에 꼭 원무과 입·퇴원계 담당자에게 확인하여 주시기 바랍니다.)
              </li>
            </ol>
            <dl className="cont_info">
              <dt>입원 시 필요한 물품은?</dt>
              <dd>
                편리한 입원 생활을 위하여 수저, 비누, 치약, 칫솔, 수건, 슬리퍼, 휴지, 물컵 등 개인
                소지품을 준비하여 주십시오.
              </dd>
              <dt>연대 보증인은?</dt>
              <dd>가족, 친척, 지인 등 연대 보증이 가능한 보호자를 말합니다.</dd>
              <dt>병실료 산정 기준은?</dt>
              <dd>
                보건복지부 고시에 의하여 당일 12시(정오) 부터 익일(12시) 정오까지를 1일로
                산정합니다.
                <br />
                00:00~06:00 사이에 입원하시거나 18:00~24:00 사이에 퇴원하시는 경우 입원료의 50%가
                가산됩니다.
              </dd>
              <dt>외부 음식물 반입은?</dt>
              <dd>감염 및 식중독의 예방을 위하여 외부 음식물의 병실 반입은 불가능합니다.</dd>
            </dl>
          </div>
          <div className="emergency_sec">
            <p className="info_tit">퇴원 절차안내</p>
            <div className="emergency_step">
              <ol>
                <li>
                  <img src={icoAdmission6} alt="" />
                  <p>주치의 퇴원결정</p>
                </li>
                <li>
                  <img src={icoAdmission7} alt="" />
                  <p>원무과 퇴원 수속</p>
                </li>
                <li>
                  <img src={icoAdmission8} alt="" />
                  <p>퇴원</p>
                </li>
                <li className="flex_step">
                  <p className="dot_txt">
                    <strong>정상 퇴원:</strong> 평일(1층 원무과 입퇴원 창구 이용)
                  </p>
                  <p className="dot_txt">
                    <strong>가퇴원:</strong> 주말,공휴일(2-3일후 내원하여 재정산)
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div className="emergency_sec">
            <p className="info_tit">퇴원 시 준비 사항</p>
            <ol className="num_list">
              <li>통상적으로 담당 주치의가 퇴원 예정 전일(1일전)에 퇴원 예고를 해드립니다.</li>
              <li>
                퇴원 당일 오전에 퇴원 진료비 계산서가 발급되고 퇴원 수납이 준비되면 , 퇴원 수납
                창구에 진료비를 납부하시면 됩니다.
              </li>
              <li>
                퇴원 수납 영수증을 받아 병동 간호사에게 확인을 받으신 후, 퇴원약 또는 처방전을
                받아서 귀가하시면 됩니다.
              </li>
              <li>
                진단서나 입원 확인서가 필요한 경우 퇴원 전날까지 담당의사 또는 간호사에게 신청하여
                주십시오.
              </li>
            </ol>
          </div>
        </div>

        {/* 병실생활안내 */}
        <div className="cont_area" id="tab02">
          <div className="emergency_sec">
            <p className="info_tit">병실 생활 안내</p>
            <div className="guide_area">
              <div className="guide_item">
                <div className="item_ico">
                  <img src={icoLifeGuide1} alt="" />
                </div>
                <div className="item_info">
                  <p className="item_info_tt">면회 시 주의사항</p>
                  <ol className="num_list">
                    <li>코로나로 인해 당분간 면회는 금지 됩니다.</li>
                    <li>감염되기 쉬운 10세 미만의 어린이는 병실 출입을 삼가 하여주십시오.</li>
                    <li>
                      밤 9시 이후에는 면회를 금지하고, 병원에서 인정한 보호자 외에는 귀가하여 주시기
                      바랍니다.
                    </li>
                  </ol>
                  <ul className="dot_list">
                    <li>
                      소아나 중환자는 침대에서 떨어질 위험이 있으므로 보호자는 침대의 보조난을 올려
                      주시기 바랍니다.
                    </li>
                    <li>
                      링겔 주사를 맞는 중에 이동하실 때에는 링겔 걸이대를 이용하여 이동하시기
                      바랍니다.
                    </li>
                    <li>
                      입원 환자는 본원의 담당 의사가 처방한 약 이외에, 기타 외부 약제를 드실
                      경우에는 담당의사와 상의하여 주십시오.
                    </li>
                    <li>
                      간호사의 도움이 필요할 때에는 구내전화 500번 또는 510번으로 연락 주시기
                      바랍니다.
                    </li>
                    <li>
                      병원 내 모든 시설과 물품은 공동으로 사용하는 것이므로, 절약하여 사용하여
                      주시기 바랍니다.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="guide_item">
                <div className="item_ico">
                  <img src={icoLifeGuide2} alt="" />
                </div>
                <div className="item_info">
                  <p className="item_info_tt">환자 외출/외박</p>
                  <ul className="dot_list">
                    <li>
                      외출/외박은 환자의 안전을 위하여 허용되지 않습니다. 다만 부득이 할 때에는
                      담당의사의 승낙이 있어야 합니다.
                    </li>
                    <li>담당의사의 승낙 시 외출 절차는 해당 간호사실에 문의하시기 바랍니다.</li>
                  </ul>
                </div>
              </div>
              <div className="guide_item">
                <div className="item_ico">
                  <img src={icoLifeGuide3} alt="" />
                </div>
                <div className="item_info">
                  <p className="item_info_tt">식사시간</p>
                  <p className="item_info_txt">
                    아침식사 : 오전8시 / 점심식사 : 정오12시 / 저녁식사 : 오후 5시
                    <br />※ 식사 후 식기는 반드시 배식차에 반납하여 주시기 바랍니다.
                  </p>
                  <ul className="dot_list">
                    <li>감염 및 식중독의 예방을 위하여 위부 음식물의 병실 반입은 불가능합니다.</li>
                    <li>음식 보관용 냉장고와 식탁, 전자레인이지는 5층에 준비되어 있습니다.</li>
                  </ul>
                </div>
              </div>
              <div className="guide_item">
                <div className="item_ico">
                  <img src={icoLifeGuide4} alt="" />
                </div>
                <div className="item_info">
                  <p className="item_info_tt">전화 및 TV시청</p>
                  <ul className="dot_list">
                    <li>병실에서 외부 전화를 이용하실 경우 1층 공중전화를 이용하시기 바랍니다.</li>
                    <li>환자들의 숙면을 위하여 밤 10시 이후에는 가급적 삼가해주시기 바랍니다.</li>
                    <li>
                      환자들의 안정을 위하여 TV시청을 심야에 자제하시고, 밤 10시 이후부터는 가급적
                      8층 휴게실 TV를 이용해주시기 바랍니다.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="guide_item">
                <div className="item_ico">
                  <img src={icoLifeGuide5} alt="" />
                </div>
                <div className="item_info">
                  <p className="item_info_tt">귀중품 관리</p>
                  <ul className="dot_list">
                    <li>
                      필요 이상의 현금이나 귀중품을 소지하지 마시고, 특히 병실을 비우실 때에는
                      귀중품 관리에 주의 부탁드립니다.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="guide_item">
                <div className="item_ico">
                  <img src={icoLifeGuide6} alt="" />
                </div>
                <div className="item_info">
                  <p className="item_info_tt">에너지절약</p>
                  <ul className="dot_list">
                    <li>
                      불필요한 물이나 전기를 낭비하지 않도록 세심한 배려를 부탁드리며, 범 국민적인
                      에너지 절약 운동 차원에서 적극 협조하여 주시기 바랍니다.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="guide_item">
                <div className="item_ico">
                  <img src={icoLifeGuide7} alt="" />
                </div>
                <div className="item_info">
                  <p className="item_info_tt">금연 및 금주</p>
                  <ul className="dot_list">
                    <li>
                      병원 내 전 지역은 금연구역입니다. 환자 및 여러분들의 건강을 위하여 흡연은 건물
                      밖 흡연구역을 이용하여 주십시오.
                      <br />
                      또한 음주도 금지되어 있으므로 반드시 지켜 주시기 바랍니다.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="guide_item">
                <div className="item_ico">
                  <img src={icoLifeGuide8} alt="" />
                </div>
                <div className="item_info">
                  <p className="item_info_tt">화재예방</p>
                  <ul className="dot_list">
                    <li>
                      유류, 가스용 버너, 전열기는 화재의 위험이 있어 병실 내에 반입 또는 사용이
                      철저히 금지되어 있습니다.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="guide_item">
                <div className="item_ico">
                  <img src={icoLifeGuide9} alt="" />
                </div>
                <div className="item_info">
                  <p className="item_info_tt">낙상예방</p>
                  <ul className="dot_list">
                    <li>입원 생활 중 침대에서 떨어지는 일이 없도록 유의하시기 바랍니다.</li>
                    <li>
                      어린이의 경우 보호자가 침대나 침상식탁, 창 턱에 올라가지 않도록 돌봐 주시고,
                      휠체어 유모차 및 이동용 침대차에 어린이를 혼자 두지 마시길 부탁드립니다.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubPageLayout>
  )
}
