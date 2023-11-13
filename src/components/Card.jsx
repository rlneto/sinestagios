import shared from '../styles/Shared.module.css'
import styles from '../styles/Card.module.css'

export default function Card (props) {
  return (
    <div className={styles.card}>
      <div className={`${styles.cardBody}`}>
        {props.children}
      </div>
    </div>
  )
}
