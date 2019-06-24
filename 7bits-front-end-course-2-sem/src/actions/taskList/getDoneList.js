import { get } from '../../fetcher/fetcher';

import * as types from './actionTypes';

export default function getDoneList() {
    return (dispatch) => {
        return get('mockapi/getDoneList.json')
            .then(response => {
                dispatch({
                    type: types.GET_TASK_LIST_SUCCESS,
                    taskList: response.data
                });
            })
            .catch(error => {
                dispatch({
                    type: types.GET_TASK_LIST_ERROR,
                    error: error
                });
            })
    }
}