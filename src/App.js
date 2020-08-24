import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HolaMundo from "./components/HolaMundo";
import AdiosMundo from "./components/AdiosMundo";
import Saludar from "./components/Saludar";

function App() {
  //const name = "Jonathan Guevara";

  const user = {
    // nombre: "Jonathan Guevara",
    edad: 24,
    color: "negro"

  }

  const saludarFn = (nombre, edad) => {
    console.log("Hiii " + nombre);
    console.log(`Hola ${nombre}, tiene ${edad}`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HolaMundo />
        <AdiosMundo />

        <Saludar userInfo={user} saludarFn={saludarFn} />

        {/* <Saludar name="Jonathan Guevara" años="24" />*/}
        {/*<Saludar name="Maria" años="22" />*/}
      </header>
    </div>
  );
}

export default App;
