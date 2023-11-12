import { Outlet } from 'react-router-dom'
import shared from '../styles/Shared.module.css'
import styles from '../styles/DashboardLayout.module.css'

export default function DashboardLayout () {
  return (
    <div>
      <Outlet />
    </div>
  )
}
