import { fetchDimensionsPending, addItems, fetchDimensionsError } from './dimensions';

const cachedState = [];

function filterDimensions(dimensionsItems, contextId) {
    const filteredItems = dimensionsItems.filter(item => contextId === item.contextId);
    filteredItems.forEach(item => item.checked = false);
    return filteredItems;
}

export default function fetchDimensions(contextid) {
    return dispatch => {
        if (cachedState.length) {
            const filteredItems = filterDimensions(cachedState, contextid);
            dispatch(addItems(filteredItems));
        } else {
            dispatch(fetchDimensionsPending());
            fetch('http://localhost:3001/dimensions')
                .then(res => res.json())
                .then(res => {
                    if (res.error) {
                        throw (res.error);
                    }
                    cachedState.push(...res);
                    const filteredItems = filterDimensions(cachedState, contextid);
                    dispatch(addItems(filteredItems));
                })
                .catch(error => {
                    dispatch(fetchDimensionsError(error));
                })
        }
    }
}