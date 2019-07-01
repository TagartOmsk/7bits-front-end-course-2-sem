import * as types from '../user/actionTypes';

export default function signInRedirect() {

    return (dispatch) => {
        return dispatch({
            type: types.SIGN_IN_REDIRECT,
            signedUp: false
        });
    }
}