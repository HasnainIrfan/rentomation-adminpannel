import React from 'react';
import Text from '../../atoms/commonText';

function ArrayContainer({ label, data }: { label: string; data?: string[] }) {
  return (
    <div className="mb-3">
      <Text
        containerTag="h6"
        className="sm:text-xs text-[10px] text-grayColor font-semibold mb-2"
      >
        {label}
      </Text>

      {data ? (
        <ul className="flex flex-wrap gap-1 list-disc ml-3">
          {data.map((item, index) => (
            <li key={index}>
              <Text
                containerTag="h5"
                className="sm:text-sm text-sm text-primary font-semibold ml-1"
              >
                {item}
              </Text>
            </li>
          ))}
        </ul>
      ) : (
        <Text containerTag="h5" className="sm:text-sm text-sm text-grayColor3 ml-1">
          -
        </Text>
      )}
    </div>
  );
}

export default ArrayContainer;
