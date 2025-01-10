import React, { useState } from 'react';

// Redux
import {
  useDeleteUserMutation,
  useGetAllComplainQuery,
} from '../../redux/slice/userSlice';

// Components
import SubHeader from '../organisms/UserSubHeader';
import ConfrimModel from '../atoms/confirmModel';
import Loader from '../atoms/loader';

// Types
import { ResponseData } from '../../data/types';

// Redux
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

// Utils
import { showToast } from '../../utils/toast';
import { ErrorMessage } from '../../utils/error';
import ComplainTable from '../organisms/DoctorTable';

const Complaint = () => {
  const [isDeleteModel, setIsDeleteModel] = useState<boolean>(false);

  const [deleteUser, { isLoading: deleteLoading }] = useDeleteUserMutation();

  const { data: allComplainData, isLoading, isFetching } = useGetAllComplainQuery({});

  const data = allComplainData?.data;

  const onDelete = async () => {
    try {
      const res: {
        data?: ResponseData;
        error?: FetchBaseQueryError | SerializedError;
      } = await deleteUser(3);

      if (res?.data) {
        showToast({
          type: 'success',
          message: res?.data?.message,
        });
      } else {
        ErrorMessage(res.error as { data?: { message?: string } } | undefined);
      }
    } catch (error) {
      console.error('error', error);
    } finally {
      setIsDeleteModel(false);
    }
  };

  return (
    <>
      <SubHeader title="Complaint" />

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
          <ComplainTable data={data as []} />
        </>
      )}
    </>
  );
};

export default Complaint;
