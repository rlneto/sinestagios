import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function HomeLayout () {
  return (
    <div>
      
      <div><Navbar /></div>
      <div>
        <div><img src='lamp.png'></img></div>
        <div>
        <h1>Estágios INE</h1>
        </div>
        </div>
      <div><Outlet /></div>
      <div><Footer /></div>
    </div>
  )
  
}
