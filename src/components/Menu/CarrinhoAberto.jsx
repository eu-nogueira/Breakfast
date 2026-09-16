import { useDispatch, useSelector } from 'react-redux'
import './CarrinhoAberto.css'
import { reduzir, incrementar, zerar } from '../../store/Reducer'

function CarrinhoAberto({ handleCarrinho }) {
  const { cakes } = useSelector((state) => state.total)
  const dispatch = useDispatch()
  const itens = Object.values(cakes)

   const valorTotal = useSelector(state => state.total.cakes)

    const arrayValor = Object.values(valorTotal || 0)
    
    const valorTotalCarrinho = arrayValor.reduce((acc, item) => {
      return acc + (item.precoUnitario || 0)
    }, 0)

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
              <p>Quantidade: {item.quantidade}</p>
              <p>Valor total item: {item.precoUnitario.toFixed(2).toString().replace('.', ',')}</p>
              <button className='btnMenu' onClick={() => dispatch(reduzir({index: item.index}))}>-</button>
              <button className='btnMenu' onClick={() => dispatch(incrementar({index: item.index, nome: item.nome}))}>+</button>
              <button className='btnMenu' onClick={() => dispatch(zerar({index: item.index}))}>r</button>
            </div>
            </>
          )
        )) : 
        <p className='carrinhoVazio'>Poxa, seu carrinho esta vazio...</p>
      }
      {itens.length > 0 && (
        <> 
          <p className='checkoutTotal'>Valor total a ser pago: R${valorTotalCarrinho.toFixed(2).toString().replace('.', ',')}</p>
          <p className='checkout'>Efetuar pagamento</p>
       </>
          )}
      </div>
    </div>
  )
}

export default CarrinhoAberto