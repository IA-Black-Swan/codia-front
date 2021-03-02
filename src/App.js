import "./App.css";
import "./global.scss";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Work } from "./components/Work";
import { Footer } from "./components/Footer";
import React, { useEffect, useState } from "react"
import { OurWork } from "./components/OurWork";
import { Cards } from "./components/Cards";


function App() {
  const [rendered, isRendered] = useState(false)
  useEffect(() => {
    addedScripts()
    isRendered(true)
  },[])
  return <div className="App">
    <Navbar/>
    <Header/>
    <OurWork/>
    <Cards/>
    <Footer/> 

  </div>;
}

function addedScripts() {
  const effect = require("./helpers/headerEffect.js")
}

export default App;
