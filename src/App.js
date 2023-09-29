import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import Cafes from "./components/Cafes";
import Detail from "./components/Detail";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [cafes, setCafes] = useState([]);
  useEffect(() => {
    const URL =
      "https://raw.githubusercontent.com/drincon13/parcial1/master/src/data.json";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setCafes(data);
      });
  }, []);


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn  />} />
          <Route path="/cafes" element={<Cafes cafesList = {cafes} />} />
          <Route path="/cafes/:id" element={<Detail cafesList = {cafes} />} />
        </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;



