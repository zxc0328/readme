import {combineReducers} from 'redux';
import blocks from './blocks';
import items from './items';

export default combineReducers({
  blocks,
  items
});
