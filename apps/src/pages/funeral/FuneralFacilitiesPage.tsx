import { useState } from 'react'
import FuneralSubPageLayout from '../../components/FuneralSubPageLayout'
import f1t1 from '../../assets/images/funeral/funeral1_thumb1.jpg'
import f1t2 from '../../assets/images/funeral/funeral1_thumb2.jpg'
import f1t3 from '../../assets/images/funeral/funeral1_thumb3.jpg'
import f1t4 from '../../assets/images/funeral/funeral1_thumb4.jpg'
import f1t5 from '../../assets/images/funeral/funeral1_thumb5.jpg'
import f2t1 from '../../assets/images/funeral/funeral2_thumb1.jpg'
import f2t2 from '../../assets/images/funeral/funeral2_thumb2.jpg'
import f2t3 from '../../assets/images/funeral/funeral2_thumb3.jpg'
import f2t4 from '../../assets/images/funeral/funeral2_thumb4.jpg'
import f2t5 from '../../assets/images/funeral/funeral2_thumb5.jpg'
import f3t1 from '../../assets/images/funeral/funeral3_thumb1.jpg'
import f3t2 from '../../assets/images/funeral/funeral3_thumb2.jpg'
import f3t3 from '../../assets/images/funeral/funeral3_thumb3.jpg'
import f3t4 from '../../assets/images/funeral/funeral3_thumb4.jpg'
import f3t5 from '../../assets/images/funeral/funeral3_thumb5.jpg'
import f4t1 from '../../assets/images/funeral/funeral4_thumb1.jpg'
import f4t2 from '../../assets/images/funeral/funeral4_thumb2.jpg'
import f4t3 from '../../assets/images/funeral/funeral4_thumb3.jpg'
import f4t4 from '../../assets/images/funeral/funeral4_thumb4.jpg'
import f4t5 from '../../assets/images/funeral/funeral4_thumb5.jpg'
import f5t1 from '../../assets/images/funeral/funeral5_thumb1.jpg'
import f5t2 from '../../assets/images/funeral/funeral5_thumb2.jpg'
import f5t3 from '../../assets/images/funeral/funeral5_thumb3.jpg'
import f5t4 from '../../assets/images/funeral/funeral5_thumb4.jpg'

interface RoomInfo {
  id: string
  label: string
  size: string
  images: { src: string; caption: string }[]
  specs: { th: string; td: string }[]
}

const rooms: RoomInfo[] = [
  {
    id: 'tab_cont1', label: '제 1호실', size: '192㎡/약 80평',
    images: [
      { src: f1t1, caption: '빈소입구' },
      { src: f1t2, caption: '접객실' },
      { src: f1t3, caption: '빈소 내 유족 수면/샤워실' },
      { src: f1t4, caption: '빈소 내 보조주방' },
      { src: f1t5, caption: '분향실' },
    ],
    specs: [
      { th: '전용면적', td: '192㎡ (약 58평)' },
      { th: '공용면적', td: '약 80평' },
      { th: '동시수용인원', td: '80명' },
      { th: '구성', td: '접객실, 빈소 내 유족 수면/샤워실' },
      { th: '빈소이용금액 (1일기준)', td: '840,000' },
    ],
  },
  {
    id: 'tab_cont2', label: '특 2호실', size: '237㎡/약 100평',
    images: [
      { src: f2t1, caption: '빈소입구' },
      { src: f2t2, caption: '접객실' },
      { src: f2t3, caption: '빈소 내 유족 수면/샤워실' },
      { src: f2t4, caption: '빈소 내 보조주방' },
      { src: f2t5, caption: '분향실' },
    ],
    specs: [
      { th: '전용면적', td: '237㎡ (약 72평)' },
      { th: '공용면적', td: '약 100평' },
      { th: '동시수용인원', td: '120명' },
      { th: '구성', td: '접객실, 빈소 내 유족 수면/샤워실' },
      { th: '빈소이용금액 (1일기준)', td: '1,200,000' },
    ],
  },
  {
    id: 'tab_cont3', label: '제 3호실', size: '115㎡/약 49평',
    images: [
      { src: f3t1, caption: '빈소입구' },
      { src: f3t2, caption: '접객실' },
      { src: f3t5, caption: '빈소 내 유족 수면/샤워실' },
      { src: f3t3, caption: '빈소 내 보조주방' },
      { src: f3t4, caption: '분향실' },
    ],
    specs: [
      { th: '전용면적', td: '115㎡ (약 34평)' },
      { th: '공용면적', td: '약 49평' },
      { th: '동시수용인원', td: '40명' },
      { th: '구성', td: '접객실, 빈소 내 유족 수면/샤워실' },
      { th: '빈소이용금액 (1일기준)', td: '480,000' },
    ],
  },
  {
    id: 'tab_cont4', label: '제 5호실', size: '150㎡/약 60평',
    images: [
      { src: f4t1, caption: '빈소입구' },
      { src: f4t2, caption: '접객실' },
      { src: f4t5, caption: '빈소 내 유족 수면/샤워실' },
      { src: f4t3, caption: '빈소 내 보조주방' },
      { src: f4t4, caption: '분향실' },
    ],
    specs: [
      { th: '전용면적', td: '150㎡ (약 45평)' },
      { th: '공용면적', td: '약 60평' },
      { th: '동시수용인원', td: '60명' },
      { th: '구성', td: '접객실, 빈소 내 유족 수면/샤워실' },
      { th: '빈소이용금액 (1일기준)', td: '600,000' },
    ],
  },
  {
    id: 'tab_cont5', label: '제 6호실', size: '49.4㎡/약 15평',
    images: [
      { src: f5t1, caption: '빈소입구' },
      { src: f5t2, caption: '접객실' },
      { src: f5t3, caption: '빈소 내 보조주방' },
      { src: f5t4, caption: '분향실' },
    ],
    specs: [
      { th: '전용면적', td: '49.4㎡ (약 15평)' },
      { th: '공용면적', td: '약 30평' },
      { th: '동시수용인원', td: '20명' },
      { th: '구성', td: '접객실, 분향실, 빈소 내 유족 수면실' },
      { th: '빈소이용금액 (1일기준)', td: '300,000' },
    ],
  },
]

