import { createAction } from '@reduxjs/toolkit';

export const changeStateTodoAction = createAction<number>('CHANGE_TODO_STATE');
