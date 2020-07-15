import { LOGIN_INFO } from '../actions/index';

const inicialState = {
  name: '',
  gravatarMail: '',
};

const loginPlayer = (state = inicialState, action) => {
  switch (action.type) {
    case LOGIN_INFO:
      return {
        ...state,
        name: action.name,
        gravatarMail: `https://www.gravatar.com/avatar/${action.gravatar}`,
      };
    default:
      return state;
  }
};

export default loginPlayer;
