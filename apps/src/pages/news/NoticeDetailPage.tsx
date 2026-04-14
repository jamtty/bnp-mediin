import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'
import { fetchNoticeDetail, type NoticeDetailResponse } from '../../api/notice'
import { toAbsUrl } from '../../utils/uploadUrl'

export default function NoticeDetailPage() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const [data, setData]       = useState<NoticeDetailResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState<string | null>(null)

  useEffect(() => {
    if (!id) {
      setError('잘못된 접근입니다.')
      setLoading(false)
      return
    }
    fetchNoticeDetail(Number(id))
      .then(res => setData(res))
      .catch(err => setError(err instanceof Error ? err.message : '불러오기에 실패했습니다.'))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return (
      <SubPageLayout visualClass="vs4" visualTitle="병원소식" contentsClass="sub04" lnbItems={lnbItems}>
        <h3 className="cont_tit">공지사항</h3>
        <div className="con_area">
          <p style={{ padding: '2rem', textAlign: 'center' }}>불러오는 중...</p>
        </div>
      </SubPageLayout>
    )
  }

  if (error || !data) {
    return (
      <SubPageLayout visualClass="vs4" visualTitle="병원소식" contentsClass="sub04" lnbItems={lnbItems}>
        <h3 className="cont_tit">공지사항</h3>
        <div className="con_area">
          <p style={{ padding: '2rem', textAlign: 'center' }}>{error || '게시글을 찾을 수 없습니다.'}</p>
          <div style={{ textAlign: 'center' }}>
            <button className="btn btn_bk" onClick={() => navigate('/news/notice')}>
              <span>목록</span>
            </button>
          </div>
        </div>
      </SubPageLayout>
    )
  }

  const { item, files, prev, next } = data

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
            <p className="view_tit">{item.title}</p>
            <div className="view_info">
              <ul>
                <li>
                  <p className="label">첨부파일</p>
                  {files.length > 0 ? (
                    <ul className="file_list">
                      {files.map(f => (
                        <li key={f.id}>
                          <a href={toAbsUrl(f.file_url)} target="_blank" rel="noopener noreferrer">
                            {f.ori_name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="cont_txt">없음</p>
                  )}
                </li>
                <li>
                  <p className="label">등록일</p>
                  <p className="cont_txt">{(item.created_at ?? '').replace(/-/g, '.')}</p>
                </li>
                <li>
                  <p className="label">조회수</p>
                  <p className="cont_txt">{item.view_count.toLocaleString()}</p>
                </li>
              </ul>
            </div>
            <div
              className="view_cont_area"
              dangerouslySetInnerHTML={{ __html: item.content }}
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
                    {prev ? (
                      <Link to={`/news/notice/${prev.id}`}>{prev.title}</Link>
                    ) : (
                      '이전글이 없습니다.'
                    )}
                  </p>
                </li>
                <li>
                  <p className="label"><i className="ico_page_next"></i>다음글</p>
                  <p className="cont_txt">
                    {next ? (
                      <Link to={`/news/notice/${next.id}`}>{next.title}</Link>
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
