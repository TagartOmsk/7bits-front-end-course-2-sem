import { get } from '../../fetcher/fetcher';

import * as types from './actionTypes';

export default function whoami() {
    return (dispatch) => {
        return get('http://eisetasks.it/api/whoami')
            .then(response => {
                console.log(response);
                dispatch({
                    type: types.WHOAMI_SUCCESS,
                    username: response.username
                });
            })
            .catch(error => {
               localStorage.removeItem('jwt');
               dispatch({
                   type: types.AUTHENTICATE_FAIL,
                   error: error
               });
            });
    }
}