/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

// Types
import { DoctorDataType } from '../../../types/userTypes';
import type { ColumnsType } from 'antd/es/table';

// Components
import Text from '../../atoms/commonText';
import TableComponent from '../../atoms/Table';
import { formatDate } from '../../../utils/formatDate';

type PropsTypes = {
  data: DoctorDataType[];
};

const PropertiesTable = ({ data }: PropsTypes) => {
  const columns: ColumnsType<any> = [
    {
      title: 'ComplaintText',
      dataIndex: 'complaintText',
      sorter: (a, b) => {
        const emailA = a.email ? a.email.toLowerCase() : '';
        const emailB = b.email ? b.email.toLowerCase() : '';
        return emailA.localeCompare(emailB);
      },
      width: '300px',
    },
    {
      title: 'User',
      dataIndex: 'user',
      render: (text, record) => (
        <Text containerTag="h5" className="text-sm font-semibold">
          {record?.user?.email || record?.name}
        </Text>
      ),
      sorter: (a, b) => {
        const phoneA = a.phone ? a.phone.toLowerCase() : '';
        const phoneB = b.phone ? b.phone.toLowerCase() : '';
        return phoneA.localeCompare(phoneB);
      },
    },
    {
      title: 'CreatedAt',
      dataIndex: 'createdAt',
      render: (text, record) => (
        <Text containerTag="h5" className="text-sm font-semibold">
          {formatDate(record?.createdAt)}
        </Text>
      ),
    },
  ];
  return <TableComponent data={data} columns={columns} />;
};

export default PropertiesTable;
