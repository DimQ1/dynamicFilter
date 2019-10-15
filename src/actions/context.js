
export const SET_CHEACKED = 'SET_CHEACKED_CONTEXT';
export const FETCH_CONTEXT_PENDING = 'FETCH_CONTEXT_PENDING';
export const FETCH_CONTEXT_SUCCESS = 'FETCH_CONTEXT_SUCCESS';
export const FETCH_CONTEXT_ERROR = 'FETCH_CONTEXT_ERROR';

export function setChecked(checkedItems) {
  return {
    type: SET_CHEACKED,
    payload: checkedItems
  }
}

export function fetchContextPending() {
  return {
    type: FETCH_CONTEXT_PENDING
  }
}

export function fetchContextSuccess(Context) {
  return {
    type: FETCH_CONTEXT_SUCCESS,
    payload: Context
  }
}

export function fetchContextError(error) {
  return {
    type: FETCH_CONTEXT_ERROR,
    error: error
  }
}