import { orderActions } from '../actions/order'

const initState = {
    selectedId: 1,
    items: [
        { value: "A-Z", id: 1 },
        { value: "Z-A", id: 2 }
    ]
}

export function extOrderReducer(state = initState, action) {
    switch (action.type) {
        case orderActions.SELECT_ITEM: {
            return {
                ...state, selectedId: action.payload
            }
        }
        default:
            return state;

    }
}