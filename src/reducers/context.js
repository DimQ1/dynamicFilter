import { SET_CHEACKED } from '../actions/context'

const initialState =
    [
        { id: 1, name: "item1", checked: false },
        { id: 2, name: "item2", checked: false },
        { id: 3, name: "item3", checked: false },
        { id: 4, name: "item4", checked: false },
        { id: 5, name: "item5", checked: false },
    ]


export function contextReducer(state = initialState, action) {
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
        default:
            return state
    }
}
