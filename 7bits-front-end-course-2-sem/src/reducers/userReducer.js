import * as types from '../actions/user/actionTypes';

const initialState = {
    authorized: !!localStorage.getItem('jwt'),
    error: null,
    username: 'Johny'
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
        default: {
            return state;
        }
    }
}