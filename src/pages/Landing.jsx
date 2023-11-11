import { Link } from 'react-router-dom'

export default function Landing () {
  return (
    <div className='landing'>
      <div className='landing__container'>
        <div className='landing__container__content'>
          <h1 className='landing__container__content__title'>SINEstágios</h1>
          <p className='landing__container__content__description'>
            O SINEstágios é um sistema de gerenciamento de estágios para o curso de
            Sistemas de Informação da Universidade Federal de Santa Catarina.
          </p>
          <Link to='/login' className='landing__container__content__button'>
            Acessar
          </Link>
        </div>
      </div>
    </div>
  )
}
