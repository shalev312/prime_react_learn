import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TODOS } from '../mock_data';
import { Todo } from '../todoTypes';

interface TodosState {
  todos: Todo[];
}

const defaultState: TodosState = {
  todos: TODOS,
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState: defaultState,
  reducers: {
    changeTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { changeTodo } = todosSlice.actions;
