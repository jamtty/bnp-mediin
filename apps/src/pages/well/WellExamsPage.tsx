import WellSubPageLayout from '../../components/WellSubPageLayout'

export default function WellExamsPage() {
  return (
    <WellSubPageLayout>
      <h3 className="cont_tit">검사종류</h3>
      <div className="con_area">
        <div className="in_cont_sec2">
          <div className="in_cont_tit2">
            <strong>채용 신체검사</strong>
            <span className="disc">채용신체검사 건강진단서 (단, 경찰 소방공무원 채용 진행안함)</span>
          </div>
          <div className="h_table box_table mt30">
            <table>
              <caption>채용 신체검사표</caption>
              <colgroup>
                <col style={{ width: '30%', maxWidth: '312px' }} />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th>용도</th>
                  <td className="t_left">공무원 (ex. 시청, 학교, 유치원 제출)</td>
                </tr>
                <tr>
                  <th>검사항목</th>
                  <td className="t_left">
                    신체계측 (신장,체중,혈압,허리둘레,시력,색신,청력검사) <br />
                    일반혈액검사, 요검사, 흉부x-선 검사, B형간염, 문진상담
                  </td>
                </tr>
                <tr>
                  <th>비용</th>
                  <td className="t_left">추가항목이나 서류 양식에 따라 달라질 수 있으므로 전화로 문의</td>
                </tr>
                <tr>
                  <th>준비물 및 유의사항</th>
                  <td className="t_left">
                    ※ 신분증, 반명함판 사진 1장 (최근 6개월 이내 촬영) 꼭 지참하셔야합니다. <br />
                    ※ 안경이나 렌즈 착용하시는 분은 반드시 착용 후 방문 <br />
                    ※ 검사 3일 전부터 금주하셔야합니다. <br />
                    ※ 검사 전 8시간 이상 금식하셔야합니다. (물, 사탕, 껌, 음료수 등 섭취 불가)
                  </td>
                </tr>
                <tr>
                  <th>기타</th>
                  <td className="t_left">
                    ※ 예약으로 진행이 되나 당일검사 진행 원활 시 대기시간이 발생할 수 있습니다. <br />
                    ※ 결과지는 3일(휴일 제외) 후 수령 가능하나 결과에 따라 지연될 수 있습니다. <br />
                    ※ 공무원 채용 시 반드시 본인수령하시기 바랍니다.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="in_cont_sec2">
          <div className="in_cont_tit2">
            <strong>일반 건강진단서</strong>
          </div>
          <div className="h_table box_table mt30">
            <table>
              <caption>일반 신체검사표</caption>
              <colgroup>
                <col style={{ width: '30%', maxWidth: '312px' }} />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th>용도</th>
                  <td className="t_left">일반회사 입사용</td>
                </tr>
                <tr>
                  <th>검사항목</th>
                  <td className="t_left">
                    신체계측 (신장,체중,혈압,허리둘레,시력,색신,청력검사) <br />
                    일반혈액검사, 요검사, 흉부x-선 검사, B형간염, 문진상담
                  </td>
                </tr>
                <tr>
                  <th>비용</th>
                  <td className="t_left">추가항목이나 서류 양식에 따라 달라질 수 있으므로 전화로 문의</td>
                </tr>
                <tr>
                  <th>준비물 및 유의사항</th>
                  <td className="t_left">
                    ※ 신분증, 반명함판 사진 1장 (최근 6개월 이내 촬영) 꼭 지참하셔야합니다. <br />
                    ※ 안경이나 렌즈 착용하시는 분은 반드시 착용 후 방문 <br />
                    ※ 검사 3일 전부터 금주하셔야합니다. <br />
                    ※ 검사 전 8시간 이상 금식하셔야합니다. (물, 사탕, 껌, 음료수 등 섭취 불가)
                  </td>
                </tr>
                <tr>
                  <th>기타</th>
                  <td className="t_left">
                    ※ 예약으로 진행이 되나 당일검사 진행 원활 시 대기시간이 발생할 수 있습니다. <br />
                    ※ 결과지는 3일(휴일 제외) 후 수령 가능하나 결과에 따라 지연될 수 있습니다.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="in_cont_sec2">
          <div className="in_cont_tit2">
            <strong>건강진단서(면허발급용)</strong>
          </div>
          <div className="h_table box_table mt30">
            <table>
              <caption>건강진단서(면허발급용)표</caption>
              <colgroup>
                <col style={{ width: '30%', maxWidth: '312px' }} />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th>용도</th>
                  <td className="t_left">일반회사 입사용</td>
                </tr>
                <tr>
                  <th>검사항목</th>
                  <td className="t_left">
                    흉부x-선 검사, 요검사(TBPE 정성), 문진상담
                  </td>
                </tr>
                <tr>
                  <th>준비물 및 유의사항</th>
                  <td className="t_left">
                    ※ 신분증 꼭 지참하셔야합니다. <br />
                    ※ 검사 3일 전부터 금주하십시오. <br />
                    ※ 검사 전 8시간 이상 급식하셔야합니다. (물, 사탕, 껌, 음료수 등 섭취 불가) <br />
                    ※ 에페드린 성분이 포함된 약, 음료 검사 전 2주일(14일) 동안 복용을 금지하셔야합니다. <br />
                    ※ 면허별 건강진단서 문구가 상이하므로 반드시 본인확인이 필요합니다.
                  </td>
                </tr>
                <tr>
                  <th>기타</th>
                  <td className="t_left">
                    ※ 예약으로 진행이 되나 당일검사 진행 원활 시 대기시간이 발생할 수 있습니다. <br />
                    ※ 결과지는 3일(휴일 제외) 후 수령 가능하나 결과에 따라 지연될 수 있습니다.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="in_cont_sec2">
          <div className="in_cont_tit2">
            <strong>운전면허 건강진단서</strong>
          </div>
          <div className="h_table box_table mt30">
            <table>
              <caption>운전면허 건강진단서표</caption>
              <colgroup>
                <col style={{ width: '30%', maxWidth: '312px' }} />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th>용도</th>
                  <td className="t_left">운전면허의 신규, 갱신이 필요한 경우 시행되는 신체검사</td>
                </tr>
                <tr>
                  <th>검사항목</th>
                  <td className="t_left">계측검사 (시력,색신,청력)</td>
                </tr>
                <tr>
                  <th>비용</th>
                  <td className="t_left">5,000원</td>
                </tr>
                <tr>
                  <th>준비물 및 유의사항</th>
                  <td className="t_left">
                    ※ 신분증 혹은 운전면허증, 반명함판 사진 (신규 3매, 갱신 2매 / 최근 6개월 이내 촬영) 꼭 지참하셔야합니다. <br />
                    ※ 안경이나 렌즈 착용하시는 분은 반드시 착용 후 방문
                  </td>
                </tr>
                <tr>
                  <th>기타</th>
                  <td className="t_left">
                    ※ 결과지는 당일수령 가능합니다. <br />
                    ※ 예약 없이 당일검사 가능하나 대기시간이 발생할 수 있습니다. <br />
                    ※ 검사시간은 약 20분 소요됩니다. <br />
                    ※ 매주 월요일~금요일 4시 이전, 토요일 12시 이전까지 가능합니다.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="in_cont_sec2">
          <div className="in_cont_tit2">
            <strong>기타 건강진단서</strong>
          </div>
          <p className="t_primary2">※ 검사별 준비사항이 상이하므로 반드시 내원 전 문의하시기 바랍니다.</p>
          <p className="in_cont_txt2">- 외국인 검진 (H-2, E-2, E-9 등 체류자격에 따른 검사)
            <span className="t_red txt_disc">여권, 외국인등록증(사증발급확인서), 반명함판 사진 1매(최근 6개월 이내 촬영)</span>
          </p>
          <p className="in_cont_txt2">- 국제 결혼 관련 검사
            <span className="t_red txt_disc">여권, 반명함판 사진 1매(최근 6개월 이내 촬영)</span>
          </p>
          <p className="in_cont_txt2">- 기숙사 검진</p>
          <p className="in_cont_txt2">- 방사선 종사자 검진</p>
          <p className="in_cont_txt2">- 요양원 입소용 검사</p>
          <p className="in_cont_txt2">- 결핵진단서(C-3)</p>
        </div>
      </div>
    </WellSubPageLayout>
  )
}