import uuid from 'node-uuid';

export const CREATE_ITEM = 'CREATE_ITEM'
export function createItem(item) {
  return {
    type: CREATE_ITEM,
    item: {
      id: uuid.v4(),
      type: item.type,
      atoms:[]
    }
  }
}

export const ATTACH_TO_ITEM = 'ATTACH_TO_ITEM'
export function attachToItem(obj) {
  return {
    type: ATTACH_TO_ITEM,
    itemId: obj.itemId,
    atomId: obj.atomId
  }
}
