import { Outlet } from 'react-router-dom'
import SideFixMenu from '@/components/SideFixMenu'

export default function MainLayout() {
  return (
    <>
      <Outlet />
      <SideFixMenu />
    </>
  )
}
