import { SET_ITEMS } from "./dimensions";

export const SET_CHEACKED = 'SET_CHEACKED_CONTEXT';

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