import {
    SET_DIMENSION_CHECKED,
    ADD_DIMENSIONS_ITEMS,
    REMOVE_DIMENSIONS_ITEMS,
    FETCH_DIMENSIONS_PENDING,
    FETCH_DIMENSIONS_SUCCESS,
    FETCH_DIMENSIONS_ERROR
} from '../actions/dimensions'

const initState = { items: [], removeIds:[], pending: false };

export function dimensionsReducer(state = initState, action) {
    switch (action.type) {
        case SET_DIMENSION_CHECKED:
            {
                return { ...state, items: action.payload, removeIds:[] }
            }
        case ADD_DIMENSIONS_ITEMS:
            {
                const newState = state.items.concat(action.payload);
                return { ...state, items: newState, removeIds:[] }

            }
        case REMOVE_DIMENSIONS_ITEMS:
            {
                const removedIds = state.items.filter(item => item.contextId === action.payload).map(item => item.id);
                const newState = state.items.filter(item => item.contextId !== action.payload);
                return { ...state, items: newState, removeIds: removedIds }

            }
        case FETCH_DIMENSIONS_PENDING:
            return {
                ...state,
                removeIds:[],
                pending: true
            }
        case FETCH_DIMENSIONS_SUCCESS:
            return {
                ...state,
                removeIds:[],
                pending: false,
            }
        case FETCH_DIMENSIONS_ERROR:
            return {
                ...state,
                pending: false,
                removeIds:[],
                items: action.error
            }
        default:
            return state;
    }
}
