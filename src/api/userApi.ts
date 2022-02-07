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

export interface User {
  id: number;
  username: string;
  email: string;
  website: string;
  position: string;
  company: string;
}
// Can to config a lot of utils to improve that constant code!
export const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: URLS.base,
  }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getAllUsers: builder.query<User[], void>({
      query: () => URLS.user.getAll,
      transformResponse: (users: UserData[]) => {
        console.log(users);

        return users?.map((user) => ({
          id: user.id,
          username: user.username,
          email: user.email,
          website: user.website,
          position: user.company.bs,
          company: user.company.name,
        }));
      },
      providesTags: [{ type: 'Users', id: 'LIST' }],
    }),
  }),
});

const { useGetAllUsersQuery } = usersApi;

const userApi = {
  getAll: useGetAllUsersQuery,
};

export default userApi;
