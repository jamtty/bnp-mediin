import { useState } from 'react'
import WellSubPageLayout from '../../components/WellSubPageLayout'

type Gender = 'man' | 'woman'
type InnerTab = 'cancer' | 'brain' | 'heart' | 'respiratory'

export default function WellProgramPrecisionPage() {
  const [activeTab, setActiveTab] = useState<Gender>('man')
  const [activeInnerMan, setActiveInnerMan] = useState<InnerTab>('cancer')
  const [activeInnerWoman, setActiveInnerWoman] = useState<InnerTab>('cancer')

  return (
    <WellSubPageLayout>
      <h3 className="cont_tit">정밀검진프로그램</h3>
      <div className="con_area">
        <div className="in_cont_sec">
          <p className="in_cont_tit">정밀검진프로그램</p>
          <p className="in_cont_txt">각 질환 암, 뇌, 심장, 호흡기 중 선택할 수 있는 맞춤형 정밀검진</p>
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
          <div className={`tab_cont${activeTab === 'man' ? ' active_cont' : ''}`}>
            <div className="tab_btn_wrap">
              <button type="button" className="tab_this pc_hide">암 정밀</button>
              <div className="in_tab_area">
                <button type="button" className={`btn_in_tab btn_in_tab1${activeInnerMan === 'cancer' ? ' active_tab' : ''}`} onClick={() => setActiveInnerMan('cancer')}>암 정밀</button>
                <button type="button" className={`btn_in_tab btn_in_tab1${activeInnerMan === 'brain' ? ' active_tab' : ''}`} onClick={() => setActiveInnerMan('brain')}>뇌 정밀</button>
                <button type="button" className={`btn_in_tab btn_in_tab1${activeInnerMan === 'heart' ? ' active_tab' : ''}`} onClick={() => setActiveInnerMan('heart')}>심장 정밀</button>
                <button type="button" className={`btn_in_tab btn_in_tab1${activeInnerMan === 'respiratory' ? ' active_tab' : ''}`} onClick={() => setActiveInnerMan('respiratory')}>호흡기 정밀</button>
              </div>
            </div>
            <div className={`in_tab_cont in_tab_cont1${activeInnerMan === 'cancer' ? ' active_cont' : ''}`}>
              <div className="in_cont_sec2">
                <div className="in_cont_tit2"><strong>암 정밀</strong></div>
                <p className="in_cont_txt mt15">현대인들에게 발병율이 높은 주요 암의 조기진단을 목적으로 하는 정밀 프로그램</p>
                <div className="h_table box_table mt50">
                  <table>
                    <colgroup>
                      <col style={{ width: '30%', maxWidth: '312px' }} />
                      <col />
                    </colgroup>
                    <tbody>
                      <tr><th>검사소요시간</th><td>4~5시간</td></tr>
                      <tr><th>검사비용</th><td>900,000</td></tr>
                      <tr>
                        <th>검사항목</th>
                        <td className="pd0">
                          <dl className="in_table_tag">
                            <dt>[스탠다드검진] + 대장내시경 + 전립선 초음파 + 갑상선 초음파 + 저선량 흉부CT</dt>
                            <dd>
                              <span>신체계측</span><span>체성분분석</span><span>동맥경화</span>
                              <span>안과 (안저,안압,시력)</span><span>청력</span><span>폐기능</span>
                              <span>흉부촬영(전면)</span><span>심전도</span><span>혈액형</span>
                              <span>일반혈액</span><span>간기능</span><span>B형간염</span>
                              <span>C형간염</span><span>매독검사</span><span>신장기능</span>
                              <span>전해질</span><span>당뇨 (공복시혈당,당화혈색소)</span><span>고지혈증</span>
                              <span>요산</span><span>갑상선 기능</span>
                              <span>종양표지자 (위암,간암,대장암,췌장암,전립선암)</span>
                              <span>에이즈</span><span>소변</span><span>대변 (잠혈,기생충)</span>
                              <span>복부초음파</span><span>위내시경</span>
                            </dd>
                          </dl>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className={`in_tab_cont in_tab_cont1${activeInnerMan === 'brain' ? ' active_cont' : ''}`}>
              <div className="in_cont_sec2">
                <div className="in_cont_tit2"><strong>뇌 정밀</strong></div>
                <p className="in_cont_txt mt15">가족력 및 과거력 등 위험요인을 토대로 위험도가 높은 뇌질환에 대한 정밀 프로그램</p>
                <div className="h_table box_table mt50">
                  <table>
                    <colgroup>
                      <col style={{ width: '30%', maxWidth: '312px' }} />
                      <col />
                    </colgroup>
                    <tbody>
                      <tr><th>검사소요시간</th><td>4~5시간</td></tr>
                      <tr><th>검사비용</th><td>1,000,000</td></tr>
                      <tr>
                        <th>검사항목</th>
                        <td className="pd0">
                          <dl className="in_table_tag">
                            <dt>[스탠다드검진] + 혈액검사(Homocysteine) + 경동맥 초음파 + 뇌 MRI+MRA</dt>
                            <dd>
                              <span>신체계측</span><span>체성분분석</span><span>동맥경화</span>
                              <span>안과 (안저,안압,시력)</span><span>청력</span><span>폐기능</span>
                              <span>흉부촬영(전면)</span><span>심전도</span><span>혈액형</span>
                              <span>일반혈액</span><span>간기능</span><span>B형간염</span>
                              <span>C형간염</span><span>매독검사</span><span>신장기능</span>
                              <span>전해질</span><span>당뇨 (공복시혈당,당화혈색소)</span><span>고지혈증</span>
                              <span>요산</span><span>갑상선 기능</span>
                              <span>종양표지자 (위암,간암,대장암,췌장암,전립선암)</span>
                              <span>에이즈</span><span>소변</span><span>대변 (잠혈,기생충)</span>
                              <span>복부초음파</span><span>위내시경</span>
                            </dd>
                          </dl>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className={`in_tab_cont in_tab_cont1${activeInnerMan === 'heart' ? ' active_cont' : ''}`}>
              <div className="in_cont_sec2">
                <div className="in_cont_tit2"><strong>심장 정밀</strong></div>
                <p className="in_cont_txt mt15">가족력 및 과거력 등 위험요인을 토대로 위험도가 높은 심장질환에 대한 정밀 프로그램</p>
                <div className="h_table box_table mt50">
                  <table>
                    <colgroup>
                      <col style={{ width: '30%', maxWidth: '312px' }} />
                      <col />
                    </colgroup>
                    <tbody>
                      <tr><th>검사소요시간</th><td>4~5시간</td></tr>
                      <tr><th>검사비용</th><td>950,000</td></tr>
                      <tr>
                        <th>검사항목</th>
                        <td className="pd0">
                          <dl className="in_table_tag">
                            <dt>[스탠다드검진] + 혈액검사(Homocysteine) + 경동맥초음파,심장초음파 + 관상동맥 CT</dt>
                            <dd>
                              <span>신체계측</span><span>체성분분석</span><span>동맥경화</span>
                              <span>안과 (안저,안압,시력)</span><span>청력</span><span>폐기능</span>
                              <span>흉부촬영(전면)</span><span>심전도</span><span>혈액형</span>
                              <span>일반혈액</span><span>간기능</span><span>B형간염</span>
                              <span>C형간염</span><span>매독검사</span><span>신장기능</span>
                              <span>전해질</span><span>당뇨 (공복시혈당,당화혈색소)</span><span>고지혈증</span>
                              <span>요산</span><span>갑상선 기능</span>
                              <span>종양표지자 (위암,간암,대장암,췌장암,전립선암)</span>
                              <span>에이즈</span><span>소변</span><span>대변 (잠혈,기생충)</span>
                              <span>복부초음파</span><span>위내시경</span>
                            </dd>
                          </dl>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className={`in_tab_cont in_tab_cont1${activeInnerMan === 'respiratory' ? ' active_cont' : ''}`}>
              <div className="in_cont_sec2">
                <div className="in_cont_tit2"><strong>호흡기 정밀</strong></div>
                <p className="in_cont_txt mt15">가족력 및 과거력 등 위험요인을 토대로 위험도가 높은 호흡기질환에 대한 정밀 프로그램</p>
                <div className="h_table box_table mt50">
                  <table>
                    <colgroup>
                      <col style={{ width: '30%', maxWidth: '312px' }} />
                      <col />
                    </colgroup>
                    <tbody>
                      <tr><th>검사소요시간</th><td>3~4시간</td></tr>
                      <tr><th>검사비용</th><td>650,000</td></tr>
                      <tr>
                        <th>검사항목</th>
                        <td className="pd0">
                          <dl className="in_table_tag">
                            <dt>[스탠다드검진] + 저선량 흉부CT + 객담 + Cyfra21-1(폐암 종양표지자)</dt>
                            <dd>
                              <span>신체계측</span><span>체성분분석</span><span>동맥경화</span>
                              <span>안과 (안저,안압,시력)</span><span>청력</span><span>폐기능</span>
                              <span>흉부촬영(전면)</span><span>심전도</span><span>혈액형</span>
                              <span>일반혈액</span><span>간기능</span><span>B형간염</span>
                              <span>C형간염</span><span>매독검사</span><span>신장기능</span>
                              <span>전해질</span><span>당뇨 (공복시혈당,당화혈색소)</span><span>고지혈증</span>
                              <span>요산</span><span>갑상선 기능</span>
                              <span>종양표지자 (위암,간암,대장암,췌장암,전립선암)</span>
                              <span>에이즈</span><span>소변</span><span>대변 (잠혈,기생충)</span>
                              <span>복부초음파</span><span>위내시경</span>
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
          <div className={`tab_cont${activeTab === 'woman' ? ' active_cont' : ''}`}>
            <div className="tab_btn_wrap">
              <button type="button" className="tab_this pc_hide">암 정밀</button>
              <div className="in_tab_area">
                <button type="button" className={`btn_in_tab btn_in_tab2${activeInnerWoman === 'cancer' ? ' active_tab' : ''}`} onClick={() => setActiveInnerWoman('cancer')}>암 정밀</button>
                <button type="button" className={`btn_in_tab btn_in_tab2${activeInnerWoman === 'brain' ? ' active_tab' : ''}`} onClick={() => setActiveInnerWoman('brain')}>뇌 정밀</button>
                <button type="button" className={`btn_in_tab btn_in_tab2${activeInnerWoman === 'heart' ? ' active_tab' : ''}`} onClick={() => setActiveInnerWoman('heart')}>심장 정밀</button>
                <button type="button" className={`btn_in_tab btn_in_tab2${activeInnerWoman === 'respiratory' ? ' active_tab' : ''}`} onClick={() => setActiveInnerWoman('respiratory')}>호흡기 정밀</button>
              </div>
            </div>
            <div className={`in_tab_cont in_tab_cont2${activeInnerWoman === 'cancer' ? ' active_cont' : ''}`}>
              <div className="in_cont_sec2">
                <div className="in_cont_tit2"><strong>암 정밀</strong></div>
                <p className="in_cont_txt mt15">현대인들에게 발병율이 높은 주요 암의 조기진단을 목적으로 하는 정밀 프로그램</p>
                <div className="h_table box_table mt50">
                  <table>
                    <colgroup>
                      <col style={{ width: '30%', maxWidth: '312px' }} />
                      <col />
                    </colgroup>
                    <tbody>
                      <tr><th>검사소요시간</th><td>4~5시간</td></tr>
                      <tr><th>검사비용</th><td>950,000</td></tr>
                      <tr>
                        <th>검사항목</th>
                        <td className="pd0">
                          <dl className="in_table_tag">
                            <dt>[스탠다드검진] + 대장내시경 + 유방초음파, 갑상선 초음파 + 임유두종바이러스(HPV 검사)</dt>
                            <dd>
                              <span>신체계측</span><span>체성분분석</span><span>동맥경화</span>
                              <span>안과 (안저,안압,시력)</span><span>청력</span><span>폐기능</span>
                              <span>흉부촬영(전면)</span><span>심전도</span><span>혈액형</span>
                              <span>일반혈액</span><span>간기능</span><span>B형간염</span>
                              <span>C형간염</span><span>매독검사</span><span>신장기능</span>
                              <span>전해질</span><span>당뇨 (공복시혈당,당화혈색소)</span><span>고지혈증</span>
                              <span>요산</span><span>갑상선 기능</span>
                              <span>종양표지자 (위암,간암,대장암,췌장암,전립선암)</span>
                              <span>에이즈</span><span>소변</span><span>대변 (잠혈,기생충)</span>
                              <span>복부초음파</span><span>위내시경</span>
                              <span>자궁경부암 검사</span><span>유방X선 검사</span>
                            </dd>
                          </dl>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className={`in_tab_cont in_tab_cont2${activeInnerWoman === 'brain' ? ' active_cont' : ''}`}>
              <div className="in_cont_sec2">
                <div className="in_cont_tit2"><strong>뇌 정밀</strong></div>
                <p className="in_cont_txt mt15">가족력 및 과거력 등 위험요인을 토대로 위험도가 높은 뇌질환에 대한 정밀 프로그램</p>
                <div className="h_table box_table mt50">
                  <table>
                    <colgroup>
                      <col style={{ width: '30%', maxWidth: '312px' }} />
                      <col />
                    </colgroup>
                    <tbody>
                      <tr><th>검사소요시간</th><td>4~5시간</td></tr>
                      <tr><th>검사비용</th><td>1,050,000</td></tr>
                      <tr>
                        <th>검사항목</th>
                        <td className="pd0">
                          <dl className="in_table_tag">
                            <dt>[스탠다드검진] + 혈액검사(Homocysteine) + 경동맥초음파 + 뇌MRI&amp;MRA</dt>
                            <dd>
                              <span>신체계측</span><span>체성분분석</span><span>동맥경화</span>
                              <span>안과 (안저,안압,시력)</span><span>청력</span><span>폐기능</span>
                              <span>흉부촬영(전면)</span><span>심전도</span><span>혈액형</span>
                              <span>일반혈액</span><span>간기능</span><span>B형간염</span>
                              <span>C형간염</span><span>매독검사</span><span>신장기능</span>
                              <span>전해질</span><span>당뇨 (공복시혈당,당화혈색소)</span><span>고지혈증</span>
                              <span>요산</span><span>갑상선 기능</span>
                              <span>종양표지자 (위암,간암,대장암,췌장암,전립선암)</span>
                              <span>에이즈</span><span>소변</span><span>대변 (잠혈,기생충)</span>
                              <span>복부초음파</span><span>위내시경</span>
                              <span>자궁경부암 검사</span><span>유방X선 검사</span>
                            </dd>
                          </dl>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className={`in_tab_cont in_tab_cont2${activeInnerWoman === 'heart' ? ' active_cont' : ''}`}>
              <div className="in_cont_sec2">
                <div className="in_cont_tit2"><strong>심장 정밀</strong></div>
                <p className="in_cont_txt mt15">가족력 및 과거력 등 위험요인을 토대로 위험도가 높은 심장질환에 대한 정밀 프로그램</p>
                <div className="h_table box_table mt50">
                  <table>
                    <colgroup>
                      <col style={{ width: '30%', maxWidth: '312px' }} />
                      <col />
                    </colgroup>
                    <tbody>
                      <tr><th>검사소요시간</th><td>4~5시간</td></tr>
                      <tr><th>검사비용</th><td>1,000,000</td></tr>
                      <tr>
                        <th>검사항목</th>
                        <td className="pd0">
                          <dl className="in_table_tag">
                            <dt>[스탠다드검진] + 혈액검사(Homocysteine) + 경동맥초음파,심장초음파 + 관상동맥 CT</dt>
                            <dd>
                              <span>신체계측</span><span>체성분분석</span><span>동맥경화</span>
                              <span>안과 (안저,안압,시력)</span><span>청력</span><span>폐기능</span>
                              <span>흉부촬영(전면)</span><span>심전도</span><span>혈액형</span>
                              <span>일반혈액</span><span>간기능</span><span>B형간염</span>
                              <span>C형간염</span><span>매독검사</span><span>신장기능</span>
                              <span>전해질</span><span>당뇨 (공복시혈당,당화혈색소)</span><span>고지혈증</span>
                              <span>요산</span><span>갑상선 기능</span>
                              <span>종양표지자 (위암,간암,대장암,췌장암,전립선암)</span>
                              <span>에이즈</span><span>소변</span><span>대변 (잠혈,기생충)</span>
                              <span>복부초음파</span><span>위내시경</span>
                              <span>자궁경부암 검사</span><span>유방X선 검사</span>
                            </dd>
                          </dl>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className={`in_tab_cont in_tab_cont2${activeInnerWoman === 'respiratory' ? ' active_cont' : ''}`}>
              <div className="in_cont_sec2">
                <div className="in_cont_tit2"><strong>호흡기 정밀</strong></div>
                <p className="in_cont_txt mt15">가족력 및 과거력 등 위험요인을 토대로 위험도가 높은 호흡기질환에 대한 정밀 프로그램</p>
                <div className="h_table box_table mt50">
                  <table>
                    <colgroup>
                      <col style={{ width: '30%', maxWidth: '312px' }} />
                      <col />
                    </colgroup>
                    <tbody>
                      <tr><th>검사소요시간</th><td>3~4시간</td></tr>
                      <tr><th>검사비용</th><td>700,000</td></tr>
                      <tr>
                        <th>검사항목</th>
                        <td className="pd0">
                          <dl className="in_table_tag">
                            <dt>[스탠다드검진] + 저선량 흉부CT + 객담 + Cyfra21-1(폐암 종양표지자)</dt>
                            <dd>
                              <span>신체계측</span><span>체성분분석</span><span>동맥경화</span>
                              <span>안과 (안저,안압,시력)</span><span>청력</span><span>폐기능</span>
                              <span>흉부촬영(전면)</span><span>심전도</span><span>혈액형</span>
                              <span>일반혈액</span><span>간기능</span><span>B형간염</span>
                              <span>C형간염</span><span>매독검사</span><span>신장기능</span>
                              <span>전해질</span><span>당뇨 (공복시혈당,당화혈색소)</span><span>고지혈증</span>
                              <span>요산</span><span>갑상선 기능</span>
                              <span>종양표지자 (위암,간암,대장암,췌장암,전립선암)</span>
                              <span>에이즈</span><span>소변</span><span>대변 (잠혈,기생충)</span>
                              <span>복부초음파</span><span>위내시경</span>
                              <span>자궁경부암 검사</span><span>유방X선 검사</span>
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
        </div>
      </div>
    </WellSubPageLayout>
  )
}