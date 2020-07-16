import { combineReducers } from 'redux';
// import questionsReducer from './questionsReducer';
import loginInfo from './apiReducer';

const rootReducer = combineReducers({ loginInfo });

export default rootReducer;
