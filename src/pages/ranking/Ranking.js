import React from 'react';
import { Link } from 'react-router-dom';

class Ranking extends React.Component {
  constructor(props) {
    super(props);

    this.renderRanking = this.renderRanking.bind(this);
  }

  renderRanking(ranking) {
    return (
      <ul>
        {ranking
          .sort((a, b) => b.score - a.score)
          .map((player, index) => (
            <li>
              <img src={player.picture} alt={player.name} />
              <p data-testid={`player-name-${index}`}>{player.name}</p>
              <p data-testid={`player-score-${index}`}>{player.score}</p>
            </li>
          ))}
      </ul>
    );
  }

  render() {
    const ranking = JSON.parse(localStorage.getItem('ranking'));

    return (
      <div>
        <h3 data-testid="ranking-title">Ranking</h3>
        <div>{this.renderRanking(ranking)}</div>
        <div>
          <button type="button" data-testid="btn-go-home">
            <Link to="/">Voltar ao Início</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Ranking;
