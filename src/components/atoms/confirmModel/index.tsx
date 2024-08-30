/* eslint-disable react/no-unescaped-entities */

import React from 'react';

// Component
import Model from '../model';
import Text from '../commonText';
import Button from '../Button';

// Icons
import { Warning2 } from 'iconsax-react';

type PropsTypes = {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
  onDelete?: () => void;
  loading?: boolean;
  title?: string;
  buttonContent?: string;
  isContent?: boolean;
  children?: React.ReactNode;
  actions?: boolean;
  closeIcon?: boolean;
};

function ConfrimModel({
  open,
  setOpen,
  onDelete,
  loading,
  title,
  buttonContent,
  children,
  isContent = true,
  actions = true,
  closeIcon = true,
}: PropsTypes) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Model
      title={title || 'Delete User'}
      open={open}
      handleClose={handleClose}
      closeIcon={closeIcon}
    >
      <div className="w-full relative flex flex-col items-center pb-16">
        {isContent && (
          <>
            <Warning2 className="text-red mb-5" size={60} />

            <Text
              containerTag="h2"
              className="sm:text-2xl text-lg text-blackColor font-semibold mb-2 text-center"
            >
              Are you sure?
            </Text>

            <Text
              containerTag="h5"
              className="sm:text-base text-sm text-lightRed font-semibold mb-2 text-center"
            >
              You won't be able to revert this!
            </Text>
          </>
        )}
        {children}

        {actions && (
          <div className="w-full absolute bottom-0 flex items-center justify-between mt-6 flex-col sm:flex-row gap-1">
            <Button
              className="w-[200px] bg-gray-100"
              disabled={loading}
              onClick={handleClose}
              type="text"
            >
              Cancel
            </Button>
            <Button
              className="w-[200px]"
              color="danger"
              onClick={onDelete}
              isLoading={loading}
              disabled={loading}
            >
              {buttonContent || 'Yes, delete it!'}
            </Button>
          </div>
        )}
      </div>
    </Model>
  );
}

export default ConfrimModel;
