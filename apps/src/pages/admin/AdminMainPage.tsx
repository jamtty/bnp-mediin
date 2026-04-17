import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AdminHeader from '@/components/admin/AdminHeader'
import AdminSidebar from '@/components/admin/AdminSidebar'
import { fetchNoticeList } from '@/api/notice'
import { fetchPressList, fetchRecruitList, fetchHealthInfoList, fetchMediTvList } from '@/api/board'
import { fetchConsultationList } from '@/api/consultation'
import { fetchVoiceList } from '@/api/voice'
import { fetchFastReserveList } from '@/api/fastReserve'
import '@/assets/css/style.css'

interface Stats {
  consultation: number
  voice: number
  fastReserve: number
  notice: number
  press: number
  recruit: number
  mediTv: number
  healthInfo: number
}

export default function AdminMainPage() {
  const [stats, setStats] = useState<Stats>({
    consultation: 0, voice: 0, fastReserve: 0,
    notice: 0, press: 0, recruit: 0, mediTv: 0, healthInfo: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.allSettled([
      fetchConsultationList({ page: 1, size: 1 }),
      fetchVoiceList({ page: 1, size: 1 }),
      fetchFastReserveList({ page: 1, size: 1 }),
      fetchNoticeList({ page: 1, size: 1 }),
      fetchPressList({ page: 1, size: 1 }),
      fetchRecruitList({ page: 1, size: 1 }),
      fetchMediTvList({ page: 1, size: 1 }),
      fetchHealthInfoList({ page: 1, size: 1 }),
    ]).then(([consultation, voice, fastReserve, notice, press, recruit, mediTv, healthInfo]) => {
      setStats({
        consultation: consultation.status === 'fulfilled' ? (consultation.value.total ?? 0) : 0,
        voice: voice.status === 'fulfilled' ? (voice.value.total ?? 0) : 0,
        fastReserve: fastReserve.status === 'fulfilled' ? (fastReserve.value.total ?? 0) : 0,
        notice: notice.status === 'fulfilled' ? notice.value.totalCount : 0,
        press: press.status === 'fulfilled' ? (press.value.total ?? 0) : 0,
        recruit: recruit.status === 'fulfilled' ? (recruit.value.total ?? 0) : 0,
        mediTv: mediTv.status === 'fulfilled' ? (mediTv.value.total ?? 0) : 0,
        healthInfo: healthInfo.status === 'fulfilled' ? (healthInfo.value.total ?? 0) : 0,
      })
      setLoading(false)
    })
  }, [])

  return (
    <div className="adm_wrap">
      <AdminSidebar />
      <div className="adm_content">
        <AdminHeader pageTitle="대시보드" />
        <main className="adm_main">

          {/* 운영관리 현황 */}
          <section className="adm_section">
            <h3 className="adm_section_title">운영관리 현황</h3>
            <div className="adm_stats">
              {[
                { label: '건강상담', count: stats.consultation, icon: 'forum', to: '/admin/consultation' },
                { label: '고객의소리', count: stats.voice, icon: 'record_voice_over', to: '/admin/voice' },
                { label: '빠른예약', count: stats.fastReserve, icon: 'event_available', to: '/admin/fast-reserve' },
              ].map((item) => (
                <Link key={item.label} to={item.to} className="adm_stat_card">
                  <span className="material-icons adm_stat_icon">{item.icon}</span>
                  <p className="adm_stat_label">{item.label}</p>
                  <p className="adm_stat_count">{loading ? '-' : item.count.toLocaleString()}</p>
                  <p className="adm_stat_unit">건</p>
                </Link>
              ))}
            </div>
          </section>

          {/* 게시판 현황 */}
          <section className="adm_section">
            <h3 className="adm_section_title">게시판 현황</h3>
            <div className="adm_stats">
              {[
                { label: '공지사항', count: stats.notice, icon: 'campaign', to: '/admin/notice' },
                { label: '보도자료', count: stats.press, icon: 'newspaper', to: '/admin/press' },
                { label: '채용정보', count: stats.recruit, icon: 'work', to: '/admin/recruit' },
                { label: '메디TV', count: stats.mediTv, icon: 'smart_display', to: '/admin/medi-tv' },
                { label: '건강정보', count: stats.healthInfo, icon: 'health_and_safety', to: '/admin/health-info' },
              ].map((item) => (
                <Link key={item.label} to={item.to} className="adm_stat_card">
                  <span className="material-icons adm_stat_icon">{item.icon}</span>
                  <p className="adm_stat_label">{item.label}</p>
                  <p className="adm_stat_count">{loading ? '-' : item.count.toLocaleString()}</p>
                  <p className="adm_stat_unit">건</p>
                </Link>
              ))}
            </div>
          </section>

          {/* 바로가기 */}
          <section className="adm_section">
            <h3 className="adm_section_title">바로가기</h3>
            <div className="adm_shortcuts">
              <Link to="/admin/popup-banner" className="adm_shortcut_card">
                <span className="material-icons adm_shortcut_icon">web_asset</span>
                <span className="adm_shortcut_label">팝업 관리</span>
              </Link>
              <Link to="/admin/main-banner" className="adm_shortcut_card">
                <span className="material-icons adm_shortcut_icon">view_carousel</span>
                <span className="adm_shortcut_label">메인 배너 관리</span>
              </Link>
              <Link to="/admin/doctor" className="adm_shortcut_card">
                <span className="material-icons adm_shortcut_icon">medical_services</span>
                <span className="adm_shortcut_label">의료진 관리</span>
              </Link>
              <Link to="/" target="_blank" rel="noopener noreferrer" className="adm_shortcut_card">
                <span className="material-icons adm_shortcut_icon">open_in_new</span>
                <span className="adm_shortcut_label">사이트 보기</span>
              </Link>
            </div>
          </section>

        </main>
      </div>
    </div>
  )
}
