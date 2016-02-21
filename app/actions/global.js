export const SWITCH_EDIT = 'SWITCH_EDIT';
export function switchEdit(editing) {
  return {
    type: SWITCH_EDIT,
    editing
  };
};

export const THEME_SWITCHER_VISIBILITY = 'THEME_SWITCHER_VISIBILITY';
export function themeSwitcherVisibility(flag) {
  return {
    type: THEME_SWITCHER_VISIBILITY,
    flag
  };
};