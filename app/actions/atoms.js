import uuid from 'node-uuid';

export const CREATE_ATOM = 'CREATE_ATOM'
export function createAtom(atom) {
  return {
    type: CREATE_ATOM,
    atom: {
      id: uuid.v4(),
      type: atom.type,
      text: 'ddd',
      editing: false
    }
  };
};

export const UPDATE_ATOM = 'UPDATE_ATOM';
export function updateAtom(updatedAtom) {
  return {
    type: UPDATE_ATOM,
    atom:updatedAtom
  };
};

export const DELETE_ATOM = 'DELETE_ATOM';
export function deleteAtom(id) {
  return {
    type: DELETE_ATOM,
    id
  };
};