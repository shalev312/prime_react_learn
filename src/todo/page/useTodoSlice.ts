import { useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { getTodos } from './todoSliceSelector';
import { addTodo, changeTodo } from './todosSlice';

export const useTodo = () => {
  const [todoInput, setTodoInput] = useState('');
  const todos = useAppSelector(getTodos);
  const dispatch = useAppDispatch();

  const onInputChangeHandler = useCallback((value: string) => {
    setTodoInput(value);
  }, []);

  const addTodoHandler = useCallback(() => {
    if (todoInput) {
      dispatch(
        addTodo({
          id: todos.length + 1,
          completed: false,
          title: todoInput,
        })
      );
      setTodoInput('');
    }
  }, [dispatch, todos, todoInput]);

  const changeStateTodo = useCallback(
    (id: number) => {
      dispatch(changeTodo(id));
    },
    [dispatch]
  );

  return {
    todos,
    todoInput,
    addTodoHandler,
    changeStateTodo,
    onInputChangeHandler,
  };
};
