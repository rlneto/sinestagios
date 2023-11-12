import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import InputText from '../components/InputText'
import Card from '../components/Card'
import shared from '../styles/Shared.module.css'
import styles from '../styles/Login.module.css'

export default function Login (props) {

  const users = [
    {
      email: 'pogarrido@earth.com.br',
      password: 'quantacoisaboa',
      nome: 'Paul Otolino Garrido'
    }
  ]
  const LoginHandler = () => {
    if (users[0].email === emailRef.current.value && users[0].password === passwordRef.current.value) {
      props.setLoggado(true)
      alert('Usuário logado')
      console.log(props.loggado)
    } else {
      alert('Usuário ou senha incorretos')
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
        <div className={`${shared.flex} ${shared.row} ${styles.box_cadastro}`}>
          <p>Não tem uma conta?</p>
          <Link to='/register' className={`${styles.nav_link}`}>Cadastrar-se</Link>
        </div>
      </Card>
    </div>
  )
}
