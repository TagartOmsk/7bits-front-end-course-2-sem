import { deleteRequest } from '../../fetcher/fetcher'
import * as types from './actionTypes';

export default function deleteDoneTask(id) {
    return (dispatch) => {
        return deleteRequest(`http://eisetasks.it/api/tasks/${id}`)
            .then(() => {
                dispatch({
                    type: types.DELETE_DONE_SUCCESS,
                    isList: false
                });
            })
            .catch(error => {
                dispatch({
                    type: types.DELETE_DONE_FAIL,
                    error: error
                });
            })
    }
}