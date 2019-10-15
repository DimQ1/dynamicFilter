export const orderActions = {
    SELECT_ITEM : 'ORDER_SELECT_ITEM'
}

export function selectItem(id){
    return {
        type: orderActions.SELECT_ITEM,
        payload: id
    }
}