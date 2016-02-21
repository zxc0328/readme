import uuid from 'node-uuid';

export const CREATE_ITEM = 'CREATE_ITEM'
export function createItem(item) {
  return {
    type: CREATE_ITEM,
    item: {
      id: uuid.v4(),
      type: item.type,
      title: item.title,
      atoms:[],
      editing:false
    }
  }
}

export const DELETE_ITEM = 'DELETE_ITEM'
export function deleteItem(id) {
  return {
    type: DELETE_ITEM,
    id
  }
}

export const UPDATE_ITEM = 'UPDATE_ITEM'
export function updateItem(updatedItem) {
  return {
    type: UPDATE_ITEM,
    updatedItem
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

export const ATTACH_MUTI_TO_ITEM = 'ATTACH_MUTI_TO_ITEM'
export function attachMutiToItem(obj) {
  return {
    type: ATTACH_MUTI_TO_ITEM,
    itemId: obj.itemId,
    atomIds:obj.atomIds
  }
}

export const DETACH_FROM_ITEM = 'DETACH_FROM_ITEM'
export function detachFromItem(obj) {
  return {
    type: DETACH_FROM_ITEM,
    itemId: obj.itemId,
    atomId: obj.atomId
  }
}

export const MOVE_ATOM = 'MOVE_ATOM'
export function moveAtom(obj) {
  return {
    type:MOVE_ATOM,
    sourceId:obj.sourceId,
    targetId:obj.targetId,
    itemId:obj.itemId
  }
}
