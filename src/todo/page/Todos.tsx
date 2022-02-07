import React from 'react';
import Todo from './Todo';
import { useTodo } from './useTodoSlice';
// import { useTodo } from './useTodoReducer';

const Todos = () => {
  const { todos, changeStateTodo } = useTodo();

  if (!todos || todos.length === 0) {
    return <h3>The list is empty</h3>;
  }
  return (
    <>
      <ul className="list-none">
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
    </>
  );
};

export default Todos;
