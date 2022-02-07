import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { changeStateTodoAction } from './todosActions';
import { getTodos } from './todoReducerSelector';

export const useTodo = () => {
  const todos = useAppSelector(getTodos);
  const dispatch = useAppDispatch();

  const changeStateTodo = useCallback(
    (id: number) => {
      dispatch(changeStateTodoAction(id));
    },
    [dispatch]
  );

  return {
    todos,
    changeStateTodo,
  };
};
