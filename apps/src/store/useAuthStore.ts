import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User } from '@/types'

/** JWT exp 클레임을 디코딩하여 만료 여부를 반환 (서명 검증 없음, 클라이언트 전용) */
export function isTokenExpired(token: string | null): boolean {
  if (!token) return true
  try {
    const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')
    const payload = JSON.parse(atob(base64)) as { exp?: number }
    if (!payload.exp) return true
    return payload.exp < Math.floor(Date.now() / 1000)
  } catch {
    return true
  }
}

interface AuthState {
  user: User | null
  accessToken: string | null
  isAuthenticated: boolean
  setAuth: (user: User, token: string) => void
  clearAuth: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      isAuthenticated: false,
      setAuth: (user, accessToken) => set({ user, accessToken, isAuthenticated: true }),
      clearAuth: () => set({ user: null, accessToken: null, isAuthenticated: false }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        accessToken: state.accessToken,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
)

/**
 * 다른 탭에서 로그아웃(또는 로그인) 시 현재 탭의 Zustand 상태를 즉시 동기화.
 * localStorage 'storage' 이벤트는 같은 탭에서는 발생하지 않고 다른 탭에서만 발생함.
 */
if (typeof window !== 'undefined') {
  window.addEventListener('storage', (event) => {
    if (event.key === 'auth-storage') {
      useAuthStore.persist.rehydrate()
    }
  })
}
