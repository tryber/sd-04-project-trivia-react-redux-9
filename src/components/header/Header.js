import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const { name, score, gravatarEmail } = JSON.parse(localStorage.state.player);

const Header = () => (
  <div className="header">
    <p data-testid="header-player-name">Player:{name}</p>
    <p data-testid="header-score">Score:{score}</p>
    <img
      className="header-profile-picture"
      data-testid="header-profile-picture"
      alt={name}
      src={gravatarEmail}
    />
  </div>
);

export default Header;

Header.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  gravatarMail: PropTypes.string.isRequired,
};
