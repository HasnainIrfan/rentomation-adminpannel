import React from 'react';

// antd
import { Modal } from 'antd';

// Icons
// import { IoCloseSharp } from 'react-icons/io5';

// Component
import Text from '../commonText';

// Define the prop types for the Model component.
type ModelProps = {
  title: string;
  open: boolean;
  children: React.ReactNode;
  handleClose?: () => void;
  width?: number;
  closeIcon?: boolean;
  onHeaderChildren?: React.ReactNode;
};

// Model component that displays a modal dialog.
function Model({
  title,
  open,
  handleClose,
  children,
  width,
  closeIcon = true,
  onHeaderChildren,
}: ModelProps) {
  return (
    <Modal open={open} centered footer={null} closable={false} width={width}>
      {/* Header */}
      <div className="absolute top-0 left-0 flex items-center justify-between px-4 py-3 w-full bg-primary rounded-t-[8px]">
        <Text containerTag="h3" className="text-white sm:text-lg text-base font-semibold">
          {title}
        </Text>

        {/* Close button */}
        {closeIcon && (
          <div
            className="text-white sm:text-2xl text-xl cursor-pointer duration-200 hover:rotate-180 hover:duration-200"
            onClick={handleClose}
          >
            {/* <IoCloseSharp /> */}
          </div>
        )}

        {onHeaderChildren}
      </div>

      {/* Main content */}
      <div className="mt-14 overflow-hidden">{children}</div>
    </Modal>
  );
}

export default Model;
