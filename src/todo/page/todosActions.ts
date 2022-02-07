import { createAction } from '@reduxjs/toolkit';
import { Todo } from '../todoTypes';

export const changeStateTodoAction = createAction<number>('CHANGE_TODO_STATE');
export const addTodoAction = createAction<Todo>('ADD_TODO_STATE');
