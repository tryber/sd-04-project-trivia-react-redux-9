import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Header.css';

const Header = ({ name, score }) => (
  <div className="header">
    <p data-testid="header-player-name">Player: {name}</p>
    <p data-testid="header-score">Score:{score}</p>
    {/* <img
      className="header-profile-picture"
      data-testid="header-profile-picture"
      src={gravatarMail}
    /> */}
    <img
      className="header-profile-picture"
      data-testid="header-profile-picture"
      src="https://s.gravatar.com/avatar/435bc5f303b8daae3ad9b05f2c342b4f?s=80"
      alt="profile"
    />
  </div>
);

const mapStateToProps = (state) => ({
  name: state.loginReducer.name, // colocar nome do reducer
  score: state.loginReducer.score, // to chutando esse nome
  gravatarMail: state.loginReducer.gravatarMail,
});

export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};
