import React from 'react';
import { Login } from '../../components';
import Logo from '../../trivia.png';
import './Home.css';

const Home = () => (
  <div>
    <img className="logo" src={Logo} alt="logo" />
    <Login />
    <img src={Logo} alt="Logo" className="logo" />
  </div>
);

export default Home;
