import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'
import { fetchRecruitDetail, type RecruitDetail } from '../../api/board'

export default function RecruitDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const [detail, setDetail]   = useState<RecruitDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState<string | null>(null)

  const today = new Date().toISOString().slice(0, 10)
  const getStatus = (periodEnd: string | null) => {
    if (!periodEnd) return '채용중'
    return periodEnd < today ? '채용마감' : '채용중'
  }

  useEffect(() => {
    const numId = Number(id)
    if (!numId) { navigate('/news/recruit'); return }
    setLoading(true)
    fetchRecruitDetail(numId)
      .then((data) => setDetail(data))
      .catch(() => setError('상세내용을 불러오지 못했습니다.'))
      .finally(() => setLoading(false))
  }, [id, navigate])

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
          {loading ? (
            <p style={{ textAlign: 'center', padding: '60px 0' }}>불러오는 중...</p>
          ) : error || !detail ? (
            <p style={{ textAlign: 'center', padding: '60px 0', color: '#c00' }}>
              {error ?? '상세내용을 찾을 수 없습니다.'}
            </p>
          ) : (
            <div className="bbs_view">
              <p className="view_tit">{detail.title}</p>
              <div className="view_info">
                <ul>
                  <li>
                    <p className="label">채용기간</p>
                    <p className="cont_txt">
                      {detail.period_start ?? '-'} ~ {detail.period_end ?? '-'}
                    </p>
                  </li>
                  <li>
                    <p className="label">채용상태</p>
                    <p className="cont_txt">{getStatus(detail.period_end)}</p>
                  </li>
                  <li>
                    <p className="label">등록일</p>
                    <p className="cont_txt">{detail.created_at.replace(/-/g, '.')}</p>
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
                      {detail.prev ? (
                        <Link to={`/news/recruit/${detail.prev.id}`}>{detail.prev.title}</Link>
                      ) : (
                        '이전글이 없습니다.'
                      )}
                    </p>
                  </li>
                  <li>
                    <p className="label"><i className="ico_page_next"></i>다음글</p>
                    <p className="cont_txt">
                      {detail.next ? (
                        <Link to={`/news/recruit/${detail.next.id}`}>{detail.next.title}</Link>
                      ) : (
                        '다음글이 없습니다.'
                      )}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </SubPageLayout>
  )
}

