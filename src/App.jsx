import React,{useState} from 'react';
import Card from './components/Card'

import './App.css';
function App() {
  const [numCards,setNumCards] = useState();
  const [widthCard,setWidthCard] = useState(150);
  const [button, setButton] = useState(false)

  const generateCards = (c) =>{
    let cardNum = [c];
    for(let i = 1; i < numCards; i++){
      cardNum.push(c)
    } return cardNum
  }

    return (
    <div className="app">
         <header className="app-header">
        <h1>Card Generator</h1>
        <section className="inputs-container">
          <label className="label-input-number">Quantidade de Cards:
          <input onChange={(e)=> setNumCards(e.target.value)} className ="input-number" type="number" placeholder="Ex.3" min='1'/></label>
          <button className="button-add-button" onClick={()=>setButton(!button)} >{!button?'Adicionar botão':'Remover botão'}</button>
          <label>Largura (em px) do seu Card:
              <input className="input-width" type="number" onChange={(e)=>setWidthCard(e.target.value)} min='100'/>
          </label>
        </section>
      </header>
      <section className="app-cards-container">
          {generateCards(<Card width={widthCard} button={button}/>)}
      </section>
    </div>
  );
}
export default App;