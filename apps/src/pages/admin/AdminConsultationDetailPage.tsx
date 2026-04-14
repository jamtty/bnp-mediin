import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AdminHeader from '@/components/admin/AdminHeader'
import AdminSidebar from '@/components/admin/AdminSidebar'
import RichEditor from '@/components/admin/RichEditor'
import {
  fetchConsultationDetail,
  deleteConsultationFile,
  replyConsultation,
  type ConsultationDetail,
} from '@/api/consultation'
import { JB_CD_MAP } from '../community/_jbCdMap'
import { toAbsUrl } from '@/utils/uploadUrl'
import '@/assets/css/style.css'

export default function AdminConsultationDetailPage() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const numId = Number(id)

  const [detail, setDetail] = useState<ConsultationDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [replyContent, setReplyContent] = useState('')
  const [replySaving, setReplySaving] = useState(false)

  const load = async () => {
    setLoading(true)
    try {
      const data = await fetchConsultationDetail(numId)
      if (data.locked) {
        alert('게시물을 불러올 수 없습니다. 관리자 인증을 확인해주세요.')
        navigate('/admin/consultation')
        return
      }
      setDetail(data)
      setReplyContent(data.reply ?? '')
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : '데이터를 불러오지 못했습니다.')
      navigate('/admin/consultation')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (numId > 0) load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numId])

  const handleDeleteFile = async (fileId: number) => {
    if (!confirm('첨부파일을 삭제하시겠습니까?')) return
    try {
      await deleteConsultationFile(fileId)
      setDetail((prev) =>
        prev ? { ...prev, files: prev.files.filter((f) => f.id !== fileId) } : prev,
      )
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : '파일 삭제에 실패했습니다.')
    }
  }

  const handleReplySave = async () => {
    const plainText = replyContent.replace(/<[^>]*>/g, '').trim()
    if (!plainText) {
      alert('답변 내용을 입력해주세요.')
      return
    }
    setReplySaving(true)
    try {
      await replyConsultation(numId, replyContent)
      alert('답변이 등록되었습니다.')
      load()
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : '답변 등록에 실패했습니다.')
    } finally {
      setReplySaving(false)
    }
  }

  if (loading) {
    return (
      <div className="adm_wrap">
        <AdminSidebar />
        <div className="adm_content">
          <AdminHeader pageTitle="건강상담 상세" />
          <main className="adm_main">
            <p style={{ padding: '2rem' }}>불러오는 중...</p>
          </main>
        </div>
      </div>
    )
  }

  if (!detail) return null

  return (
    <div className="adm_wrap">
      <AdminSidebar />
      <div className="adm_content">
        <AdminHeader pageTitle="건강상담 상세" />
        <main className="adm_main">
          <section className="adm_section">
            <div className="adm_form">

            {/* 상담 내용 테이블 */}
            <div className="adm_view_table_wrap">
              <table className="adm_view_table">
                <tbody>
                  <tr>
                    <th>상담분류</th>
                    <td>
                      {detail.jb_cd && JB_CD_MAP[detail.jb_cd]
                        ? `${JB_CD_MAP[detail.jb_cd].group} > ${JB_CD_MAP[detail.jb_cd].label}`
                        : detail.jb_cd || '-'}
                    </td>
                  </tr>
                  <tr>
                    <th>이름</th>
                    <td>{detail.name}</td>
                  </tr>
                  <tr>
                    <th>연락처</th>
                    <td>{detail.phone}</td>
                  </tr>
                  <tr>
                    <th>이메일</th>
                    <td>{detail.email || <span className="adm_empty_text">-</span>}</td>
                  </tr>
                  <tr>
                    <th>제목</th>
                    <td>{detail.title}</td>
                  </tr>
                  <tr>
                    <th style={{ verticalAlign: 'top', paddingTop: '1.4rem' }}>내용</th>
                    <td>
                      <div
                        className="adm_view_content"
                        dangerouslySetInnerHTML={{ __html: detail.content }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>첨부파일</th>
                    <td>
                      {detail.files.length === 0 ? (
                        <span className="adm_empty_text">-</span>
                      ) : (
                        <ul className="adm_file_list">
                          {detail.files.map((f) => (
                            <li key={f.id} className="adm_file_item">
                              {/^(jpg|jpeg|png|gif|webp)$/i.test(f.file_ext) && (
                                <img
                                  src={toAbsUrl(f.file_url)}
                                  className="adm_file_thumb"
                                  alt={f.ori_name}
                                />
                              )}
                              <a
                                href={toAbsUrl(f.file_url)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="adm_file_name"
                              >
                                {f.ori_name}
                              </a>
                              <button
                                type="button"
                                className="adm_file_del"
                                onClick={() => handleDeleteFile(f.id)}
                              >
                                <span className="material-icons">close</span>
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th>등록일/최종수정일</th>
                    <td>{detail.date} /</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 답변 영역 */}
            <div className="adm_reply_section">
              <div className="adm_reply_header">
                <span className="material-icons" style={{ verticalAlign: 'middle', marginRight: '0.5rem' }}>computer</span>
                답변
              </div>
              <div className="adm_view_table_wrap" style={{ marginTop: '1rem' }}>
                <table className="adm_view_table">
                  <tbody>
                    <tr>
                      <th style={{ verticalAlign: 'top', paddingTop: '1.2rem', width: '12rem' }}>내용</th>
                      <td>
                        <RichEditor value={replyContent} onChange={setReplyContent} />
                      </td>
                    </tr>
                    <tr>
                      <th>답변자</th>
                      <td>{detail.reply_name || 'admin'}</td>
                    </tr>
                    <tr>
                      <th>답변일</th>
                      <td>{detail.reply_date || '-'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 하단 버튼 */}
            <div className="adm_form_btns">
              <button
                type="button"
                className="adm_btn_secondary"
                onClick={() => navigate('/admin/consultation')}
              >
                취소
              </button>
              <button
                type="button"
                className="adm_btn_primary"
                onClick={handleReplySave}
                disabled={replySaving}
              >
                {replySaving ? '저장 중...' : '답변하기'}
              </button>
            </div>

            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
