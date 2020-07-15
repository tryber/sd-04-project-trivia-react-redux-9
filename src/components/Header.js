import React from 'react';
import { connect } from 'react-redux';

const Header = ({ name, score, gravatarMail }) => (
  <div>
    <p data-testid="header-player-name">Jogador:{name}</p>
    <p data-testid="header-score">Pontos:{score}</p>
    <img data-testid="header-profile-picture" src={gravatarMail} />
  </div>
);

const mapStateToProps = (state) => {
  const { name, score, gravatarMail } = state.loginReducer;
  return { name, score, gravatarMail };
};

export default connect(mapStateToProps)(Header);
