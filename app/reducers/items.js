import * as types from '../actions/items';

const initialState = [];
export default function items(state = initialState, action) {
  switch (action.type) {
		case types.ADD_ITEM:
			return [...state, action.item]
		default:
			return state
  }
}
