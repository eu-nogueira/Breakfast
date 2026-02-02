import "./SobreNos.css"
import imgCoffeShop from '../../../public/img/CoffeShopp.png'

function SobreNos() {
  return (
    <div className="sobreNos">
      <h1 className="titleSobreNos">Sobre nós</h1>
        <p className="textSobreNos"> Há mais de 30 anos, a Coffe Shop faz parte da rotina e das memórias de quem ama bons momentos 
            acompanhados de sabor e aconchego. Nossa história começou com um sonho simples: 
            oferecer cafés especiais e doces preparados com carinho, respeitando receitas tradicionais e 
            ingredientes de qualidade.
            Ao longo dessas três décadas, crescemos junto com nossos clientes, 
            mantendo o cuidado artesanal que sempre foi nossa marca registrada. 
            Cada bolo, torta, café e doce que sai da nossa cozinha carrega dedicação, afeto
            e o compromisso de entregar sempre o melhor.
            Acreditamos que uma confeitaria vai muito além de receitas: 
            é um lugar de encontros, conversas, celebrações e pausas merecidas no dia a dia. 
            Por isso, buscamos criar um ambiente acolhedor, onde cada visita se transforma em uma experiência
            especial.
            Seja para um café rápido, uma sobremesa inesquecível ou para celebrar momentos importantes, 
            a Coffe Shop segue unindo tradição, qualidade e amor pelo que faz hoje e sempre. </p>
      <img src={imgCoffeShop} alt="imagem Coffe Shop" width={400} className="imgCoffe"/>
    </div>
  )
}

export default SobreNos