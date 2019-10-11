import { SET_ITEMS } from "./dimensions";

export const SET_CHEACKED = 'SET_CHEACKED_CONTEXT';
export const FETCH_CONTEXT_PENDING = 'FETCH_CONTEXT_PENDING';
export const FETCH_CONTEXT_SUCCESS = 'FETCH_CONTEXT_SUCCESS';
export const FETCH_CONTEXT_ERROR = 'FETCH_CONTEXT_ERROR';

export function setCheckedContext(checked) {
  return dispatch => {
    dispatch(
      {
        type: SET_CHEACKED,
        payload: checked
      })

    dispatch(
      {
        type: SET_ITEMS,
        payload: checked
      }
    )

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