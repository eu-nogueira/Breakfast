import "./Produto.css"

function Produto({ doce, closeModal }) {
    const formataTags = doce.strTags?.split(',')
    
  return (
    <div className="modalProdutoAberto">
        <button className="btnCloseModal" onClick={() => closeModal()}>X</button>
        <div className="imgProduto">
            <img src={doce.strMealThumb} width={150} />
            <figure>{doce.strMeal}</figure>
               {doce.strTags && <p className="tittleTags">tags:</p>}
            <ul className="tags">
              {formataTags?.map((tag, key) => (
                <li key={key} className="tag">{tag}</li>
              ))}
            </ul>
        </div>
        <div className="detalheProduto">
            <p className="tittle">Ingredientes</p>
            <ul className="listaIngredientes">
                <li>{doce.strIngredient1}</li>
                <li>{doce.strIngredient2}</li>
                <li>{doce.strIngredient3}</li>
                <li>{doce.strIngredient4}</li>
                <li>{doce.strIngredient5}</li>
                <li>{doce.strIngredient6}</li>
                <li>{doce.strIngredient7}</li>
                <li>{doce?.strIngredient8}</li>
            </ul>
            <p className="tittle">Modo de preparo</p>
            <span className="instrucoes">{doce.strInstructions}</span>
        </div>
    </div>
  )
}

export default Produto