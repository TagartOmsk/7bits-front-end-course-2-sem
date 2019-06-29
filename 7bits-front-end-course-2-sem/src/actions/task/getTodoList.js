import { get } from '../../fetcher/fetcher';

import * as types from '../task/actionTypes';

export default function getTodoList() {
    return (dispatch) => {
        return get('http://eisetasks.it/api/tasks')
            .then(response => {
                dispatch({
                    type: types.GET_TODO_LIST_SUCCESS,
                    list: response ? (response.tasks || []) : response,
                    isList: true
                });
            })
            .catch(error => {
                dispatch({
                    type: types.GET_TODO_LIST_ERROR,
                    error: error
                });
            })
    }
}