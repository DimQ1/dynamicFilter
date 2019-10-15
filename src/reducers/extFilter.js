import { extFilterActions } from '../actions/extfilter'


const initState = {
    selectedId: 1,
    items: [
        { value: "**", id: 1 },
        { value: "*_", id: 2 },
        { value: '""', id: 3 }
    ]
}

export function extFilterReducer(state = initState, action) {
    switch (action.type) {
        case extFilterActions.SELECT_ITEM: {
            return { ...state, selectedId: action.payload };
        }
        default:
            return state;

    }
}