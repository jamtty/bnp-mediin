import { useLayoutEffect } from 'react'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '@/components/ScrollToTop'
import funeralCss from '@/assets/css/funeral.css?inline'

export default function FuneralLayout() {
  useLayoutEffect(() => {
    const style = document.createElement('style')
    style.setAttribute('data-layout', 'funeral')
    style.textContent = funeralCss
    document.head.appendChild(style)
    return () => {
      document.querySelector('style[data-layout="funeral"]')?.remove()
    }
  }, [])

  return (
    <div id="wrap">
      <ScrollToTop />
      <Outlet />
    </div>
  )
}
