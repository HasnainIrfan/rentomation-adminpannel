/* eslint-disable @typescript-eslint/no-explicit-any */

// antd
import { Checkbox } from 'antd';
import Text from '../commonText';
import { SelectBoxOption } from '../../../data/types';
import React from 'react';

type PropsType = {
  title?: string;
  disabled?: boolean;
  options?: SelectBoxOption[];
  defaultValue?: any;
  errors?: any;
  required?: boolean;
  field: {
    onChange: (value: string[]) => void;
    onBlur: () => void;
    value: string[] | any;
    name: string;
  };
};

function CheckboxGroup({
  title,
  options,
  disabled,
  defaultValue,
  errors,
  field,
  required,
}: PropsType) {
  return (
    <div>
      {title && (
        <Text
          containerTag="h1"
          className="sm:text-sm text-xs font-semibold text-primary mb-5"
        >
          {title} {required && <span className="text-red">*</span>}
        </Text>
      )}

      <Checkbox.Group
        defaultValue={defaultValue}
        className={`flex flex-col gap-3 mt-3
                ${errors && errors[field.name] && 'checkbox-error'}
                `}
        options={options}
        disabled={disabled}
        onChange={field.onChange as any}
      />

      {errors && errors[field.name] && (
        <Text containerTag="h6" className="text-red text-xs mt-1 ml-1 font-semibold">
          {errors[field.name].message}
        </Text>
      )}
    </div>
  );
}

export default CheckboxGroup;
