import React from 'react';
import { Link } from 'react-router-dom';
import './Ranking.css';

function renderRanking(ranking) {
  return (
    <ul>
      {ranking
        .sort((a, b) => b.score - a.score)
        .map((player, index) => (
          <li className="flexbox">
            <img src={player.picture} alt={player.name} />
            <p data-testid={`player-name-${index}`}>{player.name}</p>
            <p data-testid={`player-score-${index}`}>{player.score}</p>
          </li>
        ))}
    </ul>
  );
}

const Ranking = () => {
  const ranking = JSON.parse(localStorage.ranking);

  return (
    <div className="ranking-container">
      <h3 className="ranking" data-testid="ranking-title">
        Ranking
      </h3>
      <div className="list-container">{renderRanking(ranking)}</div>
      <div>
        <button className="voltar-inicio" type="button" data-testid="btn-go-home">
          <Link to="/">Voltar ao Início</Link>
        </button>
      </div>
    </div>
  );
};

export default Ranking;
