export const SET_CHEACKED = 'SET_CHEACKED_DIMENSIONS';
export const SET_ITEMS = 'SET_ITEMS';
export const FETCH_DIMENSIONS_PENDING = 'FETCH_DIMENSIONS_PENDING';
export const FETCH_DIMENSIONS_SUCCESS = 'FETCH_DIMENSIONS_SUCCESS';
export const FETCH_DIMENSIONS_ERROR = 'FETCH_DIMENSIONS_ERROR';

export function setCheckedDimensions(checked) {
  return {
    type: SET_CHEACKED,
    payload: checked,
  }
}

export function setItemsDimensions(checkedContext) {
  return {
    type: SET_ITEMS,
    payload: checkedContext
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