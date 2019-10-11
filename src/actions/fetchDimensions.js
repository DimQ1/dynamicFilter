import { fetchDimensionsPending, fetchDimensionsSuccess, fetchDimensionsError} from './dimensions';

export default function fetchDimensions() {
    return dispatch => {
        dispatch(fetchDimensionsPending());
        fetch('http://localhost:3001/dimensions')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchDimensionsSuccess(res));
            return res;
        })
        .catch(error => {
            dispatch(fetchDimensionsError(error));
        })
    }
}