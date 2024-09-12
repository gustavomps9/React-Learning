import React, {useState} from 'react';
function ColorPicker(){

   const [color, setColor] = useState("#000000");

   function handleColorChange(event){
     setColor(event.target.value);
   }
   
   return(
      <div className='color-picker-container'>
         <h1>Escolha de cor</h1>
         <div className='color-display' style={{backgroundColor: color}}>
            <p>Cor escolhida: {color}</p>
         </div>
         <label>Escolha a cor: </label>
         <input type='color' value={color} onChange={handleColorChange}/>
      </div>
   );
}

export default ColorPicker;