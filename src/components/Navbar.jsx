import shared from '../styles/Shared.module.css'
import styles from '../styles/Navbar.module.css'
import { useContext } from 'react'
import LoggedInContext from '../LoggedInContext'
import Button from './Button'
import { Link } from 'react-router-dom';
import lamp from '../assets/lamp.png'

export default function Navbar () {
  const { loggado, setLoggado } = useContext(LoggedInContext)
  const linksLoggado = (
    <>
      <Link to="/dashboard/all" className={`${styles.nav_link}`}>Vagas</Link>
      {/* <li>
        <Link to="/inbox" className={`${styles.nav_link}`}>Inbox</Link>
      </li> */}
      <li>
        <Link to="/dashboard/profile" className={`${styles.nav_link}`}>Perfil</Link>
      </li>
      <li>
        <Button action={() => setLoggado(false)} text={`Sair`}/>
      </li>
    </>
  )

  const linksNaoLoggado = (
    <>
      <li>
        <Link to="/register" className={`${styles.nav_link}`}>Cadastro</Link>
      </li>
      <li >
        <Link to="/login" className={`${styles.nav_link} ${shared.btn}`}>Login</Link>
      </li>
    </>
  )
  return (
    <div className={`${shared.flex} ${shared.alignCenter} ${styles.container}`}>
      <div className={`${shared.flex} ${shared.alignCenter} ${styles.c1}`}>
        <div><img className={`${styles.logo}`} src={lamp}></img></div>
        <h1>Estágios <span className={`${styles.title_INE}`}>INE.</span></h1>
      </div>
      <div className={`${styles.c2}`}>
        <nav>
          <ul className={`${styles.ul} ${shared.flex} ${shared.row} ${shared.alignCenter}`}>
            <li><button onClick={() => {setLoggado(!loggado)}}>{loggado ? `Desloggar` : `Loggar`}</button></li>
            {/* <li><button onClick={() => {console.log(window.location.href)}}>Console</button></li> */}
            {loggado ? linksLoggado : linksNaoLoggado}
          </ul>
        </nav>
      </div>
    </div>
  )
}
