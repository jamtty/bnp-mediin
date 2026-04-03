import { useState } from 'react'
import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

export default function HistoryPage() {
  const [activeTab, setActiveTab] = useState('tab01')

  return (
    <SubPageLayout
      visualClass="vs3"
      visualTitle="병원소개"
      contentsClass="sub03"
      lnbItems={lnbItems}
    >
      <h3 className="cont_tit">병원연혁</h3>
      <div className="con_area">
        <div className="tab_area">
          <button
            type="button"
            className={`btn_tab${activeTab === 'tab01' ? ' active_tab' : ''}`}
            onClick={() => setActiveTab('tab01')}
          >
            <span>2011~현재</span>
          </button>
          <button
            type="button"
            className={`btn_tab${activeTab === 'tab02' ? ' active_tab' : ''}`}
            onClick={() => setActiveTab('tab02')}
          >
            <span>2003~2010</span>
          </button>
        </div>

        {/* 탭01: 2011~현재 */}
        <div className={`cont_area${activeTab === 'tab01' ? ' active_cont' : ''}`} id="tab01">
          <div className="histroy_area">
            <div className="history_item">
              <p className="history_year">2011</p>
              <ul>
                <li>
                  <strong className="year">02.10</strong>
                  <span className="disc">제4정형외과 개설 (족부클리닉)</span>
                </li>
              </ul>
            </div>
            <div className="history_item">
              <p className="history_year">2014</p>
              <ul>
                <li>
                  <strong className="year">03.01</strong>
                  <span className="disc">김 석 원장 취임 (비뇨의학과)</span>
                </li>
                <li>
                  <strong className="year">04.22</strong>
                  <span className="disc">신경과 개설</span>
                </li>
              </ul>
            </div>
            <div className="history_item">
              <p className="history_year">2015</p>
              <ul>
                <li>
                  <strong className="year">10.06</strong>
                  <span className="disc">건강검진센터 특수건강검진 지정</span>
                </li>
              </ul>
            </div>
            <div className="history_item">
              <p className="history_year">2016</p>
              <ul>
                <li>
                  <strong className="year">03.01</strong>
                  <span className="disc">직업환경의학과 개설</span>
                </li>
              </ul>
            </div>
            <div className="history_item">
              <p className="history_year">2020</p>
              <ul>
                <li>
                  <strong className="year">05.26</strong>
                  <span className="disc">국민안심병원 지정</span>
                </li>
                <li>
                  <strong className="year">10.01</strong>
                  <span className="disc">호흡기전담클리닉 지정</span>
                </li>
              </ul>
            </div>
            <div className="history_item">
              <p className="history_year">2021</p>
              <ul>
                <li>
                  <strong className="year">01.01</strong>
                  <span className="disc">제2대 김 석 원장 대표원장 취임</span>
                </li>
                <li>
                  <strong className="year">05.01</strong>
                  <span className="disc">OCS, EMR 프로그램 업그레이드 운영</span>
                </li>
              </ul>
            </div>
            <div className="history_item">
              <p className="history_year">2022</p>
              <ul>
                <li>
                  <strong className="year">03.01</strong>
                  <span className="disc">메디인병원 확장 신축이전</span>
                </li>
                <li>
                  <strong className="year">04.01</strong>
                  <span className="disc">파주 최초 민간종합병원 승격</span>
                </li>
                <li>
                  <strong className="year">04.25</strong>
                  <span className="disc">지역응급의료기관 지정</span>
                </li>
                <li>
                  <strong className="year">05.18</strong>
                  <span className="disc">전국의료관련감염감시체계(Konis) 참여</span>
                </li>
                <li>
                  <strong className="year">08.01</strong>
                  <span className="disc">제 3대 이학수원장 대표원장 취임</span>
                </li>
              </ul>
            </div>
            <div className="history_item">
              <p className="history_year">2024</p>
              <ul>
                <li><strong className="year">01.01</strong><span className="disc">우수검사실 신임인증</span></li>
                <li><strong className="year">01.30</strong><span className="disc">급성기 병원 4주기 의료기관 인증</span></li>
                <li><strong className="year">07.26</strong><span className="disc">마취 적정성 평가 1등급 획득</span></li>
                <li><strong className="year">07.31</strong><span className="disc">약제급여 급성상기도감염 항생제처방률 1등급 획득</span></li>
                <li><strong className="year">09.12</strong><span className="disc">전자의무기록시스템 인증</span></li>
                <li><strong className="year">10.01</strong><span className="disc">감염예방관리료 차등제1등급</span></li>
                <li><strong className="year">10.25</strong><span className="disc">만성폐쇄성폐질환 1등급 획득</span></li>
                <li><strong className="year">10.30</strong><span className="disc">결핵 적정성 평가 1등급 획득</span></li>
                <li><strong className="year">12.13</strong><span className="disc">병원표준화사망비 적정성평가 A그룹(사망비가 낮은 기관) 선정</span></li>
                <li><strong className="year">12.16</strong><span className="disc">수술의 예방적 항생제 적정성 평가결과 1등급 획득</span></li>
              </ul>
            </div>
            <div className="history_item">
              <p className="history_year">2025</p>
              <ul>
                <li>
                  <strong className="year">07.01</strong>
                  <span className="disc">중환자실 개소</span>
                </li>
                <li>
                  <strong className="year">&nbsp;</strong>
                  <span className="disc">보건복지부 포괄 2차 종합병원 선정</span>
                </li>
                <li>
                  <strong className="year">07.09</strong>
                  <span className="disc">의료기관윤리위원회 설치</span>
                </li>
                <li>
                  <strong className="year">07.18</strong>
                  <span className="disc">폐렴 적정성평가 1등급 획득</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 탭02: 2003~2010 */}
        <div className={`cont_area${activeTab === 'tab02' ? ' active_cont' : ''}`} id="tab02">
          <div className="histroy_area">
            <div className="history_item">
              <p className="history_year">2003</p>
              <ul>
                <li>
                  <strong className="year">01.31</strong>
                  <span className="disc">파주명지병원 개원(정형외과,영상의학과,내과)</span>
                </li>
                <li>
                  <strong className="year"></strong>
                  <span className="disc">권태형 초대원장 취임</span>
                </li>
              </ul>
            </div>
            <div className="history_item">
              <p className="history_year">2004</p>
              <ul>
                <li>
                  <strong className="year">03.01</strong>
                  <span className="disc">제2정형외과 개설(수부외과 클리닉)</span>
                </li>
              </ul>
            </div>
            <div className="history_item">
              <p className="history_year">2005</p>
              <ul>
                <li>
                  <strong className="year">01.01</strong>
                  <span className="disc">외과 개설</span>
                </li>
                <li>
                  <strong className="year">06.01</strong>
                  <span className="disc">응급실 확장 및 병상 수 증설</span>
                </li>
              </ul>
            </div>
            <div className="history_item">
              <p className="history_year">2006</p>
              <ul>
                <li>
                  <strong className="year">-</strong>
                  <span className="disc">병원 확장이전계획 수립</span>
                </li>
              </ul>
            </div>
            <div className="history_item">
              <p className="history_year">2007</p>
              <ul>
                <li>
                  <strong className="year">09.01</strong>
                  <span className="disc">OCS, EMR 구축시범 운영</span>
                </li>
              </ul>
            </div>
            <div className="history_item">
              <p className="history_year">2008</p>
              <ul>
                <li>
                  <strong className="year">01.01</strong>
                  <span className="disc">신경외과 개설</span>
                </li>
                <li>
                  <strong className="year">01.21</strong>
                  <span className="disc">메디인병원으로 상호변경 &amp; 확장이전 개원</span>
                </li>
                <li>
                  <strong className="year">03.01</strong>
                  <span className="disc">마취통증의학과 개설</span>
                </li>
              </ul>
            </div>
            <div className="history_item">
              <p className="history_year">2010</p>
              <ul>
                <li>
                  <strong className="year">08.21</strong>
                  <span className="disc">내과, 가정의학과 개설</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SubPageLayout>
  )
}
