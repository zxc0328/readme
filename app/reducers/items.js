import * as types from '../actions/items';
import update from 'react-addons-update';

const initialState = [];
export default function items(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_ITEM:
			return [...state, action.item]
    case types.DELETE_ITEM:
      return state.filter((item) => item.id !== action.id);
    case types.ATTACH_TO_ITEM:
      return state.map((item,index) => {
        if (item.id === action.itemId) {
          return Object.assign({}, item, {
            atoms: [...item.atoms, action.atomId]
          })
        }
        return item
      })
    case types.ATTACH_MUTI_TO_ITEM:
      return state.map((item,index) => {
        if (item.id === action.itemId) {
          return Object.assign({}, item, {
            atoms: item.atoms.concat(action.atomIds)
          })
        }
        return item
      })
    case types.UPDATE_ITEM:
      return state.map((item,index) => {
        if (item.id === action.updatedItem.id) {
          return Object.assign({}, item, action.updatedItem)
        }
        return item
      })
    case types.DETACH_FROM_ITEM:
      return state.map((item,index) => {
        if (item.id === action.itemId) {
          return Object.assign({}, item, {
            atoms: atoms.filter((id) => id !== action.atomId)
          })
        }
        return item
      })
    case types.MOVE_ATOM:
      const sourceId = action.sourceId
      const targetId = action.targetId
      const itemId = action.itemId

      const items = state
      let currentItem
      items.map((item) => {
        if(item.id === itemId){
          currentItem = item
        }
      })
      const sourceAtomIndex = currentItem.atoms.indexOf(sourceId)
      const targetAtomIndex = currentItem.atoms.indexOf(targetId)
      
      return state.map((item) => {
          return item.id === itemId ? Object.assign({}, item, {
            atoms: update(item.atoms, {
              $splice: [
                [sourceAtomIndex, 1],
                [targetAtomIndex, 0, sourceId]
              ]
            })
          }) : item
        })
    default:
      return state
  }
}
