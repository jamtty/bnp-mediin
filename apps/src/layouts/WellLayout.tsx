import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '@/components/ScrollToTop'
import hpcenterCssUrl from '@/assets/css/hpcenter.css?url'

export default function WellLayout() {
  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = hpcenterCssUrl
    document.head.appendChild(link)
    document.body.classList.add('well-site')
    return () => {
      document.head.removeChild(link)
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
