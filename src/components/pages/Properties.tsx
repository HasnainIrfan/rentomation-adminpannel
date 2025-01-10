/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';

// Redux
import {
  useDelelePropertiesMutation,
  useGetAllDoctorsQuery,
} from '../../redux/slice/userSlice';

// Components
import SubHeader from '../organisms/UserSubHeader';
import ConfrimModel from '../atoms/confirmModel';
import CustomPagination from '../atoms/pagination';
import Loader from '../atoms/loader';

// Types
import { DoctorDataType } from '../../types/userTypes';
import { PaginationType, ResponseData } from '../../data/types';

// Redux
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

// Utils
import { showToast } from '../../utils/toast';
import { ErrorMessage } from '../../utils/error';
import ComplainTable from '../organisms/ComplainTable';

const Properties = () => {
  const [userId, setUserId] = useState<number | null>(null);
  const [isDeleteModel, setIsDeleteModel] = useState<boolean>(false);
  const [isVerify, setIsVerify] = useState<boolean | null>(null);
  const [newData, setNewData] = useState<DoctorDataType | null>(null);

  const [pagination, setPagination] = useState<PaginationType>({
    page: 1,
    pageSize: 10,
  });

  const [deleteProperties, { isLoading: deleteLoading }] = useDelelePropertiesMutation();

  const { data: userData, isLoading, isFetching } = useGetAllDoctorsQuery({});

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
      } = await deleteProperties(userId);

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

  useEffect(() => {
    const fomatedData = isVerify
      ? data?.filter((item: DoctorDataType) => item.status === 'verified')
      : data?.filter((item: DoctorDataType) => item.status !== 'verified');

    if (isVerify === null || isVerify === undefined) {
      setNewData(data);
    } else {
      setNewData(fomatedData);
    }
  }, [isVerify, !isVerify, data]);

  console.log(isVerify, 'isVerifyisVerify');

  return (
    <>
      <SubHeader title="Properties" isVerify={isVerify} setIsVerify={setIsVerify} />

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
          <ComplainTable data={newData as any} onDelete={onDeleteModel} />

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

export default Properties;
