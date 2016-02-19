import {combineReducers} from 'redux';
import blocks from './blocks';
import items from './items';
import atoms from './atoms';
import global from './global';

export default combineReducers({
	global,
  blocks,
  items,
  atoms
});
