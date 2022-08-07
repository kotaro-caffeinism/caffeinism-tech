import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./Main"
import Nav from "./Nav"

function App() {
  const [side, setSide] = useState(true);
  const [view, setView] = useState(0);
  return (
    <div className="App">
      <header>
        {side === false ? <h1>caffeinism-tech</h1> : ""}
        <Nav view = {view} setView = {setView}/>
      </header>
      <Main side={side} setSide={setSide}/>
      <footer>©️ 2022 caffeinism-tech</footer>
    </div>
  );
}

export default App;
