import React from 'react';
import Model from '../model';

const DegreeModel = ({
  open,
  handleClose,
  url,
}: {
  open: boolean;
  handleClose: () => void;
  url: string;
}) => {
  return (
    <Model
      title="Degree Details"
      open={open}
      handleClose={handleClose}
      closeIcon
      width={800}
    >
      <div className="p-3">
        <img src={url} alt="" width="100%" height={600} />
      </div>
    </Model>
  );
};

export default DegreeModel;
