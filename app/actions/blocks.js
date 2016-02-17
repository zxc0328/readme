import uuid from 'node-uuid';

export const ATTACH_TO_BLOCK = 'ATTACH_TO_BLOCK'
export function attachToBlock(obj) {
  return {
    type: ATTACH_TO_BLOCK,
    itemId:obj.itemId,
    blockId:obj.blockId
  }
}
