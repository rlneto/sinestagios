import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { useRef } from 'react'

export default function Register () {
  return (
    <div>
      <div><h1>Cadastro</h1></div>
      <div>
        <form type='submit'>
          <div><input type='text' id='name' placeholder='Nome' /></div>
          <div><input type='text' id='email' placeholder='E-mail' /></div>
          <div><input type='password' id='password' placeholder='Senha' /></div>
          <div><input type='password' id='password' placeholder='Confirmar senha' /></div>
          <div><Button>Cadastrar</Button></div>
          
          </form>
        </div>
      </div>
    
  )
}
