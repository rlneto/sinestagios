import Card from '../components/Card'
import shared from '../styles/Shared.module.css'
import { users, vagas } from '../db/Database.js'

export default function AllEstagios () {
  
  return (
    <div className={`${shared.flex} ${shared.column} ${shared.alignCenter}`}>
      <div className={`${shared.row} ${shared.marginBottom} ${shared.textAlignCenter}`}>
        <h1>Vagas de estágio</h1>
      </div>
      <div className={`${shared.row}`}>
      <ul className={shared.noList}>
        {vagas.map(vaga => (
          <li key={vaga.id} className={shared.marginBottom}>
            <Card>
              <h2>{vaga.titulo}</h2>
              <h3>{vaga.empresa}</h3>
              <p>{vaga.local}</p>
              <p>{vaga.descricao}</p>
            </Card>
          </li>
        ))}
      </ul>
      </div>
    </div>
  )
}
