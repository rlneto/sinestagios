import shared from '../styles/Shared.module.css'
import styles from '../styles/Footer.module.css'

export default function Footer () {
  return (
    <div className={`${styles.fter} ${shared.flex} ${shared.row} ${shared.alignCenter}`}>
      <p>&copy; 2023 Estágios INE. Todos os direitos reservados</p>
      <p>links</p>
    </div>
  )
}
