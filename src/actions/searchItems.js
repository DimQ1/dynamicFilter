export const ADD_SEARCH_ITEMS = 'ADD_SEARCH_ITEMS';
export const REMOVE_SEARCH_ITEMS = 'REMOVE_SEARCH_ITEMS';
export const FETCH_SEARCH_ITEMS_PENDING = 'FETCH_SEARCH_ITEMS_PENDING';
export const FETCH_SEARCH_ITEMS_SUCCESS = 'FETCH_SEARCH_ITEMS_SUCCESS';
export const FETCH_SEARCH_ITEMS_ERROR = 'FETCH_SEARCH_ITEMS_ERROR';

export function addItems(newItems) {
  return {
    type: ADD_SEARCH_ITEMS,
    payload: newItems
  }
}

export function removeItems(dimensionsId) {
  return {
    type: REMOVE_SEARCH_ITEMS,
    payload: dimensionsId
  }
}

export function fetchSearchItemsPending() {
  return {
    type: FETCH_SEARCH_ITEMS_PENDING
  }
}

export function fetchSearchError(error) {
  return {
    type: FETCH_SEARCH_ITEMS_ERROR,
    error: error
  }
}