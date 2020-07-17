import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { updateScore } from '../../redux/actions';
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
      colorAnswer: false,
      answers: [],
      timer: false,
      disabled: false,
      timeOut: false,
    };
    this.nextQuestion = this.nextQuestion.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { isFetching } = this.props;
    const { questionNumber } = this.state;
    if (prevProps.isFetching !== isFetching || prevState.questionNumber !== questionNumber) {
      this.createAnswers();
      this.timer();
    }
  }

  timer() {
    const { timer, timeOut } = this.state;
    this.setState({ seconds: 30 });

    if (timer) {
      clearInterval(timer);
    }

    const timerFunc = setInterval(() => {
      const { seconds } = this.state;
      if (seconds > 0) {
        this.setState((state) => ({
          seconds: state.seconds - 1,
        }));
      }
    }, 1000);

    if (timeOut) {
      clearTimeout(timeOut);
    }

    const timeOutFunc = setTimeout(() => this.setState({ disabled: true }), 30000);

    this.setState({ timer: timerFunc, timeOut: timeOutFunc, disabled: false });
  }

  nextQuestion() {
    this.setState({ colorAnswer: false });
    let { questionNumber } = this.state;
    const { questions } = this.props;
    if (questionNumber === questions.length - 1) {
      return this.setState({ redirect: true });
    }
    questionNumber += 1;
    return this.setState({ questionNumber });
  }

  createAnswers() {
    const { questions } = this.props;
    const { questionNumber } = this.state;
    const correctAnswer = {
      answer: questions[questionNumber].correct_answer,
      isCorrect: true,
      difficulty: questions[questionNumber].difficulty,
    };
    const incorrectAnswers = questions[questionNumber].incorrect_answers.map((answer, index) => ({
      answer,
      isCorrect: false,
      index,
    }));
    const allAnswers = [{ ...correctAnswer }, ...incorrectAnswers];
    const answers = randomAnswers(allAnswers);
    return this.setState({ answers });
  }

  renderQuestions() {
    const { questions } = this.props;
    const { questionNumber } = this.state;
    return (
      <div className="question">
        <span data-testid="question-category" className="question-category">
          {questions[questionNumber].category}
        </span>
        <p data-testid="question-text" className="question-text">
          {questions[questionNumber].question}
        </p>
      </div>
    );
  }

  handleClick(answer) {
    const { timer, seconds } = this.state;
    const { updateScore } = this.props;
    clearInterval(timer);
    this.setState({ colorAnswer: true, disabled: true });

    let assertions = 0;
    let score = 0;

    console.log(answer);
    if (answer.isCorrect) {
      assertions = 1;
      switch (answer.difficulty) {
        case 'hard':
          score = 10 + seconds * 3;
          break;
        case 'medium':
          score = 10 + seconds * 2;
          break;
        case 'easy':
          score = 10 + seconds * 1;
          break;
        default:
          break;
      }
    }
    updateScore(assertions, score);
  }

  renderAnswers() {
    const { answers, colorAnswer, disabled } = this.state;
    return answers.map((answer) => {
      const dataTestid = answer.isCorrect ? 'correct-answer' : `wrong-answer-${answer.index}`;
      const className = answer.isCorrect ? 'answers-option correct' : 'answers-option incorrect';
      return (
        <button
          onClick={() => this.handleClick(answer)}
          type="button"
          className={colorAnswer ? className : 'answers-option'}
          data-testid={dataTestid}
          key={answer.answer}
          disabled={disabled}
        >
          {answer.answer}
        </button>
      );
    });
  }

  render() {
    const { isFetching } = this.props;
    const { redirect, disabled } = this.state;
    if (isFetching) return <div>Loading...</div>;
    if (redirect) return <Redirect to="/" />;
    return (
      <div className="question-page-container">
        <Header />
        <div className="question-and-answers">
          {this.renderQuestions()}
          <div className="answers-options">{this.renderAnswers()}</div>
          <div className="timer-and-next-button">
            <div className="timer">Tempo: {this.state.seconds}</div>
            <button
              type="button"
              data-testid="btn-next"
              className="btn-next"
              onClick={this.nextQuestion}
              disabled={!disabled}
            >
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

export default connect(mapStateToProps, { updateScore })(Question);

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
