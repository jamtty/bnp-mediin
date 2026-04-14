import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'
import { fetchConsultationDetail, type ConsultationDetail, type ConsultationFile } from '../../api/consultation'
import { JB_CD_MAP } from './_jbCdMap'

export default function ConsultationDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const [detail, setDetail] = useState<ConsultationDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [locked, setLocked] = useState(false)
  const [password, setPassword] = useState('')
  const [pwError, setPwError] = useState('')

  useEffect(() => {
    const numId = Number(id)
    if (!numId) return
    // id 변경 시 상태 초기화
    setDetail(null)
    setLocked(false)
    setPassword('')
    setPwError('')
    setLoading(true)
    fetchConsultationDetail(numId)
      .then((data) => {
        if (data.locked) {
          setLocked(true)
          setDetail(data)
        } else {
          setDetail(data)
          setLocked(false)
        }
      })
      .catch(() => navigate('/community/consultation'))
      .finally(() => setLoading(false))
  }, [id, navigate])

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setPwError('')
    const numId = Number(id)
    try {
      const data = await fetchConsultationDetail(numId, password)
      if (data.locked) {
        setPwError('비밀번호가 일치하지 않습니다.')
      } else {
        setDetail(data)
        setLocked(false)
      }
    } catch {
      setPwError('비밀번호가 일치하지 않습니다.')
    }
  }

  if (loading) {
    return (
      <SubPageLayout visualClass="vs8" visualTitle="고객마당" contentsClass="sub08" lnbItems={lnbItems}>
        <h3 className="cont_tit">건강상담</h3>
        <div className="con_area">
          <p style={{ textAlign: 'center', padding: '60px 0' }}>불러오는 중...</p>
        </div>
      </SubPageLayout>
    )
  }

  if (!detail) return null

  const jbInfo = detail.jb_cd ? JB_CD_MAP[detail.jb_cd] : null

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

            {/* 비밀번호 입력 영역 */}
            {locked && (
              <form className="view_password" id="divPwd" onSubmit={handlePasswordSubmit}>
                <i className="ico_secret2"></i>
                <p className="password_disc">비밀번호를 입력해주세요.</p>
                <input
                  type="password"
                  className="ip_pw"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="비밀번호"
                />
                {pwError && <p className="pw_error">{pwError}</p>}
                <button type="submit" className="btn_sh">확인</button>
              </form>
            )}

            {!locked && (
              <>
                <div className="view_info" id="divPwd">
                  <ul>
                    <li>
                      <p className="label">첨부파일</p>
                      {(detail.files ?? []).length > 0 ? (
                        <ul className="file_list">
                          {(detail.files as ConsultationFile[]).map((f) => (
                            <li key={f.id}>
                              <a href={f.file_url} target="_blank" rel="noopener noreferrer">
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
                      <p className="cont_txt">{(detail.date ?? '').replace(/-/g, '-')}</p>
                    </li>
                    <li>
                      <p className="label">조회수</p>
                      <p className="cont_txt">{detail.view_count}</p>
                    </li>
                  </ul>
                </div>

                <div className="view_cont_area noPwd" id="ad_cont">
                  <div className="view_in_infobox">
                    <ul>
                      <li>
                        <span className="info_label">상담분류1</span>
                        <p className="info_cont">{jbInfo?.group ?? '-'}</p>
                      </li>
                      <li>
                        <span className="info_label">상담분류2</span>
                        <p className="info_cont">{jbInfo?.label ?? (detail.jb_cd ?? '-')}</p>
                      </li>
                      <li>
                        <span className="info_label">이메일</span>
                        <p className="info_cont">{detail.email ?? ''}</p>
                      </li>
                      <li>
                        <span className="info_label">연락처</span>
                        <p className="info_cont">{detail.phone ?? ''}</p>
                      </li>
                    </ul>
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: (detail.content ?? '').replace(/\n/g, '<br>') }} />
                </div>

                {detail.reply && (
                  <div className="view_comment_area noPwd">
                    <div className="comment_area">
                      <div className="comment_item">
                        <div className="comment_wt">
                          <p className="wt_name">{detail.reply_name ?? '관리자'}</p>
                          <p className="wt_date">{detail.reply_date ?? ''}</p>
                        </div>
                        <div
                          className="wt_adm_comment"
                          dangerouslySetInnerHTML={{ __html: detail.reply }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </>
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
                  <p className="label">
                    <i className="ico_page_prev"></i>이전글
                  </p>
                  <p className="cont_txt">
                    {detail.prev ? (
                      <Link to={`/community/consultation/${detail.prev.id}`}>
                        {detail.prev.title}
                      </Link>
                    ) : (
                      '이전글이 없습니다.'
                    )}
                  </p>
                </li>
                <li>
                  <p className="label">
                    <i className="ico_page_next"></i>다음글
                  </p>
                  <p className="cont_txt">
                    {detail.next ? (
                      <Link to={`/community/consultation/${detail.next.id}`}>
                        {detail.next.title}
                      </Link>
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