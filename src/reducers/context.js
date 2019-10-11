import { SET_CHEACKED, FETCH_CONTEXT_PENDING, FETCH_CONTEXT_SUCCESS, FETCH_CONTEXT_ERROR } from '../actions/context'

const initialState = {
    pending: false,
    error: null,
    items: []
}

export function contextReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CHEACKED:
            const { id, isChecked } = action.payload;
            const updatedState = state.items.map(item => {
                if (item.id === id) {
                    item.checked = isChecked;
                }
                return item;
            })
            return {
                ...state,
                items: updatedState
            }
        case FETCH_CONTEXT_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_CONTEXT_SUCCESS:
            return {
                ...state,
                pending: false,
                items: action.payload
            }
            case FETCH_CONTEXT_ERROR:
            return {
                ...state,
                pending: false,
                items: action.error
            }
        default:
            return state
    }
}
