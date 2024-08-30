/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import Text from '../commonText';
import { TextAreaProps } from '../../../data/types';

function TextArea(props: TextAreaProps) {
  const {
    title,
    placeholder,
    label,
    check,
    errors,
    value,
    register,
    onClick,
    disabled,
    style,
    extraClasses,
    bgColor,
    required,
    labelInCol,
  } = props;

  return (
    <div
      className={`flex w-full gap-3
            ${labelInCol ? 'flex-col' : 'mobile:flex-row flex-col'}
            `}
    >
      {title && (
        <Text
          containerTag="h6"
          className="flex flex-1 text-grayColor2 font-semibold sm:text-base text-xs mt-1"
        >
          {title} {required && <span className="text-red ml-1">*</span>}
        </Text>
      )}
      <div className="flex-[2.5] relative">
        <textarea
          {...(register ? register(label, check) : {})}
          value={value}
          onClick={onClick}
          placeholder={placeholder}
          disabled={disabled}
          style={style}
          // onChange={onChange || (() => {})}
          className={`${extraClasses} w-full md:text-base text-sm  min-h-[100px] max-h-80 outline-none rounded-md px-3 sm:py-1 py-[2px] border font-light placeholder:font-light text-black placeholder:text-grayColor3 duration-200 scrollBar
            ${
              errors && errors[label]
                ? ` bg-lightPink border-r-8 border-darkPink duration-200`
                : `${bgColor || 'bg-transparent'}  border-grayColor3  duration-200`
            }
            `}
        />

        {errors && errors[label]?.message && (
          <Text containerTag="h6" className="text-red text-xs mt-1 ml-1 font-semibold">
            {errors[label]?.message}
          </Text>
        )}
      </div>
    </div>
  );
}

export default TextArea;
