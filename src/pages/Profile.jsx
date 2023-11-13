import { Link } from 'react-router-dom'
import Card from '../components/Card'
import { useContext } from 'react'
import UserContext from '../UserContext'

export default function Profile () {
  const { user } = useContext(UserContext)

  return (
    <Card>
      <div>
        { user.profileImage ? <img src={user.profileImage} alt=""/> : '' }
      </div>
      <h1>Perfil de {user.nome}</h1>
      <p>Email: {user.email}</p>
      <p>Mensagens na Caixa de Entrada:</p>
      <ul>
        {user.inbox.map((message, index) => (
          <li key={index}>
            <strong>De:</strong> {message.remetente}<br />
            <strong>Título:</strong> {message.titulo}<br />
            <strong>Mensagem:</strong> {message.mensagem}
          </li>
        ))}
        <p></p>
      </ul>
    </Card>
    
  )
}
