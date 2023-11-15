import { Link } from 'react-router-dom'
import Card from '../components/Card'
import { users, vagas } from '../db/Database.js'
import styles from '../styles/Profile.module.css'

export default function Profile () {
  const { user } = useContext(UserContext)
  return (
    <div>
      <Card>
          <div>
            <img className={`${styles.imgCard}`} src="../public/p-2.png" alt="" />
            {/* <div>
              { user.profileImage ? <img src={user.profileImage} alt=""/> : '' }
            </div> */}
            <h1>Perfil de {user.nome}</h1>
            <p>Email: {user.email}</p>
          </div>
      </Card>
    </div>
  )
}



// export default function Profile () {
//   const { user } = useContext(UserContext)

//   return (
//     <Card>
//       <div>
//         { user.profileImage ? <img src={user.profileImage} alt=""/> : '' }
//       </div>
//       <h1>Perfil de {user.nome}</h1>
//       <p>Email: {user.email}</p>
//     </Card>
    
//   )
// }
