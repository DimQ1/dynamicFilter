import {fetchContextPending, fetchContextSuccess, fetchContextError} from './context';

export default function fetchContext() {
    return dispatch => {
        dispatch(fetchContextPending());
        fetch('http://localhost:3001/contexts')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchContextSuccess(res));
        })
        .catch(error => {
            dispatch(fetchContextError(error));
        })
    }
}