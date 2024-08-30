import React from 'react';
import { Pagination as AntdPagination } from 'antd';

function CustomPagination({
  defaultPage,
  totalCount,
  onChange,
  pageSize,
}: {
  defaultPage?: number;
  totalCount?: number;
  pageSize?: number;
  onChange?: (page: number) => void;
}) {
  return (
    <div className="py-5 flex items-center justify-center">
      <AntdPagination
        showSizeChanger={false}
        defaultCurrent={defaultPage || 1}
        pageSize={pageSize || 10}
        total={totalCount || 0}
        onChange={onChange}
        responsive
      />
    </div>
  );
}

export default CustomPagination;
