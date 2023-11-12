import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import LoggedInContext from '../LoggedInContext'
import UserContext from '../UserContext'
import InputText from '../components/InputText'
import Card from '../components/Card'
import Button from '../components/Button'
import shared from '../styles/Shared.module.css'
import styles from '../styles/Login.module.css'

export default function Login (props) {
  const { loggado, setLoggado } = useContext(LoggedInContext)
  const { user, setUser } = useContext(UserContext)
  const users = [
    {
      email: 'pogarrido@earth.com.br',
      password: 'quantacoisaboa',
      nome: 'Paul Otolino Garrido'
    }
  ]
  const LoginHandler = () => {
    const email = emailRef.current.value
    const password = passwordRef.current.value
    const user = users.find(user => user.email === email)
    if (user) {
      if (user.password === password) {
        setUser(user)
        setLoggado(true)
        alert(`Usuário ${user.nome} logado com sucesso!`)
      } else {
        alert('Senha incorreta')
      }
    } else {
      alert('Usuário não encontrado')
    }
  }
  const emailRef = useRef();
  const passwordRef = useRef();
  return (
    <div className={`${shared.flex} ${shared.column} ${shared.alignCenter }`}>
      <Card>
        <div className={`${styles.title}`}><h1>Login</h1></div>
        <div className={`${shared.flex} ${shared.column} ${shared.alignCenter }`}>
          <form className={`${styles.box_form}`}>
            <InputText tipo='email' nome='email' rotulo='E-mail' referencia={emailRef} />
          <InputText tipo='password' nome='password' rotulo='Senha' referencia={passwordRef} />
          </form>
        </div>
        <div className={`${styles.btn}`}><Button action={LoginHandler} text={`Entrar`}/></div>
        <div className={`${shared.flex} ${shared.row} ${shared.justifyCenter} ${styles.box_cadastro}`}>
          <p>Não tem uma conta?</p>
          <Link to='/register' className={`${styles.nav_link}`}>Cadastrar-se</Link>
        </div>
      </Card>
    </div>
  )
}
