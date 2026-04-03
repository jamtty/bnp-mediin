import { useState } from 'react'
import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

export default function NonCoveredPage() {
  const [activeTab, setActiveTab] = useState('tab01')
  return (
    <SubPageLayout
      visualClass="vs1"
      visualTitle="진료안내"
      contentsClass="sub01"
      lnbItems={lnbItems}
    >
      <h3 className="cont_tit">비급여 수가 안내</h3>
    <div className="con_area">
        <div className="tab_area type_multi">
            <button type="button" className={activeTab === "tab01" ? "btn_tab active_tab" : "btn_tab"} onClick={() => setActiveTab("tab01")}><span>1. 상급병실료</span></button>
            <button type="button" className={activeTab === "tab02" ? "btn_tab active_tab" : "btn_tab"} onClick={() => setActiveTab("tab02")}><span>2. 검사료 및 초음파</span></button>
            <button type="button" className={activeTab === "tab03" ? "btn_tab active_tab" : "btn_tab"} onClick={() => setActiveTab("tab03")}><span>3. 처치료</span></button>
            <button type="button" className={activeTab === "tab04" ? "btn_tab active_tab" : "btn_tab"} onClick={() => setActiveTab("tab04")}><span>4. 자기공명영상진단료(MRI)</span></button>
            <button type="button" className={activeTab === "tab05" ? "btn_tab active_tab" : "btn_tab"} onClick={() => setActiveTab("tab05")}><span>5. 재증명 수수료</span></button>
            <button type="button" className={activeTab === "tab06" ? "btn_tab active_tab" : "btn_tab"} onClick={() => setActiveTab("tab06")}><span>6. 치료 재료</span></button>
            <button type="button" className={activeTab === "tab07" ? "btn_tab active_tab" : "btn_tab"} onClick={() => setActiveTab("tab07")}><span>7. 약제비 및 치료재료</span></button>
            <button type="button" className={activeTab === "tab08" ? "btn_tab active_tab" : "btn_tab"} onClick={() => setActiveTab("tab08")}><span>8. 기타보조기</span></button>
        </div>
        
        <div className={activeTab === "tab01" ? "cont_area active_cont" : "cont_area"} id="tab01">
            <div className="h_table">
                <p className="table_label">상급병실료</p>
                <div className="m_scroll wd800">
                    <table>
                        <caption>상급병실료표</caption>
                        <colgroup>
                            <col style={{ width: '13%' }} />
                            <col style={{ width: '10%' }} />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col" rowSpan={2}>분류</th>
                                <th scope="colgroup" colSpan={2}>진료비용항목</th>
                                <th scope="colgroup" colSpan={6}>항목별 가격정보(단위:원)</th>
                                <th scope="col" rowSpan={2}>특이사항</th>
                            </tr>
                            <tr>
                                <th scope="col" className="t_bd_l">청구코드</th>
                                <th scope="col">명칭</th>
                                <th scope="col">구분</th>
                                <th scope="col">비용</th>
                                <th scope="col">최저비용</th>
                                <th scope="col">최고비용</th>
                                <th scope="col">치료재료대 <br />포함여부</th>
                                <th scope="col">약제비 <br />포함여부</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>상급병실료 차액</td>
                                <td>ABZ01</td>
                                <td>1인실 입원료</td>
                                <td>1인실 입원료</td>
                                <td>220,000</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>ABZ01</td>
                                <td>1인실 입원료_간호간병통합</td>
                                <td>1인실 입원료_간호간병통합</td>
                                <td>240,000</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        

        
        <div className={activeTab === "tab02" ? "cont_area active_cont" : "cont_area"} id="tab02">
            <div className="h_table">
                <p className="table_label">검사료 및 초음파</p>
                <div className="m_scroll wd800">
                    <table>
                        <caption>검사료 및 초음파 비용표</caption>
                        <colgroup>
                            <col style={{ width: '10%' }} />
                            <col style={{ width: '10%' }} />
                            <col style={{ width: '15%' }} />
                            <col style={{ width: '15%' }} />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col" rowSpan={2}>분류</th>
                                <th scope="colgroup" colSpan={2}>진료비용항목</th>
                                <th scope="colgroup" colSpan={6}>항목별 가격정보(단위:원)</th>
                                <th scope="col" rowSpan={2}>특이사항</th>
                            </tr>
                            <tr>
                                <th scope="col" className="t_bd_l">청구코드</th>
                                <th scope="col">명칭</th>
                                <th scope="col">구분</th>
                                <th scope="col">비용</th>
                                <th scope="col">최저비용</th>
                                <th scope="col">최고비용</th>
                                <th scope="col">치료재료대 <br />포함여부</th>
                                <th scope="col">약제비 <br />포함여부</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>바이러스</td>
                                <td>D6620</td>
                                <td>SARS-CoV-2 항원검사<br />[일반면역검사]-간이검사</td>
                                <td>SARS-CoV-2 항원검사<br />[일반면역검사]-간이검사</td>
                                <td> 35,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>바이러스</td>
                                <td>CZ394</td>
                                <td>인플루엔자 A·B 바이러스항원검사<br />[현장검사]</td>
                                <td>인플루엔자 A·B 바이러스항원검사<br />[현장검사]</td>
                                <td> 35,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>바이러스</td>
                                <td>D654226A</td>
                                <td>SARS-CoV-2 Ab (S1<br />RBD)</td>
                                <td>SARS-CoV-2 Ab (S1<br />RBD)</td>
                                <td> 70,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>증명서 제출용(외국 입국 예정자<br />등)에 한해 제한적 비급여 허용</td>
                            </tr>
                            <tr>
                                <td>바이러스</td>
                                <td>D654226B</td>
                                <td>SARS-CoV-2 Ab (N)</td>
                                <td>SARS-CoV-2 Ab (N)</td>
                                <td> 70,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>증명서 제출용(외국 입국 예정자<br />등)에 한해 제한적 비급여 허용</td>
                            </tr>
                            <tr>
                                <td>바이러스</td>
                                <td>D6586046</td>
                                <td>HPV genotyping<br />(Real-time PCR)</td>
                                <td>HPV genotyping<br />(Real-time PCR)</td>
                                <td> 112,420 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>다종미생물</td>
                                <td>D6802066</td>
                                <td>호흡기 바이러스 PCR</td>
                                <td>호흡기 바이러스 PCR</td>
                                <td> 158,400 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>기능검사료</td>
                                <td>FY891</td>
                                <td>자율신경계이상검사(기립성혈압검사)</td>
                                <td>자율신경계이상검사(기립성혈압검사)</td>
                                <td> 40,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>자가면역질환</td>
                                <td>CZ422</td>
                                <td>항신경핵항체 1형(Hu Autoantibodies)</td>
                                <td>항신경핵항체 1형(Hu Autoantibodies)</td>
                                <td> 64,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>자가면역질환</td>
                                <td>CZ423</td>
                                <td>항신경핵항체 2형(Ri Autoantibodies)</td>
                                <td>항신경핵항체 2형(Ri Autoantibodies)</td>
                                <td> 64,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>자가면역질환</td>
                                <td>CZ424</td>
                                <td>항퍼킨제세포세포질항체(Yo Autoantibodies)</td>
                                <td>항퍼킨제세포세포질항체(Yo Autoantibodies)</td>
                                <td> 64,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>자가면역질환</td>
                                <td>CZ261</td>
                                <td>항GM1항체 IgG (Anti-Ganglioside M1 Antibody)</td>
                                <td>항GM1항체 IgG (Anti-Ganglioside M1 Antibody)</td>
                                <td> 130,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>자가면역질환</td>
                                <td>CZ262</td>
                                <td>항GM1항체 IgM (Anti-Ganglioside M1 Antibody)</td>
                                <td>항GM1항체 IgM (Anti-Ganglioside M1 Antibody)</td>
                                <td> 130,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>일반화학검사</td>
                                <td>CZ242</td>
                                <td>아밀로이드 A</td>
                                <td>아밀로이드 A</td>
                                <td> 40,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>일반화학검사</td>
                                <td>CZ246</td>
                                <td>허혈성 변형 알부민 검사</td>
                                <td>허혈성 변형 알부민 검사</td>
                                <td> 40,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>내시경</td>
                                <td>EA002</td>
                                <td>진정내시경 환자관리료 Ⅱ</td>
                                <td>위 등 수면비급여</td>
                                <td> 70,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>내시경</td>
                                <td>EA003</td>
                                <td>진정내시경 환자관리료 Ⅲ</td>
                                <td>대장 등 수면 비급여</td>
                                <td> 100,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>내시경</td>
                                <td></td>
                                <td>위+대장 수면 비급여</td>
                                <td>위+대장 수면 비급여</td>
                                <td> 150,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>내시경</td>
                                <td>EA004</td>
                                <td>진정내시경환자관리료-Ⅳ</td>
                                <td>진정내시경환자관리료-Ⅳ</td>
                                <td> 150,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>내시경</td>
                                <td>EA001</td>
                                <td>진정내시경 환자관리료 Ⅰ</td>
                                <td>진정내시경 환자관리료 Ⅰ</td>
                                <td> 50,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>기능검사료</td>
                                <td>EZ776</td>
                                <td>적외선 체열검사</td>
                                <td>적외선 체열검사_상지</td>
                                <td> 50,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>기능검사료</td>
                                <td>EZ776</td>
                                <td>적외선 체열검사</td>
                                <td>적외선 체열검사_하지</td>
                                <td> 50,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>기능검사료</td>
                                <td>EZ776</td>
                                <td>적외선 체열검사</td>
                                <td>적외선 체열검사_전신</td>
                                <td> 150,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>기능검사료</td>
                                <td>EZ776</td>
                                <td>적외선 체열검사</td>
                                <td>적외선 체열검사_얼굴</td>
                                <td> 50,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>기능검사료</td>
                                <td>EZ776</td>
                                <td>적외선 체열검사</td>
                                <td>적외선 체열검사_트렁크</td>
                                <td> 50,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>기능검사료</td>
                                <td>FY891</td>
                                <td>자율신경계이상검사(기립성혈압검사)</td>
                                <td>자율신경계이상검사(기립성혈압검사)</td>
                                <td> 40,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>기능검사료</td>
                                <td>FY894</td>
                                <td>자율신경계이상검사(심박변이도검사)</td>
                                <td>자율신경계이상검사(심박변이도검사)</td>
                                <td> 40,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>기능검사료</td>
                                <td>FY895</td>
                                <td>자율신경계이상검사(피부전도반응검사)</td>
                                <td>자율신경계이상검사(피부전도반응검사)</td>
                                <td> 30,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>기능검사료</td>
                                <td>EZ868</td>
                                <td>동맥경화도검사(맥파전달속도측정)</td>
                                <td>동맥경화도검사(맥파전달속도측정)</td>
                                <td> 30,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>검사료</td>
                                <td></td>
                                <td>마약검사(DOA)</td>
                                <td>마약검사(DOA)</td>
                                <td> 20,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>검사료</td>
                                <td></td>
                                <td>마약확진검사1(Codeine+Morphine<br />+6-Acetylmorphine)</td>
                                <td>마약확진검사1(Codeine+Morphine<br />+6-Acetylmorphine)</td>
                                <td> 65,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>검사료</td>
                                <td></td>
                                <td>아편,코카인정밀-Opiates/Cocaine(GC/MS)</td>
                                <td>아편,코카인정밀-Opiates/Cocaine(GC/MS)</td>
                                <td> 60,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>검사료</td>
                                <td></td>
                                <td>필로폰정밀-Amphetamine(GC/MS)</td>
                                <td>필로폰정밀-Amphetamine(GC/MS)</td>
                                <td> 60,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>검사료</td>
                                <td></td>
                                <td>대마정밀-Tetrahydrocannabinol(GC/MS)</td>
                                <td>대마정밀-Tetrahydrocannabinol(GC/MS)</td>
                                <td> 60,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>검사료</td>
                                <td></td>
                                <td>마약확진검사2(Amphetamine+<br />Methamphetamine+
                                    <br />Benzoylecgonine)</td>
                                <td>마약확진검사2(Amphetamine+<br />Methamphetamine+
                                    <br />Benzoylecgonine)</td>
                                <td> 65,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>검사료</td>
                                <td></td>
                                <td>마약확진검사3(THC-COOH+PCP)</td>
                                <td>마약확진검사3(THC-COOH+PCP)</td>
                                <td> 65,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>검사료</td>
                                <td></td>
                                <td>니코틴(Nicotine<br />Metabolite)-정량</td>
                                <td>니코틴(Nicotine<br />Metabolite)-정량</td>
                                <td> 24,820 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>검사료</td>
                                <td></td>
                                <td>Amphetamine(정밀)</td>
                                <td>Amphetamine(정밀)</td>
                                <td> 100,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>검사료</td>
                                <td></td>
                                <td>Cannabinoide(정밀)</td>
                                <td>Cannabinoide(정밀)</td>
                                <td> 100,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>검사료</td>
                                <td></td>
                                <td>(수탁) Opiates(정밀)</td>
                                <td>(수탁) Opiates(정밀)</td>
                                <td> 100,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>검사료</td>
                                <td></td>
                                <td>Alcohol<br />(Ethanol)-혈중농도</td>
                                <td>Alcohol<br />(Ethanol)-혈중농도</td>
                                <td> 11,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>바이러스</td>
                                <td>D7300</td>
                                <td>SARS-CoV-2<br />[실시간역전사중합효소연쇄반응법]</td>
                                <td>SARS-CoV-2<br />[실시간역전사중합효소연쇄반응법]</td>
                                <td> 80,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>바이러스</td>
                                <td>D7301</td>
                                <td>SARS-CoV-2<br />[실시간역전사중합효소연쇄반응법]<br />-(보호자·간병인)</td>
                                <td>SARS-CoV-2<br />[실시간역전사중합효소연쇄반응법]<br />-(보호자·간병인)</td>
                                <td> 65,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>바이러스</td>
                                <td>D6801136</td>
                                <td>SARS-CoV-2 &amp; Flu A/B<br /> [Multiplex real-time RT-PCR]</td>
                                <td>SARS-CoV-2 &amp; Flu A/B<br /> [Multiplex real-time RT-PCR]</td>
                                <td> 120,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>출혈, 혈전검사</td>
                                <td>BZ078</td>
                                <td>TRAP</td>
                                <td>TRAP</td>
                                <td> 60,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>신의료</td>
                                <td>SSSSSS</td>
                                <td>헬리코박터 파일로리균 타액 신속 진단키드_ONE STEP</td>
                                <td>헬리코박터 파일로리균 타액 신속 진단키드_ONE STEP</td>
                                <td> 40,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>단순초음파</td>
                                <td>EB401</td>
                                <td>단순초음파 I</td>
                                <td>단순초음파(I) One Point<br />Ultrasonography</td>
                                <td> 30,000 </td>
                                <td> 30,000 </td>
                                <td> 30,000 </td>
                                <td></td>
                                <td></td>
                                <td>진료과에 따라 다름</td>
                            </tr>
                            <tr>
                                <td>단순초음파</td>
                                <td>EB402</td>
                                <td>단순초음파 II</td>
                                <td>단순초음파(II) Simple<br />Ultrasonography</td>
                                <td> 50,000 </td>
                                <td> 50,000 </td>
                                <td> 60,000 </td>
                                <td></td>
                                <td></td>
                                <td>진료과에 따라 다름</td>
                            </tr>
                            <tr>
                                <td>두경부_경부_초음파</td>
                                <td>EB414</td>
                                <td>갑상선 부갑상선</td>
                                <td>SONO -<br />Neck/Thyroid포함</td>
                                <td> 120,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>두경부_경부_초음파</td>
                                <td>EB415</td>
                                <td>갑상선·부갑상선 제외한 경부</td>
                                <td>Neck SONO</td>
                                <td> 120,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>흉부-유방·액와부 초음파</td>
                                <td>EB421</td>
                                <td>흉부-유방·액와부 초음파</td>
                                <td>SONO - MS -<br />Axillary </td>
                                <td> 150,000 </td>
                                <td>  </td>
                                <td>  </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>흉부-유방·액와부 제외한<br />흉부 초음파</td>
                                <td>EB422</td>
                                <td>흉부-흉벽, 흉막, 늑골 등</td>
                                <td></td>
                                <td> 100,000 </td>
                                <td> </td>
                                <td> </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>심장-경흉부 심초음파</td>
                                <td>EB431</td>
                                <td>심장-경흉부 심초음파-단순</td>
                                <td>SONO-심장-경흉부-단순</td>
                                <td> 130,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>심장-경흉부 심초음파</td>
                                <td>EB432</td>
                                <td>심장-경흉부 심초음파-일반</td>
                                <td>SONO-심장-경흉부-일반</td>
                                <td> 210,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>심장-경흉부 심초음파</td>
                                <td>EB433</td>
                                <td>심장-경흉부 심초음파-전문</td>
                                <td>SONO-심장-경흉부-전문</td>
                                <td> 310,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>심장-경흉부 심초음파</td>
                                <td>EB433</td>
                                <td>심장-경흉부 심초음파-전문(Portable)</td>
                                <td>심장-경흉부 심초음파-전문(Portable)</td>
                                <td> 310,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>복부-복부 초음파</td>
                                <td></td>
                                <td>복부</td>
                                <td>SONO - (비보험)복부전체</td>
                                <td> 150,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>복부-복부 초음파</td>
                                <td>EB441</td>
                                <td>간·담낭·담도·비장·췌장-일반</td>
                                <td>SONO - 상복부 일반 </td>
                                <td> 140,000 </td>
                                <td> </td>
                                <td> </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>복부-복부 초음파</td>
                                <td>EB442</td>
                                <td>간·담낭·담도·비장·췌장-정밀</td>
                                <td>SONO - 상복부 정밀</td>
                                <td> 220,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>복부-복부 초음파</td>
                                <td>EB443</td>
                                <td>충수 Appendix</td>
                                <td>SONO - 하복부(appe)</td>
                                <td> 130,000 </td>
                                <td> </td>
                                <td> </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>복부-복부 초음파</td>
                                <td>EB444</td>
                                <td>소장·대장 Small<br />Bowel·Colon</td>
                                <td>SONO - 하복부(S,LB)</td>
                                <td> 130,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>복부-복부 초음파</td>
                                <td>EB445</td>
                                <td>서혜부</td>
                                <td>SONO - 하복부 Inguinal</td>
                                <td> 90,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>복부-복부 초음파</td>
                                <td>EB446</td>
                                <td>직장·항문 Rectum·Anus</td>
                                <td>SONO-복부-직장,항문</td>
                                <td> 160,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>복부-복부 초음파</td>
                                <td>EB447</td>
                                <td>항문</td>
                                <td>SONO-항문 Anus</td>
                                <td> 130,000 </td>
                                <td> </td>
                                <td> </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>복부-복부 초음파</td>
                                <td>EB448</td>
                                <td>신장·부신·방광<br />Kidney·Adrenal Gland·Bladder</td>
                                <td>SONO-비뇨기계-신장,부신,방광</td>
                                <td> 120,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>복부-복부 초음파</td>
                                <td>EB449</td>
                                <td>신장·부신 Kidney·Adrenal Gland</td>
                                <td>SONO-비뇨기계-신장,부신</td>
                                <td> 100,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>복부-복부 초음파</td>
                                <td>EB450</td>
                                <td>방광 Bladder</td>
                                <td>SONO-비뇨기계-방광</td>
                                <td> 90,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>복부-남성생식기 초음파</td>
                                <td>EB451</td>
                                <td>전립선·정낭</td>
                                <td>SONO - TRUS</td>
                                <td> 100,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>복부-남성생식기 초음파</td>
                                <td>EB453</td>
                                <td>음경</td>
                                <td>SONO - 음경</td>
                                <td> 90,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>복부-남성생식기 초음파</td>
                                <td>EB454</td>
                                <td>음낭</td>
                                <td>SONO - Scrotum</td>
                                <td> 90,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>복부-여성생식기 초음파</td>
                                <td>EB455</td>
                                <td>복부-여성생식기 초음파-일반</td>
                                <td>복부-여성생식기 초음파-일반</td>
                                <td> 100,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>복부-여성생식기 초음파</td>
                                <td>EB456</td>
                                <td>복부-여성생식기 초음파-일반-자궁내<br />생리식염수 주입</td>
                                <td>복부-여성생식기 초음파-일반-자궁내<br />생리식염수 주입</td>
                                <td> 130,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>복부-여성생식기 초음파</td>
                                <td>EB457</td>
                                <td>복부-여성생식기 초음파-정밀</td>
                                <td>복부-여성생식기 초음파-정밀</td>
                                <td> 140,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>근골격, 연부-관절<br />초음파</td>
                                <td>EB461</td>
                                <td>손가락</td>
                                <td>SONO-근골격-손가락 Finger<br />LT</td>
                                <td> 100,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>근골격, 연부-관절<br />초음파</td>
                                <td>EB462</td>
                                <td>발가락</td>
                                <td>SONO-근골격-발가락 Toe LT</td>
                                <td> 100,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>근골격, 연부-관절<br />초음파</td>
                                <td>EB461</td>
                                <td>손</td>
                                <td>SONO - MS - Hand LT</td>
                                <td> 100,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>근골격, 연부-관절<br />초음파</td>
                                <td>EB462</td>
                                <td>발</td>
                                <td>SONO - MS - Foot LT</td>
                                <td> 100,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>근골격, 연부-관절<br />초음파</td>
                                <td>EB463</td>
                                <td>주관절</td>
                                <td>SONO - Joint - Elbow</td>
                                <td> 100,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>근골격, 연부-관절<br />초음파</td>
                                <td>EB464</td>
                                <td>슬관절</td>
                                <td>SONO - Joint - Knee</td>
                                <td> 100,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>편측</td>
                            </tr>
                            <tr>
                                <td>근골격, 연부-관절<br />초음파</td>
                                <td>EB465</td>
                                <td>고관절</td>
                                <td>SONO - Joint - HIP</td>
                                <td> 100,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>편측</td>
                            </tr>
                            <tr>
                                <td>근골격, 연부-관절<br />초음파</td>
                                <td>EB466</td>
                                <td>견관절</td>
                                <td>SONO - Joint -<br />Shoulder</td>
                                <td> 100,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>편측</td>
                            </tr>
                            <tr>
                                <td>근골격, 연부-관절<br />초음파</td>
                                <td>EB467</td>
                                <td>손목관절</td>
                                <td>SONO - Joint - Wrist</td>
                                <td> 100,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>편측</td>
                            </tr>
                            <tr>
                                <td>근골격, 연부-관절<br />초음파</td>
                                <td>EB468</td>
                                <td>발목관절</td>
                                <td>SONO - Joint - Ankle</td>
                                <td> 100,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>편측</td>
                            </tr>
                            <tr>
                                <td>근골격, 연부-연부조직<br />초음파</td>
                                <td>EB470</td>
                                <td>일반</td>
                                <td>SONO-근골격-연부-일반</td>
                                <td> 100,000 </td>
                                <td> </td>
                                <td> </td>
                                <td></td>
                                <td></td>
                                <td>부위별</td>
                            </tr>
                            <tr>
                                <td>근골격, 연부-연부조직<br />초음파</td>
                                <td>EB471</td>
                                <td>정밀</td>
                                <td>SONO-근골격-연부-정밀</td>
                                <td> 100,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>부위별</td>
                            </tr>
                            <tr>
                                <td>혈관-뇌혈류 초음파</td>
                                <td>EB481</td>
                                <td>혈관-뇌혈류<br />초음파</td>
                                <td>SONO-혈관-뇌혈류 초음파</td>
                                <td> 150,000 </td>
                                <td> </td>
                                <td> </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>혈관-두개외 혈관 도플러<br />초음파</td>
                                <td>EB482</td>
                                <td>경동맥</td>
                                <td>SONO-혈관-경동맥</td>
                                <td> 130,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>혈관-기타동맥</td>
                                <td>EB483</td>
                                <td>기타동맥</td>
                                <td></td>
                                <td> 90,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>혈관-사지혈관 도플러<br />초음파</td>
                                <td>EB484</td>
                                <td>상지-동맥</td>
                                <td>DOPPLER 동맥 편측 - 상지</td>
                                <td> 100,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>혈관-사지혈관 도플러<br />초음파</td>
                                <td>EB485</td>
                                <td>상지-정맥</td>
                                <td>DOPPLER 정맥 편측 - 상지</td>
                                <td> 100,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>혈관-사지혈관 도플러<br />초음파</td>
                                <td>EB487</td>
                                <td>하지-동맥</td>
                                <td>DOPPLER 동맥 편측 - 하지</td>
                                <td> 170,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>혈관-사지혈관 도플러<br />초음파</td>
                                <td>EB488</td>
                                <td>하지-정맥</td>
                                <td>DOPPLER 정맥 편측 - 하지</td>
                                <td> 170,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>혈관-사지혈관 도플러<br />초음파</td>
                                <td>EB489</td>
                                <td>하지 정맥류</td>
                                <td>DOPPLER Varicose V.<br />하지</td>
                                <td> 140,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>유도 초음파</td>
                                <td>EB561</td>
                                <td>유도초음파(Ⅰ)</td>
                                <td>유도초음파(Ⅰ)</td>
                                <td> 110,000 </td>
                                <td> 110,000 </td>
                                <td> 140,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>유도 초음파</td>
                                <td>EZ987</td>
                                <td>진공보조 유방 생검시 유도 초음파</td>
                                <td>진공보조 유방 생검시 유도 초음파</td>
                                <td> 600,000 </td>
                                <td> 500,000 </td>
                                <td> 900,000 </td>
                                <td> </td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>유도 초음파</td>
                                <td>EB563</td>
                                <td>하지정맥류수술시 초음파</td>
                                <td>유도초음파(III)</td>
                                <td> 210,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>혈관내초음파</td>
                                <td>EZ994</td>
                                <td>혈관내초음파(IVUS)</td>
                                <td>혈관내초음파(IVUS)</td>
                                <td> 250,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>유도 초음파</td>
                                <td>EB562</td>
                                <td>유도초음파(Ⅱ)</td>
                                <td>유도초음파(Ⅱ)</td>
                                <td> 160,000 </td>
                                <td> </td>
                                <td> </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>단순초음파</td>
                                <td>EB401</td>
                                <td>DOPPLER Varicose V. 하지 Map</td>
                                <td></td>
                                <td> 30,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>전산화단층촬영<br />흉부</td>
                                <td>XHA434B</td>
                                <td>CHEST CT (저선량-검진용)</td>
                                <td>CHEST CT (저선량-검진용)</td>
                                <td> 150,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        

        
        <div className={activeTab === "tab03" ? "cont_area active_cont" : "cont_area"} id="tab03">
            <div className="h_table">
                <p className="table_label">처치료</p>
                <div className="m_scroll wd800">
                    <table>
                        <caption>처치료 비용표</caption>
                        <colgroup>
                            <col style={{ width: '10%' }} />
                            <col style={{ width: '10%' }} />
                            <col style={{ width: '15%' }} />
                            <col style={{ width: '15%' }} />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col" rowSpan={2}>분류</th>
                                <th scope="colgroup" colSpan={2}>진료비용항목</th>
                                <th scope="colgroup" colSpan={6}>항목별 가격정보(단위:원)</th>
                                <th scope="col" rowSpan={2}>특이사항</th>
                            </tr>
                            <tr>
                                <th scope="col" className="t_bd_l">청구코드</th>
                                <th scope="col">명칭</th>
                                <th scope="col">구분</th>
                                <th scope="col">비용</th>
                                <th scope="col">최저비용</th>
                                <th scope="col">최고비용</th>
                                <th scope="col">치료재료대 <br />포함여부</th>
                                <th scope="col">약제비 <br />포함여부</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>증식치료</td>
                                <td>MY142</td>
                                <td>증식치료(사지관절부위)</td>
                                <td>Prolotherapy<br />프롤로테라피(사지관절부위)</td>
                                <td> 65,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>도수치료</td>
                                <td>MX122</td>
                                <td>관절_도수치료</td>
                                <td>관절_도수치료</td>
                                <td> 90,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>도수치료</td>
                                <td>MX122A</td>
                                <td>척추_도수_충격_치료</td>
                                <td>척추_도수_충격_치료</td>
                                <td> 170,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>도수치료</td>
                                <td>MX122B</td>
                                <td>관절_도수_충격_치료</td>
                                <td>관절_도수_충격_치료</td>
                                <td> 160,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>도수치료</td>
                                <td>MX122C</td>
                                <td>척추_도수치료</td>
                                <td>척추_도수치료</td>
                                <td> 110,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>신장분사치료</td>
                                <td>MZ007</td>
                                <td>신장분사치료</td>
                                <td>신장분사치료</td>
                                <td> 20,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>근골</td>
                                <td>SZ083</td>
                                <td>(IDET)추간판내 고주파 열치료술</td>
                                <td>(IDET)<br />nucleoplasty-L-spine</td>
                                <td> 3,300,000 </td>
                                <td></td>
                                <td></td>
                                <td> 포함 </td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>근골</td>
                                <td>SZ083</td>
                                <td>(IDET)추간판내 고주파 열치료술</td>
                                <td>(IDET)<br />nucleoplasty_L-spine_1level 추가시</td>
                                <td> 2,000,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>근골</td>
                                <td>SZ083</td>
                                <td>(IDET)추간판내 고주파 열치료술</td>
                                <td>(IDET)<br />nucleoplasty-C-spine</td>
                                <td> 3,300,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>근골</td>
                                <td>SZ083</td>
                                <td>(IDET)추간판내 고주파 열치료술</td>
                                <td>(IDET)<br />nucleoplasty-C-spine 1level 추가</td>
                                <td> 3,300,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>신경</td>
                                <td>SZ631</td>
                                <td>내시경적 경막외강 신경근성형술</td>
                                <td>내시경적 경막외강 신경근성형술(케이앤메드)</td>
                                <td> 2,500,000 </td>
                                <td></td>
                                <td></td>
                                <td>포함</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>신경</td>
                                <td>SZ631-1</td>
                                <td>내시경적 경막외강 신경근성형술</td>
                                <td>내시경적 경막외강 신경근성형술(클라우디케어)</td>
                                <td> 2,500,000 </td>
                                <td></td>
                                <td></td>
                                <td>포함</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>신경</td>
                                <td>SZ631-2</td>
                                <td>내시경적 경막외강 신경근성형술</td>
                                <td>내시경적 경막외강 신경근성형술(D-GUN)</td>
                                <td> 3,000,000 </td>
                                <td></td>
                                <td></td>
                                <td>포함</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>신경</td>
                                <td>SZ631-3</td>
                                <td>내시경적 경막외강 신경근성형술</td>
                                <td>내시경적 경막외강 신경근성형술(클라우디케어-Scope)</td>
                                <td> 3,000,000 </td>
                                <td></td>
                                <td></td>
                                <td>포함</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>신경</td>
                                <td>SZ631-4</td>
                                <td>내시경적 경막외강 신경근성형술</td>
                                <td>내시경적 경막외강 신경근성형술(클라우디케어)</td>
                                <td> 2,500,000 </td>
                                <td></td>
                                <td></td>
                                <td>포함</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>신경</td>
                                <td>SZ634</td>
                                <td>경피적 경막외강 신경성형술</td>
                                <td>L-PEN<br />(경피적경막외강신경성형술<br />(neuroplasty)(재료대포함))</td>
                                <td> 1,800,000 </td>
                                <td></td>
                                <td></td>
                                <td> 포함 </td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>신경</td>
                                <td>SZ634</td>
                                <td>경피적 경막외강 신경성형술</td>
                                <td>C-PEN (재료대포함)</td>
                                <td> 1,800,000 </td>
                                <td></td>
                                <td></td>
                                <td> 포함 </td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>신경</td>
                                <td>SZ641</td>
                                <td>경피적 풍선확장 경막외강 신경성형</td>
                                <td>경피적 풍선확장 경막외강 신경성형</td>
                                <td> 2,500,000 </td>
                                <td> 2,500,000</td>
                                <td> 2,900,000</td>
                                <td> 포함 </td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>순환기</td>
                                <td>OZ3040000</td>
                                <td>처치 및<br />수술료(순환기)<br />/레이저정맥폐쇄술[유도료 포함]</td>
                                <td>EVLT - only(GSV or<br />LSV)</td>
                                <td> 1,500,000 </td>
                                <td> 1,500,000 </td>
                                <td> 3,000,000 </td>
                                <td> 포함 </td>
                                <td>포함</td>
                                <td>편측/양측 난이도에따라 다름</td>
                            </tr>
                            <tr>
                                <td>순환기</td>
                                <td>OZ305</td>
                                <td>초음파 유도하 혈관경화요법</td>
                                <td>초음파유도하 천공정맥치료(PAP)</td>
                                <td> 1,000,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>순환기</td>
                                <td>OZ303</td>
                                <td>처치 및 수술료(순환기)/시아노아크릴레이트를 이용한 복재정맥 폐색술[유도료 포함]</td>
                                <td>시아노아크릴레이트를 이용한 복재정맥 폐색술[유도료 포함]</td>
                                <td> 2,000,000 </td>
                                <td> 2,000,000 </td>
                                <td> 3,500,000 </td>
                                <td></td>
                                <td></td>
                                <td>부위별 난이도에 따라 다름</td>
                            </tr>
                            <tr>
                                <td>내분비기</td>
                                <td>PZ612</td>
                                <td> 증상이 있는 갑상선양성결절의<br /> 고주파열치료술 Radiofrequency </td>
                                <td>갑상선 고주파 치료술</td>
                                <td> 1,500,000 </td>
                                <td>  </td>
                                <td>  </td>
                                <td>포함</td>
                                <td>포함</td>
                                <td>회차에 따라 다름</td>
                            </tr>
                            <tr>
                                <td>처치 및 수술료</td>
                                <td></td>
                                <td>정관수술</td>
                                <td>정관수술</td>
                                <td> 400,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>기타</td>
                                <td></td>
                                <td>음핵성형술</td>
                                <td>음핵성형술</td>
                                <td> 800,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>기타</td>
                                <td></td>
                                <td>vaginoplasty</td>
                                <td>vaginoplasty</td>
                                <td> 1,200,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>기타</td>
                                <td></td>
                                <td>labioplasty</td>
                                <td>labioplasty</td>
                                <td> 1,200,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>기타</td>
                                <td>R4271</td>
                                <td>자궁내장치삽입술</td>
                                <td>자궁내장치삽입술</td>
                                <td> 350,000 </td>
                                <td></td>
                                <td></td>
                                <td> 포함 </td>
                                <td></td>
                                <td>급여 제외일 경우</td>
                            </tr>
                            <tr>
                                <td>기타</td>
                                <td></td>
                                <td>포경수술</td>
                                <td>포경수술</td>
                                <td> 300,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>기타</td>
                                <td></td>
                                <td>포경수술(추가)</td>
                                <td>포경수술(추가)</td>
                                <td> 100,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>기타</td>
                                <td></td>
                                <td>켈로이드-소</td>
                                <td>켈로이드-소</td>
                                <td> 100,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>기타</td>
                                <td></td>
                                <td>켈로이드-대</td>
                                <td>켈로이드-대</td>
                                <td> 200,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>기타</td>
                                <td></td>
                                <td>해면체내 주사</td>
                                <td>해면체내 주사</td>
                                <td> 20,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>기타</td>
                                <td></td>
                                <td>링제거술</td>
                                <td>링제거술</td>
                                <td> 100,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>기타</td>
                                <td></td>
                                <td>실리콘제거술</td>
                                <td>실리콘제거술</td>
                                <td> 100,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>기타</td>
                                <td></td>
                                <td>바셀린제거술</td>
                                <td>바셀린제거술</td>
                                <td> 100,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>처치 및 수술료</td>
                                <td>SZ084</td>
                                <td>관절_체외충격파</td>
                                <td>관절_체외충격파</td>
                                <td> 80,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>처치 및 수술료</td>
                                <td>SZ084A</td>
                                <td>척추_체외충격파</td>
                                <td>척추_체외충격파</td>
                                <td> 100,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>신의료</td>
                                <td>SSSSSS</td>
                                <td>근감소증에서 <br />부위별 다주파수 <br />임피던스 분석법을 <br />이용한 체성분 분석</td>
                                <td>근감소증에서 <br />부위별 다주파수 <br />임피던스 분석법을 <br />이용한 체성분 분석</td>
                                <td> 30,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>처치 및 수술료</td>
                                <td>BMA01</td>
                                <td>자가골수세포주사(KIT포함)</td>
                                <td>자가골수세포주사(KIT포함)</td>
                                <td> 3,100,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>처치 및 수술료</td>
                                <td>OY202</td>
                                <td>고주파정맥내막폐쇄요법<br />(교통정맥결찰술 미동반, <br />유도료포함, 재료대별도)</td>
                                <td>고주파정맥내막폐쇄요법<br />(교통정맥결찰술 미동반, <br />유도료포함, 재료대별도)</td>
                                <td> 1,500,000 </td>
                                <td> 1,500,000</td>
                                <td> 2,000,000</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>검사료</td>
                                <td>D6801086Z</td>
                                <td>STD PCR(6종)</td>
                                <td>STD PCR(6종)</td>
                                <td> 80,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>검사료</td>
                                <td>D6802086Z</td>
                                <td>STD PCR(12종)</td>
                                <td>STD PCR(12종)</td>
                                <td> 100,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>검사료</td>
                                <td>D6802086Z</td>
                                <td>STD PCR(7종)</td>
                                <td>STD PCR(7종)</td>
                                <td> 100,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>검사료</td>
                                <td>FZ672</td>
                                <td>호기산화질소 측정</td>
                                <td>호기산화질소 측정</td>
                                <td> 55,000 </td>
                                <td> 45,000 </td>
                                <td> 55,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        

        
        <div className={activeTab === "tab04" ? "cont_area active_cont" : "cont_area"} id="tab04">
            <div className="h_table">
                <p className="table_label">자기공명영상진단료(MRI)</p>
                <div className="m_scroll wd800">
                    <table>
                        <caption>자기공명영상진단료(MRI) 비용표</caption>
                        <colgroup>
                            <col style={{ width: '10%' }} />
                            <col style={{ width: '10%' }} />
                            <col style={{ width: '15%' }} />
                            <col style={{ width: '15%' }} />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col" rowSpan={2}>분류</th>
                                <th scope="colgroup" colSpan={2}>진료비용항목</th>
                                <th scope="colgroup" colSpan={6}>항목별 가격정보(단위:원)</th>
                                <th scope="col" rowSpan={2}>특이사항</th>
                            </tr>
                            <tr>
                                <th scope="col" className="t_bd_l">청구코드</th>
                                <th scope="col">명칭</th>
                                <th scope="col">구분</th>
                                <th scope="col">비용</th>
                                <th scope="col">최저비용</th>
                                <th scope="col">최고비용</th>
                                <th scope="col">치료재료대 <br />포함여부</th>
                                <th scope="col">약제비 <br />포함여부</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>뇌</td>
                                <td>HE1010001</td>
                                <td>일반</td>
                                <td>B-MRI</td>
                                <td> 450,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>뇌</td>
                                <td>HI201</td>
                                <td>조영제 주입 전·후 촬영 판독</td>
                                <td>B-MRI<br />+ 조영제</td>
                                <td> 600,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>뇌</td>
                                <td></td>
                                <td>B-MRI<br />+ 조영제 + MRA</td>
                                <td>B-MRI<br />+ 조영제 + MRA</td>
                                <td> 750,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>뇌</td>
                                <td></td>
                                <td>B-MRI + Diff</td>
                                <td>B-MRI + Diff</td>
                                <td> 600,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>뇌</td>
                                <td></td>
                                <td>B-MRI + Diff + MRA</td>
                                <td>B-MRI + Diff + MRA</td>
                                <td> 750,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>뇌</td>
                                <td></td>
                                <td>B-MRI + MRA +<br />N.Angio</td>
                                <td>B-MRI + MRA +<br />N.Angio</td>
                                <td> 800,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>뇌</td>
                                <td></td>
                                <td>B-MRA + N. Angio</td>
                                <td>B-MRA + N. Angio</td>
                                <td> 650,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>뇌</td>
                                <td></td>
                                <td>B-MRI+Diff+MRA+N.Angio</td>
                                <td>B-MRI+Diff+MRA+N.Angio</td>
                                <td> 900,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>뇌</td>
                                <td></td>
                                <td>B-MRI+MRA</td>
                                <td>B-MRI+MRA</td>
                                <td> 650,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>뇌</td>
                                <td></td>
                                <td>B-MRI+Diff + 조영제</td>
                                <td>B-MRI+Diff + 조영제</td>
                                <td> 700,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>뇌</td>
                                <td></td>
                                <td>B-MRI + Diff + 조영제 +<br />MRA</td>
                                <td>B-MRI + Diff + 조영제 +<br />MRA</td>
                                <td> 850,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>뇌</td>
                                <td></td>
                                <td>B-MRI+조영제+MRA+N.Angio</td>
                                <td>B-MRI+조영제+MRA+N.Angio</td>
                                <td> 900,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>뇌</td>
                                <td></td>
                                <td>B-MRI+Diff+조영제+MRA+N.Angio</td>
                                <td>B-MRI+Diff+조영제+MRA+N.Angio</td>
                                <td> 1,000,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>부비동</td>
                                <td>HI104</td>
                                <td>일반</td>
                                <td>PNS<br />MRI</td>
                                <td> 500,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>부비동</td>
                                <td>HI204</td>
                                <td>조영제 주입 전·후 촬영 판독</td>
                                <td>PNS MRI(조영제)</td>
                                <td> 600,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>두경부-안와</td>
                                <td>HI1050001</td>
                                <td>일반</td>
                                <td>Orbit<br />MRI</td>
                                <td> 500,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>두경부-안와</td>
                                <td>HI205</td>
                                <td>조영제 주입 전·후 촬영 판독</td>
                                <td>Orbit MRI + 조영제</td>
                                <td> 600,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>두경부-측두골</td>
                                <td>HI106</td>
                                <td>일반</td>
                                <td>Temporal<br />bone MRI</td>
                                <td> 500,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>두경부-측두골</td>
                                <td>HI206</td>
                                <td>조영제 주입 전·후 촬영 판독</td>
                                <td>Temporal bone MRI +<br />조영제</td>
                                <td> 600,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>두경부-경부 </td>
                                <td>HI108</td>
                                <td>일반</td>
                                <td>Neck MRI</td>
                                <td> 500,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>두경부-경부 </td>
                                <td>HI208</td>
                                <td>조영제 주입 전·후 촬영 판독</td>
                                <td>Neck MRI +조영제</td>
                                <td> 600,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>복부-복부</td>
                                <td>HI127</td>
                                <td>일반</td>
                                <td>Abd(L.P.K)MRI</td>
                                <td> 530,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>복부-복부</td>
                                <td></td>
                                <td>Abd(L.P.K) MRI+<br />Dyna(primo)</td>
                                <td>Abd(L.P.K) MRI+<br />Dyna(primo)</td>
                                <td> 830,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>복부-복부</td>
                                <td>HI227</td>
                                <td>조영제 주입 전·후 촬영 판독</td>
                                <td>Abd(L.P.K)MRI+조영제</td>
                                <td> 630,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>복부-복부</td>
                                <td></td>
                                <td>Abd(L.P.K)MRI +<br />Dyna(조영제)</td>
                                <td>Abd(L.P.K)MRI +<br />Dyna(조영제)</td>
                                <td> 930,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>복부-복부</td>
                                <td></td>
                                <td>Abd(L.P.K)MRI+Dyna(조영제)<br />+ MRCP</td>
                                <td>Abd(L.P.K)MRI+Dyna(조영제)<br />+ MRCP</td>
                                <td> 980,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>복부-복부</td>
                                <td></td>
                                <td>Abd(L.P.K)MRI+Dyna(primo)<br />+ MRCP</td>
                                <td>Abd(L.P.K)MRI+Dyna(primo)<br />+ MRCP</td>
                                <td> 1,050,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>복부-골반</td>
                                <td>HI1280001</td>
                                <td>일반</td>
                                <td>Pelvis(bone) MRI</td>
                                <td> 530,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>복부-골반</td>
                                <td>HI2280001</td>
                                <td>조영제 주입 전·후 촬영 판독</td>
                                <td>Pelvis(bone) MRI +<br />조영제</td>
                                <td> 630,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>복부-담췌관</td>
                                <td>HE1330001</td>
                                <td>일반</td>
                                <td>Abd MRCP</td>
                                <td> 530,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>혈관-뇌혈관</td>
                                <td>HE1350001</td>
                                <td>일반</td>
                                <td>B-MRA</td>
                                <td> 500,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>척추-경추</td>
                                <td>HE1090000</td>
                                <td>일반</td>
                                <td>C-Spine MRI</td>
                                <td> 530,000 </td>
                                <td> 530,000 </td>
                                <td> 630,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>척추-경추</td>
                                <td>HE2090000</td>
                                <td>조영제 주입 전·후 촬영 판독</td>
                                <td>C-Spine MRI +조영제</td>
                                <td> 630,000 </td>
                                <td> 630,000 </td>
                                <td> 730,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>척추-흉추</td>
                                <td>HI1100000</td>
                                <td>일반</td>
                                <td>T-Spine MRI</td>
                                <td> 530,000 </td>
                                <td> 480,000 </td>
                                <td> 580,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>척추-흉추</td>
                                <td>HI2100000</td>
                                <td>조영제 주입 전·후 촬영 판독</td>
                                <td>T-Spine MRI+조영제</td>
                                <td> 630,000 </td>
                                <td> 580,000 </td>
                                <td> 680,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>척추-요천추</td>
                                <td>HI1110000</td>
                                <td>일반</td>
                                <td>L-Spine MRI</td>
                                <td> 530,000 </td>
                                <td> 480,000 </td>
                                <td> 580,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>척추-요천추</td>
                                <td>HI2110000</td>
                                <td>조영제 주입 전·후 촬영 판독</td>
                                <td>L-Spine MRI+조영제</td>
                                <td> 630,000 </td>
                                <td> 580,000 </td>
                                <td> 680,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>전척추</td>
                                <td>HI1130000</td>
                                <td></td>
                                <td>Whole body Spine MRI</td>
                                <td> 930,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>근골격계-견관절</td>
                                <td>HE1150000</td>
                                <td>일반</td>
                                <td>Shoulder MRI </td>
                                <td> 530,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>근골격계-견관절</td>
                                <td>XHE215D</td>
                                <td>조영제 주입 전·후 촬영 판독</td>
                                <td>Shoulder MRI<br />+조영제 </td>
                                <td> 630,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>근골격계-견관절</td>
                                <td>HE1420000</td>
                                <td>관절조영자기공명영상진단</td>
                                <td>Arthro.(Shoulder/Elbow/Wrist)<br />(LT)</td>
                                <td> 530,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>근골격계-주관절</td>
                                <td>HE1160000</td>
                                <td>일반</td>
                                <td>Elbow MRI </td>
                                <td> 530,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>근골격계-주관절</td>
                                <td>XHE216A</td>
                                <td>조영제 주입 전·후 촬영 판독</td>
                                <td>Elbow MRI +조영제 (LT)</td>
                                <td> 630,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>근골격계-수관절</td>
                                <td>HE1170000</td>
                                <td>일반</td>
                                <td>Wrist MRI</td>
                                <td> 530,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>근골격계-수관절</td>
                                <td>XHE217A</td>
                                <td>조영제 주입 전·후 촬영 판독</td>
                                <td>Wrist MRI + 조영제</td>
                                <td> 630,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>근골격계-고관절</td>
                                <td>HE1180000</td>
                                <td>일반</td>
                                <td>Hip MRI</td>
                                <td> 530,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>근골격계-고관절</td>
                                <td>XHE218A</td>
                                <td>조영제 주입 전·후 촬영 판독</td>
                                <td>Hip MRI + 조영제</td>
                                <td> 630,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>근골격계-천장골관절</td>
                                <td>HE1190000</td>
                                <td>일반</td>
                                <td>Sacrum MRI</td>
                                <td> 530,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>근골격계-천장골관절</td>
                                <td>XHE219A</td>
                                <td>조영제 주입 전·후 촬영 판독</td>
                                <td>Sacrum MRI + 조영제</td>
                                <td> 630,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>근골격계-슬관절</td>
                                <td>HE1200000</td>
                                <td>일반</td>
                                <td>Knee MRI</td>
                                <td> 530,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>근골격계-슬관절</td>
                                <td>XHE220A</td>
                                <td>조영제 주입 전·후 촬영 판독</td>
                                <td>Knee MRI + 조영제</td>
                                <td> 630,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>근골격계-발목관절</td>
                                <td>HE1210000</td>
                                <td>일반</td>
                                <td>Ankle MRI </td>
                                <td> 530,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>근골격계-발목관절</td>
                                <td>XHE221A</td>
                                <td>조영제 주입 전·후 촬영 판독</td>
                                <td>Ankle MRI + 조영제</td>
                                <td> 630,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>근골격계-관절외 상지</td>
                                <td>HE1220000</td>
                                <td>일반</td>
                                <td>Upper extremity MRI</td>
                                <td> 530,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>근골격계-관절외 상지</td>
                                <td>HE222J</td>
                                <td>근골격계-관절외<br />상지[조영제주입전.후]</td>
                                <td>Upper extremity MRI<br />+조영제</td>
                                <td> 630,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>근골격계-관절외 하지</td>
                                <td>HE1230000</td>
                                <td>일반</td>
                                <td>Lower extremity MRI</td>
                                <td> 530,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>근골격계-관절외 하지</td>
                                <td>HE223D</td>
                                <td>근골격계-관절외<br />하지[조영제주입전.후]</td>
                                <td>Lower<br />extremity MRI +조영제</td>
                                <td> 630,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>흉부</td>
                                <td>HI125</td>
                                <td>Chest wall MRI</td>
                                <td>Chest wall MRI</td>
                                <td> 530,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>복부-전립선</td>
                                <td>XHE119A</td>
                                <td>복부- Prostate </td>
                                <td>복부- Prostate </td>
                                <td> 480,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>혈관</td>
                                <td>HI135</td>
                                <td>뇌혈관[일반]</td>
                                <td>B-MRA</td>
                                <td> 450,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>자기공명영상진단료<br /><br />&nbsp;&nbsp;(MRI-특수검사)</td>
                                <td>HF101001</td>
                                <td>확산</td>
                                <td>MRI-Diffusion</td>
                                <td> 250,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        

        
        <div className={activeTab === "tab05" ? "cont_area active_cont" : "cont_area"} id="tab05">
            <div className="h_table">
                <p className="table_label">재증명 수수료</p>
                <div className="m_scroll wd800">
                    <table>
                        <caption>재증명 수수료 비용표</caption>
                        <colgroup>
                            <col style={{ width: '10%' }} />
                            <col style={{ width: '10%' }} />
                            <col style={{ width: '15%' }} />
                            <col style={{ width: '15%' }} />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col" rowSpan={2}>분류</th>
                                <th scope="colgroup" colSpan={2}>진료비용항목</th>
                                <th scope="colgroup" colSpan={6}>항목별 가격정보(단위:원)</th>
                                <th scope="col" rowSpan={2}>특이사항</th>
                            </tr>
                            <tr>
                                <th scope="col" className="t_bd_l">청구코드</th>
                                <th scope="col">명칭</th>
                                <th scope="col">구분</th>
                                <th scope="col">비용</th>
                                <th scope="col">최저비용</th>
                                <th scope="col">최고비용</th>
                                <th scope="col">치료재료대 <br />포함여부</th>
                                <th scope="col">약제비 <br />포함여부</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="tg-uzvj">진단서</td>
                                <td className="tg-uzvj"></td>
                                <td className="tg-uzvj">진단서(일반진단서)</td>
                                <td className="tg-uzvj">일반 진단서</td>
                                <td className="tg-7btt"> 20,000 </td>
                                <td className="tg-uzvj"></td>
                                <td className="tg-uzvj"></td>
                                <td className="tg-uzvj"></td>
                                <td className="tg-uzvj"></td>
                                <td className="tg-uzvj">의료법 시행규칙 제9조<br />[서식]</td>
                            </tr>
                            <tr>
                                <td>진단서</td>
                                <td></td>
                                <td>영문진단서</td>
                                <td>영문서식</td>
                                <td> 20,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>의료법 시행규칙 제9조 [서식]</td>
                            </tr>
                            <tr>
                                <td>소견서</td>
                                <td></td>
                                <td>소견서</td>
                                <td>진단목적 소견서</td>
                                <td> 20,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>의료법 시행규칙 제9조 [서식]</td>
                            </tr>
                            <tr>
                                <td>소견서</td>
                                <td></td>
                                <td>자문료</td>
                                <td>보험사 보험지급목적 의사 자문료</td>
                                <td> 50,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>의료법 시행규칙 제9조 [서식]</td>
                            </tr>
                            <tr>
                                <td>확인서</td>
                                <td>PDZ090002</td>
                                <td>입퇴원확인서</td>
                                <td>입퇴원확인서</td>
                                <td> 3,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>의료법 시행규칙 제9조 [서식]</td>
                            </tr>
                            <tr>
                                <td>확인서</td>
                                <td>PDZ090004</td>
                                <td>통원확인서</td>
                                <td>통원확인서</td>
                                <td> 3,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>의료법 시행규칙 제9조 [서식]</td>
                            </tr>
                            <tr>
                                <td>확인서</td>
                                <td></td>
                                <td>진료확인서</td>
                                <td></td>
                                <td> 3,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>의료법 시행규칙 제9조 [서식]</td>
                            </tr>
                            <tr>
                                <td>진단서</td>
                                <td></td>
                                <td>상해진단서</td>
                                <td>전치 3주이상</td>
                                <td> 150,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>의료법 시행규칙 제9조 [서식]</td>
                            </tr>
                            <tr>
                                <td>진단서</td>
                                <td></td>
                                <td>상해진단서</td>
                                <td>전치 3주미만</td>
                                <td> 100,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>의료법 시행규칙 제9조 [서식]</td>
                            </tr>
                            <tr>
                                <td>진단서</td>
                                <td></td>
                                <td>사망진단서</td>
                                <td></td>
                                <td> 10,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>의료법 시행규칙 제10조 [서식6]</td>
                            </tr>
                            <tr>
                                <td>진단서</td>
                                <td></td>
                                <td>시체검안서</td>
                                <td></td>
                                <td> 30,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>의료법 시행규칙 제10조 [서식6]</td>
                            </tr>
                            <tr>
                                <td>진단서</td>
                                <td></td>
                                <td>근로능력평가용 진단서</td>
                                <td></td>
                                <td> 10,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>의료법 시행규칙 제11조 [서식8]</td>
                            </tr>
                            <tr>
                                <td>진단서</td>
                                <td></td>
                                <td>후유장애진단서</td>
                                <td></td>
                                <td> 100,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>의료법 시행규칙 제11조 [서식7]</td>
                            </tr>
                            <tr>
                                <td>진단서</td>
                                <td></td>
                                <td>장애진단서</td>
                                <td>동사무소 장애진단서</td>
                                <td> 15,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>장애인복지법시행규칙 제3조 별지[서식<br />3]</td>
                            </tr>
                            <tr>
                                <td>진단서</td>
                                <td></td>
                                <td>국민연금장애심사용 진단서</td>
                                <td></td>
                                <td> 15,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>국민연금법 시행규칙 제28조 [서식<br />21]</td>
                            </tr>
                            <tr>
                                <td>진단서</td>
                                <td></td>
                                <td>병사용진단서</td>
                                <td></td>
                                <td> 20,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>병역법 시행규칙 제87조, 95조<br />[서식 106]</td>
                            </tr>
                            <tr>
                                <td>증명서</td>
                                <td></td>
                                <td>장애인증명서</td>
                                <td>소득세법 장애인증명서</td>
                                <td> 1,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>검사서</td>
                                <td></td>
                                <td>채용신체검사서</td>
                                <td>공무원채용 신체검사서</td>
                                <td> 40,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>검사서</td>
                                <td></td>
                                <td>채용신체검사서</td>
                                <td>일반채용 신체검사서</td>
                                <td> 30,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>추정서</td>
                                <td></td>
                                <td>항후치료비 추정서</td>
                                <td>천만원미만</td>
                                <td> 50,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>추정서</td>
                                <td></td>
                                <td>항후치료비 추정서</td>
                                <td>천만원이상</td>
                                <td> 100,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>사본발급</td>
                                <td></td>
                                <td>사본발급</td>
                                <td>보험사<br />보험지급목적 으로 보험사 직원이 <br /><br />&nbsp;&nbsp;환자 동의를 얻어
                                    발급하는 경우<br /> (기본 10매 까지) </td>
                                <td> 10,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>사본발급</td>
                                <td></td>
                                <td>사본발급</td>
                                <td>보험사<br />보험지급목적 으로 보험사 직원이 <br /><br />&nbsp;&nbsp;환자 동의를 얻어
                                    발급하는 경우 <br />(추가1장당) </td>
                                <td> 100 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>사본발급</td>
                                <td></td>
                                <td>진료기록영상 (CD)</td>
                                <td></td>
                                <td> 10,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>사본발급</td>
                                <td></td>
                                <td>제증명 사본</td>
                                <td>기존 제증명 복사 및 재발급시 추가<br />1통당</td>
                                <td> 1,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>사본발급</td>
                                <td></td>
                                <td>보험회사 의사자문료</td>
                                <td>보험회사 의사자문료</td>
                                <td> 50,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        

        
        <div className={activeTab === "tab06" ? "cont_area active_cont" : "cont_area"} id="tab06">
            <div className="h_table">
                <p className="table_label">치료 재료</p>
                <div className="m_scroll wd800">
                    <table>
                        <caption>치료 재료 비용표</caption>
                        <colgroup>
                            <col style={{ width: '10%' }} />
                            <col style={{ width: '10%' }} />
                            <col style={{ width: '15%' }} />
                            <col style={{ width: '15%' }} />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col" rowSpan={2}>분류</th>
                                <th scope="colgroup" colSpan={2}>진료비용항목</th>
                                <th scope="colgroup" colSpan={6}>항목별 가격정보(단위:원)</th>
                                <th scope="col" rowSpan={2}>특이사항</th>
                            </tr>
                            <tr>
                                <th scope="col" className="t_bd_l">청구코드</th>
                                <th scope="col">명칭</th>
                                <th scope="col">구분</th>
                                <th scope="col">비용</th>
                                <th scope="col">최저비용</th>
                                <th scope="col">최고비용</th>
                                <th scope="col">치료재료대 <br />포함여부</th>
                                <th scope="col">약제비 <br />포함여부</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> 피부 봉합제 </td>
                                <td> BM5006RQ </td>
                                <td>*NEO<br />SKIN-D(네오스킨디<br />1g)-창상봉합제</td>
                                <td></td>
                                <td> 60,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 피부 봉합제 </td>
                                <td> BM5000SQ </td>
                                <td>*Surgicon(써지콘<br />1.2g)-창상봉합제</td>
                                <td></td>
                                <td> 99,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 멸균소독제 </td>
                                <td> BM5013CD </td>
                                <td>OPSITE(post-op)<br />6.5x5cm</td>
                                <td></td>
                                <td> 2,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 멸균소독제 </td>
                                <td></td>
                                <td>OPSITE(post-op)<br />5x8.5cm</td>
                                <td></td>
                                <td> 3,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 창상관리제 </td>
                                <td> BM5002JQ </td>
                                <td>메포레(2mm) 6x7</td>
                                <td></td>
                                <td> 300 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 창상관리제 </td>
                                <td> BM5002JQ </td>
                                <td>메포레(2mm) 9x10</td>
                                <td></td>
                                <td> 500 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 창상관리제 </td>
                                <td> BM5002JQ </td>
                                <td>메포레(2mm) 9x15</td>
                                <td></td>
                                <td> 600 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 창상관리제 </td>
                                <td> BM5002JQ </td>
                                <td>메포레(2mm) 9*25</td>
                                <td></td>
                                <td> 1,200 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 창상관리제 </td>
                                <td> BM5001SH </td>
                                <td> *프로실(4.25g)- PROSIL(스틱형) </td>
                                <td></td>
                                <td> 50,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 창상관리제 </td>
                                <td> BJ1002BI </td>
                                <td> 성우픽스아이브이(SW FIX IV)(픽스덤) </td>
                                <td></td>
                                <td> 7,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 처치 재료대 </td>
                                <td> BJ1008CO </td>
                                <td>HOS CLIP (foley 고정)</td>
                                <td></td>
                                <td> 10,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 처치 재료대 </td>
                                <td> BM5109CD </td>
                                <td>(1cm단가)픽스롤(폭10cm/4inch)</td>
                                <td></td>
                                <td> 50 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 처치 재료대 </td>
                                <td> BM5109CD </td>
                                <td>(1cm단가)픽스롤(폭10cm/6inch)</td>
                                <td></td>
                                <td> 70 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 처치 재료대 </td>
                                <td> BM5109CD </td>
                                <td>(1cm단가)픽스롤(폭5cm)</td>
                                <td></td>
                                <td> 50 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 처치 재료대 </td>
                                <td> BK7111DQ </td>
                                <td> (1통 처방용) 페하하프트(4cm) </td>
                                <td></td>
                                <td> 3,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 처치 재료대 </td>
                                <td> BK7111DQ </td>
                                <td> (1CM 단가) 페하하프트(8cm) </td>
                                <td></td>
                                <td> 20 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 처치 재료대 </td>
                                <td> BK7111DQ </td>
                                <td> (1CM 단가) 페하하프트(6cm) </td>
                                <td></td>
                                <td> 18 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 처치 재료대 </td>
                                <td> BK7111DQ </td>
                                <td> (1CM 단가) 페하하프트(4cm) </td>
                                <td></td>
                                <td> 15 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 처치 재료대 </td>
                                <td>681800010</td>
                                <td> (법적비급여)박티그라 10*10 </td>
                                <td></td>
                                <td> 3,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 처치 재료대 </td>
                                <td> BK7101EA </td>
                                <td> 코반(4인치)-1CM단가 </td>
                                <td></td>
                                <td> 40 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 처치 재료대 </td>
                                <td> BK7101EA </td>
                                <td> 코반(2인치)-1CM단가 </td>
                                <td></td>
                                <td> 20 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 처치 재료대 </td>
                                <td> BK7101EA </td>
                                <td> 코반(1인치)-1CM단가 </td>
                                <td></td>
                                <td> 10 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 처치 재료대 </td>
                                <td> BK7101EA </td>
                                <td> 코반(3인치)-1CM단가 </td>
                                <td></td>
                                <td> 30 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 처치 재료대 </td>
                                <td> BK7000BO </td>
                                <td>ESO BAND 6 inch<br />(스터키넷)</td>
                                <td></td>
                                <td> 30,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 처치 재료대 </td>
                                <td> BK7001ZC </td>
                                <td>MEDIAS O S (스터키넷)</td>
                                <td></td>
                                <td> 30,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 수술재료 </td>
                                <td> BM5001GA </td>
                                <td>Secuex H(ABGA접착 부직포)</td>
                                <td></td>
                                <td> 3,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 수술재료 </td>
                                <td> BK7001QI </td>
                                <td>Tubifast</td>
                                <td></td>
                                <td> 12,000 </td>
                                <td> 12,000 </td>
                                <td> 14,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 수술재료 </td>
                                <td> BK7001VB </td>
                                <td>T-Band(S사이즈) (티밴드)</td>
                                <td></td>
                                <td> 44,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 수술재료 </td>
                                <td> BK7001VB </td>
                                <td>T-Band(L사이즈) (티밴드)</td>
                                <td></td>
                                <td> 44,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 수술재료 </td>
                                <td> BM5030HF </td>
                                <td>큐라패드 10x10cm</td>
                                <td></td>
                                <td> 2,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 수술재료 </td>
                                <td> BM5001YU </td>
                                <td>큐라패드 20x40cm</td>
                                <td></td>
                                <td> 7,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 수술재료 </td>
                                <td> BJ1000VO </td>
                                <td>CARE-FIX(수술커버)</td>
                                <td></td>
                                <td> 15,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 수술재료 </td>
                                <td> BC1215HT </td>
                                <td>EZ RAP BRACE(이지랩)</td>
                                <td></td>
                                <td> 99,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 수술재료 </td>
                                <td> BJ1000IP </td>
                                <td>SUTION FIX(수술용 튜브)</td>
                                <td></td>
                                <td> 10,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 수술재료 </td>
                                <td> BJ1000VO </td>
                                <td>CARE-FIX(수술커버)</td>
                                <td></td>
                                <td> 7,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 수술재료 </td>
                                <td> BJ1000ZC </td>
                                <td>보비클리너 DEL</td>
                                <td></td>
                                <td> 5,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 수술재료 </td>
                                <td> BJ1001ZC </td>
                                <td>PIL 마킹펜</td>
                                <td></td>
                                <td> 8,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 수술재료 </td>
                                <td> BM2600VT </td>
                                <td>콜 힐업 0.6 ML</td>
                                <td></td>
                                <td> 110,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 수술재료 </td>
                                <td> BM2601MS </td>
                                <td>마이젠(MYGEN) 콜라겐6%</td>
                                <td></td>
                                <td> 250,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 수술재료 </td>
                                <td></td>
                                <td>(1cc)DEMIOS-디미오스</td>
                                <td></td>
                                <td> 200,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 주사 재료 </td>
                                <td> BJ1000WK </td>
                                <td>IV FIX(이지가드)</td>
                                <td></td>
                                <td> 3,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> 주사 재료 </td>
                                <td> BM5013BL </td>
                                <td>*(주사용)에드플렉스(슈퍼크린)</td>
                                <td></td>
                                <td> 1,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>보조기</td>
                                <td>VM061</td>
                                <td>L/S- SLING</td>
                                <td>L/S- SLING</td>
                                <td> 132,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>보조기</td>
                                <td>VM062</td>
                                <td>8자붕대</td>
                                <td>8자붕대</td>
                                <td> 8,800 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            
                            
                            <tr>
                                <td>압박고정용(탄력반창고)</td>
                                <td>BK7001KR</td>
                                <td>CLAROFAST</td>
                                <td>CLAROFAST</td>
                                <td> 120,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>보조기</td>
                                <td></td>
                                <td>(RED)세라밴드</td>
                                <td>(RED)세라밴드</td>
                                <td> 10,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>보조기</td>
                                <td></td>
                                <td>(GREEN)세라밴드</td>
                                <td>(GREEN)세라밴드</td>
                                <td> 10,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>보조기</td>
                                <td></td>
                                <td>(RED)HAND(공)</td>
                                <td>(RED)HAND(공)</td>
                                <td> 10,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>보조기</td>
                                <td></td>
                                <td>Shoulder<br />pulley(풀리)</td>
                                <td>Shoulder pulley(풀리)</td>
                                <td> 30,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>보조기</td>
                                <td></td>
                                <td>(YELLOW)세라밴드</td>
                                <td>(YELLOW)세라밴드</td>
                                <td> 10,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>기타 관절치환용 재료(골결손대체용)</td>
                                <td>BE4301BW</td>
                                <td>TRIATHLON FEMORAL CONE AUGMENT</td>
                                <td>TRIATHLON FEMORAL CONE AUGMENT</td>
                                <td> 1,900,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>드레싱 고정류</td>
                                <td>BM5102SZ</td>
                                <td>이지픽스아이</td>
                                <td>이지픽스아이</td>
                                <td> 3,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>드레싱 고정류</td>
                                <td>BM5108JN</td>
                                <td>비젼슈퍼엑스에스밴드</td>
                                <td>비젼슈퍼엑스에스밴드</td>
                                <td> 5,000 </td>
                                <td> 5,000 </td>
                                <td> 7,000</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>드레싱 고정류</td>
                                <td>BM5110BL</td>
                                <td>SUPER FIX</td>
                                <td>SUPER FIX</td>
                                <td>  10,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>드레싱 고정류</td>
                                <td>BM5106EM</td>
                                <td>3M TRANSPORE WHITE SURGICAL TAPE</td>
                                <td>3M TRANSPORE WHITE (트랜스포머 화이트 써지컬테이프)</td>
                                <td> 2,500 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>드레싱 고정류</td>
                                <td>BM5105SS</td>
                                <td>SSFIX(15*120cm)</td>
                                <td>SSFIX(15*120cm)</td>
                                <td> 10,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>드레싱 고정류</td>
                                <td>BM5105SS</td>
                                <td>SSFIX(15*200cm)</td>
                                <td>SSFIX(15*200cm)</td>
                                <td> 10,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>드레싱 고정류</td>
                                <td>BM510RM</td>
                                <td>ORSAY</td>
                                <td>ORSAY</td>
                                <td> 35,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>드레싱 고정류</td>
                                <td>BK7000VW</td>
                                <td>RAPBAND</td>
                                <td>RAPBAND</td>
                                <td> 150,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>자착성(탄력)붕대</td>
                                <td>BM7100IP</td>
                                <td>S-BAND</td>
                                <td>S-BAND</td>
                                <td> 39,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>비침습적 지혈용(패드형)</td>
                                <td>K9206008</td>
                                <td>슈퍼크린 SUPER CLEAN</td>
                                <td>슈퍼크린 SUPER CLEAN</td>
                                <td> 1,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>척추경막외 유착방지제</td>
                                <td>BF0100AJ</td>
                                <td>ARTQ, COVER SEAL</td>
                                <td>ARTQ, COVER SEAL-유착방지제</td>
                                <td> 370,000</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>척추경막외 유착방지제</td>
                                <td>BF0101WC</td>
                                <td>큐블럭(QBLOCK), 3.5.ML</td>
                                <td>큐블럭(QBLOCK), 3.5.ML</td>
                                <td> 700,000</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>혈관내영상카테타</td>
                                <td>BJ4505BM</td>
                                <td>OPTICROSS HD CORONARY IMAGING CATHETER</td>
                                <td>OPTICROSS HD CORONARY IMAGING CATHETER</td>
                                <td> 1,760,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>유방 생검용</td>
                                <td>BM0001EE</td>
                                <td>MAMMOTOME SYSTEM(PROBE &amp; VACUUM SET)</td>
                                <td>맘모톰 MAMMOTOME SYSTEM(PROBE &amp; VACUUM SET)</td>
                                <td> 600,000</td>
                                <td>500,000</td>
                                <td>600,000</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>척추경막외 유착방지제</td>
                                <td>BM2101QT</td>
                                <td>MEDICLORE</td>
                                <td>유착방지제 메디클로</td>
                                <td> 250,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>		
                            <tr>
                                <td>치료재료</td>
                                <td>BC0106ED</td>
                                <td>PEDI-STICK PLUS</td>
                                <td>PEDI-STICK PLUS</td>
                                <td> 2,000,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>		
                            <tr>
                                <td>치료재료</td>
                                <td>BC0101ED</td>
                                <td>EXFUSE-GEL</td>
                                <td>EXFUSE-GEL</td>
                                <td> 500,000 </td>
                                <td> 500,000 </td>
                                <td> 1,000,000 </td><td></td><td></td><td></td>
                            </tr>		
                            <tr>
                                <td>치료재료</td>
                                <td>BE4301BW</td>
                                <td>TRIATHLON FEMORAL<br /> CONE AUGMENT</td>
                                <td>TRIATHLON FEMORAL<br /> CONE AUGMENT</td>
                                <td> 2,090,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>		
                            <tr>
                                <td>치료재료</td>
                                <td>BC1201EF</td>
                                <td>GIPSHOE</td>
                                <td>반 고정형 깁스(깁슈)</td>
                                <td> 110,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>		
                            <tr>
                                <td>치료재료</td>
                                <td>BC1203YF</td>
                                <td>문정소프트칼라</td>
                                <td>토마스칼라 (Soft Collar) </td>
                                <td> 11,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>치료재료</td>
                                <td>BK7000RL</td>
                                <td>아코반밴드</td>
                                <td>아코반밴드 AquoBan </td>
                                <td> 39,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>치료재료</td>
                                <td>BK7000VB</td>
                                <td>BBAND</td>
                                <td>BBAND with pus pen</td>
                                <td> 27,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>압박고정용 (탄력반창고)</td>
                                <td>BK7000ZC</td>
                                <td>MEDIAS T</td>
                                <td>MEDIAS T</td>
                                <td> 9,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>압박고정용 (탄력반창고)</td>
                                <td>BK7002ZC</td>
                                <td>MEDIAS C</td>
                                <td>MEDIAS C</td>
                                <td> 11,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>치료재료</td>
                                <td>BK7004ZC</td>
                                <td>DELL</td>
                                <td>보비클리너 DELL</td>
                                <td> 6,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>치료재료</td>
                                <td>BK7101GQ</td>
                                <td>SPOBAND</td>
                                <td>SPOBAND SET - 스포밴드</td>
                                <td> 38,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>압박고정용 (탄력반창고)</td>
                                <td>BK7100KB</td>
                                <td>압박용 밴드 K-B. W</td>
                                <td>압박용 밴드 K-B. W</td>
                                <td> 132,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>치료재료</td>
                                <td>BK7100VO</td>
                                <td>CARE BANDAGE</td>
                                <td>CARE-BANDAGE</td>
                                <td> 17,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>치료재료</td>
                                <td>BK7104YU</td>
                                <td>SOOSUNG POVIS STERILE FLEXI </td>
                                <td>SOOSUNG POVIS STERILE FLEXI 4cm*4cm</td>
                                <td> 4,500 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>치료재료</td>
                                <td>BK7104YU</td>
                                <td>SOOSUNG POVIS STERILE FLEXI </td>
                                <td>SOOSUNG POVIS STERILE FLEXI 10cm*4cm</td>
                                <td> 5,500 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>치료재료</td>
                                <td>BK7105RL</td>
                                <td>EIDOS SELF-ADHERENT WARP *10CM </td>
                                <td>EIDOS SELF-ADHERENT WARP *10CM</td>
                                <td> 15,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>치료재료</td>
                                <td>BM0001EE</td>
                                <td>MAMMOTOME SYSTEM(PROBE &amp; VACUUM SET)</td>
                                <td>맘모톰 MAMMOTOME SYSTEM(PROBE &amp; VACUUM SET)</td>
                                <td> 60,000 </td>
                                <td> 50,000 </td><td> 60,000 </td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>치료재료</td>
                                <td>BM1200VO</td>
                                <td>CARE BOARD</td>
                                <td>CARE BOARD</td>
                                <td>  33,000  </td>
                                <td>  22,000  </td>
                                <td>  33,000  </td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>치료재료</td>
                                <td>BM2004SZ</td>
                                <td>EZ-PLUS SILICONE TAPE</td>
                                <td>EZ-PLUS SILICONE TAPE</td>
                                <td>  77,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>치료재료</td>
                                <td>BM5000SO</td>
                                <td>SURGI GEL</td>
                                <td>SURGI GEL(써지겔) (30g)</td>
                                <td>  80,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>치료재료</td>
                                <td>BM5002QT</td>
                                <td>이지듀MD 보습크림</td>
                                <td>이지듀MD 보습크림</td>
                                <td>  38,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>치료재료</td>
                                <td>BM5100NG</td>
                                <td>큐어셋</td>
                                <td>큐어셋</td>
                                <td>  22,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td> 드레싱 고정류</td>
                                <td> BM5103WI </td>
                                <td>드레싱픽스 (D-SET)</td>
                                <td>드레싱픽스 (D-SET)</td>
                                <td> 2,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>치료재료</td>
                                <td>BM5101ZN</td>
                                <td>MASON FZ</td>
                                <td>MASON FZ &amp; ABGA SYRINGE / 3CC 22G</td>
                                <td>  5,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>동종진피(IMPLANT용-유방재건술용 제외)</td>
                                <td>BTS01032</td>
                                <td>ALLOMEND</td>
                                <td>ALLOMEND</td>
                                <td>  2,200,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>치료재료</td>
                                <td>K9205012</td>
                                <td>EZ-CLOT</td>
                                <td>EZ-CLOT</td>
                                <td>  48,560  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>치료재료</td>
                                <td></td>
                                <td>Shoulder pulley(풀리)</td>
                                <td>Shoulder pulley(풀리)</td>
                                <td>  30,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>자착성(탄력)붕대</td>
                                <td>BK7104RL</td>
                                <td>FRESCO COHESIVE BAND-COTTON</td>
                                <td>에코밴드 ECOBAND </td>
                                <td>  17,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>상처고정 및 보호용(카테터 고정용 제외)</td>
                                <td>BM2000DC</td>
                                <td>N-FIX</td>
                                <td>N-FIX</td>
                                <td>  14,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>생물학적 드레싱류</td>
                                <td>M3300820</td>
                                <td>RAPIDERM</td>
                                <td>RAPIDERM</td>
                                <td>  276,880  </td>
                                <td></td><td></td><td></td><td></td><td>심사기준초과</td>
                            </tr>
                            <tr>
                                <td>척추극돌기간고정용</td>
                                <td>BF0402AW</td>
                                <td>DIAM</td>
                                <td>DIAM</td>
                                <td>  3,700,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>피부보호제 ( 구강연조직 처치시 행위료포함 )</td>
                                <td>BM2004SO</td>
                                <td>큐라겔</td>
                                <td>큐라겔</td>
                                <td>  110,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>시아노아크릴레이트를 이용한 복재정맥폐색</td>
                                <td>BJ4321DU</td>
                                <td>VENASEAL CLOSURE SYSTEM</td>
                                <td>VENASEAL CLOSURE SYSTEM</td>
                                <td>  1,760,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>비침습적 지혈용 치료재료</td>
                                <td>K9205250</td>
                                <td>M-CLOT</td>
                                <td>M-CLOT</td>
                                <td>  80,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>압박고정용 (탄력반창고)</td>
                                <td>BK7001MY</td>
                                <td>토니밴드</td>
                                <td>토니밴드</td>
                                <td>  150,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>고주파정맥내막폐쇄요법용</td>
                                <td>BJ4301DU</td>
                                <td>VNUS CLOSURE FAST</td>
                                <td>VNUS CLOSURE FAST</td>
                                <td>  880,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>수술재료대(동종진피_Implant용)</td>
                                <td>BTS01025</td>
                                <td>ENDERM LINK</td>
                                <td>ENDERM LINK</td>
                                <td>  2,500,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>드레싱고정용</td>
                                <td>BM5101VO</td>
                                <td>EX FIX PLUS B</td>
                                <td>EX FIX PLUS B</td>
                                <td>  10,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>연조직재건용</td>
                                <td>BM2600RH</td>
                                <td>이엔콜(ENCOL), 인콜(INCOL)</td>
                                <td>이엔콜(ENCOL), 인콜(INCOL)</td>
                                <td>  1,100,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>수술재료대</td>
                                <td>BK7102DH</td>
                                <td>PBT BANDAGE</td>
                                <td>PBT BANDAGE</td>
                                <td>  100,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>상처고정 및 보호용</td>
                                <td>BC1200SM</td>
                                <td>NEWSCOM</td>
                                <td>NEWSCOM</td>
                                <td>  45,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>인체조직</td>
                                <td>BTT01197</td>
                                <td>동종진피(INJECT용)</td>
                                <td>동종진피(INJECT용)</td>
                                <td>  240,000  </td>
                                <td>  240,000  </td>
                                <td>  450,000  </td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>인체조직</td>
                                <td>BTS01079</td>
                                <td>MYDERM IMPLANT</td>
                                <td>MYDERM IMPLANT</td>
                                <td>  2,200,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>연조직재건용</td>
                                <td>BM2620RH</td>
                                <td>이엔카티 9%/3cc</td>
                                <td>이엔카티 9%/3cc</td>
                                <td>  3,000,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>동종진피( INJECT용)</td>
                                <td>BTT01126</td>
                                <td>BELLAGEN PLUS, SUREDERM UROGEN PLUS(0.5CC)</td>
                                <td>BELLAGEN PLUS, SUREDERM UROGEN PLUS(0.5CC)</td>
                                <td>  180,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>척추경막외유착방지제</td>
                                <td>BF0100LQ</td>
                                <td>HYVIXEL(3ml)</td>
                                <td>HYVIXEL(3ml)</td>
                                <td>  420,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>상처고정 및 보호용</td>
                                <td>BM2002XV</td>
                                <td>씰리메드실리콘롤테이프</td>
                                <td>씰리메드실리콘롤테이프</td>
                                <td>  25,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>상처고정 및 보호용</td>
                                <td>BM2000JH</td>
                                <td>에스알티오(SRTO)</td>
                                <td>에스알티오(SRTO)</td>
                                <td>  9,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>드레싱고정류</td>
                                <td>BM5101SJ</td>
                                <td>SURGI FXF</td>
                                <td>SURGI FXF</td>
                                <td>  40,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>드레싱고정류</td>
                                <td>BM5101VW</td>
                                <td>AUBAN II</td>
                                <td>AUBAN II</td>
                                <td>  45,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        

        
        <div className={activeTab === "tab07" ? "cont_area active_cont" : "cont_area"} id="tab07">
            <div className="h_table">
                <p className="table_label">약제비 및 치료재료</p>
                <div className="m_scroll wd800">
                    <table>
                        <caption>약제비 및 치료재료 비용표</caption>
                        <colgroup>
                            <col style={{ width: '10%' }} />
                            <col style={{ width: '10%' }} />
                            <col style={{ width: '15%' }} />
                            <col style={{ width: '15%' }} />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col" rowSpan={2}>분류</th>
                                <th scope="colgroup" colSpan={2}>진료비용항목</th>
                                <th scope="colgroup" colSpan={6}>항목별 가격정보(단위:원)</th>
                                <th scope="col" rowSpan={2}>특이사항</th>
                            </tr>
                            <tr>
                                <th scope="col" className="t_bd_l">청구코드</th>
                                <th scope="col">명칭</th>
                                <th scope="col">구분</th>
                                <th scope="col">비용</th>
                                <th scope="col">최저비용</th>
                                <th scope="col">최고비용</th>
                                <th scope="col">치료재료대 <br />포함여부</th>
                                <th scope="col">약제비 <br />포함여부</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>약제비 및<br />치료재료</td>
                                <td>654801740</td>
                                <td>히루니다제</td>
                                <td></td>
                                <td> 110,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>645101690</td>
                                <td>삐독신주</td>
                                <td></td>
                                <td> 700 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>681100241</td>
                                <td>메가그린 주 20ml</td>
                                <td></td>
                                <td> 1,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>662800060</td>
                                <td>플라센텍스주(DNA)</td>
                                <td></td>
                                <td> 50,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>678900996</td>
                                <td>362ML위너프페리주</td>
                                <td></td>
                                <td> 90,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>643604610</td>
                                <td>페라미플루주150mg </td>
                                <td></td>
                                <td> 30,000 </td>
                                <td> 30,000 </td>
                                <td> 60,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>655601681</td>
                                <td>코티소루주100mg(1/병)</td>
                                <td></td>
                                <td> 4,400 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>662501680</td>
                                <td>타스나500mg</td>
                                <td></td>
                                <td> 38 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>642900210</td>
                                <td>레날민정</td>
                                <td></td>
                                <td> 116 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>645701190</td>
                                <td>탄툼베르데네뷸라이저(삼아약품)</td>
                                <td></td>
                                <td> 10,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>648902141</td>
                                <td>지노트로핀주12mg(소마트로핀)_(36I.U/1관)</td>
                                <td></td>
                                <td> 184,042 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>648903161</td>
                                <td>지노트로핀 고퀵 펜주<br />36IU/12mg(1box/5pen)</td>
                                <td></td>
                                <td> 1,042,825 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>650100531</td>
                                <td>솔로탑액140(황산바륨)</td>
                                <td></td>
                                <td> 20 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>650700431</td>
                                <td>엠라5%크림 5g</td>
                                <td></td>
                                <td> 1,200 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>655501931</td>
                                <td>가다실 9<br />프리필드시린지[인유두종바이러스9가<br />(6, 11, 16, 18, 31, 33,
                                    45, 52, 58형)백신(유전자재조합)]_(0.5mL)</td>
                                <td></td>
                                <td> 200,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>657400250</td>
                                <td>성광포비돈요오드액7.5%(성광제약)<br />cc당</td>
                                <td></td>
                                <td> 9 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>659600451</td>
                                <td>타이유프로게스테론주_(0.5g/10mL)</td>
                                <td></td>
                                <td> 10,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>664000321</td>
                                <td>젝스트(성인용)</td>
                                <td></td>
                                <td> 134,933 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>669904600</td>
                                <td>리포라제주1500IU<br />(히알우로니다제)</td>
                                <td></td>
                                <td> 66,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>670500210</td>
                                <td>장티푸스-(경구용3C)백신(지로티프)</td>
                                <td></td>
                                <td> 5,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>672900360</td>
                                <td>생리식염키트주사 250ML</td>
                                <td></td>
                                <td> 5,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>675100031</td>
                                <td>인스틸라젤겔_(6mL)</td>
                                <td></td>
                                <td> 11,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>675100041</td>
                                <td>인스틸라젤겔_(11mL)</td>
                                <td></td>
                                <td> 17,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>676800020</td>
                                <td>트롬보젝 3%주(2ml/앰플)(주사)</td>
                                <td></td>
                                <td> 60,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>681100091</td>
                                <td>지씨비타일이</td>
                                <td></td>
                                <td> 5,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>684900020</td>
                                <td>파이브로베인주3%</td>
                                <td></td>
                                <td> 80,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>696300361</td>
                                <td>다케다알보칠콘센트레이트액(폴리크레줄렌)</td>
                                <td></td>
                                <td> 278 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>696300362</td>
                                <td>다케다알보칠콘센트레이트액(폴리크레줄렌)_(36g/100mL)</td>
                                <td></td>
                                <td> 500 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>696500010</td>
                                <td>레반에이치 주입연고2g/1tube</td>
                                <td></td>
                                <td> 3,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>659901460</td>
                                <td>오라팡정</td>
                                <td></td>
                                <td> 25,200 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>A03900711</td>
                                <td>성광칼라민로숀 100ml</td>
                                <td></td>
                                <td> 50,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>기타</td>
                                <td>노시셉톨겔40ml</td>
                                <td></td>
                                <td> 9,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>기타</td>
                                <td>노시셉톨겔120ml</td>
                                <td></td>
                                <td> 22,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>기타</td>
                                <td>레드-종합영양주사(NS250+푸르설타민+라이넥1@+지씨비타12주)</td>
                                <td></td>
                                <td> 55,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>기타</td>
                                <td>블루-종합영양주사(디펩더벤 50cc<br />+ 지씨멀티오주 + 라이넥 1@)</td>
                                <td></td>
                                <td> 77,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>기타</td>
                                <td>레드플러스-종합영양주사(NS250+아르기닌주+지씨비타12주+라이넥1@)</td>
                                <td></td>
                                <td> 88,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>기타</td>
                                <td>옐로우-종합영양주사(NS250+지씨멀티12주+라이넥1@)</td>
                                <td></td>
                                <td> 66,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>644704701</td>
                                <td>빔스크주(라코사미드)_(0.2g/20mL)</td>
                                <td></td>
                                <td> 35,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>기타</td>
                                <td>니크린크림</td>
                                <td></td>
                                <td> 4,500 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>644101090</td>
                                <td>루골액</td>
                                <td></td>
                                <td> 1,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>684900040</td>
                                <td>파이브로베인1%</td>
                                <td></td>
                                <td> 30,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>643601901</td>
                                <td>헤파빅주(비형간염사람면역글로불린)1밀리리터_(200I.U/1mL)</td>
                                <td></td>
                                <td> 45,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>3Z5201106</td>
                                <td>4가독감(성인 &amp; 36개월이상)</td>
                                <td></td>
                                <td> 40,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>3Z5201106</td>
                                <td>스카이셀플루3가 PFS(SK) 0.5mL</td>
                                <td></td>
                                <td> 30,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>3Z5201502</td>
                                <td>녹십자티디백신프리필드시린지주</td>
                                <td></td>
                                <td> 30,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>3Z5201701</td>
                                <td>프리베나13주</td>
                                <td></td>
                                <td> 120,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>648903941</td>
                                <td>프리베나20주</td>
                                <td></td>
                                <td> 150,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>3Z5202010 </td>
                                <td>아박심160U성인용주</td>
                                <td></td>
                                <td> 80,000</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>3Z5202106 </td>
                                <td>유박스비주 0.5mL</td>
                                <td></td>
                                <td> 20,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>3Z5202107</td>
                                <td>유박스비주 1.0mL</td>
                                <td></td>
                                <td> 30,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>670801191</td>
                                <td>앰겔러티120밀리그램</td>
                                <td></td>
                                <td> 700,000   </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>622900021</td>
                                <td>카티스템 CARTISEM (기본)</td>
                                <td></td>
                                <td>  10,000,000  </td>
                                <td></td><td></td><td></td><td></td><td>행위료포함</td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>622900021</td>
                                <td>카티스템 CARTISEM (추가)</td>
                                <td></td>
                                <td>  8,800,000  </td>
                                <td></td><td></td><td></td><td></td><td>행위료포함</td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>053300080</td>
                                <td>루플라 주 2.5cc</td>
                                <td></td>
                                <td> 250,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>681800010</td>
                                <td>박티그라 10 x 10</td>
                                <td></td>
                                <td>  5,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>641601460</td>
                                <td>베아제정 50mg</td>
                                <td></td>
                                <td>  250  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>659900590</td>
                                <td>피코라이트산</td>
                                <td></td>
                                <td> 10,000   </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>647802340</td>
                                <td>트레스탄캅셀-(비급여)(1/캅셀)</td>
                                <td></td>
                                <td>  500  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>053300020</td>
                                <td>프리번정</td>
                                <td></td>
                                <td> 500   </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>643900900</td>
                                <td>액티피드정(1/정)</td>
                                <td></td>
                                <td>  120  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>654000170</td>
                                <td>레스피렌정37.5mg(아주약품(주))</td>
                                <td></td>
                                <td>  70  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>653501140</td>
                                <td>둘코락스에스정(1T)</td>
                                <td></td>
                                <td>  300 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>642706650</td>
                                <td>레조트론정 1mg</td>
                                <td></td>
                                <td> 590   </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>642706660</td>
                                <td>레조트론정 2mg</td>
                                <td></td>
                                <td>  890  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>642100700</td>
                                <td>삐콤정(1/정)</td>
                                <td></td>
                                <td> 18   </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>655604320</td>
                                <td>멀티블루5주</td>
                                <td></td>
                                <td> 40,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>053300141</td>
                                <td>아데노피주 20mg/2ml</td>
                                <td></td>
                                <td>  28,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>053300061</td>
                                <td>히알로제주</td>
                                <td></td>
                                <td> 43,000   </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>053300061</td>
                                <td>히알로제주</td>
                                <td></td>
                                <td> 60,000   </td>
                                <td></td><td></td><td></td><td></td><td>행위없이 단독처방 시</td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>653403901</td>
                                <td>비타벨라프리필드주사 1ml</td>
                                <td></td>
                                <td>  30,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>678901171</td>
                                <td>아세타펜주100ML</td>
                                <td></td>
                                <td>  30,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>681100020</td>
                                <td>라이넥주사액(2ml/앰플</td>
                                <td></td>
                                <td>  12,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>647801080</td>
                                <td>타우로린주사2%250ml(타우로리딘)</td>
                                <td></td>
                                <td> 120,000   </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>640006160</td>
                                <td>텐프라민 250ml</td>
                                <td></td>
                                <td>  33,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>681100221</td>
                                <td>푸르설타민주(10ML)</td>
                                <td></td>
                                <td>  25,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>640007291</td>
                                <td>아세트펜프리믹스주 100ML</td>
                                <td></td>
                                <td> 33,000   </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>681000561</td>
                                <td>헥시콜스왑스틱</td>
                                <td></td>
                                <td>  600  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>681000581</td>
                                <td>포비돈 스왑(Stick Povidon)</td>
                                <td></td>
                                <td>  600  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>643604610</td>
                                <td>페라미플루주150mg mix</td>
                                <td></td>
                                <td>  60,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>681100141</td>
                                <td>지씨타치온주 600mg</td>
                                <td></td>
                                <td>  30,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>668101601</td>
                                <td>산도스슈가마덱스나트륨주_(0.2176g/2mL)</td>
                                <td></td>
                                <td>  170,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>655404011</td>
                                <td>에스팜주(네포팜염산염)_(40mg/4mL)</td>
                                <td></td>
                                <td>  11,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>675600024</td>
                                <td>흑산(약용탄)_(50g/50g)</td>
                                <td></td>
                                <td>  15,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>650003220</td>
                                <td>싱그릭스주[대상포진바이러스백신(유전자재조합)]_(0.05mg/1세트)</td>
                                <td></td>
                                <td>  250,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>668901281</td>
                                <td>히루안주2.5ml</td>
                                <td></td>
                                <td>  43,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>668901281</td>
                                <td>(단독)히루안주2.5ml</td>
                                <td></td>
                                <td>  60,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>PN-9</td>
                                <td>위너프 페리 주 217ml</td>
                                <td></td>
                                <td>  65,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>680300153</td>
                                <td>비디클로라프렙 10.5ml</td>
                                <td></td>
                                <td>  30,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>680300162</td>
                                <td>비디클로라프렙 26ml</td>
                                <td></td>
                                <td>  40,000  </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>657400862</td>
                                <td>헥시타놀ET2%액</td>
                                <td></td>
                                <td>  40 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>670607751</td>
                                <td>아모부로펜주</td>
                                <td></td>
                                <td>  14,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>693903672</td>
                                <td>셀트리온알보칠콘센트레이트액(폴리크레줄렌)_(36g/100mL)</td>
                                <td></td>
                                <td>  500 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>657400410</td>
                                <td>헥시타놀0.5%액</td>
                                <td></td>
                                <td>  40 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>693903671</td>
                                <td>알보칠콘센트레이트액(폴리크레줄렌)_(1.8g/5mL)</td>
                                <td></td>
                                <td>  3,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>654400571</td>
                                <td>삭센다펜주6밀리그램/밀리리터(리라글루티드)</td>
                                <td></td>
                                <td>  100,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>657807641</td>
                                <td>바이파보주 20밀리그램(레미마졸람베실산염)_(28.22mg/1병)</td>
                                <td></td>
                                <td>  50,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>657807451</td>
                                <td>바이파보주 50밀리그램(레미마졸람베실산염)_(69.37mg/1병)</td>
                                <td></td>
                                <td>  100,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>645604001</td>
                                <td>노트롬액 3ml/앰플</td>
                                <td></td>
                                <td>  5,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>643308751</td>
                                <td>페라원스프리믹스주(페라미비르수화물)_(0.3492g/100mL)</td>
                                <td></td>
                                <td>  70,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>643900250</td>
                                <td>리박트과립</td>
                                <td></td>
                                <td>  3,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>650001961</td>
                                <td>부스트릭스프리필드시린지</td>
                                <td></td>
                                <td> 50,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>059600681</td>
                                <td>리포타손주(덱사메타손팔미테이트)_(4mg/1mL)</td>
                                <td></td>
                                <td> 60,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>059600710</td>
                                <td>시너지아정(시트룰린말산염)_(0.5g/1정)</td>
                                <td></td>
                                <td>  2,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>657807851</td>
                                <td>하나슈가원주(슈가마덱스나트륨)_(0.2176g/2mL)</td>
                                <td></td>
                                <td> 170,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>662800131</td>
                                <td>리쥬비넥스주(폴리데옥시리보뉴클레오티드나트륨)_(5.625mg/3mL)</td>
                                <td></td>
                                <td> 60,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>645104591</td>
                                <td>헤모닉스주(시아노코발라민)_(1mg/1mL)</td>
                                <td></td>
                                <td> 35,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>697200170</td>
                                <td>큐탄플라스트스폰지(정제된특수처치젤라틴)_(80x50x10mm/1개)</td>
                                <td></td>
                                <td> 50,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비 및 치료재료</td>
                                <td>670607621</td>
                                <td>휴온스헤파린나트륨주사100IU_(500I.U/5mL)</td>
                                <td></td>
                                <td> 5,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비</td>
                                <td>654400661</td>
                                <td>위고비프리필드펜0.25(세마글루티드)_(1mg/1펜)</td>
                                <td></td>
                                <td> 320,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비</td>
                                <td>654400671</td>
                                <td>위고비프리필드펜0.5(세마글루티드)_(2mg/1펜)</td>
                                <td></td>
                                <td> 340,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비</td>
                                <td>654400681</td>
                                <td>위고비프리필드펜1.0(세마글루티드)_(4mg/1펜)</td>
                                <td></td>
                                <td> 370,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비</td>
                                <td>654400691</td>
                                <td>위고비프리필드펜2.4(세마글루티드)_(9.6mg/1펜)</td>
                                <td></td>
                                <td> 520,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비</td>
                                <td>654400701</td>
                                <td>위고비프리필드펜1.7(세마글루티드)_(6.8mg/1펜)</td>
                                <td></td>
                                <td> 480,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비</td>
                                <td>678901242</td>
                                <td>제이세덱스주 100ML</td>
                                <td></td>
                                <td> 100,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비</td>
                                <td>685200042</td>
                                <td>스퓨클액(40ML)</td>
                                <td></td>
                                <td> 1,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                            <tr>
                                <td>약제비</td>
                                <td>650003311</td>
                                <td>아렉스비주[호흡기세포융합바이러스백신(유전자재조합)]_(0.12mg/0.5mL)</td>
                                <td></td>
                                <td> 330,000 </td>
                                <td></td><td></td><td></td><td></td><td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        

        
        <div className={activeTab === "tab08" ? "cont_area active_cont" : "cont_area"} id="tab08">
            <div className="h_table">
                <p className="table_label">기타보조기</p>
                <div className="m_scroll wd800">
                    <table>
                        <caption>기타보조기 비용표</caption>
                        <colgroup>
                            <col style={{ width: '10%' }} />
                            <col style={{ width: '10%' }} />
                            <col style={{ width: '15%' }} />
                            <col style={{ width: '15%' }} />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col" rowSpan={2}>분류</th>
                                <th scope="colgroup" colSpan={2}>진료비용항목</th>
                                <th scope="colgroup" colSpan={6}>항목별 가격정보(단위:원)</th>
                                <th scope="col" rowSpan={2}>특이사항</th>
                            </tr>
                            <tr>
                                <th scope="col" className="t_bd_l">청구코드</th>
                                <th scope="col">명칭</th>
                                <th scope="col">구분</th>
                                <th scope="col">비용</th>
                                <th scope="col">최저비용</th>
                                <th scope="col">최고비용</th>
                                <th scope="col">치료재료대 <br />포함여부</th>
                                <th scope="col">약제비 <br />포함여부</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>부목</td>
                                <td>20330</td>
                                <td> 목발 (CRUTCH) </td>
                                <td> 목발 (CRUTCH) </td>
                                <td> 35,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>부목</td>
                                <td></td>
                                <td> 석고신발 </td>
                                <td></td>
                                <td> 8,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>부목</td>
                                <td></td>
                                <td> 팔걸이 </td>
                                <td></td>
                                <td> 5,500 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>부목</td>
                                <td></td>
                                <td> 8자붕대 </td>
                                <td></td>
                                <td> 8,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>부목</td>
                                <td>20244</td>
                                <td> 경추보조기 - 필라델피아  </td>
                                <td> 경추보조기 - 필라델피아 </td>
                                <td> 77,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>부목</td>
                                <td></td>
                                <td> 벨포팔걸이 </td>
                                <td></td>
                                <td> 28,000 </td>
                                <td> 28,000 </td>
                                <td> 33,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>부목</td>
                                <td></td>
                                <td> 바코캐스트-내피 </td>
                                <td></td>
                                <td> 35,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>부목</td>
                                <td></td>
                                <td> 바코캐스트-워킹솔 </td>
                                <td></td>
                                <td> 25,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>부목</td>
                                <td></td>
                                <td> VACO CAST-진공펌프 </td>
                                <td> 바코캐스트 </td>
                                <td> 18,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>부목</td>
                                <td></td>
                                <td>반고정형 깁스(깁슈)</td>
                                <td></td>
                                <td> 100,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>운동보조</td>
                                <td></td>
                                <td>(GREEN)세라밴드</td>
                                <td></td>
                                <td> 10,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>운동보조</td>
                                <td></td>
                                <td>(RED)세라밴드</td>
                                <td></td>
                                <td> 10,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>운동보조</td>
                                <td></td>
                                <td>(YELLOW)세라밴드</td>
                                <td></td>
                                <td> 10,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>운동보조</td>
                                <td></td>
                                <td>(GREEN)HAND(공)</td>
                                <td></td>
                                <td> 10,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>운동보조</td>
                                <td></td>
                                <td>(RED)HAND(공)</td>
                                <td></td>
                                <td> 10,000 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
    </div>
</SubPageLayout>
  )
}
