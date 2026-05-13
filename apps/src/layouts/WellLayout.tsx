import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '@/components/ScrollToTop'
import '@/assets/css/hpcenter.css'

export default function WellLayout() {
  useEffect(() => {
    document.body.classList.add('well-site')
    return () => {
      document.body.classList.remove('well-site')
    }
  }, [])

  return (
    <div id="wrap">
      <ScrollToTop />
      <Outlet />
    </div>
  )
}
