import { combineReducers } from 'redux';
import reducer from '../utils/store/reducer';

export default combineReducers({
  domain: reducer
});
