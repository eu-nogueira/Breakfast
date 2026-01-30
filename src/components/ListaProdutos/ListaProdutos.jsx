import { useSelector } from "react-redux"
import Produto from "../Produto/Produto"
import "./ListaProdutos.css"

function ListaProdutos({doces, diminuir, aumentar, openModal, modal, selectedCake, closeModal}) {
    const quantidadeItem = useSelector(state => state.total)

  return (
    <>
        {doces?.map((doce, index) => (
            <div key={index} className='cake'>
                    <img src={doce.strMealThumb} width={300} onClick={() => openModal(index)}/>
                {modal && selectedCake == index &&
                 < Produto doce={doce} closeModal={closeModal} />
                }
                    <p>{doce.strMeal}</p>
                    <div className="qtdItem">
                    <button onClick={() => diminuir(doce)}>-</button>
                    <p>{quantidadeItem[doce.idMeal]?.quantidade || 0}</p>
                    <button onClick={() => aumentar(doce)}>+</button>
                    </div>
            </div>
        ))}
    </>
  )
}

export default ListaProdutos