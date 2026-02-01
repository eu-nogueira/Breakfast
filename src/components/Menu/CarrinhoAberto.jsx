import { useDispatch, useSelector } from 'react-redux'
import './CarrinhoAberto.css'
import { reduzir, incrementar, zerar } from '../../store/Reducer'

function CarrinhoAberto({ handleCarrinho }) {
  const { total } = useSelector((state) => state)
  const dispatch = useDispatch()
  const itens = Object.values(total)

  return (
    <div className='nav'>
      <div className='open'>
        <button onClick={handleCarrinho} className='closeCarrinho'>X</button>
        {itens.length > 0 ?
        itens.map((item, index) => (
          item.quantidade > 0 && (
            <>
            <div key={index} className="itemCarrinho">
              <p>{item.nome}</p>
              <p>Qtd: {item.quantidade}</p>
              <button className='btnMenu' onClick={() => dispatch(reduzir({index: item.index}))}>-</button>
              <button className='btnMenu' onClick={() => dispatch(incrementar({index: item.index, nome: item.nome}))}>+</button>
              <button className='btnMenu' onClick={() => dispatch(zerar({index: item.index}))}>r</button>
            </div>
            </>
          )
        )) : 
        <p className='carrinhoVazio'>Poxa, seu carrinho esta vazio...</p>
      }
      {itens.length > 0 && (<p className='checkout'>Efetuar pagamento</p>)}
      </div>
    </div>
  )
}

export default CarrinhoAberto