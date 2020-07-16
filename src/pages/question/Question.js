import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import Header from '../../components/Header';
import './Question.css';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 30,
      questionNumber: 0,
      redirect: false,
    };

    this.nextQuestion = this.nextQuestion.bind(this);
  }

  // componentDidMount() {
  //   setInterval(() => {
  //     const { seconds } = this.state;
  //     if (seconds > 0) {
  //       this.setState((state) => ({
  //         seconds: state.seconds - 1,
  //       }));
  //     }
  //   }, 1000);
  // }
  nextQuestion() {
    let { questionNumber } = this.state;
    const { questions } = this.props;
    if (questionNumber === questions.length - 1) {
      return this.setState({ redirect: true });
    }
    questionNumber += 1;
    return this.setState({ questionNumber });
  }

  render() {
    const { isFetching, questions } = this.props;
    const { questionNumber, redirect } = this.state;
    if (isFetching) return <div>Loading...</div>;
    if (redirect) return <Redirect to="/" />;
    return (
      <div className="question-page-container">
        <Header />
        <div className="question-and-answers">
          <div className="question">
            <span data-testid="question-category" className="question-category">
              {questions[questionNumber].category}
            </span>
            <p data-testid="question-text" className="question-text">
              {questions[questionNumber].question}
            </p>
          </div>
          <div className="answers-options">
            <button
              onClick={this.nextQuestion}
              type="button"
              className="answers-option"
              data-testid="correct-answer"
            >
              {questions[questionNumber].correct_answer}
            </button>
            {questions[questionNumber].incorrect_answers.map((incorrectAnswer) => (
              <button
                onClick={this.nextQuestion}
                type="button"
                className="answers-option"
                data-testid="wrong-answer"
              >
                {incorrectAnswer}
              </button>
            ))}
          </div>
          <div className="timer-and-next-button">
            <div className="timer">Tempo: {this.state.seconds}</div>
            <button type="button" data-testid="btn-next" className="btn-next">
              Próxima
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.questionsReducer.isFetching,
  questions: state.questionsReducer.questions,
});

export default connect(mapStateToProps)(Question);

Question.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      type: PropTypes.string,
      difficulty: PropTypes.string,
      question: PropTypes.string,
      correct_answer: PropTypes.string,
      incorrect_answers: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
};
