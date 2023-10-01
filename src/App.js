import React, { useState, useEffect } from "react";
import Image from 'react-bootstrap/Image';
import { IntlProvider } from 'react-intl'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import NavBar from "./components/NavBar";
import Detail from "./components/Detail";
import Cafes from "./components/Cafes";
import 'bootstrap/dist/css/bootstrap.min.css';
import localeEs from './locales/es.json'
import localeEn from './locales/en.json'
import axios from "./back/index";


function App() {

  const [locale, setLocale] = useState(navigator.language);
  const [localeMsg, setLocaleMsg] = useState({});
  const [cafes, setCafes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const cafeFetch = await axios.get("cafes");
        setCafes(cafeFetch.data);
        localStorage.setItem("cafes", JSON.stringify(cafeFetch.data));

      } catch (error) {
        alert(
          "Error: El servidor no estÃ¡ corriendo y no se va a poder visualizar algunos datos!"
        );
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (locale === "en") {
      setLocaleMsg(localeEn);
    }
    else {
      setLocaleMsg(localeEs);
    }
  }, [locale]);

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={localeMsg}>
        <BrowserRouter>
          <NavBar locale={locale} setLocale={setLocale} />
         <div >
         <Image className= 'img-banner' src="https://images.squarespace-cdn.com/content/v1/5e9e027e0bcec332753ad6a7/1588258769573-CT0DRII89427PWU43295/Banner-Cafe%CC%81.jpg?format=2500w" />
         </div> 
          
          <br></br> <br></br> <br></br>
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/cafes" element={<Cafes cafesList={cafes} />} />
            <Route path="/cafes/:id" element={<Detail cafesList={cafes} />} />
          </Routes>
        </BrowserRouter>
      </IntlProvider>
    </div>


  );
}

export default App;


