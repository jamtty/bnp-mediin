filepath = r'd:\작업\형\메디인병원\apps\src\pages\department\SpecialCenterDetailPage.tsx'

with open(filepath, encoding='utf-8') as f:
    content = f.read()

# ===== 검진센터 섹션 React 변환 =====
start_marker = "      {/* ===== 검진센터 ===== */}\n      {code === 'checkup' && ("
start_idx = content.find(start_marker)
print(f"checkup start: {start_idx}")

new_checkup = """      {/* ===== 검진센터 ===== */}
      {code === 'checkup' && (
        <div className="con_area">
          <div className="tab_area">
            <button
              type="button"
              className={`btn_tab${activeTab === 'tab01' ? ' active_tab' : ''}`}
              onClick={() => setActiveTab('tab01')}
            >
              <span>진료과 소개</span>
            </button>
            <button
              type="button"
              className={`btn_tab${activeTab === 'tab02' ? ' active_tab' : ''}`}
              onClick={() => setActiveTab('tab02')}
            >
              <span>의료진 소개</span>
            </button>
          </div>

          {/* 탭01: 진료과 소개 */}
          <div className={`cont_area${activeTab === 'tab01' ? ' active_cont' : ''}`} id="tab01">
            <div className="emergency_sec">
              <p className="info_tit">검진센터</p>
              <p className="info_disc">
                메디인병원 건강증진센터는 편안하고 쾌적한 환경 속에 최신의 장비를 도입하여 환자분들의 다양한 요구를 만족시킬 수 있는 검진 프로그램을 고객님들께 실시하고 있습니다.
              </p>
            </div>
            <div className="emergency_sec">
              <p className="info_tit">검진센터 진료분야</p>
              <ul className="info_disc dot_list3">
                <li>국민건강보험공단 건강검진</li>
                <li>종합검진</li>
                <li>정밀검진(암, 뇌, 심장, 호흡기)</li>
              </ul>
            </div>
          </div>

          {/* 탭02: 의료진 소개 */}
          <div className={`cont_area${activeTab === 'tab02' ? ' active_cont' : ''}`} id="tab02">
            <div className="medical_staff_list">
              <div className="medical_staff">
                <div className="ms_thumb"><img src="/resource/images/hpcenter/ms_1.jpg" alt="김민주 진료과장" /></div>
                <div className="ms_cont">
                  <div className="ms_tit">
                    <strong className="name">김민주</strong>
                    <span className="major">진료과장</span>
                  </div>
                  <dl>
                    <dt>약력</dt>
                    <dd>
                      <ul>
                        <li>부산대학교 의학전문대학원 졸업</li>
                        <li>부산대학교 병원 인턴</li>
                        <li>인천비아뜨의원 검진의</li>
                      </ul>
                    </dd>
                  </dl>
                  <button type="button" onClick={() => (window as any).popView('medical_staff_detail01')}>
                    <i className="ico_calendar"></i>
                    <span>진료시간표</span>
                  </button>
                </div>
              </div>

              <div className="medical_staff">
                <div className="ms_thumb"><img src="/resource/images/hpcenter/ms_2.png" alt="김선미 진료과장" /></div>
                <div className="ms_cont">
                  <div className="ms_tit">
                    <strong className="name">김선미</strong>
                    <span className="major">진료과장</span>
                  </div>
                  <dl>
                    <dt>약력</dt>
                    <dd>
                      <ul>
                        <li>한양대학교 의과대학 졸업</li>
                        <li>한일병원 영상의학과 과장</li>
                        <li>대한초음파 학회 정회원</li>
                      </ul>
                    </dd>
                  </dl>
                  <button type="button" onClick={() => (window as any).popView('medical_staff_detail02')}>
                    <i className="ico_calendar"></i>
                    <span>진료시간표</span>
                  </button>
                </div>
              </div>

              <div className="medical_staff">
                <div className="ms_thumb"><img src="/resource/images/hpcenter/ms_kjh.jpg" alt="권재현 진료과장" /></div>
                <div className="ms_cont">
                  <div className="ms_tit">
                    <strong className="name">권재현</strong>
                    <span className="major">진료과장</span>
                  </div>
                  <dl>
                    <dt>약력</dt>
                    <dd>
                      <ul>
                        <li>경북대학교 졸업</li>
                        <li>경북대학교 전공의</li>
                        <li>서울아산병원 전임의</li>
                        <li>동국대 일산병원 영상의학과 교수</li>
                      </ul>
                    </dd>
                  </dl>
                  <button type="button" onClick={() => (window as any).popView('medical_staff_detail03')}>
                    <i className="ico_calendar"></i>
                    <span>진료시간표</span>
                  </button>
                </div>
              </div>

              <div className="medical_staff">
                <div className="ms_thumb"><img src="/resource/images/hpcenter/ms_lew.jpg" alt="이은우 진료과장" /></div>
                <div className="ms_cont">
                  <div className="ms_tit">
                    <strong className="name">이은우</strong>
                    <span className="major">진료과장</span>
                  </div>
                  <dl>
                    <dt>약력</dt>
                    <dd>
                      <ul>
                        <li>인제대의대졸업</li>
                        <li>인제대학교일산백병원 외과전문의</li>
                        <li>국립암센터 대장암센터 내시경아카데미 전임의</li>
                      </ul>
                    </dd>
                  </dl>
                  <button type="button" onClick={() => (window as any).popView('medical_staff_detail05')}>
                    <i className="ico_calendar"></i>
                    <span>진료시간표</span>
                  </button>
                </div>
              </div>

              <div className="medical_staff">
                <div className="ms_thumb"><img src="/resource/images/hpcenter/ms_lch.jpg" alt="이창훈 진료과장" /></div>
                <div className="ms_cont">
                  <div className="ms_tit">
                    <strong className="name">이창훈</strong>
                    <span className="major">진료과장</span>
                  </div>
                  <dl>
                    <dt>약력</dt>
                    <dd>
                      <ul>
                        <li>가톨릭관동대학교 의학과 졸업</li>
                        <li>보라매 서울대병원 소화기내과 전임의</li>
                        <li>vic365의원,한강연세병원,박원종내과의원 검진내과</li>
                      </ul>
                    </dd>
                  </dl>
                  <button type="button" onClick={() => (window as any).popView('medical_staff_detail06')}>
                    <i className="ico_calendar"></i>
                    <span>진료시간표</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </SubPageLayout>
  )
}"""

