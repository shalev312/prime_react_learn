import { createReducer } from '@reduxjs/toolkit';
import { TODOS } from '../mock_data';
import { Todo } from '../todoTypes';
import { changeStateTodoAction } from './todosActions';

interface TodosState {
  todos: Todo[];
}

const defaultState: TodosState = {
  todos: TODOS,
};

const changeStateTodo = (
  state: TodosState,
  action: ReturnType<typeof changeStateTodoAction>
) => {
  const todoIndex = state.todos.findIndex((todo) => todo.id === action.payload);
  const todo = {
    ...state.todos[todoIndex],
    completed: !state.todos[todoIndex].completed,
  };
  const newTodos = [...state.todos];
  newTodos.splice(todoIndex, 1, todo);

  return {
    todos: newTodos,
  };
};

const todosReducer = createReducer(defaultState, (builder) =>
  builder.addCase(changeStateTodoAction, changeStateTodo)
);

export default todosReducer;
