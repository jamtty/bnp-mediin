import { Link, useNavigate } from 'react-router-dom'
import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

type NoticeDetail = {
  id: number
  title: string
  date: string
  views: number
  content: string
  prevId: number | null
  prevTitle: string | null
  nextId: number | null
  nextTitle: string | null
}

// TODO: API 연동 시 제거 — 임시 목업 데이터
const mockDetail: NoticeDetail = {
  id: 464,
  title: '2026년 1분기 친절사원 포상',
  date: '2026-04-02',
  views: 40,
  content: `
    <p>안녕하세요. 메디인병원입니다.</p>
    <p>2026년 1분기 친절사원 포상을 안내드립니다.</p>
    <p>자세한 내용은 병원 내 공지를 확인해 주시기 바랍니다.</p>
  `,
  prevId: 462,
  prevTitle: "내'무릎'이 보내는 경고! 무릎관절염",
  nextId: null,
  nextTitle: null,
}

export default function NoticeDetailPage() {
  // TODO: API 연동 — useParams로 id 받아서 fetch
  const navigate = useNavigate()
  const detail = mockDetail

  return (
    <SubPageLayout
      visualClass="vs4"
      visualTitle="병원소식"
      contentsClass="sub04"
      lnbItems={lnbItems}
    >
      <h3 className="cont_tit">공지사항</h3>
      <div className="con_area">
        <div className="bbs_cont">
          <div className="bbs_view">
            <p className="view_tit">{detail.title}</p>
            <div className="view_info">
              <ul>
                <li>
                  <p className="label">첨부파일</p>
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
            <div className="view_btn_area">
              <button
                type="button"
                className="btn btn_bk"
                onClick={() => navigate('/news/notice')}
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
                      <Link to={`/news/notice/${detail.prevId}`}>{detail.prevTitle}</Link>
                    ) : (
                      '이전글이 없습니다.'
                    )}
                  </p>
                </li>
                <li>
                  <p className="label"><i className="ico_page_next"></i>다음글</p>
                  <p className="cont_txt">
                    {detail.nextId ? (
                      <Link to={`/news/notice/${detail.nextId}`}>{detail.nextTitle}</Link>
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
