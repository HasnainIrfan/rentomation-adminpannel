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

  console.log(data, 'datadata');

  const handleApprove = async () => {
    try {
      const payload = {
        status: 'verified',
      };

      const res = await uploadPayment({
        id: data?._id,
        data: payload,
      });

      console.log(res, 'resres');

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
        status: 'unverified',
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
    <Model
      title="Property Verification"
      open={open}
      handleClose={handleClose}
      closeIcon
      width={500}
    >
      <div className="p-3">
        {/* <Text containerTag="h6" className="text-xl font-semibold text-center mb-3">
          {data?.status === 'verified' ? 'Verify Property' : 'Reject Property'}
        </Text> */}
        <p
          style={{
            fontSize: '18px',
          }}
        >
          {data?.description}
        </p>
      </div>

      <div className="flex items-center justify-between gap-3 pb-3 pt-5">
        <Button
          type="primary"
          className="px-8"
          danger
          onClick={handleReject}
          size="middle"
          disabled={paymentLoading}
        >
          Reject Property
        </Button>

        <Button
          type="primary"
          className="px-8"
          onClick={handleApprove}
          size="middle"
          disabled={paymentLoading}
          loading={paymentLoading}
        >
          Approve Property
        </Button>
      </div>
    </Model>
  );
};

export default PaymentModel;
