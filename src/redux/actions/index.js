import { getQuestions } from '../../services/api';
// import HashMail from '../../services/md5';

export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS';
export const REQUEST_QUESTIONS_SUCCESS = 'REQUEST_QUESTIONS_SUCCESS';
export const REQUEST_QUESTIONS_FAILURE = 'REQUEST_QUESTIONS_FAILURE';
export const LOGIN_INFO = 'LOGIN_INFO';

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

// export const infoLogin = (email, name) => ({
//   type: LOGIN_INFO,
//   name,
//   gravatar: HashMail(email),
// });
