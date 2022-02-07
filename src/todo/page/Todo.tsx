import React, { useCallback } from 'react';
import { Todo } from '../todoTypes';

interface Props extends Todo {
  onClick: (id: number) => void;
}

const TodoItem = ({ id, title, completed, onClick }: Props) => {
  const onTodoHandler = useCallback(() => {
    onClick(id);
  }, [id, onClick]);

  return (
    <li
      className={`border-1 border-solid border-orange-300 mt-3 p-2 text-xl cursor-pointer ${
        completed && 'line-through'
      }`}
      onClick={onTodoHandler}
    >
      {title}
    </li>
  );
};

export default TodoItem;
