import React, {useState} from 'react';

function MySecondComponent(){

   const [name, setName] = useState("Utilizador");
   const [quantity, setQuantity] = useState();
   const [payment, setPayment] = useState("");
   const [shipping, setShipping] = useState("");

   function handleNameChange(event){
      setName(event.target.value);
   }

   function handleQuantityChange(event){
      setQuantity(event.target.value);
   }

   function handlePaymentChange(){
      setPayment(event.target.value);
   }

   function handleShippingChange(){
      setShipping(event.target.value);
   }

   return(
      <div>
         <input value={name} onChange={handleNameChange} />
         <p>Nome: {name}</p>

         <input value={quantity} onChange={handleQuantityChange} type="number"/>
         <p>Quantidade: {quantity}</p>

         <select value={payment} onChange={handlePaymentChange}>
            <option value="">Selecione um método de pagamento</option>
            <option value="Visa">Visa</option>
            <option value="MasterCard">MasterCard</option>
            <option value="MBWay">MBWay</option>
            <option value="Multibanco">Multibanco</option>
         </select>
         <p>Método de pagamento: {payment}</p>

         <label>
            <input type="radio" value="Pick Up"
                  checked={shipping === "Pick Up"}
                  onChange={handleShippingChange}/>
            Pick up
         </label><br/>
         <label>
         <input type="radio" value="Delivery"
                  checked={shipping === "Delivery"}	
                  onChange={handleShippingChange}/>
            Delivery
         </label>
         <p>Método de envio: {shipping}</p>
      </div>
   );
}

export default MySecondComponent;