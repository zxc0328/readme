import * as types from '../actions/atoms';

const initialState = [];
export default function atoms(state = initialState, action) {
  switch (action.type) {
		case types.CREATE_ATOM:
			return [...state, action.atom]
		case types.UPDATE_ATOM:
			return state.map((atom, index)=>{
				if(atom.id === action.atom.id){
					return Object.assign({}, atom, action.atom)
				}
				return atom
			})
		case types.DELETE_ATOM:
			return state.filter((atom) => atom.id !== action.id)
		default:
			return state
  }
}
