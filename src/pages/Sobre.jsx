import shared from '../styles/Shared.module.css'
import styles from '../styles/Sobre.module.css'

export default function Sobre() {
    return (
        <div className={`${shared.flex} ${shared.column} ${shared.alignCenter}`}>
            <div className={`${shared.row} ${shared.marginBottom} ${shared.textAlignCenter}`}>
                <h1 className={`${styles.title}`}>Vagas de estágio</h1>
            </div>
            <p className= {`${styles.body}`}> texto</p>
            <div><img src='/Users/rafaelaborges/Desktop/sinestagios/public/ufsc-20felipe-20carneiro_5_3.png' alt="Imagem UFSC"/> </div>
        </div>
    )
}