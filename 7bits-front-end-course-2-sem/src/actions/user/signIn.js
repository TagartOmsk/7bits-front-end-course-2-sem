import { post } from '../../fetcher/fetcher'
import * as types from '../user/actionTypes';

export default function signIn(username, password) {

    const request = {
      username: username,
      password: password
    };

    return (dispatch) => {
        return post(`http://eisetasks.it/api/signin`, request)
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem('jwt', data.token);
                dispatch({
                    type: types.SIGN_IN_SUCCESS
                });
            })
            .catch(error => {
                dispatch({
                    type: types.SIGN_IN_FAIL,
                    error: error
                });
            })
    }
}