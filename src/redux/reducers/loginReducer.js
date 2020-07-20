<<<<<<< HEAD
import { LOGIN_INFO, UPDATE_SCORE, RESET_LOGIN } from '../actions/index';
=======
import { LOGIN_INFO, UPDATE_SCORE, RESET_SCORE } from '../actions/index';
>>>>>>> d93ab528ff3dc4640023628ee5703400737db2be

const inicialState = {
  name: '',
  gravatarEmail: '',
  assertions: 0,
  score: 0,
};

const loginReducer = (state = inicialState, action) => {
  switch (action.type) {
    case LOGIN_INFO:
      return {
        ...state,
        name: action.name,
        gravatarEmail: `https://www.gravatar.com/avatar/${action.gravatar}`,
      };
    case UPDATE_SCORE:
      return {
        ...state,
        assertions: state.assertions + action.assertions,
        score: state.score + action.score,
      };
<<<<<<< HEAD
    case RESET_LOGIN:
      return {
        ...inicialState,
      }
=======
    case RESET_SCORE:
      return { ...inicialState };
>>>>>>> d93ab528ff3dc4640023628ee5703400737db2be
    default:
      return state;
  }
};

export default loginReducer;
