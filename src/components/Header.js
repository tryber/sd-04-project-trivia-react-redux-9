import React from 'react';
import { connect } from 'react-redux';

const Header = ({ name, score, gravatarMail }) => (
  <div>
    <p data-testid="header-player-name">Jogador:{name}</p>
    <p data-testid="header-score">Pontos:{score}</p>
    <img data-testid="header-profile-picture" src={gravatarMail} />
  </div>
);

const mapStateToProps = (state) => ({
  name: state.name, // colocar nome do reducer
  score: state.score, // to chutando esse nome
  gravatarMail: state.gravatarMail,
});

export default connect(mapStateToProps, null)(Header);
