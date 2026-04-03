import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'
import msLjm from '../../assets/images/ms_ljm.jpg'
import msKyd from '../../assets/images/ms_kyd.jpg'
import msKth from '../../assets/images/ms_kth.jpg'
import msSwy from '../../assets/images/ms_swy.jpg'
import msJih from '../../assets/images/ms_jih.jpg'
import msLjh from '../../assets/images/ms_ljh.jpg'
import msKjh from '../../assets/images/ms_kjh.jpg'
import msLhw from '../../assets/images/ms_lhw.jpg'
import msLhc from '../../assets/images/ms_lhc.jpg'
import noImg from '../../assets/images/no_img.jpg'

const centerNames: Record<string, string> = {
  cardiovascular:   '심혈관센터',
  'spine-nonsurgery': '척추비수술센터',
  spine:            '척추센터',
  joint:            '관절센터',
  arthroplasty:     '인공관절센터',
  checkup:          '검진센터',
}

const centerThirdItems = Object.entries(centerNames).map(([code, name]) => ({
  label: name,
  to: `/department/special/${code}`,
}))

export default function SpecialCenterDetailPage() {
  const { code } = useParams<{ code: string }>()
  const [activeTab, setActiveTab] = useState('tab01')
  const centerName = code ? centerNames[code] : undefined

  useEffect(() => {
    setActiveTab('tab01')
  }, [code])

  if (!centerName) {
    return (
      <SubPageLayout
        visualClass="vs2"
        visualTitle="진료과안내"
        contentsClass="sub02"
        lnbItems={lnbItems}
      >
        <h3 className="cont_tit">특수센터소개</h3>
        <div className="con_area">
          <p>해당 센터 정보를 찾을 수 없습니다.</p>
          <Link to="/department/special">특수센터 목록으로 돌아가기</Link>
        </div>
      </SubPageLayout>
    )
  }

  return (
    <SubPageLayout
      visualClass="vs2"
      visualTitle="진료과안내"
      contentsClass="sub02"
      lnbItems={lnbItems}
      thirdLevelLabel={centerName}
      thirdLevelItems={centerThirdItems}
    >
      <h3 className="cont_tit">{centerName}</h3>

      {/* ===== 심혈관센터 ===== */}
      {code === 'cardiovascular' && (
        <div className="con_area">
          <div className="emergency_sec first_sec">
            <p className="info_tit">심혈관센터</p>
            <p className="info_disc">
              메디인 병원 심장혈관 센터는 급성심근경색을 포함한 심혈관 질환의 치료를 위하여 전문진료체계를 운영합니다. <br />
              심장내과 전문의가 심혈관질환의 조기치료, 예방 및 재활까지 심혈관질환 전 주기에 걸쳐 체계적인 서비스를 제공하며, 이를 통하여 심혈관 환자의 사망률과 합병증의 발병을
              최소화합니다.
            </p>
            <div className="in_cont_sec">
              <p className="in_cont_tit">심혈관 정밀검사</p>
              <ol className="num_list">
                <li>
                  <p className="strong">심전도 검사</p>
                  <p className="disc">심방과 심근이 흥분되고 회복되는 동안 심장에서는 전류가 생기는데 이것을 체표면에 부착한 전극을 통해 유도하며 심전도계로
                    기록한 곡선이 심전도 입니다. <br />
                    이 검사는 심방 및 심실의 비대, 심근경색증, 부정맥, 심낭염, 약물의 영향, 전해질대사의 이상(칼륨, 칼슘 등), 인공심박조율기의 기능 등에
                    진단적 가치가 있는 비관혈적 검사로
                    심장병 환자에서 기본적으로 시행됩니다.</p>
                </li>
                <li>
                  <p className="strong">심장 초음파 검사</p>
                  <p className="disc">초음파를 이용하여 심장을 직접 들여다 보고 심장 안의 질환이나 이상을 알아낼 수 있는 검사입니다.<br />
                    심초음파 기계의 탐촉자를 환자의 가슴부위에 대면 기계의 화면상에서 움직이는 심장을 볼 수 있습니다. 심장의 모양 및 움직임을 관찰하고 혈류의
                    흐름을 평가함으로써
                    관동맥 질환의 진단에 매우 유용합니다.</p>
                </li>
                <li>
                  <p className="strong">운동부하 검사</p>
                  <p className="disc">가슴에 전극을 부착한 후 트레드밀(벨트)에서 운동을 실시, 그 단계별로 심전도등의 변화를 관찰하여 협심증, 부정맥,
                    운동능력을 포함한 심장기능 등을 평가하는 검사입니다.</p>
                </li>
                <li>
                  <p className="strong">혈압 검사 (24시간 BP monitoring)</p>
                  <p className="disc">하루 동안 일상생활을 하면서 혈압의 변화를 측정하는 검사입니다. 휴대용 혈압 측정 기기를 팔 위쪽에 부착하고 기기가
                    15~30분 간격으로 자동으로 혈압을 측정합니다.<br />
                    기기를 착용하는 동안 일과표를 작성해야 하며, 부착 다음 날에 기기를 제거하고 결과를 확인합니다.</p>
                </li>
                <li>
                  <p className="strong">기립경사 검사</p>
                  <p className="disc">기립경사 검사란 평소 건강해 보이는 사람이 갑자기 심한 어지러운 증상을 느끼거나 의식을 잃고 쓰러지는데 저절로 회복되는
                    경우가 있습니다.<br />
                    이는 체내, 외부의 자극에 대한 자율신경계의 급격한 변화에 의해 발생하는 심장신경성 실신을 진단하기 위해 실시하는 검사입니다.</p>
                </li>
              </ol>
            </div>
            <div className="in_cont_sec">
              <p className="in_cont_tit">진단 및 치료</p>
              <ol className="num_list">
                <li>
                  <p className="strong">심혈관 조영술</p>
                  <p className="disc">관상동맥질환으로 인한 흉통, 실신, 호흡곤란 등이 발생하였다고 생각되는 경우에 관상동맥질환을 확진하는 가장 정확한
                    검사이며, 향후 치료법을 결정하는데 아주 중요한 검사입니다.<br />
                    심혈관 조영술은 대부분의 심장 질환을 진단하고 심장의 기능 및 형태에 관해 정확하고 자세한 정보를 제공합니다.</p>
                  <div className="list_in_sec">
                    <dl>
                      <dt>- 검사방법은</dt>
                      <dd>
                        1) 팔에 있는 요골동맥이나 다리의 대퇴동맥에 바늘구멍을 만들어 도관 삽입관을 삽입하고 <br />
                        2) 도관이라는 긴 관을 관상동맥(심장에 피를 공급하는 혈관)입구에 위치시켜서,<br />
                        3) 조영제라는 약물을 관상 동맥 내로 주입하여 촬영을 한 후 혈관의 막힌 정도, 혈관의 형태, 이상유무를 확인합니다.<br />
                        동맥에 바늘 구멍을 만들 때 조금 뻐근한 통증을 느끼게 됩니다. 그러나 국소 마취제를 주입하고 시술을 하기 때문에 검사가 많이
                        힘들지는 않습니다.<br />
                        검사 시간은 15-30분 정도이며 길어도 1시간을 넘지 않습니다.
                      </dd>
                    </dl>
                    <dl>
                      <dt>- 검사 후에는</dt>
                      <dd>대퇴 동맥을 이용해 검사하여 검사하는 경우 6시간 정도 누워 있어야 하고 특히 혈관을 넓히는 중재술 후에는 약 12시간 정도 누워
                        있어야 하는 불편감이 있으나<br />
                        최근에는 다양한 지혈기구를 이용하여 누워 있는 시간을 최소화 할 수 있게 되었습니다.<br />
                        그리고 팔 동맥을 통하여 검사하는 경우에는 당일퇴원도 가능합니다.</dd>
                    </dl>
                    <dl>
                      <dt>- 검사합병증은</dt>
                      <dd>조영제라는 약물에 두드러기, 오심, 구토, 저혈압 등 알레르기반응이 있을 수 있습니다. 중풍이나 심근 경색, 응급 수술과 같은
                        심각한 합병증이 아주 드물게 발생하기도 합니다.</dd>
                    </dl>
                  </div>
                </li>
                <li>
                  <p className="strong">관상동맥 풍선확장술</p>
                  <p className="disc">관상동맥 조영술에서 50%이상 지름이 좁아져 있는 경우, 단면적 혈류로 보면 75%이상 절대 혈류가 감소되어 있으면서
                    객관적인 심근 허혈의 증거가 동반되어 있는 경우 시행 할 수 있습니다.<br />
                    혈관 속으로 카테터를 넣고 관 안으로 조영제를 주입하면서 투시장치를 통해 막혀 있는 관상동맥까지 도달시킵니다.<br />
                    그 뒤 풍선을 부풀려 동맥경화반을 혈관 벽에 압착시키면 혈관 통행로가 넓어지고 혈액 순환이 원활해집니다.</p>
                </li>
                <li>
                  <p className="strong">관상동맥 스텐트 삽입술</p>
                  <p className="disc">스텐트 삽입술은 풍선확장술 중에 일어 날 수 있는 혈관의 갑작스런 폐쇄증세 및 풍선 확장술 후의 재협착 방지를 위한 1차적
                    치료 방법으로 사용되고 있습니다.<br />
                    최근에는 약물도포 스텐트가 개발되어 상용화 되고 있으며, 이는 재협착률을 현저히 감소 시키고 있습니다.<br />
                    따라서 비수술적인 스텐트 삽입술은 협심증 및 심근경색증 치료에 그 효과를 인정받아 보편화되고 있다고 볼 수 있습니다.</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      )}

      {/* ===== 척추비수술센터 ===== */}
      {code === 'spine-nonsurgery' && (
        <div className="con_area">
          <div className="emergency_sec first_sec">
            <p className="info_tit">척추비수술센터</p>
            <p className="info_disc">
              척추 질환은 매우 흔하며 통증이 심하여 지속적인 관리가 필요한 질환입니다. <br />
              메디인 병원에서는 척추비수술센터를 운영하며 환자 케이스에 따라 다양한 치료법을 제시하여 최적을 치료를 시행합니다.
            </p>
            <div className="in_cont_sec">
              <p className="in_cont_tit">비수술치료</p>
              <ol className="num_list">
                <li>
                  <p className="strong">경막의 신경성형술(유착박리술)</p>
                  <p className="disc">퇴행성 척추 병변에 대한 비수술적 치료방법의 한로 디스크 탈출증이나 협착증 또는 척추 수술부위에 얇은 관을 꼬리뼈를 통해
                    삽입하여 병변, 부위의 신경부종, 염증 및 유착을 제거하면서 약물을 투여하는 시술로
                    입원할 필요없이, 수술없이 통증을 치료하는 방법입니다. </p>
                  <div className="in_dash_box">
                    <dl>
                      <dt>가. 적응가능 질환</dt>
                      <dd>추간판 탈출증(디스크) <br />
                        척추관 협착증<br />
                        척추수술 후 통증 증후군<br />
                        척추 전방 전위증<br />
                        디스크 기원성 목통증/ 허리통증<br />
                        심장질환 등 기저질환으로 인해 수술이 불가능한 경우</dd>
                    </dl>
                  </div>
                </li>
                <li className="mt50">
                  <p className="strong">척추관협착증 풍선확장술</p>
                  <p className="disc">퇴행성 척추 병변에 대한 비수술적 치료 방법의 하나로서 척추관 협착증 또는 척추 수술을 받아서 유착이 심한 부위에 지름
                    1.7mm 정도의 얇은 관을 꼬리뼈 구멍을 통해 삽입하여
                    병변부위에 위치시킨 후 풍선을 부풀려 좁아진 신경 구멍을 넓혀줌으로써 신경부종, 염증 및 유착을 제거하면서 약물을 투여하는 시술입니다.</p>
                  <div className="in_dash_box">
                    <dl>
                      <dt>가. 적응가능 질환</dt>
                      <dd>척추관협착증<br />
                        척추 수술 후 통증 증후군<br />
                        척추 전방전위증<br />
                        경추, 요추 디스크 탈출증으로 인한 방사통<br />
                        심장질환등 기저질환으로 인해 수술이 불가능한 경우
                      </dd>
                    </dl>
                  </div>
                </li>
                <li className="mt50">
                  <p className="strong">고주파 수핵감압술</p>
                  <p className="disc">척추 병변에 대한 비수술적 치료 방법 중 하나로서 방사선 영상장치 유도 하 탈출된 디스크 내로 얇은 바늘을 삽입한 후 병변
                    부위를 확인하고 고주파 발생장치를 연결하여
                    고주파 열에너지를 가해 탈출 된 디스크를 제거하고 크기를 감소시켜 신경 압박을 제거하는 시술 방법입니다. 이로 인해 팔 통증 또는 다리 통증이
                    사라지게 됩니다.</p>
                  <div className="in_dash_box">
                    <dl>
                      <dt>가. 적응가능 질환</dt>
                      <dd>경추 및 요추 디스크 탈출증<br />
                        만성디스크(경추, 요추) 통증<br />
                        심장질환등 기저질환으로 인해 수술이 불가능한 경우
                      </dd>
                    </dl>
                  </div>
                </li>
                <li className="mt50">
                  <p className="strong">플라즈마 디스크 성형술</p>
                  <p className="disc">척추 병변에 대한 비수술적 치료 방법 중 하나로서 국수마취후 조금 굵은 바늘 두께의 기구를 통증의 원인인 디스크 안으로
                    삽입하여 시행하며, <br />
                    저온에서 고주파로 만든 고밀도 이온화장이 디스크내의 수핵분자를 빠르게 분해하여 디스크의 돌출을 줄여줍니다.<br />
                    국소마취하에 시행하여 회복이 빠르고 일상복귀가 용이합니다. 최근 보고에서는 수술적 치료와 차이가 없는 우수한 효용성이 증명되고 있습니다.
                  </p>
                  <div className="in_dash_box">
                    <dl>
                      <dt>가. 적응가능 질환</dt>
                      <dd>경추 및 요추 디스크 탈출증<br />
                        만성디스크(경추, 요추) 통증<br />
                        심장질환등 기저질환으로 인해 수술이 불가능한 경우
                      </dd>
                    </dl>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      )}

      {/* ===== 척추센터 ===== */}
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

      {/* ===== 관절센터 ===== */}
      {code === 'joint' && (
        <div className="con_area">
          <div className="emergency_sec first_sec">
            <p className="info_tit">관절센터</p>
            <p className="info_disc">
              무릎, 어깨, 고관절의 퇴행성관절염, 십자인대 파열, 오십견 등 관절질환을 종합적으로 진단하여 수술적 치료 여부를 판단합니다. <br />
              (인공관절치환술, 류머티즘 관절염, 회전근개 파열, 오십견, 터널 증후군, 통풍성 관절염, 퇴행성 관절염, 스포츠 손상, 외상성 관절염 등)
            </p>
            <div className="in_cont_sec">
              <p className="in_cont_tit">관절센터 정밀검사</p>
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
                  <p className="strong">관절초음파</p>
                  <p className="disc">
                    관절부위에 대한 초음파검사(관절 초음파검사)와 연부조직에 대한 초음파검사(연부조직 초음파검사)가 있습니다. 관절 초음파검사는 어깨, 팔꿈치,
                    손목, 손, 고관절, 무릎, 발목, 발 등의 인체의 크고 작은 관절과 인대를 자세히 살펴볼 수 있는 유용한 검사법입니다.
                  </p>
                </li>
                <li>
                  <p className="strong">진단적 관절경</p>
                  <p className="disc">
                    관절경 검사는 내시경을 관절 안쪽으로 넣어 관절의 구조를 관찰할 수 있는 검사입니다. X-선, 컴퓨터 단층촬영, 자기공명 영상과는 달리 직접
                    눈으로 관절안을 관찰할 수 있으며, 정확한 진단을 위해 활막 조직을 생검할 수 있습니다. 또한 검사와 동시에 필요할 경우 손상된 관절 내의
                    구조물을 봉합하거나 제거하고 관절안을 세척할 수 있어 검사뿐만 아니라 치료의 목적으로 사용할 수 있는 장점이 있습니다. 관절은 견관절(어깨),
                    슬관절(무릎), 고관절(엉덩관절), 팔꿈치, 손목 및 발목 관절 등에 적용이 가능합니다.
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
              </ol>
            </div>
          </div>
        </div>
      )}

      {/* ===== 인공관절센터 ===== */}
      {code === 'arthroplasty' && (
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
              <p className="info_tit">인공관절센터</p>
              <p className="info_disc">
                메디인병원 인공관절센터는 대학 병원급 첨단 장비와 풍부한 임상경험을 갖춘 전문 의료진의 협진을 통해 완성도 높은 정밀 수술이 가능하며 관절의 기능적 회복 및 빠른 신체적 회복 등으로 수술 후 더욱 높은 만족도를 제공합니다.
              </p>
            </div>
            <div className="emergency_sec">
              <div className="in_cont_sec">
                <p className="in_cont_tit">인공관절센터 진료분야</p>
                <div className="in_cont_223">
                  <div className="cont_item">
                    <i className="ico_cont_223_21" style={{ width: '360px', height: '250px' }}></i>
                    <div className="in_cont_area">
                      <dl>
                        <dt>무릎 인공관절 치환술</dt>
                        <dd>무릎인공관절 수술은 류마티스 관절염이나 퇴행성 골관절염 등으로 변형된 관절을 인공관절로 바꾸는 수술입니다. <br />건강보험심사평가원의 통계에 따르면 매년 100만명 이상의 무릎 관절염환자가 병원을 찾는 것으로 알려져 있습니다. <br />인공관절수술은 3기 또는 4기의 관절염환자에게 시행되는 치료법입니다.</dd>
                      </dl>
                    </div>
                  </div>
                  <div className="cont_item">
                    <i className="ico_cont_223_22" style={{ width: '360px', height: '250px' }}></i>
                    <div className="in_cont_area">
                      <dl>
                        <dt>인공 고관절 치환술</dt>
                        <dd>고관절은 골반과 다리뼈를 잇는 역할을 하는 부위로, 하체 운동성에 큰 영향을 미치는 부위입니다. <br />인공 고관절 치환 수술은 파괴된 고관절의 일부를 인공물로 대체하여 고관절의 운동 기능을 보존하고 통증을 감소시키며 일상적인 활동을 가능케 하는 치료 방법입니다. <br />운동 범위를 향상시키고 양측 다리의 불균형을 해소하기 위해 인공 고관절 치환 수술을 시행하기도 합니다.</dd>
                      </dl>
                    </div>
                  </div>
                  <div className="cont_item">
                    <i className="ico_cont_223_23" style={{ width: '360px', height: '250px' }}></i>
                    <div className="in_cont_area">
                      <dl>
                        <dt>어깨 역행성 인공관절 전치환술</dt>
                        <dd>어깨를 움직여주는 회전근개 힘줄의 광범위한 파열과 그로 인한 관절염, 상완골 근위부의 심한 분쇄골절 등으로 팔을 올릴 수 없는 가성마비가 있을 때 시행될 수 있는 수술입니다. <br />원래 어깨 관절모양과 반대로 인공관절을 삽입하는 것이 특징으로, 통증을 줄이고 팔을 올릴 수 있어 삶의 질을 보다 향상 시킬 수 있습니다.</dd>
                      </dl>
                    </div>
                  </div>
                  <div className="cont_item">
                    <i className="ico_cont_223_24" style={{ width: '360px', height: '250px' }}></i>
                    <div className="in_cont_area">
                      <dl>
                        <dt>어깨 인공관절 전치환술</dt>
                        <dd>상대적으로 회전근개 힘줄의 기능은 남아있으나, 퇴행성 및 류마티스 관절염, 상완골두의 무혈성 괴사 등으로 통증, 관절 운동의 제한이 있을 때 시행될 수 있는 수술입니다. <br />원래 어깨 모양과 같은 모양으로 인공관절을 삽입하며, 추후 회전근개 손상이 생기면 역행성 인공관절전 치환술로 전환이 가능하다는 특징이 있습니다.</dd>
                      </dl>
                    </div>
                  </div>
                  <div className="cont_item">
                    <i className="ico_cont_223_25" style={{ width: '360px', height: '250px' }}></i>
                    <div className="in_cont_area">
                      <dl>
                        <dt>경골 근위부 절골술(휜다리 교정술)</dt>
                        <dd>종아리 안쪽 뼈(피질골)를 인위적으로 절골해 휘어진 다리를 맞춰 체중의 부하를 바깥쪽으로 분산시켜주는 수술입니다. <br />퇴행성 관절염으로 다리 모양 O자로 변형된 경우, 다리 모양을 곧게 교정하여 체중을 분산시켜 관절염의 진행을 늦추고자 하는 경우 시행되는 치료법입니다.</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 탭02: 의료진 소개 */}
          <div className={`cont_area${activeTab === 'tab02' ? ' active_cont' : ''}`} id="tab02">
            <div className="medical_staff_list">
              <div className="medical_staff">
                <div className="ms_thumb"><img src={msKth} alt="권태형 원장" /></div>
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
                        <li>대한인공관절센터 학회 평생회원</li>
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
                <div className="ms_thumb"><img src={msSwy} alt="서우영 외과계 진료부원장" /></div>
                <div className="ms_cont">
                  <div className="ms_tit">
                    <strong className="name">서우영 외과계 진료부원장</strong>
                    <span className="major">정형외과</span>
                  </div>
                  <dl>
                    <dt>약력</dt>
                    <dd>
                      <ul>
                        <li>한양대학교병원 인공관절센터 임상교수</li>
                        <li>원주 성지병원 관절센터 과장</li>
                        <li>대한족부관절학회 기획위원</li>
                        <li>대한관절경학회 정회원</li>
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
                <div className="ms_thumb"><img src={msJih} alt="주일한 진료과장" /></div>
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
                        <li>한양대학교병원 인공관절센터 외래교수</li>
                        <li>대한견주관절의학회 정회원</li>
                        <li>대한수부외과학회 정회원</li>
                      </ul>
                    </dd>
                  </dl>
                  <button type="button" onClick={() => (window as any).popView('medical_staff_detail04')}>
                    <i className="ico_calendar"></i>
                    <span>진료시간표</span>
                  </button>
                </div>
              </div>

              <div className="medical_staff">
                <div className="ms_thumb"><img src={msLjh} alt="이재호 진료과장" /></div>
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
                        <li>한양대학교병원 인공관절센터 외래교수</li>
                        <li>대한슬관절학회 정회원</li>
                        <li>대한골절학회 정회원</li>
                      </ul>
                    </dd>
                  </dl>
                  <button type="button" onClick={() => (window as any).popView('medical_staff_detail05')}>
                    <i className="ico_calendar"></i>
                    <span>진료시간표</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== 검진센터 ===== */}
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
                <div className="ms_thumb"><img src={noImg} alt="김민주 진료과장" /></div>
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
                <div className="ms_thumb"><img src={noImg} alt="김선미 진료과장" /></div>
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
                <div className="ms_thumb"><img src={msKjh} alt="권재현 진료과장" /></div>
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
                <div className="ms_thumb"><img src={msLhw} alt="이은우 진료과장" /></div>
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
                <div className="ms_thumb"><img src={msLhc} alt="이창훈 진료과장" /></div>
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
                        <li>vic365의원, 한강연세병원, 박원종내과의원 검진내과</li>
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
}
