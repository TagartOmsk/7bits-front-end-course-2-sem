import * as types from '../actions/task/actionTypes';

const initialState = {
    taskList: [],
    error: null,
    isList: false
};

export default (state = initialState, action) => {
    switch(action.type) {
        case types.GET_DONE_LIST_SUCCESS: {
            return {
                ...state,
                taskList: action.taskList,
                error: null,
                isList: action.isList
            }
        }
        case types.GET_DONE_LIST_ERROR: {
            return {
                ...state,
                taskList: [],
                error: action.error
            }
        }
        case types.DELETE_DONE_SUCCESS: {
            return {
                ...state,
                error: null,
                isList: action.isList
            }
        }
        case types.DELETE_DONE_FAIL: {
            return {
                ...state,
                error: action.error
            }
        }
        case types.MARK_TASK_DONE_SUCCESS: {
            return {
                ...state,
                isList: action.isList
            }
        }
        default: {
            return state;
        }
    }
}