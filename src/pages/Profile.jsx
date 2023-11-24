import { Link } from 'react-router-dom'
// import { Card } from '@mui/material'
import Card from '../components/Card'
import styles from '../styles/Profile.module.css'
import { useContext } from 'react'
import UserContext from '../UserContext'
import shared from '../styles/Shared.module.css'
import Button from '../components/Button'

export default function Profile () {
  const { user } = useContext(UserContext)
  return (
    <div>
      <Card>
        <div className={`${shared.flex} ${shared.column} ${shared.alignCenter} ${shared.bigGap}`}>
          <div className={`${shared.flex} ${shared.column} ${shared.alignCenter} ${shared.bigGap}`}>
            <img className={`${styles.imgCard}`} src={user.foto} alt="" />
            <h1 className={`${styles.titleNome}`}>Perfil de {user.nome}</h1>
            <p className={`${styles.titleEmail}`}>Email: {user.email}</p>
            <p className={`${styles.titleEmail}`}>Genero: {user.genero}</p>
            <p className={`${styles.titleEmail}`}>Data de Nascimento: {user.dataNasc}</p>

          </div>
          <div className={`${shared.flex} ${shared.alignCenter} ${shared.bigGap}`}>
          <Link to="/dashboard/atualizar-usuario">
            <Button text={`Editar Perfil`} estilo={shared.btnVagas}></Button>
          </Link>
            <Button action={() => navegar()} text={`Ver mensagens`} estilo={shared.btnVagas}></Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

