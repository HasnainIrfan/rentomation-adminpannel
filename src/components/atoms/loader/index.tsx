import React from 'react';

// Assets
import { LoaderGif } from '../../../assets/images';

function Loader({ height }: { height?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${height || 'h-[50vh]'}`}>
      <img src={LoaderGif} alt="Loader" width={400} height={400} />
    </div>
  );
}

export default Loader;
