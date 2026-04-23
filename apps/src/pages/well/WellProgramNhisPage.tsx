import WellSubPageLayout from '../../components/WellSubPageLayout'

export default function WellProgramNhisPage() {
  return (
    <WellSubPageLayout>
      <h3 className="cont_tit">국민건강보험공단 건강검진</h3>
      <div className="con_area">
        <div className="in_cont_sec">
          <p className="in_cont_tit">국민건강보험공단 건강검진 안내</p>
          <div className="in_cont_flex">
            <p className="in_cont_txt">
              메디인 병원은 국민건강보험공단에서 실시하는 일반검진, 6대 암검진을 실시함으로써 질병의 조기발견 및 예방, 국민건강수준의
              향상을 위하여 건강검진 서비스를 제공하고 있습니다.
            </p>
            <div>
              <a href="https://www.nhis.or.kr/nhis/index.do" target="_blank" rel="noreferrer" className="btn_go">
                <i className="ico_7_1"></i>
                <span>국민건강보험공단홈페이지 바로가기</span>
              </a>
              <br />
              <a href="/upfilePath/bd/암문진표_일반검진문진표파일(2025).pdf" target="_blank" rel="noreferrer" className="btn_go">
                <i className="ico_7_1"></i>
                <span>암 문진표/일반검진 문진표 다운로드</span>
              </a>
            </div>
          </div>
        </div>

        <div className="in_cont_sec">
          <p className="in_cont_tit">대상</p>
          <p className="in_cont_txt">건강보험 가입자 중 해당연도 검진 대상자라면 거주지역에 관계없이 누구나 검진을 받으실 수 있습니다.</p>
          <div className="h_table mt30">
            <table className="m_hide">
              <caption>국민건강보험공단 건강검진 대상 안내표</caption>
              <tbody>
                <tr>
                  <th>대상자</th>
                  <td><strong>지역가입자 및 직장 피부양자</strong></td>
                  <td><strong>직장가입자</strong></td>
                  <td><strong>의료수급자</strong></td>
                </tr>
                <tr>
                  <th>자격기준</th>
                  <td>
                    - 세대주 및 40세 이상<br />
                    - 세대주와 20세 이상
                  </td>
                  <td>
                    - 사무직 근로자 중 격년제 실시에 따른 대상자<br />
                    - 비사무직 근로자 전체
                  </td>
                  <td>
                    - 66세 이상 의료 기초수급권자<br />
                    - 19세~64세 의료 급여수급권자
                  </td>
                </tr>
                <tr>
                  <th>기간</th>
                  <td>2년마다</td>
                  <td>
                    - 사무직 : 2년마다<br />
                    - 비사무직 : 1년마다
                  </td>
                  <td>2년마다</td>
                </tr>
              </tbody>
            </table>

            <table className="pc_hide">
              <caption>국민건강보험공단 건강검진 대상 안내표</caption>
              <colgroup>
                <col style={{ width: '30%' }} />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th>대상자</th>
                  <td className="td_l"><strong>지역가입자 및 직장 피부양자</strong></td>
                </tr>
                <tr>
                  <th>자격기준</th>
                  <td className="td_l">
                    - 세대주 및 40세 이상<br />
                    - 세대주와 20세 이상
                  </td>
                </tr>
                <tr>
                  <th>기간</th>
                  <td className="td_l">2년마다</td>
                </tr>
              </tbody>
            </table>

            <table className="pc_hide">
              <caption>국민건강보험공단 건강검진 대상 안내표</caption>
              <colgroup>
                <col style={{ width: '30%' }} />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th>대상자</th>
                  <td className="td_l"><strong>직장가입자</strong></td>
                </tr>
                <tr>
                  <th>자격기준</th>
                  <td className="td_l">
                    - 사무직 근로자 중 격년제 실시에 따른 대상자<br />
                    - 비사무직 근로자 전체
                  </td>
                </tr>
                <tr>
                  <th>기간</th>
                  <td className="td_l">
                    - 사무직 : 2년마다<br />
                    - 비사무직 : 1년마다
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="pc_hide">
              <caption>국민건강보험공단 건강검진 대상 안내표</caption>
              <colgroup>
                <col style={{ width: '30%' }} />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th>대상자</th>
                  <td className="td_l"><strong>의료수급자</strong></td>
                </tr>
                <tr>
                  <th>자격기준</th>
                  <td className="td_l">
                    - 66세 이상 의료 기초수급권자<br />
                    - 19세~64세 의료 급여수급권자
                  </td>
                </tr>
                <tr>
                  <th>기간</th>
                  <td className="td_l">2년마다</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="info_red mt15">※ 전년도 대상자 중 미수검자는 공단 검진대상자 확인 후 검진이 가능합니다.</p>
          <p className="info_red">※ 정해진 횟수를 초과하여 검진을 받으실 경우 해당 검진비용은 부당이득금으로 환수됩니다.</p>
        </div>

        <div className="in_cont_sec">
          <p className="in_cont_tit">건강검진 프로그램</p>
          <div className="in_cont_sec2">
            <div className="in_cont_tit2">
              <strong>일반검진</strong>
              <span className="disc">공통질환 및 검진항목</span>
            </div>
            <div className="h_table m_v_table mt30">
              <table>
                <caption>건강검진 프로그램 일반검진 항목표</caption>
                <thead>
                  <tr>
                    <th>비만</th>
                    <th>시청각이상</th>
                    <th>고혈압</th>
                    <th>신장질환</th>
                    <th>폐결핵/흉부질환</th>
                    <th>빈혈</th>
                    <th>당뇨병</th>
                    <th>간장질환</th>
                    <th>구강질환</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>신장, 체중, <br className="m_hide" />허리둘레, <br className="m_hide" />체질량지수</td>
                    <td>시력검사, <br className="m_hide" />청력검사</td>
                    <td>혈압검사</td>
                    <td>요단백, <br className="m_hide" />혈청크레아티닌, <br className="m_hide" />신사구체여과율</td>
                    <td>흉부방사선 <br className="m_hide" />(X-RAY)</td>
                    <td>혈색소검사</td>
                    <td>공복혈당검사</td>
                    <td>AST(SGOT), <br className="m_hide" />ALT(SGPT), <br className="m_hide" />감마지피티 <br className="m_hide" />(r-GOT)</td>
                    <td>구강검진 <br className="m_hide" />(본원 치과없음)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="in_cont_sec2">
            <div className="in_cont_tit2">
              <strong>성 연령별 질환검진항목 검진주기</strong>
            </div>
            <div className="v_table2 mt30">
              <table>
                <caption>건강검진 프로그램 성 연령별 질환검진항목 검진주기표</caption>
                <colgroup>
                  <col style={{ width: '30%' }} />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>이상지질혈증</th>
                    <td>4년마다 (남: 24세, 여: 40세)</td>
                  </tr>
                  <tr>
                    <th>정신건강검사 <br />(우울증)</th>
                    <td>
                      20, 30, 40, 50, 60, 70세 <br />
                      <span className="t_primary">※ 해당 연령을 시작으로 10년동안 1회</span>
                    </td>
                  </tr>
                  <tr>
                    <th>인지기능장애</th>
                    <td>66세 이상 2년마다</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="in_cont_sec2">
            <div className="in_cont_tit2">
              <strong>확진검사</strong>
            </div>
            <div className="v_table2 mt30">
              <table>
                <caption>확진검사표</caption>
                <colgroup>
                  <col style={{ width: '30%' }} />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th rowSpan={2}>확진검사</th>
                    <td>
                      일반검진결과 고혈압, 당뇨병, 폐결핵 질환 의심자 <br />
                      <span className="t_primary">
                        ※ 검진결과 통보시 지참하여 병,의원 방문 (상급종합병원, 종합병원제외-<span className="t_red">본원은 종합병원으로 확진검사 불가</span>)<br />
                        ※ 의료급여 수급권자는 의료급여 전달체계에 따라 의원에서 실시합니다.
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      검사항목 및 검사방법 <br />
                      <span className="t_primary">
                        ※ 고혈압 : 혈압측정, 진찰 및 상담 <br />
                        ※ 당뇨병 : 공복혈당검사, 진찰 및 상담 <br />
                        ※ 폐결핵 : 흉부 x-선 촬영검사, 진찰 및 상담
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="in_cont_sec">
          <p className="in_cont_tit">상담 및 예약안내</p>
          <div className="h_table m_v_table2 mt30">
            <table>
              <caption>상담 및 예약안내표</caption>
              <thead>
                <tr>
                  <th>구분</th>
                  <th>월</th>
                  <th>화</th>
                  <th>수</th>
                  <th>목</th>
                  <th>금</th>
                  <th>토</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>오전<br />(07:30 - 12:30)</th>
                  <td><i className="ico_ok"></i></td>
                  <td><i className="ico_ok"></i></td>
                  <td><i className="ico_ok"></i></td>
                  <td><i className="ico_ok"></i></td>
                  <td><i className="ico_ok"></i></td>
                  <td><i className="ico_ok"></i></td>
                </tr>
                <tr>
                  <th>오후<br />(14:00 - 16:30)</th>
                  <td><i className="ico_ok"></i></td>
                  <td><i className="ico_ok"></i></td>
                  <td><i className="ico_ok"></i></td>
                  <td><i className="ico_ok"></i></td>
                  <td><i className="ico_ok"></i></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="in_cont_sec">
          <div className="sub7_1_bnr_area">
            <div className="bnr_item">
              <i className="ico_7_1_bnr"></i>
              <dl>
                <dt>방문예약</dt>
                <dd>메디인병원 본관 지하1층 건강증진센터</dd>
              </dl>
            </div>
            <div className="bnr_item">
              <i className="ico_7_2_bnr"></i>
              <dl>
                <dt>전화예약</dt>
                <dd>T.<strong>1566-1991</strong></dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </WellSubPageLayout>
  )
}