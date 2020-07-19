import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Header } from '../../components';
import Links from '../../components/Links';

class Feedback extends React.Component {
  render() {
    const { assertions, score } = this.props;

    const messageFeedBack = assertions >= 3 ? 'Mandou bem!' : 'Podia ser melhor...';
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
const mapStateToProps = (state) => ({
  assertions: state.loginReducer.assertions,
  score: state.loginReducer.score,
});

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Feedback);
