import {combineReducers} from 'redux';
import blocks from './blocks';
import items from './items';
import atoms from './atoms';

export default combineReducers({
  blocks,
  items,
  atoms
});
