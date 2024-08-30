import React, { useState } from 'react';

// Redux
import { useDeleteUserMutation, useGetAllUsersQuery } from '../../redux/slice/userSlice';

// Components
import UserTable from '../organisms/UserTable';
import UserDrawer from '../organisms/UserDrawer';
import SubHeader from '../organisms/UserSubHeader';
import ConfrimModel from '../atoms/confirmModel';
import UserEditDrawer from '../organisms/UserEditDrawer';
import CustomPagination from '../atoms/pagination';
import Loader from '../atoms/loader';

// Types
import { UserData } from '../../types/userTypes';
import { PaginationType, ResponseData } from '../../data/types';

// Redux
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

const User = () => {
  const [search, setSearch] = useState<string>('');
  const [isDrawer, setIsDrawer] = useState<boolean>(false);
  const [userId, setUserId] = useState<number | null>(null);
  const [isDeleteModel, setIsDeleteModel] = useState<boolean>(false);
  const [isDrawerData, setIsDrawerData] = useState<UserData | null>(null);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isVerify, setIsVerify] = useState<boolean | null>(null);

  const [pagination, setPagination] = useState<PaginationType>({
    page: 1,
    pageSize: 10,
  });

  // Delete User
  const [deleteUser, { isLoading: deleteLoading }] = useDeleteUserMutation();

  const { data: userData, isLoading, isFetching } = useGetAllUsersQuery(isVerify);
  const data = userData?.data?.docs;

  const onDeleteModel = (id: number) => {
    setUserId(id);
    setIsDeleteModel(!isDeleteModel);
  };

  const handlePagiantion = (page: number) => {
    setPagination({ ...pagination, page });
  };

  const onDelete = async () => {
    try {
      const res: {
        data?: ResponseData;
        error?: FetchBaseQueryError | SerializedError;
      } = await deleteUser(userId);

      console.log(res, 'res123');

      // if (res?.data) {
      //   toast.success(res?.data?.message);
      // } else {
      //   ErrorMessage(res.error as { data?: { message?: string } } | undefined);
      // }
    } catch (error) {
      console.error('error', error);
    } finally {
      setIsDeleteModel(false);
    }
  };

  return (
    <>
      <SubHeader
        title="Users"
        search={search}
        setSearch={setSearch}
        isVerify={isVerify}
        setIsVerify={setIsVerify}
      />

      <UserDrawer open={isDrawer} setOpen={setIsDrawer} data={isDrawerData as UserData} />
      <UserEditDrawer open={isEdit} setOpen={setIsEdit} data={isDrawerData as UserData} />

      {/* Delete Confrim Model */}
      <ConfrimModel
        open={isDeleteModel}
        setOpen={setIsDeleteModel}
        onDelete={onDelete}
        loading={deleteLoading}
      />

      {isLoading || isFetching ? (
        <Loader />
      ) : (
        <>
          <UserTable
            data={data as []}
            onEdit={data => {
              setIsDrawerData(data);
              setIsEdit(true);
            }}
            onDelete={onDeleteModel}
            onView={data => {
              setIsDrawerData(data);
              setIsDrawer(true);
            }}
          />

          {userData?.data?.totalDocs > 0 && (
            <CustomPagination
              defaultPage={pagination.page}
              pageSize={pagination.pageSize}
              totalCount={userData?.data?.totalDocs}
              onChange={(page: number) => handlePagiantion(page)}
            />
          )}
        </>
      )}
    </>
  );
};

export default User;
