import { createReducer } from '@reduxjs/toolkit';
import { TODOS } from '../mock_data';
import { Todo } from '../todoTypes';
import { addTodoAction, changeStateTodoAction } from './todosActions';

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
    ...state,
    todos: newTodos,
  };
};

const addTodo = (
  state: TodosState,
  action: ReturnType<typeof addTodoAction>
) => ({
  ...state,
  todos: [...state.todos, action.payload],
});

const todosReducer = createReducer(defaultState, (builder) =>
  builder
    .addCase(changeStateTodoAction, changeStateTodo)
    .addCase(addTodoAction, addTodo)
);

export default todosReducer;
