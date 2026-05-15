import { Outlet, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuthStore, isTokenExpired } from '@/store/useAuthStore'
import '@/assets/css/admin.css'

export default function AdminLayout() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)
  const accessToken = useAuthStore((s) => s.accessToken)
  const clearAuth = useAuthStore((s) => s.clearAuth)
  const location = useLocation()
  const navigate = useNavigate()

  // 토큰 만료 시 자동 로그아웃 타이머
  useEffect(() => {
    if (!accessToken) return
    try {
      const base64 = accessToken.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')
      const payload = JSON.parse(atob(base64)) as { exp?: number }
      if (!payload.exp) return
      const msUntilExpiry = payload.exp * 1000 - Date.now()
      if (msUntilExpiry <= 0) return // 이미 만료 → 아래 렌더 단계에서 처리
      const id = setTimeout(() => {
        clearAuth()
        navigate('/admin/login?expired=1', { replace: true })
      }, msUntilExpiry)
      return () => clearTimeout(id)
    } catch {
      // 잘못된 토큰 형식은 무시
    }
  }, [accessToken, clearAuth, navigate])

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />
  }

  // 페이지 진입·새로고침 시 토큰 만료 즉시 감지
  if (isTokenExpired(accessToken)) {
    clearAuth()
    return <Navigate to="/admin/login?expired=1" replace />
  }

  return <Outlet key={location.key} />
}
