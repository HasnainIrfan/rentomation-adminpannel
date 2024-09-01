/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

// Antd
import { Radio } from 'antd';
import Text from '../commonText';

// Components

type OptionsTypes = {
  label: string;
  value: string | boolean;
};

interface SolidRadioPropsTypes {
  title: string;
  option: OptionsTypes[];
  field: any;
  style?: React.CSSProperties;
  labelInCol?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fontSize?: string;
  disabled?: boolean;
}

function SolidRadio(props: SolidRadioPropsTypes) {
  const { title, option, field, style, labelInCol, onChange, disabled } = props;

  const handleChange = (e: any) => {
    field.onChange(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };
  return (
    <div
      className={`w-full flex gap-3 justify-between ${labelInCol ? 'flex-col' : 'flex-row'}`}
    >
      <Text
        containerTag="h6"
        className={`flex flex-1 text-grayColor2 font-semibold mt-1 text-sm`}
      >
        {title}
      </Text>
      <div>
        <Radio.Group
          buttonStyle="solid"
          style={style}
          disabled={disabled}
          defaultValue={field.value}
          value={field.value}
          onChange={handleChange}
          onBlur={field.onBlur}
        >
          {option?.map((item, i) => (
            <Radio.Button value={item.value} key={i as number}>
              {item.label}
            </Radio.Button>
          ))}
        </Radio.Group>
      </div>
    </div>
  );
}

export default SolidRadio;
