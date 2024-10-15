/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

// Types
import { DoctorDataType } from '../../../types/userTypes';
import type { ColumnsType } from 'antd/es/table';

// Components
import Text from '../../atoms/commonText';
import Action from '../../atoms/Actions';
import TableComponent from '../../atoms/Table';

// Assets
import { NoProfile } from '../../../assets/images/index';
import { Image } from 'iconsax-react';

type PropsTypes = {
  onView: (data: DoctorDataType) => void;
  onPayment: (data: DoctorDataType) => void;
  data: DoctorDataType[];
};

const ReservationTable = ({ onView, onPayment, data }: PropsTypes) => {
  const columns: ColumnsType<any> = [
    {
      title: 'Doctor Name',
      dataIndex: 'Doctor Name',
      render: (text, record) => (
        <div className="flex items-center gap-3">
          <div className="relative w-7 h-7 rounded-full overflow-hidden">
            <img
              src={record?.doctorInfo?.profileImage?.url || NoProfile}
              alt=""
              draggable={false}
            />
          </div>
          <Text containerTag="h1" className="text-sm font-semibold text-grayColor">
            {record?.doctorInfo?.name + ' ' + record?.doctorInfo?.middlename}
          </Text>
        </div>
      ),
    },
    {
      title: 'Patient Name',
      dataIndex: 'Patient Name',
      render: (text, record) => (
        <div className="flex items-center gap-3">
          <div className="relative w-7 h-7 rounded-full overflow-hidden">
            <img
              src={record?.patientInfo?.profileImage?.url || NoProfile}
              alt=""
              draggable={false}
            />
          </div>
          <Text containerTag="h1" className="text-sm font-semibold text-grayColor">
            {record?.patientInfo?.name + ' ' + record?.patientInfo?.middlename}
          </Text>
        </div>
      ),
    },
    {
      title: 'Patient Location',
      dataIndex: 'Patient Location',
      render: (text, record) => (
        <Text containerTag="h1" className="text-sm font-semibold text-grayColor">
          {record?.patientInfo?.location?.[0]?.name}
        </Text>
      ),
    },
    {
      title: 'Fees',
      dataIndex: 'fees',
      sorter: (a, b) => {
        const feesA = a.fees ? a.fees.toLowerCase() : '';
        const feesB = b.fees ? b.fees.toLowerCase() : '';
        return feesA.localeCompare(feesB);
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      align: 'center',
      render: (text, record) => (
        <Text
          containerTag="h5"
          className={`text-sm font-semibold capitalize ${
            record.status === 'booked'
              ? 'text-colorGreen'
              : record.status === 'reserved'
                ? 'text-yellow-400'
                : 'text-red'
          }`}
        >
          {record.status}
        </Text>
      ),
      sorter: (a, b) => {
        const statusA = a.status ? a.status.toLowerCase() : '';
        const statusB = b.status ? b.status.toLowerCase() : '';
        return statusA.localeCompare(statusB);
      },
    },
    {
      title: 'Payment',
      dataIndex: 'paymentImage',
      align: 'center',
      render: (text, record) => (
        <Text
          containerTag="h5"
          className={`text-sm font-semibold flex items-center justify-center gap-3
        ${record?.paymentImage ? 'text-colorGreen' : 'text-red'}
        `}
        >
          {record?.paymentImage ? 'Uploaded' : ' Not Uploaded'}

          {record?.paymentImage && (
            <Image
              size={20}
              className="cursor-pointer"
              onClick={() => onPayment(record as DoctorDataType)}
            />
          )}
        </Text>
      ),
      sorter: (a, b) => {
        const statusA = a.status ? a.status.toLowerCase() : '';
        const statusB = b.status ? b.status.toLowerCase() : '';
        return statusA.localeCompare(statusB);
      },
    },
    {
      title: 'Action',
      dataIndex: 'action',
      align: 'center',
      render: (text, record) => (
        <Action onView={() => onView(record as DoctorDataType)} />
      ),
    },
  ];
  return <TableComponent data={data} columns={columns} />;
};

export default ReservationTable;
