import * as types from '../actions/atoms';

const initialState = [];
export default function atoms(state = initialState, action) {
  switch (action.type) {
		case types.CREATE_ATOM:
			return [...state, action.atom]
		default:
			return state
  }
}
