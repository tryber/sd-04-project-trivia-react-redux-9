import React from 'react';
import logo from './trivia.png';
import './App.css';

import { getQuestions } from './services/api';

console.log(getQuestions(localStorage.token))

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>SUA VEZ</p>
      </header>
    </div>
  );
}
