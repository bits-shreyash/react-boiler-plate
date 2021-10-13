import { combineReducers } from 'redux';
import authentication from './authentication/reducer';
import global from './global/reducer';
import posts from './posts/reducer'


export default combineReducers({
  global,
  authentication,
  posts
});
