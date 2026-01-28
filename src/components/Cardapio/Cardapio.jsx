import React, { useEffect, useState } from 'react'
import './Cardapio.css'
import { useDispatch, useSelector } from 'react-redux'
import { incrementar, reduzir } from '../../store/Reducer'
import { buscarDadosThunk } from '../../store/BuscarDados'
import ListaProdutos from '../ListaProdutos/ListaProdutos'

function Cardapio() {
    const [ produtoAdicionado, setProdutoAdicionado] = useState(false)
    const [ produtoRemovido, setProdutoRemovido] = useState(false)
    const dados = useSelector(state => state.BuscarDados.data)
    const doces = dados?.meals || []
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
        setProdutoRemovido(true)
        setTimeout(() => {
            setProdutoRemovido(false)
        }, 2000)
    }

    useEffect(() => {
        dispatch(buscarDadosThunk())
    }, [])
    
  return (
    <div className='cardapio'>

        < ListaProdutos doces={doces} diminuir={diminuir} aumentar={aumentar}/>

        { produtoAdicionado &&
            <p className='produtoAdicionado'>Produto adicionado ao carrinho!</p>
        }
        
        { produtoRemovido &&
            <p className='produtoRemovido'>Produto removido do carrinho!</p>
        }
        
    </div>
  )
}

export default Cardapio