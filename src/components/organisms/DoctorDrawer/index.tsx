import React, { useState } from 'react';

// Types
import { DoctorDataType } from './../../../types/userTypes';

// Components
import CustomDrawer from '../Drawer';
import TextContainer from '../ContainerText';
import ArrayContainer from '../ContainerArray';

// Utils
import { formatDate } from '../../../utils/formatDate';
import { NoProfile } from '../../../assets/images';
import Button from '../../atoms/Button';
import DegreeModel from '../../atoms/DegreeModel';

type PropsTypes = {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
  data: DoctorDataType | null;
};

function DoctorDrawer({ open, setOpen, data }: PropsTypes) {
  const [isDegree, setIsDegree] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  const filterLocationName =
    data?.location &&
    data?.location?.length > 0 &&
    data?.location.map(location => location.name);

  return (
    <>
      <DegreeModel
        open={isDegree}
        handleClose={() => setIsDegree(false)}
        url={data?.degreeImage?.url || ''}
      />

      <CustomDrawer
        title="Doctor Details"
        removePadding
        childrenRemovePadding
        open={open}
        handleClose={handleClose}
      >
        <div className="relative">
          {data?.degreeImage?.url && (
            <Button
              className="absolute top-[-20px] right-[-10px] z-40"
              onClick={() => setIsDegree(true)}
            >
              View Degree
            </Button>
          )}

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

            <ArrayContainer label="Specialization :" data={data?.specialization} />

            <ArrayContainer label="Certifications :" data={data?.certifications} />

            <ArrayContainer label="Services :" data={data?.services} />

            <ArrayContainer label="Education :" data={data?.education} />

            <TextContainer
              label="Verified :"
              title={data?.isVerified ? 'True' : 'False'}
            />

            <TextContainer label="Address :" title={data?.yearOfExperience} />

            <TextContainer label="Bio :" title={data?.bio} />

            <TextContainer label="Verified :" title={data?.isDoctorVerified} />

            <TextContainer label="Created At :" title={formatDate(data?.createdAt)} />

            <TextContainer label="Updated At :" title={formatDate(data?.updatedAt)} />
          </div>
        </div>
      </CustomDrawer>
    </>
  );
}

export default DoctorDrawer;
