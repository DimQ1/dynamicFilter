import { SET_CHEACKED, SET_ITEMS } from '../actions/dimensions'

const initialState = [
    { id: 1, name: "item1", checked: false, contextId: 1 },
    { id: 2, name: "item2", checked: false, contextId: 1 },
    { id: 3, name: "item3", checked: false, contextId: 1 },
    { id: 4, name: "item4", checked: false, contextId: 1 },
    { id: 5, name: "item5", checked: false, contextId: 2 },
    { id: 6, name: "item6", checked: false, contextId: 2 },
    { id: 7, name: "item7", checked: false, contextId: 3 },
    { id: 8, name: "item8", checked: false, contextId: 4 },
    { id: 9, name: "item9", checked: false, contextId: 5 }
]

export function dimensionsReducer(state = [], action) {
    switch (action.type) {
        case SET_CHEACKED:
            const { id, isChecked } = action.payload;
            const updatedState = state.map(item => {
                if (item.id === id) {
                    item.checked = isChecked;
                }
                return item;
            })
            return updatedState
        case SET_ITEMS:
            {
                const { id, isChecked } = action.payload;
                if (isChecked) {
                    const newState = state.concat(
                        initialState.filter(item => item.contextId === id)
                    )
                    return newState
                } else {
                    return state.filter(item => item.contextId !== id);
                }
            }
        default:
            return state;
    }
}
