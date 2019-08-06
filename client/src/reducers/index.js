import { combineReducers } from 'redux';
import loginUserReducers from './loginUserReducers';

const appReducer = combineReducers({
  loginUserReducers
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
