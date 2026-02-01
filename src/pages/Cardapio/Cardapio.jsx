import React, { useEffect, useState } from 'react'
import './Cardapio.css'
import { useDispatch, useSelector } from 'react-redux'
import { incrementar, reduzir } from '../../store/Reducer'
import { buscarDadosThunk } from '../../store/BuscarDados'
import ListaProdutos from '../../components/ListaProdutos/ListaProdutos'
import { closeModalRedux, openModalRedux } from '../../store/Modal'

function Cardapio() {
    const [ produtoAdicionado, setProdutoAdicionado] = useState(false)
    const [ produtoRemovido, setProdutoRemovido] = useState(false)
    const [ selectedCake, setSelectedCake] = useState('')
    const dados = useSelector(state => state.BuscarDados.data)
    const modal = useSelector(state => state.modal)
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

    function openModal(index) {
        setSelectedCake(index)
        dispatch(openModalRedux())
    }

    function closeModal() {
        dispatch(closeModalRedux())
    }

    useEffect(() => {
        dispatch(buscarDadosThunk())
    }, [])
    
  return (
    <div className='cardapio'>

        < ListaProdutos doces={doces} 
                        diminuir={diminuir} 
                        aumentar={aumentar} 
                        modal={modal} 
                        openModal={openModal}
                        selectedCake={selectedCake}
                        closeModal={closeModal}
                />

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