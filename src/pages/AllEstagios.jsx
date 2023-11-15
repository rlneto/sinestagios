import { Card } from '@mui/material'
import shared from '../styles/Shared.module.css'
import styles from '../styles/AllEstagios.module.css'
import { useNavigate } from 'react-router-dom'
import { vagas } from '../db/Database.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBriefcase   } from '@fortawesome/free-solid-svg-icons';
import Button from '../components/Button';


export default function AllEstagios () {
  const navegar = useNavigate()
  return (
    <div className={`${shared.flex} ${shared.column} ${shared.alignCenter}`}>
      <div className={`${shared.row} ${shared.marginBottom} ${shared.textAlignCenter}`}>
          <h1 className={`${styles.title}`}>Vagas de estágio</h1>
      </div>
      <div className={`${shared.row}`}>
        <ul className={`${shared.noList} ${shared.flex} ${shared.row} ${shared.justifyCenter} ${shared.wrap} ${shared.bigGap} ${styles.ul}`} >
          {vagas.map(vaga => (
            <li key={vaga.id} className={`${shared.marginBottom}`}>
              <Card>
                <div className={`${shared.padding20} ${styles.boxContentVagas} ${shared.flex} ${shared.column} ${shared.smallGap} ` }>
                  <img className={`${styles.imgCard}`}src={vaga.img} alt="Vaga de estágio" />
                  <div className={`${shared.flex} ${shared.column} ${shared.alignCenter} ${shared.textAlignCenter} ${shared.bigGap}`} >
                    <h2 className={`${styles.title_vaga}`}>{vaga.titulo}</h2>
                    <h3 className={`${styles.title_empresa}`}>{vaga.empresa}</h3>
                    <h4 className={`${styles.title_empresa}`}>{vaga.autor}</h4>
                    <p className={`${shared.flex} ${shared.alignCenter} ${styles.descricao}`}>{vaga.descricao}</p>
                    <div className={`${shared.flex} ${shared.row} ${shared.bigGap}`} >
                      <div className={`${shared.flex} ${shared.row} ${shared.smallGap}`}>
                        <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: "gray" }} />
                        <p className={`${styles.local}`}>{vaga.local}</p>
                      </div>
                      <div className={`${shared.flex} ${shared.row} ${shared.smallGap}`}>
                        <FontAwesomeIcon icon={faBriefcase } style={{ color: "gray"}}/>
                        <p className={`${styles.period}`}>{vaga.periodo}</p>
                      </div>
                    </div>
                    <Button action={() => navegar('/dashboard/mensagem')} text={`Enviar mensagem`} estilo={shared.btnVagas}></Button>
                  </div>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
