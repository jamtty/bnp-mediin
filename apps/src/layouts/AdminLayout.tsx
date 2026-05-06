import { useEffect } from 'react'
import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { useAuthStore } from '@/store/useAuthStore'
import adminCssUrl from '@/assets/css/admin.css?url'

export default function AdminLayout() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)
  const location = useLocation()

  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = adminCssUrl
    document.head.appendChild(link)
    return () => { document.head.removeChild(link) }
  }, [])

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />
  }

  return <Outlet key={location.key} />
}
