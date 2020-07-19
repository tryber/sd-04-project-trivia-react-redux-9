import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.css';


const Header = ({ name, score, gravatarMail }) => (
  <div className="header">
    <p data-testid="header-player-name">Player: {name}</p>
    <p data-testid="header-score">Score:{score}</p>
    <img
      className="header-profile-picture"
      data-testid="header-profile-picture"
      src={gravatarMail}
    />
  </div>
);

const mapStateToProps = (state) => ({
  name: state.loginReducer.name, 
  score: state.loginReducer.score,
  gravatarMail: state.loginReducer.gravatarMail,
});

export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  gravatarMail: PropTypes.string.isRequired,
};
