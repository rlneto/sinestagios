import { Link, useRouteError } from 'react-router-dom'

export default function Error () {
  const error = useRouteError();
  return (<div>
    <h1>Erro {`${error}`}</h1>
    <Link to='/'>Voltar para a página inicial</Link>
    </div>
  )
}
