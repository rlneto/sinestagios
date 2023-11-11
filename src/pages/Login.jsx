import InputText from '../components/InputText'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import shared from '../styles/Shared.module.css'
import styles from '../styles/Login.module.css'

export default function Login () {
  const LoginHandler = () => {
    console.log(emailRef.current.value, passwordRef.current.value)
  }
  const emailRef = useRef();
  const passwordRef = useRef();
  return (
    <div className={`${shared.flex} ${shared.column} ${shared.alignCenter } ${styles.container}`}>
      <div className={`${styles.title}`}><h1>Login</h1></div>
      <div className={`${shared.flex} ${shared.column} ${shared.alignCenter }`}>
        <form className={`${styles.box_form}`}>
          <div className={`${styles.box}`}>
                    <InputText tipo='email' nome='email' rotulo='E-mail' referencia={emailRef} />
          </div>
          <div className={`${styles.box}`}>
            <InputText tipo='password' nome='password' rotulo='Senha' referencia={passwordRef} />
          </div>
        </form>
      </div>
      <div className={`${styles.btn}`}><Button action={LoginHandler} text={`Entrar`}/></div>
      <div className={`${shared.flex} ${shared.row} ${styles.box_cadastro}`}>
        <p>Don't have an account?</p>
        <Link to='/register' className={`${styles.nav_link}`}>Cadastrar-se</Link>
      </div>
    </div>
  )
}
