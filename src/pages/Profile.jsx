import Card from '../components/Card'
import { useContext } from 'react'
import UserContext from '../UserContext'

export default function Profile () {
  const { user } = useContext(UserContext)

  return (
    <Card>
      <div>
        { user.foto ? <img src={user.foto} alt=""/> : '' }
      </div>
      <h1>Perfil de {user.nome}</h1>
      <p>Email: {user.email}</p>
    </Card>
    
  )
}
