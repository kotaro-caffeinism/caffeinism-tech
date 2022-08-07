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
        {side === false ? <h1 onClick={() => setSide(true)}>caffeinism-tech</h1> : ""}
        <Nav setView = {setView}/>
      </header>
      <Main side={side} setSide={setSide}/>
      <footer><p>©️ 2022 caffeinism-tech</p></footer>
    </div>
  );
}

export default App;
