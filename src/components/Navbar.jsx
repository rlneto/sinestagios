import shared from '../styles/Shared.module.css'
import styles from '../styles/Navbar.module.css'
import { Link } from 'react-router-dom';

export default function Navbar () {
  return (
    <div className={`${shared.flex} ${shared.alignCenter} ${styles.container}`}>
      <div className={`${shared.flex} ${shared.alignCenter} ${styles.c1}`}>
        <div><img className={`${styles.logo}`} src='lamp.png'></img></div>
        <h1>Estágios <span className={`${styles.title_INE}`}>INE.</span></h1>
      </div>
      <div className={`${styles.c2}`}>
        <nav>
          <ul className={`${styles.ul}`}>
            <li>
              <Link to="/register" className={`${styles.nav_link}`}>Cadastro</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
