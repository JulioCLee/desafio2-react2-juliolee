import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Barra from "./Components/Barra";
import Home from "./Views/Home";
import Favoritos from "./Views/Favoritos";
import MiContexto from "./Contexts/MiContexto";

function App() {

  const [fotos, setFotos] = useState([]);
  const estadoGlobal= {fotos, setFotos}

  async function obtenerDatos(){
  const res = await fetch('/fotos.json');
  const data = await res.json();

  setFotos(data.photos);

}

  useEffect(() => {
    obtenerDatos();
  },[])

  return (
    <div className="App">
      <MiContexto.Provider value={estadoGlobal}>
      <BrowserRouter>
        <Barra></Barra>
        <h2>Natural Pic</h2>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/favoritos" element={<Favoritos></Favoritos>}></Route>
        </Routes>
      </BrowserRouter>
      </MiContexto.Provider>
    </div>
  );
}

export default App;
