import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '@/components/ScrollToTop'
import funeralCssUrl from '@/assets/css/funeral.css?url'

export default function FuneralLayout() {
  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = funeralCssUrl
    document.head.appendChild(link)
    document.body.classList.add('funeral-site')
    return () => {
      document.head.removeChild(link)
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
