import shared from '../styles/Shared.module.css'
import styles from '../styles/Navbar.module.css'
import { useContext } from 'react'
import LoggedInContext from '../LoggedInContext'
import UserContext from '../UserContext'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import { Link } from 'react-router-dom';
import lamp from '../assets/lamp.png'

export default function Navbar () {
  const { loggado, setLoggado } = useContext(LoggedInContext)
  const { setUser } = useContext(UserContext)
  const navegar = useNavigate();
  const linksLoggado = (
    <>
      <Link to="/dashboard/all" className={`${styles.nav_link}`}>Vagas</Link>
      <li>
        <Link to="/dashboard/inbox" className={`${styles.nav_link}`}>Inbox</Link>
      </li>
      <li>
        <Link to="/dashboard/profile" className={`${styles.nav_link}`}>Perfil</Link>
      </li>
      <li>
        <Link to="/dashboard/mensagem" className={`${styles.nav_link}`}>Escrever Mensagem</Link>
      </li>
      <li>
        <Link to="/dashboard/add" className={`${styles.nav_link}`}>Criar Vaga</Link>
      </li>
      <li>
      
        <Button action={() => {
          setLoggado(false)
          setUser(null)
          navegar('/')
          }} text={`Sair`}/>
      </li>
    </>
  )

  const linksNaoLoggado = (
    <>
      <li>
        <Link to="/register" className={`${styles.nav_link}`}>Cadastro</Link>
      </li>
      <li >
        <Button action={() => {navegar('/login')}} text={`Login`} estilo={shared.btn}/>
      </li>
    </>
  )
  return (
    <div className={`${shared.flex} ${shared.alignCenter} ${styles.container}`}>
      <div className={`${shared.flex} ${shared.alignCenter} ${styles.c1}`}>
        <div><img className={`${styles.logo}`} src={lamp}></img></div>
        <h1>Estágios <span className={`${styles.title_INE}`}>INE</span></h1>
      </div>
      <div className={`${styles.c2}`}>
        <nav>
          <ul className={`${styles.ul} ${shared.flex} ${shared.row} ${shared.alignCenter}`}>
            {/* <li><button onClick={() => {setLoggado(!loggado)}}>{loggado ? `Desloggar` : `Loggar`}</button></li> */}
            {/* <li><button onClick={() => {console.log(window.location.href)}}>Console</button></li> */}
            {loggado ? linksLoggado : linksNaoLoggado}
          </ul>
        </nav>
      </div>
    </div>
  )
}
