export const SWITCH_EDIT = 'SWITCH_EDIT';
export function switchEdit(editing) {
  return {
    type: SWITCH_EDIT,
    editing
  };
};