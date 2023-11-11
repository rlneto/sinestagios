import styles from '../styles/Card.module.css'

export default function Card (props) {
  return (
    <div className={styles.card}>
      <div className='card-body'>
        {props.children}
      </div>
    </div>
  )
}
