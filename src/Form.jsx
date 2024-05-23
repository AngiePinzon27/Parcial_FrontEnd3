import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";

const Form = () => {
    const [usuario, setUsuario]= useState({
        nombre: "",
        artista: ""

    });
    const [music, setMusic] = useState(false)
    const [error, setError] = useState (false)
    const handleSubmit = (event) => {
        event.preventDefault();
        if(usuario.nombre.trim().length >3 && usuario.artista.length >6){
            setMusic(true)
            setError(false)
        }else {
            setError(true)
        }
    };

    return (
      <div>
         <form onSubmit={handleSubmit}>
          
            <label>Nombre completo</label>
            <input type="text" onChange={(event) => setUsuario({...usuario, nombre: event.target.value})} />
            <label>Banda o artista favorito</label>
            <input type="text" onChange={(event) => setUsuario({...usuario, artista: event.target.value})} />
            <button>Enviar</button>

        </form>
           {music && <card usuario={usuario}/>}
           {error && <ErrorMessage/>}
        
    </div>
  );
};

export default Form;