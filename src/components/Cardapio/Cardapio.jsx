import React, { useEffect, useState } from 'react'
import './Cardapio.css'
import { useDispatch, useSelector } from 'react-redux'
import { incrementar, reduzir } from '../../store/Reducer'

function Cardapio() {
    const [ doces, setDoces ] = useState([])
    const [ produtoAdicionado, setProdutoAdicionado] = useState(false)
    const quantidadeItem = useSelector(state => state.total)
    const dispatch = useDispatch()

    function aumentar(doce) {
        dispatch(incrementar({
            index: doce.idMeal,
            nome: doce.strMeal
        }))
        setProdutoAdicionado(true)
        setTimeout(() => {
            setProdutoAdicionado(false)
        }, 2000)
    }
    
    function diminuir(doce) {
        dispatch(reduzir({index: doce.idMeal}))
    }

    async function buscarDados() {
        try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=cake')
        const dados = await response.json()
        setDoces(dados.meals)
        } catch(err) {
            console.error(err)
        }
    }

    useEffect(() => {
        buscarDados()
    }, [])
    
  return (
    <div className='cardapio'>
    {doces?.map((doce, index) => (
        <div key={index} className='cake'>
            <img src={doce.strMealThumb} width={300}/>
            <p>{doce.strMeal}</p>
            <div className="qtdItem">
            <button onClick={() => diminuir(doce)}>-</button>
            <p>{quantidadeItem[doce.idMeal]?.quantidade || 0}</p>
            <button onClick={() => aumentar(doce)}>+</button>
            </div>
        </div>
    ))}

    { produtoAdicionado &&
        <p className='produtoAdicionado'>Produto adicionado ao carrinho!</p>
    }
    </div>
  )
}

export default Cardapio