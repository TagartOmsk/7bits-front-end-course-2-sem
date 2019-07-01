import * as types from '../actions/user/actionTypes';

const initialState = {
    authorized: !!localStorage.getItem('jwt'),
    error: null,
    username: 'Johny',
    signedUp: false
};

export default (state = initialState, action) => {
    switch(action.type) {
        case types.SIGN_IN_FAIL: {
            return {
                ...state,
                authorized: false,
                error: action.error
            }
        }
        case types.SIGN_IN_SUCCESS: {
            return {
                ...state,
                authorized: true,
                error: null
            }
        }
        case types.AUTHENTICATE_FAIL: {
            return {
                ...state,
                authorized: false,
                error: action.error
            }
        }
        case types.WHOAMI_SUCCESS: {
            return {
                ...state,
                username: action.username,
                error: null
            }
        }
        case types.SIGN_UP_SUCCESS: {
            return {
                ...state,
                error: null,
                signedUp: true
            }
        }
        case types.SIGN_UP_FAIL: {
            return {
                ...state,
                error: action.error
            }
        }
        case types.SIGN_IN_REDIRECT: {
            return {
                ...state,
                signedUp: false
            }
        }
        default: {
            return state;
        }
    }
}