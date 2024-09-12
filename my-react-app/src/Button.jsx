
function Button() {

  //let count = 0;
  //name pelo e
  const handleClick = (e) => e.target.textContent = "Clicou!";

  return(
    <button className="btn" onClick={(e) => handleClick(e)}>Click me!</button>
    );
  }

    /*if(count < 3){
      count++;
      console.log(`Olá, ${name}! Você clicou ${count} vez(es)!`);
    }
    else{
      console.log(`Olá, ${name}! pare de clicar!`);
  }
};*/



export default Button;