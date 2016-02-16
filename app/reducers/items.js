import * as types from '../actions/items';
import update from 'react-addons-update';

const initialState = [];
export default function items(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_ITEM:
			return [...state, action.item]
    case types.ATTACH_TO_ITEM:
      return state.map((item,index) => {
        if (item.id === action.itemId) {
          const obj = {
            id:action.atomId
          }
          return Object.assign({}, item, {
            atoms: [...item.atoms, obj]
          })
        }
        return item
      })
    default:
      return state
  }
}
