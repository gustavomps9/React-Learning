import React, {useState} from 'react';

function MyFourthComponent(){
   const [foods, setFoods] = useState(["Pizza", "Hamburguer", "Cachorro-quente"]);

   function handleAddFood(){
      const newFood = document.getElementById('foodInput').value;
      document.getElementById('foodInput').value = '';

      setFoods([...foods, newFood]);
   }

   function handleFoodRemove(index){
      setFoods(foods.filter((_, i) => i !== index));
   }

   return(
      <div>
         <h2>Lista de comida</h2>
         <ul>
            {foods.map((food, index) => 
            <li key={index} onClick={() => handleFoodRemove(index)}>
               {food}
            </li>)}
         </ul>
         <input type="text" id='foodInput' placeholder='Escreva o nome da comida'/>
         <button onClick={handleAddFood}>Adicionar comida</button>
      </div>
   );
}

export default MyFourthComponent;