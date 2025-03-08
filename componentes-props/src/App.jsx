import Cartao from "./Cartao"
import Feedback from "./Feedback"
import Pedido from "./Pedido"
const App = () => {
  const textoOK = "Já chegou"
  const textoNOK = "Ainda não chegou"
  const funcaoOK = () => alert ("Agradecemos seu feedback")
  const funcaoNOK = () => alert ("Verificaremos o que aconteceu")
  const componenteFeedback = (
    <Feedback
    textoNOK={textoNOK}
    textoOK={textoOK}
    funcaoNOK={funcaoNOK}
    funcaoOK={funcaoOK}
    />
  )


  return (
  <div className="container border rounder mt-2">
    <div className="row">
      
      <div className="col-sm-12 col-lg-6 col-xxl-3">
      
      <Cartao
        cabecalho="22/02/2023">
      <Pedido
        icone="headset"
        titulo="headset"
        descricao="Headset Bluetooth"/>
        {componenteFeedback}
        </Cartao>

     </div>

      <div className="col-sm-12 col-lg-6 col-xxl-3">

      <Cartao
        cabecalho="22/02/2024">
      <Pedido
        icone="gamepad"
        titulo="Gamepad"
        descricao="Controle Nintende"/>
        {componenteFeedback}
        </Cartao>
        
      </div>

      <div className="col-sm-12 col-lg-6 col-xxl-3">

      <Cartao
        cabecalho="22/04/2023">
      <Pedido
        icone="hippo"
        titulo="Hipopotamo"
        descricao="Hipopotamo Femea"/>
        {componenteFeedback}
        </Cartao>
    
      </div>

      <div className="col-sm-12 col-lg-6 col-xxl-3">

      <Cartao
        cabecalho="22/02/2025">
      <Pedido
        data="22/02/2023"
        icone="snowman"
        titulo="Boneco de neve"
        descricao="Gelado"/>
        {componenteFeedback}
        </Cartao>

      </div>

    </div>
  </div>
  )
}

export default App