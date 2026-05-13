import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '@/components/ScrollToTop'
import hpcenterCss from '@/assets/css/hpcenter.css?inline'

export default function WellLayout() {
  useEffect(() => {
    const style = document.createElement('style')
    style.setAttribute('data-layout', 'well')
    style.textContent = hpcenterCss
    document.head.appendChild(style)
    return () => {
      document.querySelector('style[data-layout="well"]')?.remove()
    }
  }, [])

  return (
    <div id="wrap">
      <ScrollToTop />
      <Outlet />
    </div>
  )
}
