import {ADD_TODO, REMOVE_TODO} from './actionType';
export const AddTodo = payload => (
    {type: ADD_TODO, payload}
    );

export const RemoveTodo = payload => (
        {type: REMOVE_TODO, payload}
    );