import React, {useState} from 'react';

function MyComponent() {
   const [name, setName] = useState("Utilizador");
   const [age, setAge] = useState(0);
   const [isStudent, setIsStudent] = useState(false);

   const updateName = () => {
      setName("João");
   }

   const incrementAge = () => {
      setAge(age + 1);
   }
      
   const toggleStudent = () => {
      setIsStudent(!isStudent);
   }


   return(
      <div>
         <p>Nome: {name}</p>
         <button onClick = {updateName}>Escreva o nome</button>

         <p>Idade: {age}</p>
         <button onClick = {incrementAge}>Incremente a idade</button>
      
         <p>Estudante: {isStudent ? "Sim" : "Não"}</p>
         <button onClick = {toggleStudent}>Alternar</button>
      
      </div>
   );
}

export default MyComponent;