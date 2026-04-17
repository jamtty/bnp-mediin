import { Outlet } from 'react-router-dom'
import ScrollToTop from '@/components/ScrollToTop'

export default function MainLayout() {
  return (
    <div id="wrap">
      <ScrollToTop />
      <Outlet />
    </div>
  )
}
