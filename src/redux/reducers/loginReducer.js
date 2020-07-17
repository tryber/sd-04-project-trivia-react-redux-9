import { LOGIN_INFO, UPDATE_SCORE } from '../actions/index';

const inicialState = {
  name: '',
  gravatarMail: '',
  assertions: 0,
  score: 0,
};

const loginReducer = (state = inicialState, action) => {
  switch (action.type) {
    case LOGIN_INFO:
      return {
        ...state,
        name: action.name,
        gravatarMail: `https://www.gravatar.com/avatar/${action.gravatar}`,
      };
    case UPDATE_SCORE:
      return {
        ...state,
        assertions: state.assertions + action.assertions,
        score: state.score + action.score,
      };
    default:
      return state;
  }
};

export default loginReducer;
