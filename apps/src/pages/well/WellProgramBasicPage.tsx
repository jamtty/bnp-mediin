import { useState } from 'react'
import WellSubPageLayout from '../../components/WellSubPageLayout'

export default function WellProgramBasicPage() {
  const [activeTab, setActiveTab] = useState<'man' | 'woman'>('man')

  return (
    <WellSubPageLayout>
      <h3 className="cont_tit">기본검진프로그램</h3>
      <div className="con_area">
        <div className="in_cont_sec">
          <p className="in_cont_tit">기본검진프로그램</p>
          <p className="in_cont_txt">특별한 증상이나 가족력, 과거력 등이 없는 성인을 대상으로 질병을 조기에 발견하는 것을 목적으로 하는 필수적인 검진 프로그램</p>
        </div>
        <div className="in_cont_sec">
          <div className="tab_area">
            <button
              type="button"
              className={`btn_tab tab_man${activeTab === 'man' ? ' active_tab' : ''}`}
              onClick={() => setActiveTab('man')}
            >
              <i className="ico_man"></i>
              <span>남자</span>
            </button>
            <button
              type="button"
              className={`btn_tab tab_woman${activeTab === 'woman' ? ' active_tab' : ''}`}
              onClick={() => setActiveTab('woman')}
            >
              <i className="ico_woman"></i>
              <span>여자</span>
            </button>
          </div>

          {/* 남자 탭 */}
          <div className={`tab_cont${activeTab === 'man' ? ' active_cont' : ''}`} id="tab01">
            <div className="h_table box_table">
              <table>
                <colgroup>
                  <col style={{ width: '30%', maxWidth: '312px' }} />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>검사소요시간</th>
                    <td>약 3시간 이상</td>
                  </tr>
                  <tr>
                    <th>검사비용</th>
                    <td>550,000</td>
                  </tr>
                  <tr>
                    <th>검사항목</th>
                    <td className="pd0">
                      <dl className="in_table_tag">
                        <dt>스탠다드</dt>
                        <dd>
                          <span>신체계측</span>
                          <span>체성분분석</span>
                          <span>동맥경화</span>
                          <span>안과 (안저,안압,시력)</span>
                          <span>청력</span>
                          <span>폐기능</span>
                          <span>흉부촬영(전면)</span>
                          <span>심전도</span>
                          <span>혈액형</span>
                          <span>일반혈액</span>
                          <span>간기능</span>
                          <span>B형간염</span>
                          <span>C형간염</span>
                          <span>매독검사</span>
                          <span>신장기능</span>
                          <span>전해질</span>
                          <span>당뇨 (공복시혈당,당화혈색소)</span>
                          <span>고지혈증</span>
                          <span>요산</span>
                          <span>갑상선 기능</span>
                          <span>종양표지자 (위암,간암,대장암,췌장암,전립선암)</span>
                          <span>에이즈</span>
                          <span>소변</span>
                          <span>대변 (잠혈,기생충)</span>
                          <span>복부초음파</span>
                          <span>위내시경</span>
                        </dd>
                      </dl>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 여자 탭 */}
          <div className={`tab_cont${activeTab === 'woman' ? ' active_cont' : ''}`} id="tab02">
            <div className="h_table box_table">
              <table>
                <colgroup>
                  <col style={{ width: '30%', maxWidth: '312px' }} />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>검사소요시간</th>
                    <td>약 3시간 이상</td>
                  </tr>
                  <tr>
                    <th>검사비용</th>
                    <td>600,000</td>
                  </tr>
                  <tr>
                    <th>검사항목</th>
                    <td className="pd0">
                      <dl className="in_table_tag">
                        <dt>스탠다드</dt>
                        <dd>
                          <span>신체계측</span>
                          <span>체성분분석</span>
                          <span>동맥경화</span>
                          <span>안과 (안저,안압,시력)</span>
                          <span>청력</span>
                          <span>폐기능</span>
                          <span>흉부촬영(전면)</span>
                          <span>심전도</span>
                          <span>혈액형</span>
                          <span>일반혈액</span>
                          <span>간기능</span>
                          <span>B형간염</span>
                          <span>C형간염</span>
                          <span>매독검사</span>
                          <span>신장기능</span>
                          <span>전해질</span>
                          <span>당뇨 (공복시혈당,당화혈색소)</span>
                          <span>고지혈증</span>
                          <span>요산</span>
                          <span>갑상선 기능</span>
                          <span>종양표지자 (위암,간암,대장암,췌장암,전립선암)</span>
                          <span>에이즈</span>
                          <span>소변</span>
                          <span>대변 (잠혈,기생충)</span>
                          <span>복부초음파</span>
                          <span>위내시경</span>
                          <span>자궁경부암 검사</span>
                          <span>유방X선 검사</span>
                        </dd>
                      </dl>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </WellSubPageLayout>
  )
}