import { Link, useNavigate, useParams } from 'react-router-dom'
import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

type RecruitDetail = {
  id: number
  title: string
  periodStart: string
  periodEnd: string
  date: string
  status: string
  content: string
  prevId: number | null
  prevTitle: string | null
  nextId: number | null
  nextTitle: string | null
}

// TODO: API 연동 시 제거 — 임시 목업 데이터
const mockDetails: RecruitDetail[] = [
  {
    id: 414,
    title: '2026년도 신규 간호사 모집공고',
    periodStart: '2025-10-31',
    periodEnd: '2025-11-23',
    date: '2025-10-31',
    status: '채용마감',
    content: `
      <p>안녕하세요. 메디인병원입니다.</p>
      <p>2026년도 신규 간호사를 모집합니다.</p>
      <ul>
        <li>모집직종: 신규 간호사</li>
        <li>모집인원: 00명</li>
        <li>지원방법: 이메일 접수</li>
        <li>문의: 원무팀 031-000-0000</li>
      </ul>
    `,
    prevId: 275,
    prevTitle: '2025년도 신규 간호사 모집공고',
    nextId: null,
    nextTitle: null,
  },
  {
    id: 275,
    title: '2025년도 신규 간호사 모집공고',
    periodStart: '2024-09-30',
    periodEnd: '2024-10-23',
    date: '2024-09-30',
    status: '채용마감',
    content: `
      <p>안녕하세요. 메디인병원입니다.</p>
      <p>2025년도 신규 간호사를 모집합니다.</p>
    `,
    prevId: 224,
    prevTitle: '내시경실 간호사 채용공고',
    nextId: 414,
    nextTitle: '2026년도 신규 간호사 모집공고',
  },
]

export default function RecruitDetailPage() {
  // TODO: API 연동 — id로 fetch
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const detail = mockDetails.find((d) => d.id === Number(id)) ?? mockDetails[0]

  return (
    <SubPageLayout
      visualClass="vs4"
      visualTitle="병원소식"
      contentsClass="sub04"
      lnbItems={lnbItems}
    >
      <h3 className="cont_tit">채용정보</h3>
      <div className="con_area">
        <div className="bbs_cont">
          <div className="bbs_view">
            <p className="view_tit">{detail.title}</p>
            <div className="view_info">
              <ul>
                <li>
                  <p className="label">채용기간</p>
                  <p className="cont_txt">
                    {detail.periodStart} ~ {detail.periodEnd}
                  </p>
                </li>
                <li>
                  <p className="label">채용상태</p>
                  <p className="cont_txt">{detail.status}</p>
                </li>
                <li>
                  <p className="label">등록일</p>
                  <p className="cont_txt">{detail.date.replace(/-/g, '.')}</p>
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
                onClick={() => navigate('/news/recruit')}
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
                      <Link to={`/news/recruit/${detail.prevId}`}>{detail.prevTitle}</Link>
                    ) : (
                      '이전글이 없습니다.'
                    )}
                  </p>
                </li>
                <li>
                  <p className="label"><i className="ico_page_next"></i>다음글</p>
                  <p className="cont_txt">
                    {detail.nextId ? (
                      <Link to={`/news/recruit/${detail.nextId}`}>{detail.nextTitle}</Link>
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
