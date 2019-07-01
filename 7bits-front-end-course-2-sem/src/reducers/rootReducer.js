import { combineReducers } from "redux";
import { i18nReducer } from 'react-redux-i18n';

import userReducer from '../reducers/userReducer'
import doneListReducer from '../reducers/doneListReducer'
import todoListReducer from '../reducers/todoListReducer'

export default (state = {}, action) => {
    return combineReducers({
        todoListReducer,
        doneListReducer,
        userReducer,
        i18n: i18nReducer
    })(state, action);
}