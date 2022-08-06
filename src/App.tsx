import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./Main"

function App() {
  const [side, setSide] = useState("face");
  return (
    <div className="App">
      <header>
        {side === "back" ? <h1>caffeinism-tech</h1> : ""}
        <nav>
          <li>changeView</li>
          <li>contact</li>
        </nav>
      </header>
      <Main side={side} setSide={setSide}/>
      <footer>©️ 2022 caffeinism-tech</footer>
    </div>
  );
}

export default App;
