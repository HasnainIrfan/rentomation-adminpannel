/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import { Select } from 'antd';

// Types
import { SelectProps } from '../../../data/types';

//
import { useDebouncedSearch } from '../../../utils/helper';

// Components
import Text from '../commonText';

function SelectInput(props: SelectProps) {
  const {
    options,
    field,
    errors,
    placeholder,
    disabled,
    style,
    loading,
    onclick,
    onSearch,
    showValue,
    labelInValue,
    onChange,
  } = props;

  const handleDebouncedSearch = useDebouncedSearch(onSearch);

  const selectedItems = field.value || [];

  const filterOption = (input: string, option?: { label: string; value: string }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  const handleSearch = (value: string) => {
    handleDebouncedSearch(value);
  };

  return (
    <div>
      <Select
        className={`${errors && errors[field.name] && 'multi-select-error'} multi-select`}
        placeholder={placeholder}
        disabled={disabled}
        style={style}
        loading={loading}
        allowClear
        onChange={value => {
          field.onChange(value);
          onChange && onChange(value);
        }}
        onBlur={field.onBlur}
        value={selectedItems}
        showSearch
        labelInValue={labelInValue || false}
        onSearch={onSearch ? handleSearch : undefined}
        filterOption={filterOption}
        onClick={onclick}
        options={options}
      >
        {options?.map(option => (
          <Select.Option key={option.value} value={option.value} label={option.label}>
            <div className="w-full flex justify-between">
              {option.label} {showValue && <div>{option.value}</div>}
            </div>
          </Select.Option>
        ))}
      </Select>
      {errors && errors[field.name] && (
        <Text containerTag="h6" className="text-red text-xs mt-1 ml-1 font-semibold">
          {errors[field.name].message}
        </Text>
      )}
    </div>
  );
}

export default SelectInput;
