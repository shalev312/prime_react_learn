import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { getTodos } from './todoSliceSelector';
import { changeTodo } from './todosSlice';

export const useTodo = () => {
  const todos = useAppSelector(getTodos);
  const dispatch = useAppDispatch();

  const changeStateTodo = useCallback(
    (id: number) => {
      dispatch(changeTodo(id));
    },
    [dispatch]
  );

  return {
    todos,
    changeStateTodo,
  };
};
