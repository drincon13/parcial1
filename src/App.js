import React, { useState, useEffect } from "react";
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


function App() {

  const [locale, setLocale] = useState(navigator.language);
  const [localeMsg, setLocaleMsg] = useState({});

  useEffect(() => {
    if (locale === "en") {
      setLocaleMsg(localeEn);
    }
    else {
      setLocaleMsg(localeEs);
    }
  }, [locale]);

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
      <IntlProvider locale={locale} messages={localeMsg}>
        <BrowserRouter>
          <NavBar locale={locale} setLocale={setLocale} />
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



