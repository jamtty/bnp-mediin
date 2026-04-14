import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AdminHeader from '@/components/admin/AdminHeader'
import AdminSidebar, { sideMenuItems } from '@/components/admin/AdminSidebar'
import { fetchNoticeList } from '@/api/notice'
import { fetchPressList, fetchRecruitList, fetchHealthInfoList } from '@/api/board'
import '@/assets/css/style.css'

interface Stats {
  notice: number
  press: number
  recruit: number
  healthInfo: number
}

export default function AdminMainPage() {
  const location = useLocation()
  const [stats, setStats] = useState<Stats>({ notice: 0, press: 0, recruit: 0, healthInfo: 0 })
  const [statsLoading, setStatsLoading] = useState(true)

  useEffect(() => {
    Promise.allSettled([
      fetchNoticeList({ page: 1, size: 1 }),
      fetchPressList({ page: 1, size: 1 }),
      fetchRecruitList({ page: 1, size: 1 }),
      fetchHealthInfoList({ page: 1, size: 1 }),
    ]).then(([notice, press, recruit, healthInfo]) => {
      setStats({
        notice: notice.status === 'fulfilled' ? notice.value.totalCount : 0,
        press: press.status === 'fulfilled' ? (press.value.total ?? 0) : 0,
        recruit: recruit.status === 'fulfilled' ? (recruit.value.total ?? 0) : 0,
        healthInfo: healthInfo.status === 'fulfilled' ? (healthInfo.value.total ?? 0) : 0,
      })
      setStatsLoading(false)
    })
  }, [])

  const pageTitle = sideMenuItems.find((m) => m.to === location.pathname)?.label ?? '대시보드'

  return (
    <div className="adm_wrap">
      <AdminSidebar />

      {/* 콘텐츠 영역 */}
      <div className="adm_content">
        {/* 상단 헤더 */}
        <AdminHeader pageTitle={pageTitle} />

        {/* 본문 */}
        <main className="adm_main">
          {/* 콘텐츠 현황 */}
          <section className="adm_section">
            <h3 className="adm_section_title">콘텐츠 현황</h3>
            <div className="adm_stats">
              {[
                { label: '공지사항', count: stats.notice, icon: 'campaign' },
                { label: '보도자료', count: stats.press, icon: 'newspaper' },
                { label: '채용정보', count: stats.recruit, icon: 'work' },
                { label: '건강정보', count: stats.healthInfo, icon: 'health_and_safety' },
              ].map((item) => (
                <div key={item.label} className="adm_stat_card">
                  <p className="adm_stat_label">{item.label}</p>
                  <p className="adm_stat_count">
                    {statsLoading ? '-' : item.count.toLocaleString()}
                  </p>
                  <p className="adm_stat_unit">건</p>
                </div>
              ))}
            </div>
          </section>

          {/* 바로가기 */}
          <section className="adm_section">
            <h3 className="adm_section_title">바로가기</h3>
            <div className="adm_shortcuts">
              <Link to="/news/notice" target="_blank" rel="noopener noreferrer" className="adm_shortcut_card">
                <span className="material-icons adm_shortcut_icon">campaign</span>
                <span className="adm_shortcut_label">공지사항</span>
              </Link>
              <Link to="/news/press" target="_blank" rel="noopener noreferrer" className="adm_shortcut_card">
                <span className="material-icons adm_shortcut_icon">newspaper</span>
                <span className="adm_shortcut_label">보도자료</span>
              </Link>
              <Link to="/news/recruit" target="_blank" rel="noopener noreferrer" className="adm_shortcut_card">
                <span className="material-icons adm_shortcut_icon">work</span>
                <span className="adm_shortcut_label">채용정보</span>
              </Link>
              <Link to="/community/health-info" target="_blank" rel="noopener noreferrer" className="adm_shortcut_card">
                <span className="material-icons adm_shortcut_icon">health_and_safety</span>
                <span className="adm_shortcut_label">건강정보</span>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
