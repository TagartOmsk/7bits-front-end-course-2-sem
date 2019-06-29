import * as types from './actionTypes';

export default function clearCache() {
    return (dispatch) => {
        dispatch({
            type: types.CLEAR_CACHE,
            id: '',
            isEditing: false
        });
    }
}