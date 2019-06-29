import { post } from '../../fetcher/fetcher'
import * as types from './actionTypes';

export default function addTask(text) {
    return (dispatch) => {
        return post('http://eisetasks.it/api/tasks', {
            text: text
        })
            .then(response => {
                dispatch({
                    type: types.CREATE_TASK_SUCCESS,
                    location: response.headers.get('Location'),
                    isList: false
                });
            })
            .catch(error => {
                dispatch({
                    type: types.CREATE_TASK_FAIL,
                    error: error
                });
            })
    }
}