'use client';

import React, { useState } from 'react';

// Icons

import { Eye, EyeSlash } from 'iconsax-react';

// Components
import Text from '../commonText';

// Types
import { InputProps } from '@/src/types/inputTypes';

function Input(props: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const {
    type,
    placeholder,
    label,
    check,
    errors,
    value,
    register,
    name,
    onClick,
    disabled,
    style,
    extraClasses,
    bgColor,
    eyesColor,
    inputIcon,
  } = props;

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div
        className={`relative flex items-center gap-3 rounded-md border-2 py-[6px] px-3
         ${
           errors && errors[label]
             ? `bg-lightPink border-r-8 border-darkPink  duration-200`
             : `${bgColor || 'bg-transparent'} border-grayColor3  duration-200`
         }
        ${type === 'password' ? 'pr-7' : 'pr-3'}`}
      >
        {inputIcon && (
          <div className="w-[20px] h-[20px] flex items-center justify-center">
            {inputIcon}
          </div>
        )}
        <input
          {...(register ? register(label, check) : {})}
          type={type === 'password' && showPassword ? 'text' : type}
          value={value}
          onClick={onClick}
          placeholder={placeholder || 'Type here ...'}
          disabled={disabled}
          style={style}
          className={`${extraClasses} w-full h-full bg-transparent outline-none text-sm pr-3 placeholder:text-sm`}
        />
        {type === 'password' && (
          <div
            className={`absolute right-3 cursor-pointer text-base ${
              eyesColor || 'text-primary'
            }`}
            onClick={handleTogglePassword}
          >
            {showPassword ? <Eye /> : <EyeSlash />}
          </div>
        )}
      </div>
      {errors && errors[label]?.message && (
        <Text containerTag="h6" className="text-red text-xs mt-1 ml-1 font-semibold">
          {errors[label]?.message}
        </Text>
      )}
      {/* Pattern */}
      {label === 'name' && errors[label]?.type === 'pattern' && (
        <Text containerTag="h6" className="text-red text-xs mt-1 ml-1 font-semibold">
          Name Must Be Alphabet
        </Text>
      )}
      {label === 'last_name' && errors[label]?.type === 'pattern' && (
        <Text containerTag="h6" className="text-red text-xs mt-1 ml-1 font-semibold">
          Last Name Must Be Alphabet
        </Text>
      )}
      {label === 'email' && errors[label]?.type === 'pattern' && (
        <Text containerTag="h6" className="text-red text-xs mt-1 ml-1 font-semibold">
          Please Enter A Valid Email
        </Text>
      )}

      {label === 'days' && errors[label]?.type === 'pattern' && (
        <Text containerTag="h6" className="text-red text-xs mt-1 ml-1 font-semibold">
          Please Enter A Valid Days
        </Text>
      )}
      {label === 'age' && errors[label]?.type === 'pattern' && (
        <Text containerTag="h6" className="text-red text-xs mt-1 ml-1 font-semibold">
          Please Enter A Valid Age
        </Text>
      )}

      {label === 'code' && errors[label]?.type === 'pattern' && (
        <Text containerTag="h6" className="text-red text-xs mt-1 ml-1 font-semibold">
          Please Enter A Valid Code
        </Text>
      )}
      {label === 'video_url' && errors[label]?.type === 'pattern' && (
        <Text containerTag="h6" className="text-red text-xs mt-1 ml-1 font-semibold">
          Invalid video url
        </Text>
      )}

      {label === 'zoom_link' && errors[label]?.type === 'pattern' && (
        <Text containerTag="h6" className="text-red text-xs mt-1 ml-1 font-semibold">
          Invalid Zoom Link
        </Text>
      )}
      {label === 'meeting_link' && errors[label]?.type === 'pattern' && (
        <Text containerTag="h6" className="text-red text-xs mt-1 ml-1 font-semibold">
          Invalid Meeting Link
        </Text>
      )}
      {label === 'class_size' && errors[label]?.type === 'pattern' && (
        <Text containerTag="h6" className="text-red text-xs mt-1 ml-1 font-semibold">
          Please Enter A Valid RSVP Number (1-1000000)
        </Text>
      )}
      {(label === 'url' || label === 'link_to_redirect_to') &&
        errors[label]?.type === 'pattern' && (
          <Text containerTag="h6" className="text-red text-xs mt-1 ml-1 font-semibold">
            Invalid video url
          </Text>
        )}
      {/* Min or Max Length */}
      {errors &&
        ((errors[label]?.type === 'minLength' && check?.minLength) ||
          (errors[label]?.type === 'maxLength' &&
            check?.maxLength &&
            !check?.minLength)) && (
          <Text containerTag="h6" className="text-red text-xs mt-1 ml-1 font-semibold">
            {`${name} must be ${
              check.minLength && check.maxLength
                ? `between ${check.minLength} and ${check.maxLength} characters`
                : check.minLength
                  ? `at least ${check.minLength} characters`
                  : check.maxLength
                    ? `at most ${check.maxLength} characters`
                    : ''
            }`}
          </Text>
        )}
    </div>
  );
}

export default Input;
