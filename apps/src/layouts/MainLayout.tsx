import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div id="wrap">
      <Outlet />
    </div>
  )
}
