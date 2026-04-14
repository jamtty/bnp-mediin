import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'
import { fetchHealthInfoDetail, type HealthInfoDetail } from '../../api/board'

export default function HealthInfoDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const [detail, setDetail]   = useState<HealthInfoDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState<string | null>(null)

  useEffect(() => {
    const numId = Number(id)
    if (!numId) { navigate('/community/health-info'); return }
    setLoading(true)
    fetchHealthInfoDetail(numId)
      .then((data) => setDetail(data))
      .catch(() => setError('게시물을 불러오지 못했습니다.'))
      .finally(() => setLoading(false))
  }, [id, navigate])

  return (
    <SubPageLayout
      visualClass="vs8"
      visualTitle="고객마당"
      contentsClass="sub08"
      lnbItems={lnbItems}
    >
      <h3 className="cont_tit">건강정보</h3>
      <div className="con_area">
        <div className="bbs_cont">
          {loading ? (
            <p style={{ textAlign: 'center', padding: '60px 0' }}>불러오는 중...</p>
          ) : error || !detail ? (
            <p style={{ textAlign: 'center', padding: '60px 0', color: '#c00' }}>
              {error ?? '게시물을 찾을 수 없습니다.'}
            </p>
          ) : (
            <div className="bbs_view">
              <p className="view_tit">{detail.title}</p>
              <div className="view_info">
                <ul>
                  <li>
                    <p className="label">등록일</p>
                    <p className="cont_txt">{detail.created_at.replace(/-/g, '.')}</p>
                  </li>
                  <li>
                    <p className="label">조회수</p>
                    <p className="cont_txt">{detail.view_count}</p>
                  </li>
                </ul>
              </div>
              <div
                className="view_cont_area"
                dangerouslySetInnerHTML={{ __html: detail.content ?? '' }}
              />
              <div className="view_btn_area">
                <button
                  type="button"
                  className="btn btn_bk"
                  onClick={() => navigate('/community/health-info')}
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
                        <Link to={`/community/health-info/${detail.prev.id}`}>{detail.prev.title}</Link>
                      ) : (
                        '이전글이 없습니다.'
                      )}
                    </p>
                  </li>
                  <li>
                    <p className="label"><i className="ico_page_next"></i>다음글</p>
                    <p className="cont_txt">
                      {detail.next ? (
                        <Link to={`/community/health-info/${detail.next.id}`}>{detail.next.title}</Link>
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