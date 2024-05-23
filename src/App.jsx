import { useState } from "react";
import Card from "./card";
import Form from "./Form";


function App() {
  const [musicaForm, setMusicaForm] = useState(false)
  return (
    <>
    <div className="App">
      <h1>Tus gustos de musica</h1>
      <form></form>
      <Card />
    </div>
    {musicaForm && <Form />}
    </>
  );
}


export default App;


