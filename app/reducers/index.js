import {combineReducers} from 'redux';
import lanes from './lanes';
import notes from './notes';
import items from './items';

export default combineReducers({
  lanes,
  notes,
  items
});
