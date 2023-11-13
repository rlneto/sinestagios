import { Link, useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import { users } from '../db/Database'
import Button from '../components/Button'
import InputText from '../components/InputText'
import Card from '../components/Card'
import shared from '../styles/Shared.module.css'
import styles from '../styles/Register.module.css'

export default function Register () {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const navegar = useNavigate()
  const RegisterHandler = () => {
    if (passwordRef.current.value === confirmPasswordRef.current.value) {
      const user = {
        nome: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value
      }
      users.push(user)
      alert('Usuário cadastrado com sucesso!')
      navegar('/login')
  } else {
    alert('As senhas não conferem')
  } }

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
          <div className={`${styles.btn}`}><Button text={`Registrar-se`} action={RegisterHandler} estilo={shared.btnLogin}>Cadastrar</Button></div>
        </div>
        <div className={`${shared.marginTop} ${shared.textAlignCenter}`}>
          <span>Já possui cadastro?</span>
          <Link className={`${shared.nav_link}`} to='/login'>Faça login</Link>
        </div>
        </Card>
      </div>
    
  )
}
