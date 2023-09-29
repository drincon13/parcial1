import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import Mascotas from "./components/Mascotas";
import Detail from "./components/Detail";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [mascotas, setMascotas] = useState([]);
  useEffect(() => {
    const URL =
      "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setMascotas(data);
      });
  }, []);


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn  />} />
          <Route path="/mascotas" element={<Mascotas mascotasList = {mascotas} />} />
          <Route path="/mascotas/:id" element={<Detail mascotasList = {mascotas} />} />
        </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;
