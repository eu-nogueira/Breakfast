import { NavLink } from 'react-router-dom'
import imgCafe from '../../../public/img/afe0e4b7-932a-4b71-873e-274608883568.png'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <div className="descricao">
        <h1 className='tituloHome'>Do tempo certo ao gosto perfeito!</h1>
        <p className='descricaoHome'>
          Na Coffee Shop, cada doce é preparado com cuidado, 
          ingredientes selecionados e aquele sabor que conquista na primeira mordida. 
          O equilíbrio ideal entre rapidez, qualidade e prazer em cada detalhe.
        </p>
        <div className="seta"></div>
        <div className="seta"></div>
        <button className='btnVerMenu'><NavLink to="cardapio">Ver Menu</NavLink></button>
      </div>
      <div className="fotoProduto">
          <img src={imgCafe} alt="imagem cafe" width={500} className='imgCafe'/>
      </div>
    </div>
  )
}

export default Home