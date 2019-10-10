export const SET_CHEACKED = 'SET_CHEACKED_DIMENSIONS';
export const SET_ITEMS = 'SET_ITEMS';

export function setCheckedDimensions(checked) {
  return {
    type: SET_CHEACKED,
    payload: checked,
  }
}

export function setItemsDimensions(items) {
  return {
    type: SET_ITEMS,
    payload: items
  }
}