import "./App.css";
import "./global.scss";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Work } from "./components/Work";
import { Footer } from "./components/Footer";
import React, { useEffect, useState } from "react"
import { OurWork } from "./components/OurWork";
import { Cards } from "./components/Cards";
import { Login } from "./components/Login";


function App() {
  const [rendered, isRendered] = useState(false)
  useEffect(() => {
    addedScripts()
    isRendered(true)
  }, [])
  return <div className="App">
    <Login />

    {/*
    <Navbar />
    <Header />
    <OurWork />
    <Cards />
    <Footer />
    <div className="card-login">
      dasdsada
    </div>
    
    {/* <div className="container0" style={{ backgroundColor: 'red' }}>
      <div style={{ height: "300px", width: "300px", backgroundColor: 'lightcoral' }}></div><span>dfsafdsfsdfdsf</span>
    </div>
    <div className="container0" style={{ backgroundColor: 'green' }}>2</div>
    <div className="container0" style={{ backgroundColor: 'lightblue' }}>3</div>
    <div className="container0" style={{ backgroundColor: 'pink' }}>4</div>
    <div className="container0" style={{ backgroundColor: 'orange' }}>5</div> */}

  </div>;
}

function addedScripts() {
  const effect = require("./helpers/headerEffect.js")
}

export default App;
