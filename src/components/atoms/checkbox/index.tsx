/* eslint-disable react/self-closing-comp */
import React from 'react';

// antd
import { Checkbox as AntdCheckbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/lib/checkbox';

function Checkbox({
  onChange,
  checked,
  disabled,
  title,
}: {
  onChange: (e: CheckboxChangeEvent) => void;
  checked?: boolean;
  disabled?: boolean;
  title?: string;
}) {
  return (
    <AntdCheckbox onChange={onChange} disabled={disabled} checked={checked}>
      {title}
    </AntdCheckbox>
  );
}

export default Checkbox;
