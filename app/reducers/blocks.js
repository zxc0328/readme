import * as types from '../actions/blocks';
import blockLayout from '../constants/blockLayout';

const initialState = blockLayout.top_one_bottom_two;
export default function blocks(state = initialState, action) {
  switch (action.type) {
		case types.ATTACH_TO_BLOCK:
			return state.map((block) => {
				if (block.id === action.blockId){
					return Object.assign({}, block, { items: [...block.items, {id: action.itemId}]})
				}
				return block
			})
		case types.CHANGE_BLOCK_LAYOUT:
			const newState = blockLayout[action.layoutName]
			return newState.map((block, index) => {
				if(index <= (state.length-1)){
					const items = state[index].items
					return Object.assign({}, block, {items})
				}
				return block
			})
		default:
			return state
  }
}
