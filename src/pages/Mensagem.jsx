import { useContext, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../UserContext'
import Card from '../components/Card'
import InputText from '../components/InputText'
import Button from '../components/Button'
import shared from '../styles/Shared.module.css'
import styles from '../styles/Mensagem.module.css'

export default function Mensagem () {
  const { user } = useContext(UserContext)
  const destinatarioRef = useRef()
  const tituloRef = useRef()
  const mensagemRef = useRef()
  const enviarMensagem = () => {
    const destinatario = destinatarioRef.current.value
    const titulo = tituloRef.current.value
    const mensagem = mensagemRef.current.value
    const data = new Date()
    const dataFormatada = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
    const mensagemObj = {
      remetente: user.email,
      destinatario: destinatario,
      titulo: titulo,
      mensagem: mensagem,
      data: dataFormatada
    }
    console.log(mensagemObj)
    alert('Verificar no console (Ctrl + Shift + i) o objeto da mensagem enviada')
  }

  return (
    <div>
      <Card>
        <h1>Enviar Mensagem</h1>
        <div>
          <InputText tipo={'email'} nome={'destinatario'} rotulo={'Destinatário'} valorPadrao={'email@email.com'} referencia={destinatarioRef}/>
        </div>
        <div>
          <InputText tipo={'text'} nome={'titulo'} rotulo={'Título'} valorPadrao={'Título da mensagem'} referencia={tituloRef}/>
        </div>
        <div className={`${shared.marginTop}`}>
          <label className={`${shared.rotulo}`} htmlFor={'mensagem'}>Mensagem</label>
        </div>
        <div>
          <textarea className={`${styles.textarea}`} name={'mensagem'} id={'mensagem'} cols={'30'} rows={'10'} placeholder={'Digite sua mensagem aqui'} ref={mensagemRef}/>
        </div>
        <div>
          <Button action={enviarMensagem} text={'Enviar'} estilo={shared.btn}/>
        </div>
      </Card>
    </div>
  )
}
