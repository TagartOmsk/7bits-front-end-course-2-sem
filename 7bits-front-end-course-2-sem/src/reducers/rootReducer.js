import { combineReducers } from "redux";

import doneListReducer from '../reducers/doneListReducer'
import todoListReducer from '../reducers/todoListReducer'

export default (state = {}, action) => {
    return combineReducers({
        todoListReducer,
        doneListReducer
    })(state, action);
}