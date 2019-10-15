import {
    ADD_SEARCH_ITEMS,
    REMOVE_SEARCH_ITEMS,
    FETCH_SEARCH_ITEMS_ERROR,
    FETCH_SEARCH_ITEMS_PENDING
} from '../actions/searchItems'

const initState = { items: [], pending: false };

export function searchItemsReducer(state = initState, action) {
    switch (action.type) {
        case ADD_SEARCH_ITEMS: {
            const newItems = state.items.concat(action.payload);
            return { ...state, items: newItems };
        }
        case REMOVE_SEARCH_ITEMS: {
            const newItems = state.items.filter(item => item.dimensionId !== action.payload);
            return { ...state, items: newItems };
        }
        case FETCH_SEARCH_ITEMS_PENDING:
            return { ...state, pending: true };
        case FETCH_SEARCH_ITEMS_ERROR:
            return { ...state, error: action.error };
        default:
            return state;
    }
}