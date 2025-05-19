import { BsClockHistory } from "react-icons/bs";
import Empresa from './assets/empresa.jpg';
import { IoMdArrowRoundBack } from "react-icons/io";
import './App.css';

function App() {
   
    { for(let i = 0; i < 1; i ++) {
      
      alert("Pagina Sobre Biografia!")
      
  }
  
  }

  return (
    <>
    <div className="sobre">
    <h1>Sobre nós<BsClockHistory/><a href="http://localhost:5173/"><IoMdArrowRoundBack /></a></h1>
    </div>
    <div className="information">
      <h1>Somos uma Empresa de referência em tecnologia<br/>
      Com sede Nos Estados Unidos da America <br/> contendo Filias em mais seis Países<br/>
      um deles O Brasil os  outros São  Italia ,<div id="photo"><img src={Empresa} alt="empresa"/> <h5>Sede USA</h5></div><br/>Alemanha , Japão , Australia e Egito.<br/>
      Estamos no mercado tecnologico ha mais de 10 Anos ,<br/> temos vasta experiência. Somos 
      compostos por 35 mil funcionarios<br/> e o nosso Presidente é o JON Will.
      </h1>
    </div>
    </>
  )
}

export default App
