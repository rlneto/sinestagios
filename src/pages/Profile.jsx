import { Link } from 'react-router-dom'
import Card from '../components/Card'
import { users, vagas } from '../db/Database.js'

export default function Profile () {
  return (
    <Card>
      <div>
        <img src={users.profileImage} alt="" />
      </div>
      <h1>Perfil de {users.nome}</h1>
      <p>Email: {users.email}</p>
      <p>Mensagens na Caixa de Entrada:</p>
      <ul>
        {/* {users.inbox.map((message, index) => (
          <li key={index}>
            <strong>De:</strong> {message.remetente}<br />
            <strong>Título:</strong> {message.titulo}<br />
            <strong>Mensagem:</strong> {message.mensagem}
          </li>
        ))} */}
        <p></p>
      </ul>
    </Card>
    
  )
}
