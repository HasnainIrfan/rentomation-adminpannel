/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

// Types
import { UserData } from '../../../types/userTypes';
import type { ColumnsType } from 'antd/es/table';

// Components
import Text from '../../atoms/commonText';
import Action from '../../atoms/Actions';
import TableComponent from '../../atoms/Table';
import { emptyImage } from '../../../assets/images/index';

type PropsTypes = {
  onDelete: (id: number) => void;
  onView: (data: UserData) => void;
  onEdit: (data: UserData) => void;
  data: UserData[];
};

const ServicesTable = ({ onDelete, onView, onEdit, data }: PropsTypes) => {
  const columns: ColumnsType<any> = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text, record) => (
        <div className="relative w-20 h-10 rounded-sm overflow-hidden flex items-center justify-center">
          <img src={record?.image?.url || emptyImage} alt="" draggable={false} />
        </div>
      ),
      sorter: (a, b) => {
        const nameA = a.name ? a.name.toLowerCase() : '';
        const nameB = b.name ? b.name.toLowerCase() : '';
        return nameA.localeCompare(nameB);
      },
    },
    {
      title: 'Title',
      dataIndex: 'title',
      render: (text, record) => (
        <Text containerTag="h3" className="text-sm text-oneline">
          {record.title}
        </Text>
      ),
      sorter: (a, b) => {
        const emailA = a.email ? a.email.toLowerCase() : '';
        const emailB = b.email ? b.email.toLowerCase() : '';
        return emailA.localeCompare(emailB);
      },
    },
    {
      title: 'Subtitle',
      dataIndex: 'subtitle',
      render: (text, record) => (
        <Text containerTag="h3" className="text-sm text-oneline">
          {record.subtitle}
        </Text>
      ),
      sorter: (a, b) => {
        const phoneA = a.phone ? a.phone.toLowerCase() : '';
        const phoneB = b.phone ? b.phone.toLowerCase() : '';
        return phoneA.localeCompare(phoneB);
      },
    },

    {
      title: 'isFeature',
      dataIndex: 'isFeature',
      align: 'center',
      render: (text, record) => (
        <Text
          containerTag="h5"
          className={`text-sm font-semibold ${
            record.isFeature ? 'text-colorGreen' : 'text-red'
          }`}
        >
          {record.isFeature ? 'Yes' : 'No'}
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
        <Action
          onView={() => onView(record as UserData)}
          onEdit={() => onEdit(record as UserData)}
          onDelete={() => onDelete(record._id)}
        />
      ),
    },
  ];
  return <TableComponent data={data} columns={columns} />;
};

export default ServicesTable;
