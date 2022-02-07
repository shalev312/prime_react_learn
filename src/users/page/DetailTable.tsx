import React from 'react';
import Loading from '../../share/UIElements/Loading/Loading';
import Table from '../components/Table';
import { columns } from '../components/DetailColumns';
import API from '../../api/API';

const DetailTable = () => {
  const { data: users, isLoading, isSuccess } = API.user.getAll();
  return (
    <>
      {isLoading && <Loading />}
      {isSuccess && <Table data={users} columns={columns} header="Details" />}
    </>
  );
};

export default DetailTable;
