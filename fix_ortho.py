with open(r'd:\작업\형\메디인병원\apps\src\pages\department\DeptDetailPage.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Add imports after msSsc
old_import = "import msSsc from '../../assets/images/ms_ssc.jpg'\n"
new_import = """import msSsc from '../../assets/images/ms_ssc.jpg'
import msKs from '../../assets/images/ms_ks.jpg'
import emergencyImg2113 from '../../assets/images/emergency_img2_1_13.png'
import thumb2113_1 from '../../assets/images/thumb2_1_13_1.png'
import thumb2113_2 from '../../assets/images/thumb2_1_13_2.png'
import thumb2113_3 from '../../assets/images/thumb2_1_13_3.png'
import thumb2113_4 from '../../assets/images/thumb2_1_13_4.png'
"""
content = content.replace(old_import, new_import, 1)

# Replace urology block
start_marker = "        {/* ===== 비뇨의학과 ===== */}"
end_marker = "\n        {/* ===== 신경통증클리닉 ===== */}"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

new_block = """        {/* ===== 비뇨의학과 ===== */}
        {code === 'MN02011300' && (
          <>
            <div className={activeTab === 'tab01' ? 'cont_area active_cont' : 'cont_area'}>
              <div className="emergency_sec">
                <p className="info_tit">비뇨의학과</p>
                <p className="info_disc">
                  비뇨의학과는 신장, 요관, 방관, 요도 등 소변에 관련된 장기와 전립선, 고환, 음경 등 생식기관 관련된 질환을 다루는 진료과입니다. <br />
                  비뇨의학과에서는 신장(腎臟)·수뇨관(輸尿管)·방광(膀胱) 및 요도(尿道) 등의 비뇨기관과 고환·전립선(前立腺)·음낭·음경 등의 남성 성기에 생기는 질환을
                  진료합니다.<br />
                  본원에서는 24시간 운영하는 응급실과 협조하여 초음파, 조영제 단층촬영 등의 검사를 통해 요관결석을 진단하여 체외충격파쇄석술로 결석을 분쇄, 제거하는 치료를
                  주로 하고 있으며 전신증상을 동반한 노인성 배뇨곤란, 신우신염, 전립선염 등의 질환은 신장내과와 협진하여 입원치료도 가능합니다. 다만, 수술 등 비뇨기외과적 진료는 하고 있지 않습니다.
                </p>
              </div>
              <div className="emergency_sec">
                <p className="info_tit">비뇨의학과 진료분야</p>
                <ul className="info_disc dot_list3">
                  <li>요로결석</li>
                  <li>배뇨곤란</li>
                  <li>요실금</li>
                  <li>전립선비대증 등</li>
                </ul>
              </div>
              <div className="emergency_sec">
                <p className="emergency_img"><img src={emergencyImg2113} alt="" /></p>
                <div className="in_cont_sec">
                  <div className="in_cont_imgarea">
                    <p className="in_cont_img_tit"><strong>[ESWL]</strong> 체외충격파쇄석기의 분쇄효과</p>
                    <ul className="imgarea2_2_5_2">
                      <li>
                        <p className="img"><img src={thumb2113_1} alt="" /></p>
                        <p className="name">시술 전 신장결석</p>
                      </li>
                      <li>
                        <p className="img"><img src={thumb2113_2} alt="" /></p>
                        <p className="name">시술 후 분쇄된 결석</p>
                      </li>
                      <li>
                        <p className="img"><img src={thumb2113_3} alt="" /></p>
                        <p className="name">시술 전 X선 사진</p>
                      </li>
                      <li>
                        <p className="img"><img src={thumb2113_4} alt="" /></p>
                        <p className="name">시술 후 X선 사진</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className={activeTab === 'tab02' ? 'cont_area active_cont' : 'cont_area'}>
              <div className="medical_staff_list">
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msKs} alt="김석" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">김석 원장</strong>
                      <span className="major">비뇨의학과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>한양대학교 의학대학원 박사</li>
                          <li>을지대학교 의과대학 외래교수</li>
                          <li>석비뇨기과 원장</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail01')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}"""

new_content = content[:start_idx] + new_block + content[end_idx:]

with open(r'd:\작업\형\메디인병원\apps\src\pages\department\DeptDetailPage.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Done!")

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

new_block = """        {/* ===== 정형외과 ===== */}
        {code === 'MN02010200' && (
          <>
            <div className={activeTab === 'tab01' ? 'cont_area active_cont' : 'cont_area'}>
              <div className="emergency_sec">
                <p className="info_tit">정형외과</p>
                <p className="info_disc">
                  정형외과는 몸을 구성하는 뼈, 혈관, 신경, 힘줄, 근육, 인대 등에 발생하는 질환이나 외상을 치료하는 진료과이며, 최근 빠른 고령화로 인한 퇴행성 관절 질환
                  등의 증가로 더욱이 더 중요시되고 있는 진료과입니다.
                </p>
              </div>
              <div className="emergency_sec">
                <p className="info_tit">정형외과 진료분야</p>
                <ul className="info_disc dot_list3">
                  <li>슬관절</li>
                  <li>고관절 퇴행성 관절염</li>
                  <li>무혈성괴사</li>
                  <li>인공관절 치환술</li>
                  <li>류마티스관절염</li>
                  <li>오십견</li>
                  <li>회전근개 파열</li>
                  <li>터널증후군</li>
                  <li>관절염</li>
                  <li>스포츠손상</li>
                  <li>골절 등</li>
                </ul>
              </div>
            </div>
            <div className={activeTab === 'tab02' ? 'cont_area active_cont' : 'cont_area'}>
              <div className="medical_staff_list">
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msKth} alt="권태형" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">권태형 원장</strong>
                      <span className="major">정형외과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>한양대학교 대학원 석/박사</li>
                          <li>대한정형외과 학회 평생회원</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail01')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msLsf} alt="이성필" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">이성필 원장</strong>
                      <span className="major">정형외과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>한양대학교병원 수부 및 상지외과 전임의</li>
                          <li>대한정형외과학회 정회원</li>
                          <li>대한견관절, 주관절학회 정회원</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail02')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msSwy} alt="서우영" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">서우영 외과계 진료부원장</strong>
                      <span className="major">정형외과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>한양대학교병원 정형외과 임상교수</li>
                          <li>원주 성지병원 관절센터 과장</li>
                          <li>대한족부관절학회 기획위원</li>
                          <li>대한관절경학회 정회원</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail03')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msJih} alt="주일한" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">주일한 진료과장</strong>
                      <span className="major">정형외과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>한양대학교병원 견주관절 / 수부 전임의</li>
                          <li>한양대학교병원 정형외과 외래교수</li>
                          <li>대한견주관절의학회 정회원</li>
                          <li>대한수부외과학회 정회원</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail04')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msLjhO} alt="이재호" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">이재호 진료과장</strong>
                      <span className="major">정형외과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>한양대학교병원 외상 및 하지외과 전임의 수료</li>
                          <li>한양대학교병원 정형외과 외래교수</li>
                          <li>대한슬관절학회 정회원</li>
                          <li>대한골절학회 정회원</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail05')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msLjm} alt="이제민" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">이제민 진료과장</strong>
                      <span className="major">정형외과</span>
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
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail07')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msCsh} alt="최시훈" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">최시훈 진료과장</strong>
                      <span className="major">정형외과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>정형외과 의학박사</li>
                          <li>스포츠의학 인증전문의</li>
                          <li>한양대학교병원 외상 및 하지외과 전임의 수료</li>
                          <li>한양대학교병원 정형외과 외래교수</li>
                          <li>대한정형외과학회 정회원</li>
                          <li>대한스포츠의학회 정회원</li>
                          <li>대한골절학회 정회원</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail08')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
                <div className="medical_staff">
                  <div className="ms_thumb"><img src={msSsc} alt="신성철" /></div>
                  <div className="ms_cont">
                    <div className="ms_tit">
                      <strong className="name">신성철 진료과장</strong>
                      <span className="major">정형외과</span>
                    </div>
                    <dl>
                      <dt>약력</dt>
                      <dd>
                        <ul>
                          <li>세브란스병원 인공관절 및 관절경 전임의</li>
                          <li>연세대학교 의과대학 세브란스병원 외래교수</li>
                          <li>대한슬관절학회 정회원</li>
                          <li>대한정형외과 스포츠의학회 정회원</li>
                          <li>2025 ISAKOS (국제 관절경·스포츠의학회) 구연발표</li>
                        </ul>
                      </dd>
                    </dl>
                    <button type="button" onClick={() => (window as any).popView?.('medical_staff_detail09')}>
                      <i className="ico_calendar"></i>
                      <span>진료시간표</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}"""

new_content = content[:start_idx] + new_block + content[end_idx:]

with open(r'd:\작업\형\메디인병원\apps\src\pages\department\DeptDetailPage.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Done!")
