import React, { useState } from 'react'
import './Menu.css'
import { useSelector } from 'react-redux'
import MenuAberto from './MenuAberto'

function Menu() {
  const [carrinho, setCarrinho] = useState(false)
  const quantidade = useSelector(state => state.total)

  const arrayQuantidade = Object.values(quantidade)

  const totalItensCarrinho = arrayQuantidade.reduce((acc, item) => {
    return acc + (item.quantidade || 0)
  }, 0)

  function handleCarrinho() {
    setCarrinho(!carrinho)
  }

  return (
    <div>
      <ul className='navbar'>
        <li>Home</li>
        <li>Cardápio</li>
        <li>Sobre nós</li>

        {carrinho ? (
          <MenuAberto handleCarrinho={handleCarrinho} />
        ) : (
          <li onClick={handleCarrinho}>
            Carrinho ({totalItensCarrinho})
          </li>
        )}
      </ul>
    </div>
  )
}

export default Menu