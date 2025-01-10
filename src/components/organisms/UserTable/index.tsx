/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

// Types
import { UserData } from '../../../types/userTypes';
import type { ColumnsType } from 'antd/es/table';

// Components
import Text from '../../atoms/commonText';
import Action from '../../atoms/Actions';
import TableComponent from '../../atoms/Table';
import { NoProfile } from '../../../assets/images/index';

type PropsTypes = {
  onDelete: (id: number) => void;
  onView: (data: UserData) => void;
  onEdit: (data: UserData) => void;
  data: UserData[];
};

const UserTable = ({ onDelete, data }: PropsTypes) => {
  const columns: ColumnsType<any> = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text, record) => (
        <div className="flex items-center gap-3">
          <div className="relative w-7 h-7 rounded-full overflow-hidden">
            <img src={record?.profileImage || NoProfile} alt="" draggable={false} />
          </div>
          <Text containerTag="h1" className="text-sm font-semibold text-grayColor">
            {record.username ? `${record.username} ` : 'No Name'}
          </Text>
        </div>
      ),
      sorter: (a, b) => {
        const nameA = a.name ? a.name.toLowerCase() : '';
        const nameB = b.name ? b.name.toLowerCase() : '';
        return nameA.localeCompare(nameB);
      },
    },
    {
      title: 'Email',
      dataIndex: 'email',
      sorter: (a, b) => {
        const emailA = a.email ? a.email.toLowerCase() : '';
        const emailB = b.email ? b.email.toLowerCase() : '';
        return emailA.localeCompare(emailB);
      },
    },
    {
      title: 'Cnic Number',
      dataIndex: 'cnic',
      sorter: (a, b) => {
        const phoneA = a.phone ? a.phone.toLowerCase() : '';
        const phoneB = b.phone ? b.phone.toLowerCase() : '';
        return phoneA.localeCompare(phoneB);
      },
    },
    {
      title: 'City',
      dataIndex: 'city',
      align: 'center',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      align: 'center',
      render: (text, record) => <Action onDelete={() => onDelete(record._id)} />,
    },
  ];
  return <TableComponent data={data} columns={columns} />;
};

export default UserTable;
