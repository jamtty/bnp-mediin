import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '@/components/ScrollToTop'
import '@/assets/css/funeral.css'

export default function FuneralLayout() {
  useEffect(() => {
    document.body.classList.add('funeral-site')
    return () => {
      document.body.classList.remove('funeral-site')
    }
  }, [])

  return (
    <div id="wrap">
      <ScrollToTop />
      <Outlet />
    </div>
  )
}
