/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useCallback, useState } from 'react';

// Antd
import { Button, Select, Spin } from 'antd';

// Components
import Text from '../../atoms/commonText';

// Icons
import { SearchNormal1 } from 'iconsax-react';

// Utils
import debounce from 'debounce';

// Data
import {
  isDoctorVerifiedOption,
  isVerifiedOption,
  StatusOptions,
} from '../../../data/dummyData';

const SubHeader = ({
  title,
  search,
  setSearch,
  isVerify,
  setIsVerify,
  isVerifyDoctor,
  setIsVerifyDoctor,
  isStatus,
  setIsStatus,
  isRightSection = true,
  isRightAction = false,
  onRightActionClick,
  onRightActionText,
}: {
  title: string;
  search?: string;
  setSearch?: (value: string) => void;
  isVerify?: boolean | null;
  setIsVerify?: (value: boolean | null) => void;
  isVerifyDoctor?: boolean | null;
  setIsVerifyDoctor?: (value: boolean | null) => void;
  isStatus?: boolean | null;
  setIsStatus?: (value: boolean | null) => void;
  isRightSection?: boolean;
  isRightAction?: boolean;
  onRightActionClick?: () => void;
  onRightActionText?: string;
}) => {
  const [searchInput, setSearchInput] = useState(search || '');
  const [loading, setLoading] = useState(false);

  const debouncedSetSearch = useCallback(
    debounce(value => {
      if (setSearch) setSearch(value);
      setLoading(false);
    }, 800),
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);
    debouncedSetSearch(value);
    setLoading(true);
    setIsVerifyDoctor && setIsVerifyDoctor(null);
    setIsVerify && setIsVerify(null);
  };

  return (
    <>
      <div className="mb-6 flex items-center justify-between pr-2">
        <Text containerTag="h1" className="text-lg font-medium text-blackColor">
          {title}
        </Text>
      </div>

      <div className="mb-5 flex items-center justify-between">
        <div className="relative flex w-80 items-center">
          {setSearch && (
            <>
              <input
                type="text"
                placeholder="Search..."
                value={searchInput}
                onChange={handleChange}
                className="h-10 w-full rounded-md border-4 border-none border-grayColor4 bg-grayColor4 pl-4 pr-14 text-base outline-none"
              />

              <div className="absolute right-[3px] flex h-9 w-9 items-center justify-center rounded-md bg-primary text-white shadow-purpleShadow cursor-pointer">
                {loading ? <Spin size="small" /> : <SearchNormal1 size={16} />}
              </div>
            </>
          )}
        </div>

        {isRightAction && (
          <Button type="primary" className="w-40 h-10" onClick={onRightActionClick}>
            {onRightActionText}
          </Button>
        )}

        {isRightSection && (
          <div className="flex items-center justify-center gap-5">
            {setIsStatus && (
              <Select
                options={StatusOptions}
                placeholder="Status"
                className="w-40 border border-primary rounded-md"
                allowClear
                value={isStatus}
                onChange={value => {
                  setIsStatus && setIsStatus(value);
                  setSearch && setSearch('');
                }}
              />
            )}

            {setIsVerify && (
              <Select
                options={isVerifiedOption}
                placeholder="Is Properties Verified"
                className="w-40 border border-primary rounded-md"
                allowClear
                value={isVerify}
                onChange={value => {
                  setIsVerify && setIsVerify(value);
                  setSearch && setSearch('');
                }}
              />
            )}

            {setIsVerifyDoctor && (
              <Select
                options={isDoctorVerifiedOption}
                placeholder="Is Doctor Verified"
                className="w-40 border border-primary rounded-md"
                allowClear
                value={isVerifyDoctor}
                onChange={value => {
                  setIsVerifyDoctor && setIsVerifyDoctor(value);
                  setSearch && setSearch('');
                }}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default SubHeader;
