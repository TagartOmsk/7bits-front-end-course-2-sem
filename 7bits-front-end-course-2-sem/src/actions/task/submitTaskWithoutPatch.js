import * as types from './actionTypes';

export default function submitTask() {
    return (dispatch) => {
        dispatch({
            type: types.SUBMIT_TASK,
            isList: true,
            isEditing: false,
            id: '',
            editText: ''
        });
    }
}