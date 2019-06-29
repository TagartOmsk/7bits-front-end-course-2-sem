import * as types from './actionTypes';

export default function submitTask() {
    return (dispatch) => {
        dispatch({
            type: types.SUBMIT_TASK,
            isEditing: false,
            id: '',
            editText: ''
        });
    }
}