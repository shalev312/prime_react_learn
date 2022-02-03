import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import URLS from './urls';

export interface UserData {
  id: number;
  username: string;
  email: string;
  address: {
    city: string;
  };
  website: string;
  company: {
    name: string;
    bs: string;
  };
}
// Can to config a lot of utils to improve that constant code!
export const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: URLS.base,
  }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getAllUsers: builder.query<UserData[], void>({
      query: () => URLS.user.getAll,
      providesTags: [{ type: 'Users', id: 'LIST' }],
    }),
  }),
});

const { useGetAllUsersQuery } = usersApi;

const userApi = {
  getAll: useGetAllUsersQuery,
};

export default userApi;
