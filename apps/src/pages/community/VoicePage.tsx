import { Link } from 'react-router-dom'
import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

export default function VoicePage() {
  return (
    <SubPageLayout
      visualClass="vs8"
      visualTitle="고객마당"
      contentsClass="sub08"
      lnbItems={lnbItems}
    >
      <h3 className="cont_tit">고객의 소리</h3>
      <div className="con_area">
        <div className="reserv_info_area">
          <div className="info_sec_flex">
            <div className="info_sec type01">
              <div className="info_left">
                <i className="ico_cs01"></i>
                <dl>
                  <dt>고객의 소리 접수</dt>
                  <dd>
                    메디인병원을 이용하면서 의사∙간호사 선생님, <br />
                    병원 직원분들에게 감사의 마음 혹은<br />
                    불편 및 건의 사항이 있으신 경우 작성해주세요.
                  </dd>
                </dl>
              </div>
              <Link to="/community/voice/new" className="btn_go">
                <span>접수하기 <br />바로가기</span>
                <i className="ico_go_arrow"></i>
              </Link>
            </div>
            <div className="info_sec type02">
              <div className="info_left">
                <i className="ico_cs02"></i>
                <dl>
                  <dt>내가 접수한 내용 확인</dt>
                  <dd>
                    이름과 비밀번호를 입력하여<br />
                    내가 접수한 내용을 확인하세요.
                  </dd>
                </dl>
              </div>
              <Link to="/community/voice/check" className="btn_go">
                <span>접수한 내용<br />확인하기</span>
                <i className="ico_go_arrow"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SubPageLayout>
  )
}
