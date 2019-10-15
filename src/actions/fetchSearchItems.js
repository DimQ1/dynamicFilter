import { fetchSearchItemsPending, addItems, fetchSearchError } from './searchItems';

export default function fetchSearchItems(denemsionId) {
    return dispatch => {
        const url = new URL('http://localhost:3001/dimensionsItems');
        if (denemsionId) {
            const searchParams = new URLSearchParams(url.search);
            searchParams.append('dimensionId', denemsionId)
            url.search = searchParams;
        }
        dispatch(fetchSearchItemsPending());
        fetch(url.toString())
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(addItems(res));
            })
            .catch(error => {
                dispatch(fetchSearchError(error));
            })
    }
}