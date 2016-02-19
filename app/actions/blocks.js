import uuid from 'node-uuid';

export const ATTACH_TO_BLOCK = 'ATTACH_TO_BLOCK'
export function attachToBlock(obj) {
  return {
    type: ATTACH_TO_BLOCK,
    itemId:obj.itemId,
    blockId:obj.blockId
  }
}

export const DETACH_FROM_BLOCK = 'DETACH_FROM_BLOCK'
export function detachFromBlock(obj) {
  return {
    type: DETACH_FROM_BLOCK,
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

export const MOVE_ITEM = 'MOVE_ITEM'
export function moveItem(obj) {
  return {
    type: MOVE_ITEM,
    sourceId:obj.sourceId,
    targetId:obj.targetId
  }
}



