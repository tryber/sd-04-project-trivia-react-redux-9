import React from 'react';
import { connect } from 'react-redux';

import './Header.css';

const Header = ({ name, score, gravatarMail }) => (
  <div className="header">
    <p data-testid="header-player-name">Jogador:{name}</p>
    <p data-testid="header-score">Pontos:{score}</p>
    {/* <img className="header-profile-picture" data-testid="header-profile-picture" src={gravatarMail} /> */}
    <img
      className="header-profile-picture"
      data-testid="header-profile-picture"
      src="https://s.gravatar.com/avatar/435bc5f303b8daae3ad9b05f2c342b4f?s=80"
    />
  </div>
);

const mapStateToProps = (state) => ({
  name: state.name, // colocar nome do reducer
  score: state.score, // to chutando esse nome
  gravatarMail: state.gravatarMail,
});

export default connect(mapStateToProps, null)(Header);