export default function FuneralFacilitiesPage() {
  const [activeTab, setActiveTab] = useState('tab_cont1')
  const [bigImgIndex, setBigImgIndex] = useState<Record<string, number>>({})
  const activeTabItem = rooms.find((r) => r.id === activeTab) ?? rooms[0]

  const getBigIdx = (id: string) => bigImgIndex[id] ?? 0

  return (
    <FuneralSubPageLayout>
      <h3 className="cont_tit">빈소시설 이용안내</h3>
      <div className="con_area">
        <div className="info_dash_box">
          <i className="ico_funeral"></i>
          <dl>
            <dt>장례식장 이용안내</dt>
            <dd><strong>T. 031)570-9093</strong> 으로 문의주시기 바랍니다.</dd>
          </dl>
        </div>
        <div className="tab_btn_wrap">
          <button type="button" className="tab_this pc_hide">
            <strong>{activeTabItem.label}</strong><span>({activeTabItem.size})</span>
          </button>
          <div className="tab_area">
            {rooms.map((room) => (
              <button
                key={room.id}
                type="button"
                className={`btn_tab${activeTab === room.id ? ' active_tab' : ''}`}
                onClick={() => setActiveTab(room.id)}
              >
                <strong>{room.label}</strong><span>({room.size})</span>
              </button>
            ))}
          </div>
        </div>

        {rooms.map((room) => {
          const bigIdx = getBigIdx(room.id)
          const bigImg = room.images[bigIdx]
          return (
            <div
              key={room.id}
              className={`tab_cont${activeTab === room.id ? ' active_cont' : ''}`}
              id={room.id}
            >
              <div className="mortuary_useinfo">
                <div className="img_sec">
                  <div className="img_big">
                    <img src={bigImg.src} alt={bigImg.caption} />
                    <p className="img_alt">{bigImg.caption}</p>
                  </div>
                  <div className="img_thumb_area">
                    {room.images.map((img, idx) => (
                      <div
                        key={idx}
                        className={`thumb_box${idx === 0 ? ' hideImg' : ''}`}
                        onClick={() => setBigImgIndex((prev) => ({ ...prev, [room.id]: idx }))}
                        style={{ cursor: 'pointer' }}
                      >
                        <img src={img.src} alt={img.caption} />
                        <p className="img_alt">{img.caption}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="info_sec">
                  <p className="mortuary_tit">{room.label}</p>
                  <div className="mortuary_info">
                    <table>
                      <tbody>
                        {room.specs.map((spec) => (
                          <tr key={spec.th}>
                            <th>{spec.th}</th>
                            <td>{spec.td}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </FuneralSubPageLayout>
  )
}