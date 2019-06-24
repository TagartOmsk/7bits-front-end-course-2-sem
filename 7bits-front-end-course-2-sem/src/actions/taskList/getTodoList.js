import { get } from '../../fetcher/fetcher';

import * as types from './actionTypes';

export default function getTodoList() {
    return (dispatch) => {
        return get('mockapi/getTodoList.json')
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