/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';

// Components
import CustomDrawer from '../Drawer';
import TextContainer from '../ContainerText';
import ArrayContainer from '../ContainerArray';

// Utils
import { formatDate } from '../../../utils/formatDate';
import { NoProfile } from '../../../assets/images';
import Button from '../../atoms/Button';
import PaymentModel from '../PaymentApproveModel';
import Text from '../../atoms/commonText';

type PropsTypes = {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
  data: any;
};

function ReservationDrawer({ open, setOpen, data }: PropsTypes) {
  const [isDegree, setIsDegree] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  const filterLocationName =
    data?.location &&
    data?.location?.length > 0 &&
    data?.location.map((location: any) => location.name);

  const doctorInfo = data?.doctorInfo || {};
  const patientInfo = data?.patientInfo || {};

  return (
    <>
      <PaymentModel open={isDegree} handleClose={() => setIsDegree(false)} data={data} />

      <CustomDrawer
        title="Reservation Details"
        removePadding
        childrenRemovePadding
        open={open}
        handleClose={handleClose}
      >
        <div className="relative">
          {data?.paymentImage?.url && (
            <Button
              className="absolute top-[-20px] right-[-10px] z-40"
              onClick={() => setIsDegree(true)}
            >
              View Payment Receipt
            </Button>
          )}

          <Text
            containerTag="h1"
            className={`text-lg font-semibold text-grayColor mb-3 ${
              data?.paymentImage?.url && 'pt-10'
            }`}
          >
            Doctor Information
          </Text>

          <div className="w-full flex items-center justify-center mb-5">
            <div className="relative w-[100px] h-[100px] border-[3px] border-background rounded-full overflow-hidden object-cover ">
              <img
                src={data?.doctorInfo?.profileImage?.url || NoProfile}
                alt="Profile"
                draggable={false}
              />
            </div>
          </div>
          <div className="relative flex flex-col gap-3">
            <TextContainer
              label="Name :"
              title={`${doctorInfo?.name} ${doctorInfo?.middlename}`}
            />

            <TextContainer label="Email :" title={doctorInfo?.email} />

            <TextContainer label="Phone :" title={doctorInfo?.phone} />

            <TextContainer label="Age :" title={doctorInfo?.age} />

            <TextContainer label="Role :" title={doctorInfo?.role} />

            <TextContainer label="Cnic :" title={doctorInfo?.cnic} />

            <TextContainer label="Gender :" title={doctorInfo?.gender} />

            <TextContainer label="City :" title={doctorInfo?.city} />

            <ArrayContainer label="Location :" data={filterLocationName || []} />

            <TextContainer label="Address :" title={doctorInfo?.address} />

            <ArrayContainer label="Specialization :" data={doctorInfo?.specialization} />

            <ArrayContainer label="Certifications :" data={doctorInfo?.certifications} />

            <ArrayContainer label="Services :" data={doctorInfo?.services} />

            <ArrayContainer label="Education :" data={doctorInfo?.education} />

            <TextContainer
              label="Verified :"
              title={doctorInfo?.isVerified ? 'True' : 'False'}
            />

            <TextContainer label="Address :" title={doctorInfo?.yearOfExperience} />

            <TextContainer label="Bio :" title={doctorInfo?.bio} />

            <TextContainer label="Verified :" title={doctorInfo?.isDoctorVerified} />

            <TextContainer
              label="Created At :"
              title={formatDate(doctorInfo?.createdAt)}
            />

            <TextContainer
              label="Updated At :"
              title={formatDate(doctorInfo?.updatedAt)}
            />
          </div>

          <Text
            containerTag="h1"
            className="text-lg font-semibold text-grayColor pt-10 mb-3"
          >
            Patient Information
          </Text>

          <div className="w-full flex items-center justify-center mb-5">
            <div className="relative w-[100px] h-[100px] border-[3px] border-background rounded-full overflow-hidden object-cover ">
              <img
                src={data?.patientInfo?.profileImage?.url || NoProfile}
                alt="Profile"
                draggable={false}
              />
            </div>
          </div>
          <div className="relative flex flex-col gap-3">
            <TextContainer
              label="Name :"
              title={`${patientInfo?.name} ${patientInfo?.middlename}`}
            />

            <TextContainer label="Email :" title={patientInfo?.email} />

            <TextContainer label="Phone :" title={patientInfo?.phone} />

            <TextContainer label="Age :" title={patientInfo?.age} />

            <TextContainer label="Role :" title={patientInfo?.role} />

            <TextContainer label="Cnic :" title={patientInfo?.cnic} />

            <TextContainer label="Gender :" title={patientInfo?.gender} />

            <TextContainer label="City :" title={patientInfo?.city} />

            <ArrayContainer
              label="Location :"
              data={
                patientInfo?.location &&
                patientInfo?.location?.length > 0 &&
                patientInfo?.location.map((location: any) => location.name)
              }
            />

            <TextContainer label="Address :" title={patientInfo?.address} />

            <TextContainer
              label="Verified :"
              title={patientInfo?.isVerified ? 'True' : 'False'}
            />

            <TextContainer
              label="Created At :"
              title={formatDate(patientInfo?.createdAt)}
            />

            <TextContainer
              label="Updated At :"
              title={formatDate(patientInfo?.updatedAt)}
            />
          </div>
        </div>
      </CustomDrawer>
    </>
  );
}

export default ReservationDrawer;
