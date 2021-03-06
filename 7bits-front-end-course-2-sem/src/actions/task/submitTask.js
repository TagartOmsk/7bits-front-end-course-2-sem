import * as types from './actionTypes';
import { patch } from "../../fetcher/fetcher";

export default function submitTask(id, value) {
    return (dispatch) => {
        return patch(`http://eisetasks.it/api/tasks/${id}`, {
            text: value
        })
            .then(() => {
                dispatch({
                    type: types.SUBMIT_TASK,
                    isEditing: false,
                    id: id,
                    editText: '',
                    isList: true
                });
            })
            .catch(error => {
                dispatch({
                    type: types.SUBMIT_TASK_FAIL,
                    error: error,
                    isList: false,
                    isEditing: false,
                    text: value
                });
            })
    };
}