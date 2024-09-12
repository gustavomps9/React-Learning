import foto from "./assets/adolfpica.jpg";

function Card(){
   return (
      <div className="card">
         <img className = "card-img" src={foto} alt="foto de perfil" />
         <h2 className = "card-title">Gustavo Silva</h2>
         <p className="card-text">Estudo Tecnologias da Informação na Universidade de Aveiro</p>
      </div>
   );
}

export default Card;