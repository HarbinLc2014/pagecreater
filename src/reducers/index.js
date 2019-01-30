import {combineReducers} from 'redux';
import pageReducer from './pageReducer';
import selectReducer from './selectReducer';

export default combineReducers({
  pages: pageReducer,
  selected: selectReducer
});
