import { deleteRequest } from '../../fetcher/fetcher'
import * as types from './actionTypes';

export default function deleteTask(id) {
    return (dispatch) => {
        return deleteRequest(`http://eisetasks.it/api/tasks/${id}`)
            .then(() => {
                dispatch({
                    type: types.DELETE_TASK_SUCCESS,
                    isList: false
                });
            })
            .catch(error => {
                dispatch({
                    type: types.DELETE_TASK_FAIL,
                    error: error
                });
            })
    }
}