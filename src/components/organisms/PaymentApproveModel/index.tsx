/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Model from '../../atoms/model';
import { Button } from 'antd';
import { useUpdateReservationMutation } from '../../../redux/slice/reservationSlice';
import { showToast } from '../../../utils/toast';

const PaymentModel = ({
  open,
  handleClose,
  data,
}: {
  open: boolean;
  handleClose: () => void;
  data: any;
}) => {
  const [uploadPayment, { isLoading: paymentLoading }] = useUpdateReservationMutation();

  const handleApprove = async () => {
    try {
      const payload = {
        status: 'booked',
        fees: data?.fees,
      };

      await uploadPayment({
        id: data?._id,
        data: payload,
      });

      showToast({
        type: 'success',
        message: 'Payment Approved Successfully',
      });
    } catch (error) {
      console.error(error);
    } finally {
      handleClose();
    }
  };

  const handleReject = async () => {
    try {
      const payload = {
        status: 'cancelled',
        fees: data?.fees,
      };

      await uploadPayment({
        id: data?._id,
        data: payload,
      });

      showToast({
        type: 'success',
        message: 'Payment Rejected Successfully',
      });
    } catch (error) {
      console.error(error);
    } finally {
      handleClose();
    }
  };

  return (
    <Model title="Payment" open={open} handleClose={handleClose} closeIcon width={500}>
      <div className="p-3">
        <img src={data?.paymentImage?.url} alt="" width="100%" height={400} />
      </div>

      {data?.status === 'reserved' && (
        <div className="flex items-center justify-between gap-3 pb-3 pt-5">
          <Button
            type="primary"
            className="px-8"
            danger
            onClick={handleReject}
            size="middle"
            disabled={paymentLoading}
          >
            Reject
          </Button>

          <Button
            type="primary"
            className="px-8"
            onClick={handleApprove}
            size="middle"
            disabled={paymentLoading}
            loading={paymentLoading}
          >
            Approve
          </Button>
        </div>
      )}
    </Model>
  );
};

export default PaymentModel;
