import * as types from '../actions/blocks';

const initialState = [];
export default function blocks(state = initialState, action) {
  switch (action.type) {
		case types.ATTACH_TO_BLOCK:
			const item = {
				id:action.item.id
			}
			return [...state, item]
		default:
			return state
  }
}