if start_idx == -1:
    print("Start marker not found!")
else:
    new_content = content[:start_idx] + new_checkup
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Done!")

import sys; sys.exit(0)


start_marker = "      {/* ===== 척추센터 ===== */}\n      {code === 'spine' && ("
end_marker = "      {/* ===== 관절센터 ===== */"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

new_spine_section = """      {/* ===== 척추센터 ===== */}
      {code === 'spine' && (
        <div className="con_area">
          <div className="tab_area">
            <button
              type="button"
              className={`btn_tab${activeTab === 'tab01' ? ' active_tab' : ''}`}
              onClick={() => setActiveTab('tab01')}
            >
              <span>진료과 소개</span>
            </button>
            <button
              type="button"
              className={`btn_tab${activeTab === 'tab02' ? ' active_tab' : ''}`}
              onClick={() => setActiveTab('tab02')}
            >
              <span>의료진 소개</span>
            </button>
          </div>

          {/* 탭01: 진료과 소개 */}
          <div className={`cont_area${activeTab === 'tab01' ? ' active_cont' : ''}`} id="tab01">
            <div className="emergency_sec">
              <p className="info_tit">척추센터</p>
              <p className="info_disc">
                척추 질환은 매우 흔하며 지속적인 관리가 필요한 질환입니다. 메디인병원에서는 척추비수술센터도 운영하며 환자 케이스에 따라 다양한 치료법을 제시하여 최적의 치료를
                시행합니다.
              </p>
              <div className="in_cont_sec">
                <p className="in_cont_tit">척추센터 정밀검사</p>
                <ol className="num_list">
                  <li>
                    <p className="strong">컴퓨터단층촬영(CT)</p>
                    <p className="disc">CT란 Computed Tomography의 약어로 X-선을 투과시켜 그 흡수 차이를 컴퓨터로 재구성하여 인체의 단면
                      영상을 얻거나 3차원 입체영상을 얻는 영상진단법입니다. 5mm 이하의 아주 작은 밀도 차이를 구별할 수 있어, 질병의 조기진단과 그 구성 성분도
                      확인할 수 있습니다.</p>
                  </li>
                  <li>
                    <p className="strong">자기공명영상검사(MRI)</p>
                    <p className="disc">
                      MRI란 Magnetic Resonance Imaging의 약어로 방사선이 아닌 자기장을 이용하여 인체 내의 영상 정보를 얻는 첨단 영상
                      검사법입니다. MRI는 이온화 방사선이 아니므로 인체에 무해하고, 3D 영상화가 가능하며 컴퓨터단층촬영(CT)에 비해 해상도가 더 뛰어나 다방향
                      검사 및 정밀진단 검사가 가능합니다.
                    </p>
                  </li>
                  <li>
                    <p className="strong">적외선 체열검사(DITI)</p>
                    <p className="disc">
                      DITI란 Digital Infrared Thermal Imaging의 약어로 인체로부터 방출되는 눈에 보이지 않는 극미량의 열을 적외선으로
                      감지하여 통증이 있는 부위나 질병 부위의 미세한 체온 변화로 이상 유무를 진단하는 검사법입니다. 몸에서 나오는 적외선을 감지하는 방식의
                      검사법이기에 비침습적이고 통증이 없는 검사법입니다. 해부학적, 구조적 이상만 볼 수 있는 다른 검사와 상이하게 신경 손상과 염증 또는 순환장애와
                      같은 생리학적 상태를 진단하는 방법이기 때문에 다른 검사와 병행하여 복합적인 진단이 가능합니다.
                    </p>
                  </li>
                  <li>
                    <p className="strong">근전도검사(EMG)</p>
                    <p className="disc">
                      EMG는 Electromyography의 약어로 신경과 근육에서 발생하는 전기적 신호를 기계를 통해 분석해 말초신경이나 신경 주변 및 근육의
                      이상이 있는지 보기 위한 검사입니다. 근전도 검사에는 바늘로 근육을 찔러 시행하는 근육 내 침근전도 검사와 피부에 전극을 붙여 검사하는 표면
                      근전도 검사가 있습니다. 근육이나 신경의 어느 부위가 손상을 받았으며, 또 그 범위가 어느 정도인지, 질병이 호전되고 있는지, 악화되고 있는지를
                      판별하여 질병의 현상태와 예후를 평가하기 위해 시행됩니다. 신경학적으로 손, 발이 저린 증상이 있거나 근육통, 근력 약화, 안면마비 등의 증상이
                      있을 경우 시행하게 됩니다.
                    </p>
                  </li>
                </ol>
              </div>
              <div className="in_cont_sec">
                <p className="in_cont_tit">비수술치료</p>
                <ol className="num_list">
                  <li>
                    <p className="strong">경막 외 신경차단술</p>
                    <p className="disc">
                      디스크 옆쪽으로 영상증폭장치를 이용해 경막 외 부분에 주삿바늘을 위치시켜주고 신경마취제, 스테로이드, 유착박리제 등을 섞은 약물을 주사해 신경에
                      스며들도록 하여 신경 주변의 부종을 완화해 주고, 통증을 줄여주는 치료 방법입니다.
                    </p>
                    <div className="in_dash_box">
                      <dl>
                        <dt>가. 적응가능 질환</dt>
                        <dd>
                          추간판 탈출증(수핵탈출증, 일명 디스크 질환) <br />
                          척추관협착증<br />
                          초기 척추 전방 전위증<br />
                          대상포진 후 신경통,근육통<br />
                          수술 후 남아있는 요통과 하지 통증, 일자목으로 인한 목 통증 등
                        </dd>
                      </dl>
                    </div>
                  </li>
                  <li className="mt50">
                    <p className="strong">선택적 신경 차단술</p>
                    <p className="disc">
                      척추의 중심 신경에서 빠져나와 허리 통증을 유발하는 문제 신경을 찾아 염증을 억제시키는 스테로이드 약물을 섞어 주사하는 치료법입니다. 척추 내에
                      주사하는 기존 주사 통증 치료와 달리 영상증폭장치를 이용해 머리카락처럼 가는 신경 부위를 하나씩 찾아내 선택적으로 치료하므로 안전하고 치료
                      효과가 뛰어납니다. 특히 치료가 어려운 '추간공(옆구리) 협착증'이나 '추간공 디스크'같은 질환에도 신경이 눌린 부위에 직접 약이 도달하기
                      때문에 경막 외 주사치료를 대체하는 효과적인 치료법입니다.
                    </p>
                    <div className="in_dash_box">
                      <dl>
                        <dt>가. 적응가능 질환</dt>
                        <dd>
                          좌골 신경통<br />
                          초기 척추 전방 전위증<br />
                          척추관협착증<br />
                          허리디스크,목디스크<br />
                          허리관절염
                        </dd>
                      </dl>
                    </div>
                  </li>
                  <li className="mt50">
                    <p className="strong">경막 외 신경성형술</p>
                    <p className="disc">
                      퇴행성 척추 병변에 대한 비수술적 치료방법의 하나로 디스크 탈출증이나 협착증 또는 척추 수술부위에 얇은 관을 꼬리뼈를 통해 삽입하여 병변 부위의
                      신경부종, 염증 및 유착을 제거하면서 약물을 투여하는 시술로 수술 없이 통증을 치료하는 방법입니다.
                    </p>
                    <div className="in_dash_box">
                      <dl>
                        <dt>가. 적응가능 질환</dt>
                        <dd>
                          추간판 탈출증(디스크)<br />
                          척추관협착증<br />
                          척추 수술 후 통증 증후군<br />
                          초기 척추 전방 전위증<br />
                          디스크 기원성 목통증/허리통증<br />
                          심장질환 등 기저질환으로 인해 수술이 불가능한 경우
                        </dd>
                      </dl>
                    </div>
                  </li>
                  <li className="mt50">
                    <p className="strong">척추관협착증 풍선확장술</p>
                    <p className="disc">
                      퇴행성 척추 병변에 대한 비수술적 치료 방법의 하나로서 척추관 협착증 또는 척추 수술을 받아서 유착이 심한 부위에 지름 1.7mm 정도의 얇은
                      관을 꼬리뼈 구멍을 통해 삽입하여 병변부위에 위치시킨 후 풍선을 부풀려 좁아진 신경 구멍을 넓혀줌으로써 신경부종, 염증 및 유착을 제거하면서
                      약물을 투여하는 시술입니다.
                    </p>
                    <div className="in_dash_box">
                      <dl>
                        <dt>가. 적응가능 질환</dt>
                        <dd>
                          척추관협착증<br />
                          척추 수술 후 통증 증후군<br />
                          초기 척추 전방 전위증<br />
                          경추, 요추 디스크 탈출증으로 인한 방사통<br />
                          심장질환 등 기저질환으로 인해 수술이 불가능한 경우
                        </dd>
                      </dl>
                    </div>
                  </li>
                  <li className="mt50">
                    <p className="strong">고주파 수핵감압술</p>
                    <p className="disc">
                      척추 병변에 대한 비수술적 치료 방법 중 하나로서 방사선 영상장치 유도 하 탈출된 디스크 내로 얇은 바늘을 삽입한 후 병변 부위를 확인하고
                      고주파 발생장치를 연결하여 고주파 열에너지를 가해 탈출 된 디스크의 크기를 감소시켜 신경 압박을 줄여주는 시술 방법입니다. 이로 인해 목 통증,
                      팔 통증 또는 허리통증, 다리 통증이 사라지게 되며, 국소마취 하에 시행하여 회복이 빠르고 일상복귀가 용이합니다. 최근 보고서에서는 수술적
                      치료와 차이가 없는 우수한 효용성이 증명되고 있습니다.
                    </p>
                    <div className="in_dash_box">
                      <dl>
                        <dt>가. 적응가능 질환</dt>
                        <dd>
                          경추 및 요추 디스크 탈출증<br />
                          만성디스크(경추,요추) 통증<br />
                          심장질환 등 기저질환으로 인해 수술이 불가능한 경우
                        </dd>
                      </dl>
                    </div>
                  </li>
                  <li className="mt50">
                    <p className="strong">경피적 척추성형술</p>
                    <p className="disc">
                      골절 부위에 방사선 조영하에 직경 3-4mm의 시술관을 삽입한 후 골 시멘트를 주입시켜 압박 골절된 척추체를 치료하는 시술입니다.
                    </p>
                    <div className="in_dash_box">
                      <dl>
                        <dt>가. 적응가능 질환</dt>
                        <dd>척추압박골절</dd>
                      </dl>
                    </div>
                  </li>
                  <li className="mt50">
                    <p className="strong">경피적 풍선척추성형술</p>
                    <p className="disc">
                      골절 부위의 척추체 높이를 증가시키기 위해 방사선 조영하에 직경 3-4mm 시술관을 이용하여 풍선을 삽입하고 그 공간에 골 시멘트를 주입시켜
                      압박 골절된 척추체를 치료하는 시술입니다.
                    </p>
                    <div className="in_dash_box">
                      <dl>
                        <dt>가. 적응가능 질환</dt>
                        <dd>척추압박골절</dd>
                      </dl>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* 탭02: 의료진 소개 */}
          <div className={`cont_area${activeTab === 'tab02' ? ' active_cont' : ''}`} id="tab02">
            <div className="medical_staff_list">
              <div className="medical_staff">
                <div className="ms_thumb"><img src={msLjm} alt="이제민 진료과장" /></div>
                <div className="ms_cont">
                  <div className="ms_tit">
                    <strong className="name">이제민 진료과장</strong>&nbsp;<span className="major">척추센터</span>
                  </div>
                  <dl>
                    <dt>약력</dt>
                    <dd>
                      <ul>
                        <li>정형외과 의학박사</li>
                        <li>단국대학교병원 정형외과 전임 부교수</li>
                        <li>단국대학교병원 권역외상센터 외상전담의</li>
                        <li>분당 서울대학교병원 척추 전임의</li>
                        <li>대한정형외과학회 정회원</li>
                        <li>대한척추외과학회 정회원</li>
                        <li>대한경추연구학회 정회원 (현직 인사위원장)</li>
                        <li>대한고관절학회 정회원</li>
                      </ul>
                    </dd>
                  </dl>
                  <button type="button" onClick={() => (window as any).popView('medical_staff_detail01')}>
                    <i className="ico_calendar"></i>
                    <span>진료시간표</span>
                  </button>
                </div>
              </div>

              <div className="medical_staff">
                <div className="ms_thumb"><img src={msKyd} alt="권용덕 진료과장" /></div>
                <div className="ms_cont">
                  <div className="ms_tit">
                    <strong className="name">권용덕 진료과장</strong>
                    <span className="major">척추센터</span>
                  </div>
                  <dl>
                    <dt>약력</dt>
                    <dd>
                      <ul>
                        <li>한양대학교 의과대학 졸업</li>
                        <li>한양대학교 마취통증의학과 전공의</li>
                        <li>고려대학교 마취통증의학과 전임의</li>
                        <li>세연마취통증의학과의원 부원장</li>
                        <li>서울고든병원 마취통증의학과 원장</li>
                        <li>대한통증학회 통증분과 인증의</li>
                        <li>대한통증학회 정회원</li>
                      </ul>
                    </dd>
                  </dl>
                  <button type="button" onClick={() => (window as any).popView('medical_staff_detail02')}>
                    <i className="ico_calendar"></i>
                    <span>진료시간표</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      """

new_content = content[:start_idx] + new_spine_section + content[end_idx:]

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Done! File written successfully.")
