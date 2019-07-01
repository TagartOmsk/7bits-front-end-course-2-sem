import * as types from '../actions/task/actionTypes';

const initialState = {
    location: null,
    list: [],
    error: null,
    isList: false,
    id: '',
    isEditing: false,
    editText: ''
};

export default (state = initialState, action) => {
    switch(action.type) {
        case types.GET_TODO_LIST_SUCCESS: {
            return {
                ...state,
                isList: action.isList,
                list: action.list,
                error: null
            }
        }
        case types.GET_TODO_LIST_ERROR: {
            return {
                ...state,
                list: [],
                error: action.error
            }
        }
        case types.CREATE_TASK_FAIL: {
            return {
                ...state,
                error: action.error
            }
        }
        case types.CREATE_TASK_SUCCESS: {
            return {
                ...state,
                isList: action.isList,
                location: action.location,
                error: null
            }
        }
        case types.DELETE_TASK_SUCCESS: {
            return {
                ...state,
                isList: action.isList,
                error: null
            }
        }
        case types.DELETE_TASK_FAIL: {
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
        case types.EDIT_TASK: {
            return {
                ...state,
                isEditing: action.isEditing,
                id: action.id,
                editText: action.editText,
                isList: action.isList
            }
        }
        case types.SUBMIT_TASK: {
            return {
                ...state,
                isEditing: action.isEditing,
                id: action.id,
                editText: action.editText,
                isList: action.isList
            }
        }
        case types.SUBMIT_TASK_FAIL: {
            return {
                ...state,
                error: action.error,
                isList: action.isList,
                isEditing: action.isEditing
            }
        }
        case types.CLEAR_CACHE: {
            return {
                ...state,
                id: action.id,
                isEditing: action.isEditing
            }
        }
        default: {
            return state;
        }
    }
}