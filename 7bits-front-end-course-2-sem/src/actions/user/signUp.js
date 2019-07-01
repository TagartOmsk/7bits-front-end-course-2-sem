import { post } from '../../fetcher/fetcher'
import * as types from '../user/actionTypes';

export default function signUp(username, password) {

    const request = {
        username: username,
        password: password
    };

    return (dispatch) => {
        return post(`http://eisetasks.it/api/signup`, request)
            .then(() => {
                dispatch({
                   type: types.SIGN_UP_SUCCESS,
                   error: null
                });
            })
            .catch(error => {
                dispatch({
                        type: types.SIGN_UP_FAIL,
                        error: error
                    });

            })
    }
}