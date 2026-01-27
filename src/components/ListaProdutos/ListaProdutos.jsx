import { useSelector } from "react-redux"

function ListaProdutos({doces, diminuir, aumentar}) {
    const quantidadeItem = useSelector(state => state.total)

  return (
    <>
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
    </>
  )
}

export default ListaProdutos