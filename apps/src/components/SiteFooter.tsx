import icoNaver from '../assets/images/ico_naver.svg'
import icoInsta from '../assets/images/ico_insta.svg'
import icoYoutube from '../assets/images/ico_youtube.svg'

interface SiteFooterProps {
    onOpenPopup?: (id: string) => void
}

export default function SiteFooter({ onOpenPopup = () => {} }: SiteFooterProps) {
    return (
        <div id="footer">
            <div className="section">
                <div className="foot_cont">
                    <div className="foot_menu">
                        <button type="button" className="foot_btn" onClick={() => onOpenPopup('hospital_ethics')}>
                            병원윤리강령
                        </button>
                        <button type="button" className="foot_btn" onClick={() => onOpenPopup('rights_responsibilities')}>
                            환자의 권리와 의무
                        </button>
                        <button type="button" className="foot_btn" onClick={() => onOpenPopup('privacy_pop')}>
                            <strong>개인정보처리방침</strong>
                        </button>
                        <button type="button" className="foot_btn" onClick={() => onOpenPopup('user_info_pop')}>
                            이용약관
                        </button>
                        <a href="/main/content/view/MN04070000.do" className="foot_btn">오시는 길</a>
                    </div>
                    <div className="foot_info">
                        <span>메디인병원 대표 이학수</span>
                        <span>주소 경기도 파주시 금릉역로 190</span>
                        <span>대표전화번호 1566-1991</span>
                        <span>팩스 031-943-1524</span>
                        <span>사업자등록번호 128-91-31022</span>
                    </div>
                    <p className="foot_copy">COPYRIGHT (c) MEDI-IN HOSPITAL. ALL RIGHTS RESERVED.</p>
                </div>
                <div className="foot_sns">
                    <a href="https://blog.naver.com/kweonth" target="_blank" rel="noreferrer" title="메디인병원 네이버 블로그 바로가기"><img src={icoNaver} alt="네이버" /></a>
                    <a href="https://www.instagram.com/mediyin2022/" target="_blank" rel="noreferrer" title="메디인병원 인스타그램 바로가기"><img src={icoInsta} alt="인스타그램" /></a>
                    <a href="https://www.youtube.com/channel/UCFuKObVcsHzl0fwg51TH6BQ" target="_blank" rel="noreferrer" title="메디인병원 유튜브 바로가기"><img src={icoYoutube} alt="유튜브" /></a>
                </div>
            </div>
        </div>
    )
}
