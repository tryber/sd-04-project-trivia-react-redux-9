import React from 'react';
import logo from './trivia.png';
import './App.css';

import { getQuestions } from './services/api';

import Question from './pages/question/Question';
export default function App() {
  return (
    <div className="App">
    <Question />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>SUA VEZ</p>
      </header> */}
    </div>
  );
}
