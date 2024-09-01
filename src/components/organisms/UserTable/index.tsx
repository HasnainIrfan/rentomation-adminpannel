import React from 'react';

// Types
import { UserData } from '../../../types/userTypes';
import type { ColumnsType } from 'antd/es/table';

// Components
import Text from '../../atoms/commonText';
import Action from '../../atoms/Actions';
import TableComponent from '../../atoms/Table';

type PropsTypes = {
  onDelete: (id: number) => void;
  onView: (data: UserData) => void;
  onEdit: (data: UserData) => void;
  data: UserData[];
};

const UserTable = ({ onDelete, onView, onEdit, data }: PropsTypes) => {
  const columns: ColumnsType<any> = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text, record) => (
        <div className="flex items-center gap-3">
          <div className="relative w-7 h-7 rounded-full overflow-hidden">
            {/* <Image
              src={record.profile_image ? `${record.profile_image}` : NoImage}
              alt="gym_Image"
              fill
              draggable={false}
              unoptimized
            /> */}
          </div>
          <Text containerTag="h1" className="text-sm font-semibold text-grayColor">
            {record.name ? `${record.name} ${record?.middlename}` : 'No Name'}
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
      title: 'Phone Number',
      dataIndex: 'phone',
      sorter: (a, b) => {
        const phoneA = a.phone ? a.phone.toLowerCase() : '';
        const phoneB = b.phone ? b.phone.toLowerCase() : '';
        return phoneA.localeCompare(phoneB);
      },
    },
    {
      title: 'Gender',
      dataIndex: `gender`,
      align: 'center',
      sorter: (a, b) => {
        const genderA = a.gender ? a.gender.toLowerCase() : '';
        const genderB = b.gender ? b.gender.toLowerCase() : '';
        return genderA.localeCompare(genderB);
      },
    },
    {
      title: 'City',
      dataIndex: 'city',
      align: 'center',
    },
    {
      title: 'Location',
      dataIndex: 'gym_id',
      align: 'center',
      render: (text, record: any) => (
        <Text containerTag="h5">{record?.location?.name}</Text>
      ),
    },
    {
      title: 'Verified',
      dataIndex: 'isVerified',
      align: 'center',
      render: (text, record) => (
        <Text
          containerTag="h5"
          className={`text-sm font-semibold ${
            record.isVerified ? 'text-colorGreen' : 'text-red'
          }`}
        >
          {record.isVerified ? 'Yes' : 'No'}
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

export default UserTable;
