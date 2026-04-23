import { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuthStore } from '@/store/useAuthStore'
import adminCssUrl from '@/assets/css/admin.css?url'

export default function AdminLayout() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)

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

  return <Outlet />
}
