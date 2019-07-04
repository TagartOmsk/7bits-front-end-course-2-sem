import * as types from '../user/actionTypes';

export default function flush() {

    return (dispatch) => {
        return dispatch({
            type: types.FLUSH_ERROR,
            error: null
        });
    }
}