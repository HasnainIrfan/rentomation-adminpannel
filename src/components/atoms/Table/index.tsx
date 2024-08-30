import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/lib/table';

type PropsTypes<T> = {
  data?: T[] | undefined;
  columns?: ColumnsType<T> | undefined;
};

function TableComponent<T>({ data, columns }: PropsTypes<T>) {
  return (
    <Table
      columns={columns as ColumnsType<[]>}
      dataSource={data as []}
      pagination={false}
      scroll={{ x: 1200 }}
      className="pb-6"
    />
  );
}

export default TableComponent;
