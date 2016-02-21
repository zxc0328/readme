import * as types from '../actions/global';

const initialState = {editing:true, themeSwitcherVisibility:false};
export default function (state = initialState, action) {
  switch (action.type) {
		case types.SWITCH_EDIT:
			return Object.assign({}, state, {editing:action.editing})
		case types.THEME_SWITCHER_VISIBILITY:
			return Object.assign({}, state, {themeSwitcherVisibility:action.flag})
		default:
			return state
  }
}