import shared from '../styles/Shared.module.css'
import styles from '../styles/Sobre.module.css'

export default function Sobre() {
    return (
        <div className={`${shared.flex} ${shared.column} ${shared.alignCenter}`}>
            <div className={`${shared.row} ${shared.marginBottom} ${shared.textAlignCenter}`}>
                <h1 className={`${styles.title}`}>Vagas de estágio</h1>
            </div>
            <div className={`${shared.flex} ${shared.alignCenter} ${shared.bigGap}`} > 
                <p className= {`${styles.body}`}> <div>Caro(a) Estudante,</div>
<div className='body'>Seja bem-vindo(a) ao nosso Sistema de Vagas de Estágio!
Nós entendemos a importância vital do estágio na jornada acadêmica. Por isso, estamos comprometidos em oferecer oportunidades excepcionais para você desenvolver suas habilidades e experiência prática.Nosso sistema é projetado para simplificar e facilitar o processo de busca por estágios, conectando você a uma ampla gama de oportunidades em diferentes áreas e empresas parceiras.
Ao usar nosso sistema, você terá acesso a:

- Uma variedade de vagas de estágio em empresas renomadas.
- Recursos para aprimorar suas habilidades profissionais.
- Suporte personalizado durante todo o processo de candidatura.
- Queremos ajudá-lo a alcançar seus objetivos profissionais e impulsionar sua carreira desde o início.

Junte-se a nós nesta jornada de aprendizado e crescimento profissional. </div>

<div>Atenciosamente,
Alunos da Terceira Fase de Sistemas de Informação</div>
</p>
                <div className= {`${styles.img_card}`}>
                    <img className= {`${styles.img}`} src='\public\ufsc-20felipe-20carneiro_5_3.png' alt="Imagem UFSC"/>
                </div>
            </div>
        </div>
    )
}