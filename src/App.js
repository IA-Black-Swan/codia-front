import "./App.css";
import "./global.scss";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Work } from "./components/Work";
import { Footer } from "./components/Footer";

function App() {
  return <div className="App">
    <Navbar/>
    <Header/>
    <Work/>
    <Footer/> 

  </div>;
}

export default App;
