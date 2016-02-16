import * as types from '../actions/blocks';

const initialState = [];
export default function blocks(state = initialState, action) {
  switch (action.type) {
		case types.ATTACH_TO_BLOCK:
			return [...state, action.item]
		default:
			return state
  }
}
