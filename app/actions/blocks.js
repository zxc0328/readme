import uuid from 'node-uuid';

export const ATTACH_TO_BLOCK = 'ATTACH_TO_BLOCK'
export function attachToBlock(obj) {
  return {
    type: ATTACH_TO_BLOCK,
    itemId:obj.itemId,
    blockId:obj.blockId
  }
}

export const CHANGE_BLOCK_LAYOUT = 'CHANGE_BLOCK_LAYOUT'
export function changeBlockLayout(layoutName) {
  return {
    type: CHANGE_BLOCK_LAYOUT,
    layoutName
  }
}
