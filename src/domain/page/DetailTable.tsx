import React from 'react';
import Loading from '../../share/UIElements/Loading';
import Table from '../components/Table';
import { columns } from '../components/DetailColumns';
import API from '../../api/API';

export interface User {
  id: number;
  username: string;
  email: string;
  website: string;
  position: string;
  company: string;
}

const DetailTable = () => {
  const { data: users, isLoading, isSuccess } = API.user.getAll();
  return (
    <>
      {isLoading && <Loading />}
      {isSuccess && (
        <Table
          data={users?.map((user) => ({
            id: user.id,
            username: user.username,
            email: user.email,
            website: user.website,
            position: user.company.bs,
            company: user.company.name,
          }))}
          columns={columns}
          header="Details"
        />
      )}
    </>
  );
};

export default DetailTable;
