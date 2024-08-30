import React from 'react';
import Text from '../../atoms/commonText';

function TextContainer({
  label,
  title,
}: {
  label: string;
  title?: string | null | number;
}) {
  return (
    <div className="mb-3">
      <Text
        containerTag="h6"
        className="sm:text-xs text-[10px] text-grayColor font-semibold"
      >
        {label}
      </Text>

      {title ? (
        <Text
          containerTag="h5"
          className="sm:text-sm text-sm text-primary font-semibold ml-1"
        >
          {title}
        </Text>
      ) : (
        <Text containerTag="h5" className="sm:text-sm text-sm text-grayColor3 ml-1">
          -
        </Text>
      )}
    </div>
  );
}

export default TextContainer;
