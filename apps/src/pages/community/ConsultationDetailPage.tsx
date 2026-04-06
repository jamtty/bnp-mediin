import { Link, useNavigate, useParams } from 'react-router-dom'
import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

type ConsultationComment = {
  name: string
  date: string
  content: string
}

type ConsultationDetail = {
  id: number
  dept: string
  title: string
  name: string
  date: string
  views: number
  isSecret: boolean
  content: string
  comments: ConsultationComment[]
  prevId: number | null
  prevTitle: string | null
  nextId: number | null
  nextTitle: string | null
}

// TODO: API 연동 시 제거 — 임시 목업 데이터
const mockDetails: ConsultationDetail[] = [
  {
    id: 90,
    dept: '신경과',
    title: '두통',
    name: '홍**',
    date: '2026-03-18',
    views: 56,
    isSecret: false,
    content: '<p>두통이 지속되어 상담 요청드립니다.</p>',
    comments: [
      {
        name: '관리자',
        date: '2026-03-19',
        content: '<p>저희 병원을 이용해 주셔서 감사합니다.</p><p>온라인상 상담이 어려운 점 양해 부탁드립니다.</p><p>통증이 계속된다면 진료를 받아 보시길 바랍니다.</p><p>감사합니다.</p>',
      },
    ],
    prevId: null,
    prevTitle: null,
    nextId: 89,
    nextTitle: '호흡기 내과 기관지염 통증지속에 관해 궁금하여 상담 ...',
  },
  {
    id: 89,
    dept: '내과',
    title: '호흡기 내과 기관지염 통증지속에 관해 궁금하여 상담 ...',
    name: '김**',
    date: '2026-02-11',
    views: 175,
    isSecret: false,
    content: '<p>호흡기 내과 기관지염 통증이 지속되어 궁금한 점이 있어 상담 요청드립니다.</p>',
    comments: [],
    prevId: 90,
    prevTitle: '두통',
    nextId: 86,
    nextTitle: '고지혈증 치료제 관련 질문',
  },
]

export default function ConsultationDetailPage() {
  // TODO: API 연동 — useParams로 id 받아서 fetch
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const detail = mockDetails.find((d) => d.id === Number(id)) ?? mockDetails[0]

  return (
    <SubPageLayout
      visualClass="vs8"
      visualTitle="고객마당"
      contentsClass="sub08"
      lnbItems={lnbItems}
    >
      <h3 className="cont_tit">건강상담</h3>
      <div className="con_area">
        <div className="bbs_cont">
          <div className="bbs_view">
            <p className="view_tit">{detail.title}</p>
            <div className="view_info">
              <ul>
                <li>
                  <p className="label">진료과</p>
                  <p className="cont_txt">{detail.dept}</p>
                </li>
                <li>
                  <p className="label">작성자</p>
                  <p className="cont_txt">{detail.name}</p>
                </li>
                <li>
                  <p className="label">등록일</p>
                  <p className="cont_txt">{detail.date.replace(/-/g, '.')}</p>
                </li>
                <li>
                  <p className="label">조회수</p>
                  <p className="cont_txt">{detail.views}</p>
                </li>
              </ul>
            </div>
            <div
              className="view_cont_area"
              dangerouslySetInnerHTML={{ __html: detail.content }}
            />

            {detail.comments && detail.comments.length > 0 && (
              <div className="view_comment_area">
                {/* <p className="comment_count">댓글</p> */}
                <div className="comment_area">
                  {detail.comments.map((comment, idx) => (
                    <div className="comment_item" key={idx}>
                      <div className="comment_wt">
                        <p className="wt_name">{comment.name}</p>
                        <p className="wt_date">{comment.date}</p>
                      </div>
                      <div
                        className="wt_adm_comment"
                        dangerouslySetInnerHTML={{ __html: comment.content }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="view_btn_area">
              <button
                type="button"
                className="btn btn_bk"
                onClick={() => navigate('/community/consultation')}
              >
                <span>목록</span>
              </button>
            </div>
            <div className="view_nav">
              <ul>
                <li>
                  <p className="label"><i className="ico_page_prev"></i>이전글</p>
                  <p className="cont_txt">
                    {detail.prevId ? (
                      <Link to={`/community/consultation/${detail.prevId}`}>{detail.prevTitle}</Link>
                    ) : (
                      '이전글이 없습니다.'
                    )}
                  </p>
                </li>
                <li>
                  <p className="label"><i className="ico_page_next"></i>다음글</p>
                  <p className="cont_txt">
                    {detail.nextId ? (
                      <Link to={`/community/consultation/${detail.nextId}`}>{detail.nextTitle}</Link>
                    ) : (
                      '다음글이 없습니다.'
                    )}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SubPageLayout>
  )
}
