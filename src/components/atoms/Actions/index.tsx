/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';

// Icons

import { Eye, Edit2, Trash } from 'iconsax-react';

type PropsTypes = {
  onView?: (event: React.MouseEvent<HTMLDivElement>, id?: number) => void;
  onEdit?: (event: React.MouseEvent<HTMLDivElement>, id?: number) => void;
  onPlay?: (event: React.MouseEvent<HTMLDivElement>, id?: number) => void;
  onDelete?: (event: React.MouseEvent<HTMLDivElement>, id?: number) => void;
  container?: boolean;
};

function Action({ onView, onEdit, onDelete, container }: PropsTypes) {
  return (
    <>
      {container ? (
        <div className="absolute z-10 right-2 top-2 flex flex-col items-center justify-center gap-2 text-sm">
          {onView && (
            <div
              className="w-full rounded-full flex items-center justify-center bg-white p-2 shadow-lg group cursor-pointer border-2 border-lightGray"
              onClick={onView}
            >
              <Eye className="text-primary duration-300  group-hover:scale-125 group-hover:text-colorOrange" />
            </div>
          )}

          {onEdit && (
            <div
              className="w-full rounded-full flex items-center justify-center bg-white p-2 shadow-lg group cursor-pointer border-2 border-lightGray"
              onClick={onEdit}
            >
              <Edit2 className="text-primary duration-300  group-hover:scale-125 group-hover:text-colorGreen" />
            </div>
          )}

          {onDelete && (
            <div
              className="w-full rounded-full flex items-center justify-center bg-white p-2 shadow-lg group cursor-pointer border-2 border-lightGray"
              onClick={onDelete}
            >
              <Trash className="text-primary group-hover:scale-125 group-hover:text-red duration-300" />
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center gap-3 text-2xl">
          {onView && (
            <Eye
              className="cursor-pointer text-primary hover:scale-125 duration-300 hover:text-colorOrange"
              onClick={onView}
            />
          )}

          {onEdit && (
            <Edit2
              className="cursor-pointer text-primary hover:scale-125 duration-300 hover:text-colorGreen"
              onClick={onEdit}
            />
          )}

          {onDelete && (
            <Trash
              className="cursor-pointer text-primary hover:scale-125 hover:text-red duration-300"
              onClick={onDelete}
            />
          )}
        </div>
      )}
    </>
  );
}

export default Action;
