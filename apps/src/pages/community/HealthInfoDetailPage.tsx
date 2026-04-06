import { Link, useNavigate, useParams } from 'react-router-dom'
import SubPageLayout from '../../components/SubPageLayout'
import { lnbItems } from './_lnb'

type HealthInfoDetail = {
  id: number
  title: string
  date: string
  views: number
  content: string
  prevId: number | null
  prevTitle: string | null
  nextId: number | null
  nextTitle: string | null
}

// TODO: API 연동 시 제거 — 임시 목업 데이터
const mockDetails: HealthInfoDetail[] = [
  {
    id: 457,
    title: "내 '간'이 보내는 위험신호! A형 · E형 간염",
    date: '2026-03-13',
    views: 120,
    content: `<p>A형 간염과 E형 간염은 바이러스에 의한 급성 간염으로, 오염된 음식이나 물을 통해 감염됩니다.</p>
<p>피로감, 황달, 복통 등의 증상이 나타날 수 있으며, 예방접종과 손 씻기 등 위생 관리가 중요합니다.</p>`,
    prevId: null,
    prevTitle: null,
    nextId: 453,
    nextTitle: '심장 건강의 이상신호! 심장판막질환',
  },
  {
    id: 453,
    title: '심장 건강의 이상신호! 심장판막질환',
    date: '2026-02-27',
    views: 98,
    content: `<p>심장판막질환은 심장의 판막이 제대로 기능하지 못하는 질환으로, 호흡 곤란, 흉통, 피로감 등의 증상이 나타납니다.</p>
<p>조기 발견과 치료가 중요하며, 정기 검진을 통해 예방할 수 있습니다.</p>`,
    prevId: 457,
    prevTitle: "내 '간'이 보내는 위험신호! A형 · E형 간염",
    nextId: 452,
    nextTitle: '바람만 스쳐도 눈물이? 당신의 관절이 보내는 경고, ...',
  },
  {
    id: 452,
    title: '바람만 스쳐도 눈물이? 당신의 관절이 보내는 경고, ...',
    date: '2026-02-27',
    views: 85,
    content: `<p>관절 통증은 퇴행성 관절염, 류마티스 관절염 등 다양한 원인으로 발생할 수 있습니다.</p>
<p>초기 증상이 가벼워도 방치하면 악화될 수 있으므로 전문의 진료를 권장합니다.</p>`,
    prevId: 453,
    prevTitle: '심장 건강의 이상신호! 심장판막질환',
    nextId: 447,
    nextTitle: '내 몸의 균형을 무너뜨리는 척추측만증',
  },
  {
    id: 447,
    title: '내 몸의 균형을 무너뜨리는 척추측만증',
    date: '2026-02-12',
    views: 76,
    content: `<p>척추측만증은 척추가 옆으로 휘어지는 질환으로, 성장기 청소년에게서 많이 발생합니다.</p>
<p>조기 발견 시 교정 치료로 진행을 막을 수 있으므로 정기적인 검진이 권장됩니다.</p>`,
    prevId: 452,
    prevTitle: '바람만 스쳐도 눈물이? 당신의 관절이 보내는 경고, ...',
    nextId: 445,
    nextTitle: '파주시 유일 류마티스 내과',
  },
  {
    id: 445,
    title: '파주시 유일 류마티스 내과',
    date: '2026-02-06',
    views: 64,
    content: `<p>메디인병원은 파주시 유일의 류마티스 내과를 운영하고 있습니다.</p>
<p>류마티스 관절염, 전신 홍반 루푸스, 강직성 척추염 등 다양한 류마티스 질환을 전문적으로 진료합니다.</p>`,
    prevId: 447,
    prevTitle: '내 몸의 균형을 무너뜨리는 척추측만증',
    nextId: 444,
    nextTitle: '허리디스크 양방향 내시경 수술',
  },
  {
    id: 444,
    title: '허리디스크 양방향 내시경 수술',
    date: '2026-02-06',
    views: 91,
    content: `<p>양방향 내시경 수술은 두 개의 작은 구멍을 통해 카메라와 수술 도구를 삽입해 디스크를 치료하는 최소 침습 수술입니다.</p>
<p>절개 부위가 작아 회복이 빠르고 흉터가 거의 남지 않습니다.</p>`,
    prevId: 445,
    prevTitle: '파주시 유일 류마티스 내과',
    nextId: 439,
    nextTitle: '메디인병원 건강증진센터',
  },
  {
    id: 439,
    title: '메디인병원 건강증진센터',
    date: '2026-01-29',
    views: 53,
    content: `<p>메디인병원 건강증진센터에서는 종합건강검진, 특화 검진 프로그램 등을 운영하고 있습니다.</p>
<p>건강한 삶을 위한 체계적인 건강 관리 서비스를 제공합니다.</p>`,
    prevId: 444,
    prevTitle: '허리디스크 양방향 내시경 수술',
    nextId: 430,
    nextTitle: '겨울철, 한파가 예보된다면 한랭질환을 조심하세요!',
  },
  {
    id: 430,
    title: '겨울철, 한파가 예보된다면 한랭질환을 조심하세요!',
    date: '2025-12-26',
    views: 47,
    content: `<p>기온이 급격히 낮아지면 저체온증, 동상 등 한랭질환이 발생할 수 있습니다.</p>
<p>외출 시 체온 유지에 유의하고, 이상 증상 발생 시 즉시 병원을 방문하세요.</p>`,
    prevId: 439,
    prevTitle: '메디인병원 건강증진센터',
    nextId: 426,
    nextTitle: '건강한 콩팥, 건강한 삶',
  },
  {
    id: 426,
    title: '건강한 콩팥, 건강한 삶',
    date: '2025-12-12',
    views: 39,
    content: `<p>콩팥(신장)은 혈액을 걸러 노폐물을 제거하는 중요한 장기입니다.</p>
<p>만성 신장 질환은 초기에 증상이 거의 없으므로 정기적인 소변 및 혈액 검사로 조기 발견하는 것이 중요합니다.</p>`,
    prevId: 430,
    prevTitle: '겨울철, 한파가 예보된다면 한랭질환을 조심하세요!',
    nextId: 423,
    nextTitle: '최소 절개, 흉터없이 안전한 복강경 수술, 담낭절제술',
  },
  {
    id: 423,
    title: '최소 절개, 흉터없이 안전한 복강경 수술, 담낭절제술',
    date: '2025-12-05',
    views: 62,
    content: `<p>담낭절제술은 담석증, 담낭염 등으로 인해 담낭을 제거하는 수술입니다.</p>
<p>복강경 수술은 작은 구멍을 통해 진행되어 흉터가 거의 없고 회복이 빠릅니다.</p>`,
    prevId: 426,
    prevTitle: '건강한 콩팥, 건강한 삶',
    nextId: null,
    nextTitle: null,
  },
]

export default function HealthInfoDetailPage() {
  // TODO: API 연동 — useParams로 id 받아서 fetch
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const detail = mockDetails.find((d) => d.id === Number(id)) ?? mockDetails[0]

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
          <div className="bbs_view">
            <p className="view_tit">{detail.title}</p>
            <div className="view_info">
              <ul>
                <li>
                  <p className="label">첨부파일</p>
                </li>
                <li>
                  <p className="label">등록일</p>
                  <p className="cont_txt">{detail.date.replace(/-/g, '.')}</p>
                </li>
                <li>
                  <p className="label">조회수</p>
                  <p className="cont_txt">{detail.views}</p>
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
                    {detail.prevId ? (
                      <Link to={`/community/health-info/${detail.prevId}`}>{detail.prevTitle}</Link>
                    ) : (
                      '이전글이 없습니다.'
                    )}
                  </p>
                </li>
                <li>
                  <p className="label"><i className="ico_page_next"></i>다음글</p>
                  <p className="cont_txt">
                    {detail.nextId ? (
                      <Link to={`/community/health-info/${detail.nextId}`}>{detail.nextTitle}</Link>
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
