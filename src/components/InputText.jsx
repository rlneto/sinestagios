import shared from '../styles/Shared.module.css'
// Os nomes das classes são placeholders, na verdade são várias classes de CSS
export default function InputText ({tipo, nome, rotulo, valorPadrao, referencia}) {
  return (
    <div className={`${shared.inputtext}`}>
      <div>
      <label className={`${shared.rotulo}`} htmlFor={nome}>{rotulo}</label></div>
      <div><input className={`${shared.formulario}`} type={tipo} name={nome} id={nome} placeholder={rotulo} defaultValue={valorPadrao || ''} ref={referencia} required/></div>
    </div>
  )
}
