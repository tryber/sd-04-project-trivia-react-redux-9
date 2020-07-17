import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import Header from '../../components/Header';
import './Question.css';

const randomAnswers = (allAnswers) => {
  const cloneAllAnswers = [...allAnswers];
  for (let i = cloneAllAnswers.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const tempValue = cloneAllAnswers[i];
    cloneAllAnswers[i] = cloneAllAnswers[randomIndex];
    cloneAllAnswers[randomIndex] = tempValue;
  }
  return cloneAllAnswers;
};

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 30,
      questionNumber: 0,
      redirect: false,
    };

    this.nextQuestion = this.nextQuestion.bind(this);
    this.renderAnswers = this.renderAnswers.bind(this);
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

  renderAnswers() {
    const { questions } = this.props;
    const { questionNumber } = this.state;
    const correctAnswer = { answer: questions[questionNumber].correct_answer, isCorrect: true };
    const incorrectAnswers = questions[questionNumber].incorrect_answers.map((answer, index) => ({
      answer,
      isCorrect: false,
      index,
    }));
    const allAnswers = [{ ...correctAnswer }, ...incorrectAnswers];

    return randomAnswers(allAnswers).map((answer) => {
      if (answer.isCorrect) {
        return (
          <button
            onClick={this.nextQuestion}
            type="button"
            className="answers-option"
            data-testid="correct-answer"
            key={answer.answer}
          >
            {answer.answer}
          </button>
        );
      }
      return (
        <button
          onClick={this.nextQuestion}
          type="button"
          className="answers-option"
          data-testid={`wrong-answer-${answer.index}`}
          key={answer.answer}
        >
          {answer.answer}
        </button>
      );
    });
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
          <div className="answers-options">{this.renderAnswers()}</div>
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
