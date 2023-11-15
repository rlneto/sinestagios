import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import axios from 'axios'
import LoggedInContext from '../LoggedInContext'
import UserContext from '../UserContext'
// import { users } from '../db/Database.js'
import InputText from '../components/InputText'
import { Card, Button, CircularProgress } from '@mui/material'
// import Card from '../components/Card'
// import Button from '../components/Button'
import shared from '../styles/Shared.module.css'
import styles from '../styles/Login.module.css'

export default function Login () {
  const { setLoggado } = useContext(LoggedInContext)
  const { setUser } = useContext(UserContext)
  const [loading, setLoading] = useState(false)
  const navegar = useNavigate();
  const api = axios.create({
    baseURL: 'https://estagios-ine-api.onrender.com/api/v1/auth/login'
  })
  const LoginHandler = async () => {
    setLoading(true)
    const email = emailRef.current.value
    const password = passwordRef.current.value
    try {
      const response = await api.post('', {
        email: email,
        password: password
      })
      const user = response.data.user
      setUser(user)
      setLoggado(true)
      setLoading(false)
      navegar('/dashboard/all')
    } catch (error) {
      alert('Usuário não encontrado')
      setLoading(false)
      navegar('/login')
    }
  }
  // const LoginHandler = () => {
  //   const email = emailRef.current.value
  //   const password = passwordRef.current.value
  //   try {
  //     const user = users.find(user => user.email === email)
  //     if (user) {
  //       if (user.password === password) {
  //         setUser(user)
  //         setLoggado(true)
  //         console.log(user)
  //         navegar('/dashboard/all')
  //       } else {
  //         alert('Senha incorreta')
  //         navegar('/login')
  //       }
  //     }
  //   } catch (error) {
  //     alert('Usuário não encontrado')
  //     navegar('/login')
  //   }
  // }
  const emailRef = useRef();
  const passwordRef = useRef();
  return (
    <div className={`${shared.flex} ${shared.column} ${shared.alignCenter }`}>
      <div className={`${shared.row} ${shared.marginBottom}`}>
      <Card sx={{
        boxShadow: '5px 5px 5px 5px rgba(0, 0, 0, 0.1)',
      }}>
        <div className={`${shared.padding20}`}>
        <div className={`${styles.title}`}><h1>Login</h1></div>
        <div className={`${shared.flex} ${shared.column} ${shared.marginBottom}`}>
          <form className={`${styles.box_form}`}>
            <InputText tipo='email' nome='email' rotulo='E-mail' valorPadrao={'pogarrido@earth.com.br'} referencia={emailRef} />
          <InputText tipo='password' nome='password' rotulo='Senha' referencia={passwordRef} valorPadrao={'quantacoisaboa'}/>
          </form>
        </div>
        {/* <div className={`${styles.btn}`}><Button action={LoginHandler} text={`Entrar`} estilo={shared.btnLogin} /></div> */}
        <Button fullWidth onClick={LoginHandler} variant="contained" color="primary" className={`${styles.btn}`} disabled={loading}>{loading ? <CircularProgress size={24} /> : 'Entrar'}</Button>
        <div className={`${shared.flex} ${shared.row} ${shared.justifyCenter} ${styles.box_cadastro}`}>
          <p>Não tem uma conta?</p>
          <Link to='/register' className={`${styles.nav_link}`}>Cadastrar-se</Link>
        </div>
        </div>
      </Card>
      </div>
    </div>
  )
}
