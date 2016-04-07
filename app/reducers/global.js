import * as types from '../actions/global';

const initialState = {editing:true, themeSwitcherVisibility:false,theme:"hui"};
export default function (state = initialState, action) {
  switch (action.type) {
		case types.SWITCH_EDIT:
			return Object.assign({}, state, {editing:action.editing})
		case types.THEME_SWITCHER_VISIBILITY:
			return Object.assign({}, state, {themeSwitcherVisibility:action.flag})
		case types.SWITCH_THEME:
			return Object.assign({}, state, {theme:action.tName})
		default:
			return state
  }
}