import { patch } from '../../fetcher/fetcher';

import * as types from '../task/actionTypes';

export default function markTaskDone(id) {
    return (dispatch) => {
        return patch(`http://eisetasks.it/api/tasks/${id}`, {"status" : "done"})
            .then(() => {
                dispatch({
                    type: types.MARK_TASK_DONE_SUCCESS,
                    isList: false
                });
            })
            .catch(error => {
                dispatch({
                    type: types.MARK_TASK_DONE_FAIL,
                    error: error
                });
            })
    }
}