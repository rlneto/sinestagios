import { useContext, useRef } from 'react'
import UserContext from '../UserContext'
import { vagas } from '../db/Database.js'
import Card from '../components/Card'
import InputText from '../components/InputText'
import Button from '../components/Button'
import shared from '../styles/Shared.module.css'

export default function AddEstagio () {
  const { user } = useContext(UserContext)
  const empresaRef = useRef()
  const tituloRef = useRef()
  const localRef = useRef()
  const descricaoRef = useRef()
  const periodoRef = useRef()
  const cadastrarVaga = () => {
    const novaVaga = {
      empresa: empresaRef.current.value,
      titulo: tituloRef.current.value,
      local: localRef.current.value,
      descricao: descricaoRef.current.value,
      periodo: periodoRef.current.value,
      criador: user.email
    }
    vagas.push(novaVaga)
    alert('Vaga cadastrada com sucesso!')
  }

  return (
    <div className={`${shared.flex} ${shared.column}`}>
      <Card>
        <h1>Cadastrar vaga</h1>
        <div>
          <InputText tipo={'text'} nome={'titulo'} rotulo={'Título'} valorPadrao={'Título da vaga'} referencia={tituloRef}/>
        </div>
        <div>
          <InputText tipo={'text'} nome={'empresa'} rotulo={'Empresa'} valorPadrao={'Empresa'} referencia={empresaRef}/>
        </div>
        <div>
          <InputText tipo={'text'} nome={'local'} rotulo={'Local'} valorPadrao={'Local'} referencia={localRef}/>
        </div>
        <div>
          <InputText tipo={'text'} nome={'descricao'} rotulo={'Descrição'} valorPadrao={'Descrição'} referencia={descricaoRef}/>
        </div>
        <div>
          <InputText tipo={'text'} nome={'periodo'} rotulo={'Período'} valorPadrao={'Período'} referencia={periodoRef}/>
        </div>
        <div className={`${shared.marginTop}`}>
          <Button action={cadastrarVaga} text={'Enviar'} estilo={shared.btn}/>
        </div>
      </Card>
    </div>
  )
}
