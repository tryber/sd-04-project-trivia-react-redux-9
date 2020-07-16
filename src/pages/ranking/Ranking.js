import React from 'react';
import { Link } from 'react-router-dom';

class Ranking extends React.Component {

  renderRanking(ranking){
    <ul>
      {ranking.sort((a, b) => b.score - a.score).map((player, index) => (
        <li>
          <img src={player.picture} alt={player.name} />
          <p data-testid={`player-name-${index}`}>{player.name}</p>
          <p data-testid={`player-score-${index}`}>{player.score}</p>
        </li>
      ))
      }
    </ul>
  }

  render() {
    const ranking = JSON.parse(localStorage.getItem('ranking'));
    // JS não lê string

    return (
      <div>
        <h3>Ranking</h3>
        <div>
          {this.renderRanking(ranking)}
        </div>
        <div>
          <button data-testid="btn-go-home">
            <Link to="/">Voltar ao Início</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Ranking;

/* 
a chave ranking deve conter a seguinte estrutura:
[
    {name: nome-da-pessoa, score: 10, picture: url-da-foto-no-gravatar}
]
*/
