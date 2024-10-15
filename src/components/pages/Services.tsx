import React, { useState } from 'react';
import SubHeader from '../organisms/UserSubHeader';
import {
  useDeleteServiceMutation,
  useGetAllServicesQuery,
} from '../../redux/slice/serviceSlice';
import { PaginationType, ResponseData } from '../../data/types';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { showToast } from '../../utils/toast';
import { ErrorMessage } from '../../utils/error';
import ConfrimModel from '../atoms/confirmModel';
import CustomPagination from '../atoms/pagination';
import ServicesTable from '../organisms/ServicesTable';
import Loader from '../atoms/loader';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const nevigate = useNavigate();
  const [search, setSearch] = useState<string>('');

  const [userId, setUserId] = useState<number | null>(null);
  const [isDeleteModel, setIsDeleteModel] = useState<boolean>(false);

  const [pagination, setPagination] = useState<PaginationType>({
    page: 1,
    pageSize: 10,
  });

  const [deleteData, { isLoading: deleteLoading }] = useDeleteServiceMutation();

  const {
    data: allData,
    isLoading,
    isFetching,
  } = useGetAllServicesQuery({
    search,
  });

  const data = allData?.data?.docs;

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
      } = await deleteData(userId);

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
      <SubHeader
        title="Services"
        search={search}
        setSearch={setSearch}
        isRightAction
        isRightSection={false}
        onRightActionClick={() => nevigate('/services/upsert')}
        onRightActionText="Create Services"
      />

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
          <ServicesTable
            data={data as []}
            onEdit={data => {
              nevigate(`/services/upsert?id=${data._id}`);
            }}
            onDelete={onDeleteModel}
            onView={data => {
              window.open(`https://doctor-panel-taupe.vercel.app/services/${data._id}`);
            }}
          />

          {allData?.data?.totalDocs > 0 && (
            <CustomPagination
              defaultPage={pagination.page}
              pageSize={pagination.pageSize}
              totalCount={allData?.data?.totalDocs}
              onChange={(page: number) => handlePagiantion(page)}
            />
          )}
        </>
      )}
    </>
  );
};

export default Services;
