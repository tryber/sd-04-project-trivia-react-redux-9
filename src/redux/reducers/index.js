import { combineReducers } from 'redux';
import apiReducer from './apiReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({ apiReducer, loginReducer });

export default rootReducer;
