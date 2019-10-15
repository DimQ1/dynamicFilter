export const SET_DIMENSION_CHECKED = 'SET_DIMENSION_CHEACKED';
export const ADD_DIMENSIONS_ITEMS = 'ADD_DIMENSIONS_ITEMS';
export const REMOVE_DIMENSIONS_ITEMS = 'REMOVE_DIMENSIONS_ITEMS'
export const FETCH_DIMENSIONS_PENDING = 'FETCH_DIMENSIONS_PENDING';
export const FETCH_DIMENSIONS_SUCCESS = 'FETCH_DIMENSIONS_SUCCESS';
export const FETCH_DIMENSIONS_ERROR = 'FETCH_DIMENSIONS_ERROR';

export function setChecked(checkedItems) {
  return {
    type: SET_DIMENSION_CHECKED,
    payload: checkedItems
  }
}

export function addItems(checkedContext) {
  return {
    type: ADD_DIMENSIONS_ITEMS,
    payload: checkedContext
  }
}

export function removeItems(contextId) {
  return {
    type: REMOVE_DIMENSIONS_ITEMS,
    payload: contextId
  }
}

export function fetchDimensionsPending() {
  return {
    type: FETCH_DIMENSIONS_PENDING
  }
}

export function fetchDimensionsSuccess(Context) {
  return {
    type: FETCH_DIMENSIONS_SUCCESS,
    payload: Context
  }
}

export function fetchDimensionsError(error) {
  return {
    type: FETCH_DIMENSIONS_ERROR,
    error: error
  }
}