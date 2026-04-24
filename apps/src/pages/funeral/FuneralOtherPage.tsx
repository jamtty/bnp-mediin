import { useState } from 'react'
import FuneralSubPageLayout from '../../components/FuneralSubPageLayout'
import etc1 from '../../assets/images/funeral/funeral_etc1.jpg'
import etc1_2 from '../../assets/images/funeral/funeral_etc1_2.jpg'
import etc2 from '../../assets/images/funeral/funeral_etc2.jpg'
import etc2_2 from '../../assets/images/funeral/funeral_etc2_2.jpg'
import etc3 from '../../assets/images/funeral/funeral_etc3.png'
import etc3_2 from '../../assets/images/funeral/funeral_etc3_2.png'

const tabs = [
  {
    id: 'tab_cont2', label: '안치실',
    images: [
      { src: etc2, alt: '안치실' },
      { src: etc2_2, alt: '참관실' },
    ],
  },
  {
    id: 'tab_cont3', label: '주차장',
    images: [
      { src: etc3, alt: '주차장' },
      { src: etc3_2, alt: '주차장' },
    ],
  },
]

export default function FuneralOtherPage() {
  const [activeTab, setActiveTab] = useState('tab_cont2')
  const activeTabItem = tabs.find((t) => t.id === activeTab) ?? tabs[0]

  return (
    <FuneralSubPageLayout>
      <h3 className="cont_tit">기타시설 이용안내</h3>
      <div className="con_area">
        <div className="tab_btn_wrap">
          <button type="button" className="tab_this pc_hide">
            <strong>{activeTabItem.label}</strong>
          </button>
          <div className="tab_area">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`btn_tab${activeTab === tab.id ? ' active_tab' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <strong>{tab.label}</strong>
              </button>
            ))}
          </div>
        </div>

        {/* 예배실 탭 콘텐츠 (탭 버튼 비활성화됨) */}
        <div className={`tab_cont${activeTab === 'tab_cont1' ? ' active_cont' : ''}`} id="tab_cont1">
          <div className="other_img_area">
            <div className="other_img">
              <img src={etc1} alt="장례식장 내 종교행사실 (예배실)" />
              <p className="img_alt">장례식장 내 종교행사실 (예배실)</p>
            </div>
            <div className="other_img">
              <img src={etc1_2} alt="장례식장 내 종교행사실 (예배실)" />
              <p className="img_alt">장례식장 내 종교행사실 (예배실)</p>
            </div>
          </div>
        </div>

        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab_cont${activeTab === tab.id ? ' active_cont' : ''}`}
            id={tab.id}
          >
            <div className="other_img_area">
              {tab.images.map((img, idx) => (
                <div key={idx} className="other_img">
                  <img src={img.src} alt={img.alt} />
                  <p className="img_alt">{img.alt}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </FuneralSubPageLayout>
  )
}
