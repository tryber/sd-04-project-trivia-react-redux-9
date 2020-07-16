import React from 'react';
import Header from '../../components/Header';
import Links from '../../components/Links';

class Feedback extends React.Component {
  render() {
    const messageFeedBack = acertos >= 3 ? "Mandou bem!" : "Podia se Melhor...";
    return (
      <div>
        <div>
          <Header />
          <p data-testid="feedback-text">{messageFeedBack}</p>
          <p data-testid="feedback-total-score">{score}</p>
          <p data-testid="feedback-total-question">{acertos}</p>
          <Links />
        </div>
      </div>
    );
  }
}

export default Feedback;
