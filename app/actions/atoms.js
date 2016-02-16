import uuid from 'node-uuid';

export const CREATE_ATOM = 'CREATE_ATOM'
export function createAtom(atom) {
  return {
    type: CREATE_ATOM,
    atom: {
      id: uuid.v4(),
      type: atom.type
    }
  };
};
