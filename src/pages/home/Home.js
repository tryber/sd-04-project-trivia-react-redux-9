import React from 'react';
import { Link } from 'react-router-dom';
import { Login } from '../../components';
import Logo from '../../trivia.png';
import './Home.css';

const Home = () => (
  <div>
    <img className="logo" src={Logo} alt="logo" />
    <Login />
    <Link to="/settings">
      <button data-testid="btn-settings" type="button">
        Settings
      </button>
    </Link>
  </div>
);

export default Home;
