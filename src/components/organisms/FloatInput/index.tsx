/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';

// Antd
import { Input } from 'antd';

// Components
import Text from '../../atoms/commonText';

// Icons
import { Eye, EyeSlash } from 'iconsax-react';

type PropTypes = {
  label: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type?: string;
  name?: string;
  disabled?: boolean;
  field?: any;
  errors?: any;
  labelClasses?: string;
  widthFull?: boolean;
};

function FloatInput({
  label,
  type,
  name,
  className,
  disabled,
  field,
  errors,
  labelClasses,
  widthFull,
}: PropTypes) {
  const [focus, setFocus] = useState(false);
  const [inputType, setInputType] = useState(type || 'text');

  const labelClass =
    focus || (field.value && field.value.length !== 0)
      ? `text-[10px] absolute pointer-events-none left-3 top-[6px] duration-200 text-gray-400`
      : `${labelClasses} text-xs absolute pointer-events-none left-3 top-3 duration-200 text-gray-400`;

  return (
    <div
      className={`${widthFull && 'w-full'} relative`}
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      <div className="relative flex items-center justify-center">
        <Input
          disabled={disabled}
          type={inputType}
          name={name}
          onChange={e => field.onChange(e)}
          onBlur={() => field.onBlur()}
          value={field.value}
          className={`${className} floatInputAntd ${
            errors && errors[field.name] && 'floatInputAntd-error'
          }`}
        />
        {type === 'password' && (
          <div
            className="absolute right-4 text-base cursor-pointer text-primary"
            onClick={() => setInputType(inputType === 'password' ? 'text' : 'password')}
          >
            {inputType === 'password' ? <Eye /> : <EyeSlash />}
          </div>
        )}
      </div>
      <label className={labelClass}>{label}</label>

      {errors && errors[field.name] && (
        <Text containerTag="h6" className="text-red text-xs mt-1 font-semibold">
          {errors[field.name].message}
        </Text>
      )}
    </div>
  );
}

export default FloatInput;
