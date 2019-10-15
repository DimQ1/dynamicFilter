export const extFilterActions = {
    SELECT_ITEM : 'EXT_FILTER_SELECT_ITEM'
}

export function selectItem(id){
    return {
        type: extFilterActions.SELECT_ITEM,
        payload: id
    }
}