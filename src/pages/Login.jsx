import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import InputText from '../components/InputText'
import shared from '../styles/Shared.module.css'
import styles from '../styles/Login.module.css'

export default function Login () {
  const LoginHandler = () => {
    console.log(emailRef.current.value, passwordRef.current.value)
  }
  const emailRef = useRef();
  const passwordRef = useRef();
  return (
    <div className={`${shared.flex} ${shared.column} ${styles.container}`}>
      <div>Acesso</div>
      <div><form>
        <InputText tipo='email' nome='email' rotulo='E-mail' referencia={emailRef} />
        <InputText tipo='password' nome='password' rotulo='Senha' referencia={passwordRef} />
        </form>
        <div><Button className={shared.botao} action={LoginHandler} text={`Entrar`}/></div>
      
      </div>
      <div>
        <Link to='/register'>Cadastrar-se</Link>
      </div>
    </div>
  )
}
