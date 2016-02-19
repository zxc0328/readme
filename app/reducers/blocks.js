import update from 'react-addons-update'
import * as types from '../actions/blocks'
import blockLayout from '../constants/blockLayout'

const initialState = blockLayout.top_one_bottom_two;
export default function blocks(state = initialState, action) {
  switch (action.type) {
    case types.ATTACH_TO_BLOCK:
      return state.map((block) => {
        if (block.id === action.blockId) {
          return Object.assign({}, block, {
            items: [...block.items, action.itemId]
          })
        }
        return block
      })
    case types.DETACH_FROM_BLOCK:
      return state.map((block) => {
        if (block.id === action.blockId) {
          if (block.items.indexOf(action.itemId) >= 0) {
            return Object.assign({}, block, {
              items: block.items.filter((id) => id !== action.itemId)
            })
          }
          return block
        }
        return block
      })
    case types.MOVE_ITEM_ACROSS_BLOCK:
    console.log(state[action.sourceBlockId].items.indexOf(action.itemId))
      if (state[action.sourceBlockId].items.indexOf(action.itemId) >= 0) {
        return state.map((block) => {
          if (block.id === action.sourceBlockId) {
            return Object.assign({}, block, {
              items: block.items.filter((id) => id !== action.itemId)
            })
            return block
          }
          if (block.id === action.blockId) {
            return Object.assign({}, block, {
              items: [...block.items, action.itemId]
            })
          }
          return block
        })
      } else {
        return state
      }
    case types.CHANGE_BLOCK_LAYOUT:
      const newState = blockLayout[action.layoutName]
      return newState.map((block, index) => {
        if (index <= (state.length - 1)) {
          const items = state[index].items
          return Object.assign({}, block, {
            items
          })
        }
        return block
      })
    case types.MOVE_ITEM:
      const sourceId = action.sourceId;
      const targetId = action.targetId;

      const blocks = state;
      const sourceBlock = blocks.filter((block) => {
        return block.items.indexOf(sourceId) >= 0;
      })[0];
      const targetBlock = blocks.filter((block) => {
        return block.items.indexOf(targetId) >= 0;
      })[0];
      const sourceItemIndex = sourceBlock.items.indexOf(sourceId);
      const targetItemIndex = targetBlock.items.indexOf(targetId);

      if (sourceBlock === targetBlock) {

        return state.map((block) => {
          return block.id === sourceBlock.id ? Object.assign({}, block, {
            items: update(sourceBlock.items, {
              $splice: [
                [sourceItemIndex, 1],
                [targetItemIndex, 0, sourceId]
              ]
            })
          }) : block;
        });
      } else {
        return state.map((block) => {
          if (block === sourceBlock) {
            // get rid of the source note
            return Object.assign({}, block, {
              items: block.items.length > 1 ? block.items.slice(0, sourceItemIndex).concat(
                block.items.slice(sourceItemIndex + 1)
              ) : []
            });
          }

          if (block === targetBlock) {
            // and move it to target
            return Object.assign({}, block, {
              items: block.items.slice(0, sourceItemIndex).concat(
                [sourceId]
              ).concat(
                block.items.slice(sourceItemIndex)
              )
            });
          }

          return block;
        });
      }

      return state;
    default:
      return state
  }
}
