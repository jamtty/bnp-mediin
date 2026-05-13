import { useLayoutEffect } from 'react'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '@/components/ScrollToTop'
import styleCss from '@/assets/css/style.css?inline'

export default function MainLayout() {
  useLayoutEffect(() => {
    const style = document.createElement('style')
    style.setAttribute('data-layout', 'main')
    style.textContent = styleCss
    document.head.appendChild(style)
    return () => {
      document.querySelector('style[data-layout="main"]')?.remove()
    }
  }, [])

  return (
    <div id="wrap">
      <ScrollToTop />
      <Outlet />
    </div>
  )
}
