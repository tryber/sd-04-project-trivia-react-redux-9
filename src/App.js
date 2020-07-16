import React from 'react';

// import logo from './trivia.png';
import './App.css';

<<<<<<< HEAD
import { fetchApiToken } from './services/api';
import Routes from './routes';

function App(props) {
  React.useEffect(() => {
    fetchApiToken().then(() => props.getActionsQuestions(localStorage.token));
  }, []);

=======
import Routes from './routes';

function App() {
>>>>>>> d0fac180e74f293afcb9ae89185afa399f141a2b
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
