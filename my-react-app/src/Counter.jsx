import React, {useState} from "react";

function Counter(){

   const [counter, setCounter] = useState(0);

   const incrementCounter = () => {
      setCounter(counter + 1);

      //Quando queremos incrementar mais do que uma unidade
      //setCount (c => c + 1);
      //setCount (c => c + 1);

   }

   const decrementCounter = () => {
      setCounter(counter - 1);
   }

   const resetCounter = () => {
      setCounter(0);
   }

      return (
         <div className="counter-container"> 
            <p className="count-display">Contador: {counter}</p>
            <button className="counter-button" onClick = {incrementCounter}>Incrementar</button>
            <button className="counter-button" onClick = {decrementCounter}>Decrementar</button>
            <button className="counter-button" onClick = {resetCounter}>Reiniciar</button>
         </div>
      );
}

export default Counter;