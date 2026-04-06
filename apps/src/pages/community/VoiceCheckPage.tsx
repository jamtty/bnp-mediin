import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

export default function VoiceCheckPage() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault()
    // TODO: API 연동 — POST /api/voice/check (이름 + 비밀번호 검증)
    // 검증 성공 시 접수 내역 목록 페이지로 이동
    navigate('/community/voice/my-list', { state: { name, password } })
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
        <div className="view_confirm">
          <i className="ico_secret2"></i>
          <p className="password_disc">게시글 작성 시 등록한 이름과 비밀번호를 입력해주세요.</p>
          <input
            type="text"
            id="vc_name"
            name="vc_name"
            className="confirm_ip"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            id="vc_pwd"
            name="vc_pwd"
            className="confirm_ip"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" className="btn_confirm" onClick={handleSubmit}>확인</button>
        </div>
      </div>
    </SubPageLayout>
  )
}
