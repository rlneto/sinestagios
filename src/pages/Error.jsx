import { Link } from 'react-router-dom'

export default function Error () {
  return (<div>
    <h1>Algum erro não especificado ocorreu</h1>
    <Link to='/'>Voltar para a página inicial</Link>
    </div>
  )
}
