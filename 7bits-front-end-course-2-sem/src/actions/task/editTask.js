import * as types from './actionTypes';

export default function editTask(id, text) {
    return (dispatch) => {
        dispatch({
            type: types.EDIT_TASK,
            isEditing: true,
            id: id,
            editText: text
        });
    }
}