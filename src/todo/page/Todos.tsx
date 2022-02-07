import React from 'react';
import Button from '../../share/UIElements/Button/Button';
import Input from '../../share/UIElements/Input/Input';
import Todo from './Todo';
import { useTodo } from './useTodoSlice';
// import { useTodo } from './useTodoReducer';

const Todos = () => {
  const {
    todos,
    todoInput,
    addTodoHandler,
    changeStateTodo,
    onInputChangeHandler,
  } = useTodo();

  if (!todos || todos.length === 0) {
    return <h3>The list is empty</h3>;
  }
  return (
    <div className="flex flex-column align-items-center">
      <ul className="list-none mb-5">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onClick={changeStateTodo}
          />
        ))}
      </ul>
      <div className="flex align-items-center">
        <Input
          placeholder="Type a todo item..."
          value={todoInput}
          onChange={onInputChangeHandler}
        />
        <Button
          label="Add Todo"
          className="p-button-warning ml-4"
          onClick={addTodoHandler}
        />
      </div>
    </div>
  );
};

export default Todos;
