import React, {useState} from 'react';

function MyThirdComponent(){
   const [car, setCar] = useState({year: 2024,
                                   make: "Toyota",
                                   model: "Corolla"});

   function handleYearChange(event){
      setCar({...car, year: event.target.value});
   }

   function handleMakeChange(event){
      setCar({...car, make: event.target.value});
   }

   function handleModelChange(event){
      setCar({...car, model: event.target.value});
   }

   return(
      <div>
         <p>Carro favorito: {car.year} {car.make} {car.model}</p>
      
         <input type="number" value={car.year} onChange={handleYearChange}/><br/>
         <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
         <input type="text" value={car.model} onChange={handleModelChange}/><br/>
      </div>
   );
}

export default MyThirdComponent;