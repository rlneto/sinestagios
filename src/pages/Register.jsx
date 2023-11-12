import { Link } from 'react-router-dom'
import Button from '../components/Button'
import InputText from '../components/InputText'
import Card from '../components/Card'
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
    <div className={`${shared.flex} ${shared.column} ${shared.alignCenter }`}>
      <Card>
      <div className={`${styles.title}`}><h1>Cadastro</h1></div>
      <div>
        <form className={`${styles.box_form}`}>
          <InputText tipo='text' nome='name' rotulo='Nome' referencia={nameRef} />
          <InputText tipo='email' nome='email' rotulo='E-mail' referencia={emailRef} />
          <InputText tipo='password' nome='password' rotulo='Senha' referencia={passwordRef} />
          <InputText tipo='password' nome='confirmPassword' rotulo='Confirme a senha' referencia={confirmPasswordRef} />

          
          </form>
          <div className={`${styles.btn}`}><Button text={`Registrar-se`} action={RegisterHandler}>Cadastrar</Button></div>
        </div>
        <div className={`${shared.marginTop} ${shared.textAlignCenter}`}>
          <span>Já possui cadastro?</span>
          <Link className={`${shared.nav_link}`} to='/login'>Faça login</Link>
        </div>
        </Card>
      </div>
    
  )
}
