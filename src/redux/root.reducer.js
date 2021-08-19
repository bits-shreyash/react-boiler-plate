import { combineReducers } from 'redux';
import authentication from './authentication/reducer';
import global from './global/reducer';


export default combineReducers({
  global,
  authentication
});
