import * as types from '../actions/global';

const initialState = {editing:true};
export default function (state = initialState, action) {
  switch (action.type) {
		case types.SWITCH_EDIT:
			return {editing:action.editing}
		default:
			return state
  }
}