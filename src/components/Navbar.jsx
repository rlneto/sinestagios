import shared from '../styles/Shared.module.css'
import styles from '../styles/Navbar.module.css'
import { useContext } from 'react'
import UserContext from '../UserContext'
import Button from './Button'
import { Link } from 'react-router-dom';

export default function Navbar () {
  const { loggado, setLoggado } = useContext(UserContext)
  const linksLoggado = (
    <>
      <li>
        <Link to="/dashboard" className={`${styles.nav_link}`}>Dashboard</Link>
      </li>
      <li>
        <Link to="/inbox" className={`${styles.nav_link}`}>Inbox</Link>
      </li>
      <li>
        <Button action={() => setLoggado(false)} text={`Sair`}/>
      </li>
    </>
  )

  const linksNaoLoggado = (
    <>
      <li>
        <Link to="/login" className={`${styles.nav_link}`}>Login</Link>
      </li>
    </>
  )
  return (
    <div className={`${shared.flex} ${shared.alignCenter} ${styles.container}`}>
      <div className={`${shared.flex} ${shared.alignCenter} ${styles.c1}`}>
        <div><img className={`${styles.logo}`} src='lamp.png'></img></div>
        <h1>Estágios <span className={`${styles.title_INE}`}>INE.</span></h1>
      </div>
      <div className={`${styles.c2}`}>
        <nav>
          <ul className={`${styles.ul}`}>
            {loggado ? linksLoggado : linksNaoLoggado}
            <li>
              <Link to="/register" className={`${styles.nav_link}`}>Cadastro</Link>
            </li>
            <li><button onClick={() => {setLoggado(!loggado)}}>Desloggar</button></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
