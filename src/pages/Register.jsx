import { Link, useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'
// import { users } from '../db/Database'
import axios from 'axios'
import { Card, Button, CircularProgress } from '@mui/material'
// import Button from '../components/Button'
import InputText from '../components/InputText'
// import Card from '../components/Card'
import shared from '../styles/Shared.module.css'
import styles from '../styles/Register.module.css'

export default function Register () {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const navegar = useNavigate()
  const [loading, setLoading] = useState(false)
  const api = axios.create({ baseURL:'https://estagios-ine-api.onrender.com/api/v1/auth/cadastro'})
  const RegisterHandler = async () => {
    setLoading(true)
    if (passwordRef.current.value === confirmPasswordRef.current.value) {
      const user = {
        nome: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value
      }
      try {
        const response = await api.post('', user)
        if (response.status === 201) {
          alert('Usuário cadastrado com sucesso!')
          setLoading(false)
          navegar('/login')
        } else {
          alert('Erro ao cadastrar usuário')
          setLoading(false)
          navegar('/register')
        }
      } catch (error) {
        alert('Erro ao cadastrar usuário')
        setLoading(false)
        navegar('/register')
      }
    } else {
      alert('As senhas não conferem')
    }
  }
  // const RegisterHandler = () => {
  //   if (passwordRef.current.value === confirmPasswordRef.current.value) {
  //     const user = {
  //       nome: nameRef.current.value,
  //       email: emailRef.current.value,
  //       password: passwordRef.current.value
  //     }
  //     users.push(user)
  //     alert('Usuário cadastrado com sucesso!')
  //     navegar('/login')
  // } else {
  //   alert('As senhas não conferem')
  // } }

  return (
    <div className={`${shared.flex} ${shared.column} ${shared.alignCenter } ${shared.padding20} ${shared.marginBottom} ${shared.marginTop}`}>
      <Card sx={{
        boxShadow: '5px 5px 5px 5px rgba(0, 0, 0, 0.1)',
      }}>
        <div className={`${shared.padding20} ${shared.marginBottom} ${shared.marginTop}`}>
      <div className={`${styles.title}`}><h1>Cadastro</h1></div>
      <div>
        <form className={`${styles.box_form}`}>
          <InputText tipo='text' nome='name' rotulo='Nome' referencia={nameRef} />
          <InputText tipo='email' nome='email' rotulo='E-mail' referencia={emailRef} />
          <InputText tipo='password' nome='password' rotulo='Senha' referencia={passwordRef} />
          <InputText tipo='password' nome='confirmPassword' rotulo='Confirme a senha' referencia={confirmPasswordRef} />

          
          </form>
          {/* <div className={`${styles.btn}`}><Button text={`Registrar-se`} action={RegisterHandler} estilo={shared.btnLogin}>Cadastrar</Button></div> */}
          <div className={`${shared.marginTop} ${shared.textAlignCenter}`}>
          <Button fullWidth onClick={RegisterHandler} variant="contained" color="primary" className={`${styles.btn}`} disabled={loading}>{loading ? <CircularProgress size={24} /> : 'Cadastrar-se'}</Button>
          </div>
          </div>
        </div>
        <div className={`${shared.marginTop} ${shared.textAlignCenter} ${shared.marginBottom}`}>
          <span>Já possui cadastro?</span>
          <Link className={`${shared.nav_link}`} to='/login'>Faça login</Link>
        </div>
        </Card>
      </div>
    
  )
}
