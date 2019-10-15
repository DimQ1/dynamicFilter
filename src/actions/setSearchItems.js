import fetchSearchItems from './fetchSearchItems';
import { removeItems } from './searchItems';

export function addSearchItems(dimensionId) {
    return dispatch => dispatch(fetchSearchItems(dimensionId));
}

export function removeSearchItems(dimensionId) {
    return dispatch => dispatch(removeItems(dimensionId));
}

export function removeSearchItemsByIds(dimensionIds) {
    return dispatch => 
    {
        dimensionIds.forEach(id => {
            dispatch(removeItems(id));
        });
    }
}