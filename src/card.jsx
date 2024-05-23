import React from "react";
const Card = ({usuario}) => {
  return (
  <div>
    <h3>Gracias por participar, {usuario.nombre} ahora sabemos que tu artista o banda favorita es {usuario.artista}</h3>
    
   </div>
   );
};


export default Card;
