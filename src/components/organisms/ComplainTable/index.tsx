/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

// Types
import { DoctorDataType } from '../../../types/userTypes';
import type { ColumnsType } from 'antd/es/table';

// Components
import Text from '../../atoms/commonText';
import Action from '../../atoms/Actions';
import TableComponent from '../../atoms/Table';

type PropsTypes = {
  onDelete: (id: number) => void;
  data: DoctorDataType[];
  onEdit: (data: DoctorDataType) => void;
};

const ComplainTable = ({ onDelete, data, onEdit }: PropsTypes) => {
  const columns: ColumnsType<any> = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text, record) => (
        <div className="flex items-center gap-3">
          {record?.images?.length > 0 &&
            record?.images?.map((image: any, index: number) => (
              <div key={index} className="relative w-12 h-12 rounded overflow-hidden">
                <img src={image} alt="" draggable={false} />
              </div>
            ))}
        </div>
      ),
      sorter: (a, b) => {
        const nameA = a.name ? a.name.toLowerCase() : '';
        const nameB = b.name ? b.name.toLowerCase() : '';
        return nameA.localeCompare(nameB);
      },
    },
    {
      title: 'Description',
      dataIndex: 'description',
      sorter: (a, b) => {
        const emailA = a.email ? a.email.toLowerCase() : '';
        const emailB = b.email ? b.email.toLowerCase() : '';
        return emailA.localeCompare(emailB);
      },
      width: '300px',
    },
    {
      title: 'City',
      dataIndex: 'city',
      sorter: (a, b) => {
        const phoneA = a.phone ? a.phone.toLowerCase() : '';
        const phoneB = b.phone ? b.phone.toLowerCase() : '';
        return phoneA.localeCompare(phoneB);
      },
    },
    {
      title: 'Location',
      dataIndex: 'location',
      render: (text, record) => (
        <Text containerTag="h5" className="text-sm font-semibold">
          {record?.location?.name}
        </Text>
      ),
    },
    {
      title: 'Parking',
      dataIndex: `parking`,
      render: (text, record) => (
        <Text containerTag="h5" className="text-sm">
          {record?.parking ? 'Yes' : 'No'}
        </Text>
      ),
      align: 'center',
      sorter: (a, b) => {
        const genderA = a.gender ? a.gender.toLowerCase() : '';
        const genderB = b.gender ? b.gender.toLowerCase() : '';
        return genderA.localeCompare(genderB);
      },
    },
    {
      title: 'Payper',
      dataIndex: 'payper',
      align: 'center',
    },
    {
      title: 'Rent',
      dataIndex: 'rent',
      align: 'center',
    },
    {
      title: 'Shower',
      dataIndex: 'shower',
      align: 'center',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      align: 'center',
      render: (text, record) => (
        <Text
          containerTag="h5"
          className={`text-sm font-semibold ${
            record.status ? 'text-colorGreen' : 'text-red'
          }`}
        >
          {record.status ? 'Yes' : 'No'}
        </Text>
      ),
      sorter: (a, b) => {
        const trainerA = a.isVerified ? 1 : 0;
        const trainerB = b.isVerified ? 1 : 0;
        return trainerA - trainerB;
      },
    },

    {
      title: 'Action',
      dataIndex: 'action',
      align: 'center',
      render: (text, record) => (
        <Action onDelete={() => onDelete(record._id)} onEdit={() => onEdit(record)} />
      ),
    },
  ];
  return <TableComponent data={data} columns={columns} />;
};

export default ComplainTable;
