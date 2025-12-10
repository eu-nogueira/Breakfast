import { useDispatch, useSelector } from 'react-redux'
import './MenuAberto.css'
import { reduzir, incrementar, zerar } from '../../store/Reducer'

function MenuAberto({ handleCarrinho }) {
  const { total } = useSelector((state) => state)
  const dispatch = useDispatch()
  const itens = Object.values(total)

  return (
    <div className='nav'>
      <div className='open'>
        <button onClick={handleCarrinho} className='closeCarrinho'>X</button>

        {itens.map((item, index) => (
          item.quantidade > 0 && (
            <div key={index} className="itemCarrinho">
              <p>{item.nome}</p>
              <p>Qtd: {item.quantidade}</p>
              <button className='btnMenu' onClick={() => dispatch(reduzir({index: item.index}))}>-</button>
              <button className='btnMenu' onClick={() => dispatch(incrementar({index: item.index, nome: item.nome}))}>+</button>
              <button className='btnMenu' onClick={() => dispatch(zerar({index: item.index}))}>r</button>
            </div>
          )
        ))}
      </div>
    </div>
  )
}

export default MenuAberto