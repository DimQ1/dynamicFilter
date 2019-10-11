import {
    SET_CHEACKED, SET_ITEMS,
    FETCH_DIMENSIONS_PENDING,
    FETCH_DIMENSIONS_SUCCESS,
    FETCH_DIMENSIONS_ERROR
} from '../actions/dimensions'

const cachedState = []
const initState = { items: [], pending: false };

export function dimensionsReducer(state = initState, action) {
    switch (action.type) {
        case SET_CHEACKED:
            {
                const { id, isChecked } = action.payload;
                const updatedState = state.items.map(item => {
                    if (item.id === id) {
                        item.checked = isChecked;
                    }
                    return item;
                })

                return { ...state, items: updatedState }
            }
        case SET_ITEMS:
            {
                const { id, isChecked } = action.payload;
                if (isChecked) {
                    const filteredItems = cachedState.filter(item => item.contextId === id);
                    const newState = state.items.concat(filteredItems);
                    return { ...state, items: newState }
                } else {
                    const filteredItems = state.items.filter(item => item.contextId !== id);
                    return { ...state, items: filteredItems }
                }
            }
        case FETCH_DIMENSIONS_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_DIMENSIONS_SUCCESS:
            cachedState.push(...action.payload);
            return {
                ...state,
                pending: false,
            }
        case FETCH_DIMENSIONS_ERROR:
            return {
                ...state,
                pending: false,
                items: action.error
            }
        default:
            return state;
    }
}
