import React from 'react';
import { connect } from 'react-redux';

// import logo from './trivia.png';
import './App.css';
import { getActionsQuestions } from './redux/actions';

// import { fetchApiToken } from './services/api';
import Routes from './routes';

function App() {
  // React.useEffect(() => {
  //   fetchApiToken().then((token) => props.getActionsQuestions(token));
  // }, []);

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default connect(null, { getActionsQuestions })(App);
