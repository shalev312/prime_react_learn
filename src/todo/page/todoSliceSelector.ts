import { RootState } from '../../app/store';

export const getTodos = (state: RootState) => state.todosSlice.todos;
