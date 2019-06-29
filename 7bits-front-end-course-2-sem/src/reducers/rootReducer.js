import { combineReducers } from "redux";

import userReducer from '../reducers/userReducer'
import doneListReducer from '../reducers/doneListReducer'
import todoListReducer from '../reducers/todoListReducer'

export default (state = {}, action) => {
    return combineReducers({
        todoListReducer,
        doneListReducer,
        userReducer
    })(state, action);
}