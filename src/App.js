import React from 'react';
import { connect } from 'react-redux';

import logo from './trivia.png';
import './App.css';
import { getActionsQuestions } from './redux/actions';

import { fetchApiToken } from './services/api';
import Login from './components/Login';

function App(props) {
  React.useEffect(() => {
    fetchApiToken().then((token) => props.getActionsQuestions(token));
  }, []);

  return (
    <div className="App">
      <Login />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>SUA VEZ</p>
      </header>
    </div>
  );
}

export default connect(null, { getActionsQuestions })(App);
