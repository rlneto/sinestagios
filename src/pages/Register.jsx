import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { useRef } from 'react'
import shared from '../styles/Shared.module.css'
import styles from '../styles/Register.module.css'

export default function Register () {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const RegisterHandler = () => {
    console.log(nameRef.current.value, emailRef.current.value, passwordRef.current.value, confirmPasswordRef.current.value)
  }

  return (
    <div className={`${shared.flex} ${shared.column} ${shared.alignCenter } ${styles.container}`}>
      <div className={`${styles.title}`}><h1>Cadastro</h1></div>
      <div>
        <form type='submit'>
          <div><label htmlFor='name'>Nome</label></div>
          <div><input type='text' id='name' placeholder='Nome' /></div>
          <div><label htmlFor='email'>E-mail</label>          
          </div>
          <div><input type='text' id='email' placeholder='E-mail' /></div>
          <div><label htmlFor='password'>Senha</label></div>
          <div><input type='password' id='password' placeholder='Senha' /></div>
          <div><label htmlFor='password'>Confirmar senha</label></div>
          <div><input type='password' id='password' placeholder='Confirmar senha' /></div>
          <div><Button text={`Registrar-se`} action={RegisterHandler}>Cadastrar</Button></div>
          
          </form>
        </div>
        <div>
          <Link to='/login'>Já possui cadastro? Faça login</Link>
        </div>
        <div>
          <Link to='/'>Voltar para a página inicial</Link>
        </div>
      </div>
    
  )
}
