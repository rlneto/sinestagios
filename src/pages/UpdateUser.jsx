import { Link, useNavigate } from 'react-router-dom'
import { useRef, useContext} from 'react'
import { users } from '../db/Database'
import Button from '../components/Button'
import InputText from '../components/InputText'
import Card from '../components/Card'
import shared from '../styles/Shared.module.css'
import styles from '../styles/Register.module.css'
import UserContext from '../UserContext'
import axios from 'axios'

export default function UpdateUser () {
  const nameRef = useRef();
  const emailRef = useRef();
  const birthDateRef = useRef();
  const genderRef = useRef();
  const navegar = useNavigate()
  const { user } = useContext(UserContext)
  const api = axios.create({
    baseURL: 'https://estagios-ine-api.onrender.com/api/v1/update'
  })

  const UpdateHandler = () => {
    //descomentar linhas 25 a 30 quando for rodar com o backend
    // api.put('', {
    //     email: user.email,
    //     nome: nameRef.current.value,
    //     dataNasc: emailRef.current.value,
    //     genero: genderRef.current.value,
    // })

    //comentar da linha 33 a 40 quando for rodar com o backend
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === user.email) {
            users[i].nome = nameRef.current.value;
            users[i].dataNasc = birthDateRef.current.value;
            users[i].genero = genderRef.current.value;
          break;
        }
      }

    alert('Usuário atualizado com sucesso!')
    navegar('/dashboard/profile')

   }

  return (
    <div className={`${shared.flex} ${shared.column} ${shared.alignCenter} ${shared.marginTop}`}>
      <Card>
      <div className={`${styles.title}`}><h1>Dados do Usuário</h1></div>
      <div>
        <form className={`${styles.box_form}`}>
          <InputText tipo='text' nome='name' rotulo='Nome' referencia={nameRef} />
          <InputText tipo='date' nome='birthDate' rotulo='Data de Nascimento' referencia={birthDateRef} />
          <InputText tipo='text' nome='gender' rotulo='Gênero' referencia={genderRef} />
          </form>
          <div className={`${styles.btn}`}><Button text={`Atualizar`} action={UpdateHandler} estilo={shared.btnLogin}>Cadastrar</Button></div>
        </div>
        </Card>
      </div>
    
  )
}
