import uuid from 'node-uuid';

export const ATTACH_TO_BLOCK = 'ATTACH_TO_BLOCK'
export function attachToBlock(id) {
  return {
    type: ATTACH_TO_BLOCK,
    item: {
      id
    }
  }
}
