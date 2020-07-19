import React from 'react';
import { Header } from '../../components';
import Links from '../../components/Links';

// Esses valores são apenas para copilar a aplicação por enquanto.
// Esses dados devem ser buscados do Redux
const score = 10;
const assertions = 2;

class Feedback extends React.Component {
  render() {
    const messageFeedBack = assertions >= 3 ? 'Mandou bem!' : 'Podia ser Melhor...';
    return (
      <div>
        <div>
          <Header />
          <p data-testid="feedback-text">{messageFeedBack}</p>
          <p data-testid="feedback-total-score">{score}</p>
          <p data-testid="feedback-total-question">{assertions}</p>
          <Links />
        </div>
      </div>
    );
  }
}

export default Feedback;
