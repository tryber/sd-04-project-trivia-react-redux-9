import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Header } from '../../components';
import Links from '../../components/Links';
import './Feedback.css';
import thatsGreat from '../../thatsGreat.gif';
import notGreat from '../../notGreat.gif';

const feedback = (message) => {
  if (message === 'Mandou bem!') {
    return <img src={thatsGreat} alt="thatsGreat" className="gif" />;
  }
  return <img src={notGreat} alt="notGreat" className="gif" />;
};

class Feedback extends React.Component {
  render() {
    const { assertions, score } = this.props;

    const messageFeedBack = assertions >= 3 ? 'Mandou bem!' : 'Podia ser melhor...';
    return (
      <div>
        <div>
          <Header />
          <div className="feedback-container">
            <div className="feedback-scoreboard">
              <div>
                <span>Assertions:</span>
                <p data-testid="feedback-total-question">{assertions}</p>
              </div>
              <div>
                <span>Score:</span>
                <p data-testid="feedback-total-score">{score}</p>
              </div>
            </div>
            <div>
              <p data-testid="feedback-text" className="message">
                {messageFeedBack}
              </p>
              {feedback(messageFeedBack)}
            </div>
            <Links />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  assertions: state.loginReducer.assertions,
  score: state.loginReducer.score,
});

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Feedback);
