import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Header from '../../components/Header';
import './Question.css';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 30,
    };
  }

  componentDidMount() {
    setInterval(() => {
      const { seconds } = this.state;
      if (seconds > 0) {
        this.setState((state) => ({
          seconds: state.seconds - 1,
        }));
      }
    }, 1000);
  }

  render() {
    return (
      <div className="question-page-container">
        <Header />
        <div className="question-and-answers">
          <div className="question">
            <span data-testid="question-category" className="question-category">
              Política
            </span>
            <p data-testid="question-text" className="question-text">
              Pergunta vai entrar aqui?
            </p>
          </div>
          <div className="answers-options">
            {/* <button type="button" className="answers-option" data-testid="correct-answer">
          Resposta certa
        </button>
        <button type="button" className="answers-option" data-testid={`wrong-answer-`}>
          Resposta errada1
        </button> */}
          </div>
          <div className="timer-and-next-button">
            <div className="timer">Tempo: {this.state.seconds}</div>
            <button type="button" data-testid="btn-next" className="btn-next">Próxima</button>
          </div>
        </div>
      </div>
    );
  }
}
// Question.propTypes = {

// };

export default Question;
