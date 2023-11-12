import Card from '../components/Card'
import shared from '../styles/Shared.module.css'

export default function AllEstagios () {
  const vagas = [
      {
        id: 1,
        titulo: 'Estágio em Desenvolvimento de Software',
        empresa: 'Empresa 1',
        local: 'São Paulo - SP',
        descricao: 'Lorem ipsum',
      },
      {
        id: 2,
        titulo: 'Estágio em Desenvolvimento de Software',
        empresa: 'Empresa 2',
        local: 'São Paulo - SP',
        descricao: 'Lorem ipsum',
      },
      {
        id: 3,
        titulo: 'Estágio em Desenvolvimento de Software',
        empresa: 'Empresa 3',
        local: 'São Paulo - SP',
        descricao: 'Lorem ipsum',
      },
      {
        id: 4,
        titulo: 'Estágio em Desenvolvimento de Software',
        empresa: 'Empresa 4',
        local: 'São Paulo - SP',
        descricao: 'Lorem ipsum',
      },
      {
        id: 5,
        titulo: 'Estágio em Desenvolvimento de Software',
        empresa: 'Empresa 5',
        local: 'São Paulo - SP',
        descricao: 'Lorem ipsum',
      }
    ]
  return (
    <div>
      <div>
        <h1>Estágios</h1>
      </div>
      <ul>
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
  )
}
