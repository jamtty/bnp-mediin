import { useState, useEffect } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'
import { fetchVoiceDetail, userDeleteVoice, VOICE_CATEGORY_MAP } from '../../api/voice'
import type { VoiceDetail, VoiceFile } from '../../api/voice'

export default function VoiceDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const location = useLocation()
  const locationState = location.state as { password?: string } | null

  const [detail, setDetail] = useState<VoiceDetail | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const numId = Number(id)
    if (!numId) { navigate('/community/voice/my-list'); return }
    setLoading(true)
    fetchVoiceDetail(numId)
      .then(setDetail)
      .catch(() => navigate('/community/voice/my-list'))
      .finally(() => setLoading(false))
  }, [id, navigate])

  const handleModify = () => {
    navigate(`/community/voice/${id}/edit`, {
      state: { password: locationState?.password ?? '' },
    })
  }

  const handleDelete = async () => {
    if (!window.confirm('삭제하시겠습니까?')) return

    const pwd = locationState?.password
      ?? window.prompt('비밀번호를 입력해주세요.')
    if (!pwd) return

    try {
      await userDeleteVoice(Number(id), pwd)
      alert('삭제되었습니다.')
      navigate('/community/voice/my-list')
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : '삭제에 실패했습니다.')
    }
  }

  if (loading) {
    return (
      <SubPageLayout visualClass="vs8" visualTitle="고객마당" contentsClass="sub08" lnbItems={lnbItems}>
        <h3 className="cont_tit">고객의 소리</h3>
        <div className="con_area">
          <p style={{ textAlign: 'center', padding: '60px 0' }}>불러오는 중...</p>
        </div>
      </SubPageLayout>
    )
  }

  if (!detail) return null

  const categoryLabel = VOICE_CATEGORY_MAP[detail.category] ?? detail.category

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
                  {(detail.files ?? []).length > 0 ? (
                    <ul className="file_list">
                      {(detail.files as VoiceFile[]).map((f) => (
                        <li key={f.id}>
                          <a href={f.file_url} target="_blank" rel="noopener noreferrer">{f.ori_name}</a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="cont_txt">없음</p>
                  )}
                </li>
              </ul>
            </div>
            <div className="view_cont_area" id="vc_cont">
              <div className="view_in_infobox">
                <ul>
                  <li>
                    <span className="info_label">분류</span>
                    <p className="info_cont">{categoryLabel}</p>
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
