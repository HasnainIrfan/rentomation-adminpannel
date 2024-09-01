import React from 'react';

// Types
import { UserData } from '@/src/types/userTypes';

// Components
import CustomDrawer from '../Drawer';
import TextContainer from '../ContainerText';

// Utils
import { formatDate } from './../../../utils/formatDate';
import { NoProfile } from './../../../assets/images';
import ArrayContainer from '../ContainerArray';

type PropsTypes = {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
  data: UserData | null;
};

function UserDrawer({ open, setOpen, data }: PropsTypes) {
  const handleClose = () => {
    setOpen(false);
  };

  const filterLocationName =
    data?.location &&
    data?.location?.length > 0 &&
    data?.location.map(location => location.name);

  return (
    <CustomDrawer
      title="User Details"
      removePadding
      childrenRemovePadding
      open={open}
      handleClose={handleClose}
    >
      <div className="">
        <div className="w-full flex items-center justify-center mb-5">
          <div className="relative w-[100px] h-[100px] border-[3px] border-background rounded-full overflow-hidden object-cover ">
            <img
              src={data?.profileImage?.url || NoProfile}
              alt="Profile"
              draggable={false}
            />
          </div>
        </div>
        <div className="relative flex flex-col gap-3">
          {/* Personal Details */}

          <TextContainer label="Name :" title={`${data?.name} ${data?.middlename}`} />

          <TextContainer label="Email :" title={data?.email} />

          <TextContainer label="Phone :" title={data?.phone} />

          <TextContainer label="Age :" title={data?.age} />

          <TextContainer label="Role :" title={data?.role} />

          <TextContainer label="Cnic :" title={data?.cnic} />

          <TextContainer label="Gender :" title={data?.gender} />

          <TextContainer label="City :" title={data?.city} />

          <ArrayContainer label="Location :" data={filterLocationName || []} />

          <TextContainer label="Address :" title={data?.address} />

          <TextContainer label="Verified :" title={data?.isVerified ? 'True' : 'False'} />

          <TextContainer label="Created At :" title={formatDate(data?.createdAt)} />

          <TextContainer label="Updated At :" title={formatDate(data?.updatedAt)} />
        </div>
      </div>
    </CustomDrawer>
  );
}

export default UserDrawer;
