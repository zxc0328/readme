import * as types from '../actions/items';

const initialState = [];
export default function items(state = initialState, action) {
  switch (action.type) {
		case types.ADD_ITEM:
			switch (action.item.type) {
				case 0:
					const item_1 = {
						content: {name:'john',phone:'123-456'},
						...action.item 
					}
					return [...state, item_1]
				case 1:
				  const item_2 = {
						content: [{time:'2001-2008',company:'Mircosoft'},{time:'20018-now',company:'Facebook'}],
						...action.item 
					}
					return [...state, item_2]
				default:
					return [...state, action.item]
			}
		default:
			return state
  }
}
