import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

export default function Login () {
  const LoginHandler = () => {
    console.log(emailRef.current.value, passwordRef.current.value)
  }
  const emailRef = useRef();
  const passwordRef = useRef();
  return (
    <div>
      <div>Acesso</div>
      <div><form>
        <div>
        <label htmlFor='email'>E-mail</label></div>
        <div>
        <input type='email' ref={emailRef} id='email' /></div>
        <div><label htmlFor='password'>Senha</label></div>
        <div><input type='password' id='password' ref={passwordRef} /></div>
        </form>
        <div><Button action={LoginHandler} text={`Entrar`}/></div>
      
      </div>
      <div>
        <Link to='/register'>Cadastrar-se</Link>
      </div>
    </div>
  )
}
