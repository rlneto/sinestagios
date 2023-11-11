import { Outlet } from 'react-router-dom'

export default function HomeLayout () {
  return (
    <div>
      <h1>Boas vindas ao SINEstágios</h1>
      <Outlet />
    </div>
  )
  
}
