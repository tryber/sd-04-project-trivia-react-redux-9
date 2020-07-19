import { getToken, getQuestions } from '../../services/api';
import HashMail from '../../services/md5';

export const REQUEST_TOKEN = 'REQUEST_TOKEN';
export const REQUEST_TOKEN_SUCCESS = 'REQUEST_TOKEN_SUCCESS';
export const REQUEST_TOKEN_FAILURE = 'REQUEST_TOKEN_FAILURE';

export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS';
export const REQUEST_QUESTIONS_SUCCESS = 'REQUEST_QUESTIONS_SUCCESS';
export const REQUEST_QUESTIONS_FAILURE = 'REQUEST_QUESTIONS_FAILURE';

export const LOGIN_INFO = 'LOGIN_INFO';
export const UPDATE_SCORE = 'UPDATE_SCORE';

const requestToken = () => ({
  type: REQUEST_TOKEN,
});

const successToken = ({ token }) => ({
  type: REQUEST_TOKEN_SUCCESS,
  token,
});

const failureToken = (error) => ({
  type: REQUEST_TOKEN_FAILURE,
  error,
});

export function gettingToken() {
  return (dispatch) => {
    dispatch(requestToken());
    return getToken().then(
      (token) => dispatch(successToken(token)),
      (error) => dispatch(failureToken(error)),
    );
  };
}

const requestQuestions = () => ({
  type: REQUEST_QUESTIONS,
});

const sucessQuestions = ({ results }) => ({
  type: REQUEST_QUESTIONS_SUCCESS,
  data: results,
});

const failureQuestions = (error) => ({
  type: REQUEST_QUESTIONS_FAILURE,
  error,
});

export function getActionsQuestions(token) {
  return (dispatch) => {
    dispatch(requestQuestions());
    return getQuestions(token).then(
      (questions) => dispatch(sucessQuestions(questions)),
      (error) => dispatch(failureQuestions(error)),
    );
  };
}

export const infoLogin = (name, email) => ({
  type: LOGIN_INFO,
  name,
  gravatar: HashMail(email),
});

export const updateScore = (assertions, score) => ({
  type: UPDATE_SCORE,
  assertions,
  score,
});
