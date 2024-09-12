import React, {useState} from 'react';

function MyFinalComponent(){

   const [cars, setCars] = useState([]);
   const [carYear, setCarYear] = useState(new Date().getFullYear());
   const [carMake, setCarMake] = useState("");
   const [carModel, setCarModel] = useState("");

   function handleAddCar(){
      const newCar = {year: carYear, make: carMake, model: carModel};
      setCars([...cars, newCar]);

      setCarYear(new Date().getFullYear());
      setCarMake("");
      setCarModel("");
   }


   function handleRemoveCar(index){
      setCars(cars.filter((car, i) => i !== index));
   }

   function handleCarYearChange(event){
      setCarYear(event.target.value);
   }

   function handleCarMakeChange(event){
      setCarMake(event.target.value);
   }

   function handleCarModelChange(event){
      setCarModel(event.target.value);
   }

   return(
      <div>
         <h2>Lista de carros - Objetos</h2>
         <ul>
            {cars.map((car, index) =>
               <li key={index} onClick={() => handleRemoveCar(index)}>
                  {car.year} {car.make} {car.model}
               </li>)}
         </ul>

         <input type="number" value={carYear} onChange={handleCarYearChange}/><br/>
         <input type="text" value={carMake} onChange={handleCarMakeChange} placeholder='Introduza a marca do carro'/><br/>
         <input type="text" value={carModel} onChange={handleCarModelChange} placeholder='Introduza o modelo do carro'/><br/>
         <button onClick={handleAddCar}>Adicionar carro</button>
      </div>
   );
}

export default MyFinalComponent;