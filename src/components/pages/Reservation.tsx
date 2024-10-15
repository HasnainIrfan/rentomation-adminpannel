/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import SubHeader from '../organisms/UserSubHeader';
import { PaginationType } from '../../data/types';
import { useGetAllReservationsQuery } from '../../redux/slice/reservationSlice';
import Loader from '../atoms/loader';
import ReservationTable from '../organisms/ReservationTable';
import CustomPagination from '../atoms/pagination';
import PaymentModel from '../organisms/PaymentApproveModel';
import ReservationDrawer from '../organisms/ReservationDrawer';

const Reservation = () => {
  const [search, setSearch] = useState<string>('');
  const [isStatus, setIsStatus] = useState<boolean | null>(null);
  const [isDrawer, setIsDrawer] = useState<boolean>(false);
  const [isDrawerData, setIsDrawerData] = useState<any | null>(null);
  const [paymentModel, setPaymentModel] = useState<boolean>(false);

  const [pagination, setPagination] = useState<PaginationType>({
    page: 1,
    pageSize: 10,
  });

  const {
    data: reservationData,
    isLoading,
    isFetching,
  } = useGetAllReservationsQuery({
    search,
    status: isStatus,
    page: pagination.page,
    limit: pagination.pageSize,
  });

  const data = reservationData?.data?.docs;

  const handlePagiantion = (page: number) => {
    setPagination({ ...pagination, page });
  };

  return (
    <>
      <SubHeader
        title="Reservations"
        search={search}
        setSearch={setSearch}
        isStatus={isStatus}
        setIsStatus={setIsStatus}
      />

      <PaymentModel
        data={isDrawerData}
        open={paymentModel}
        handleClose={() => setPaymentModel(false)}
      />

      <ReservationDrawer data={isDrawerData} open={isDrawer} setOpen={setIsDrawer} />

      {isLoading || isFetching ? (
        <Loader />
      ) : (
        <>
          <ReservationTable
            data={data as []}
            onPayment={data => {
              setIsDrawerData(data);
              setPaymentModel(true);
            }}
            onView={data => {
              setIsDrawerData(data);
              setIsDrawer(true);
            }}
          />

          {reservationData?.data?.totalDocs > 0 && (
            <CustomPagination
              defaultPage={pagination.page}
              pageSize={pagination.pageSize}
              totalCount={reservationData?.data?.totalDocs}
              onChange={(page: number) => handlePagiantion(page)}
            />
          )}
        </>
      )}
    </>
  );
};

export default Reservation;
