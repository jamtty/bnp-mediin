import { useNavigate, useParams } from 'react-router-dom'
import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

type VoiceStatus = '답변대기' | '답변완료'

type VoiceDetail = {
  id: number
  category: string
  title: string
  name: string
  date: string
  status: VoiceStatus
  content: string
}

// TODO: API 연동 시 제거 — 임시 목업 데이터
const mockDetails: VoiceDetail[] = [
  {
    id: 10,
    category: '칭찬 및 감사',
    title: '친절한 간호사 선생님께 감사드립니다.',
    name: '홍**',
    date: '2026-03-20',
    status: '답변완료',
    content: '<p>3월 15일 입원 중 2병동 간호사 선생님께서 정말 친절하게 대해주셨습니다.<br />덕분에 치료 잘 받고 퇴원하게 되었습니다. 감사합니다.</p>',
  },
  {
    id: 9,
    category: '불편',
    title: '주차 공간이 너무 부족합니다.',
    name: '김**',
    date: '2026-02-15',
    status: '답변완료',
    content: '<p>방문할 때마다 주차 공간이 부족하여 불편함이 많습니다. 개선을 부탁드립니다.</p>',
  },
  {
    id: 8,
    category: '기타',
    title: '개발 페이지 테스트 입니다.',
    name: '이**',
    date: '2026-04-06',
    status: '답변대기',
    content: '<p>개발 페이지 테스트 입니다.</p>',
  },
]

export default function VoiceDetailPage() {
  // TODO: API 연동 — useParams로 id 받아서 fetch
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const detail = mockDetails.find((d) => d.id === Number(id)) ?? mockDetails[0]

  const handleModify = () => {
    // TODO: 수정 페이지 이동
  }

  const handleDelete = () => {
    // TODO: 삭제 API 연동
  }

  return (
    <SubPageLayout
      visualClass="vs8"
      visualTitle="고객마당"
      contentsClass="sub08"
      lnbItems={lnbItems}
    >
      <h3 className="cont_tit">고객의 소리</h3>
      <div className="con_area">
        <div className="bbs_cont">
          <div className="bbs_view">
            <p className="view_tit">{detail.title}</p>
            <div className="view_info">
              <ul>
                <li>
                  <p className="label" style={{ backgroundColor: '#f9f9f9', fontSize: '18px', color: '#000000' }}>첨부파일</p>
                  <p className="cont_txt"></p>
                </li>
              </ul>
            </div>
            <div className="view_cont_area" id="vc_cont">
              <div className="view_in_infobox">
                <ul>
                  <li>
                    <span className="info_label">분류</span>
                    <p className="info_cont">{detail.category}</p>
                  </li>
                  <li>
                    <span className="info_label">답변상태</span>
                    <p className="info_cont">
                      {detail.status === '답변완료'
                        ? <span className="t_blue">답변완료</span>
                        : <span className="t_red">답변대기</span>
                      }
                    </p>
                  </li>
                </ul>
              </div>
              <div dangerouslySetInnerHTML={{ __html: detail.content }} />
            </div>

            <div className="view_control_area">
              <button type="button" className="btn btn_gray" onClick={handleModify}><span>수정</span></button>
              <button type="button" className="btn btn_bk" onClick={handleDelete}><span>삭제</span></button>
            </div>

            <div className="view_btn_area">
              <button
                type="button"
                className="btn btn_bk"
                onClick={() => navigate('/community/voice/my-list')}
              >
                <span>목록</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </SubPageLayout>
  )
}
