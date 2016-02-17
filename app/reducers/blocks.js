import * as types from '../actions/blocks';

const initialState = [{id:0,items:[]},{id:1,items:[]}];
export default function blocks(state = initialState, action) {
  switch (action.type) {
		case types.ATTACH_TO_BLOCK:
			return state.map((block) => {
				if (block.id === action.blockId){
					return Object.assign({}, block, { items: [...block.items, {id: action.itemId}]})
				}
				return block
			})
		default:
			return state
  }
}
