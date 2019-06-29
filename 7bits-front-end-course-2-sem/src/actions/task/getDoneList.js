import { get } from '../../fetcher/fetcher';

import * as types from '../task/actionTypes';

export default function getDoneList() {
    return (dispatch) => {
        return get('http://eisetasks.it/api/tasks?status=done')
            .then(response => {
                dispatch({
                    type: types.GET_DONE_LIST_SUCCESS,
                    taskList: response ? (response.tasks || []) : response,
                    isList: true
                });
            })
            .catch(error => {
                dispatch({
                    type: types.GET_DONE_LIST_ERROR,
                    error: error
                });
            })
    }
}