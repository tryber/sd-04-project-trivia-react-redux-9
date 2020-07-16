import React from 'react';
import logo from './trivia.png';
import './App.css';

import { getQuestions } from './services/api';
import Routes from './routes';

export default function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}
