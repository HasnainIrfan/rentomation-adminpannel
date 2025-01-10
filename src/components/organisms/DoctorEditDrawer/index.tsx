/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';

// React Hook Form
import { Controller, useForm } from 'react-hook-form';

// Types
import { DoctorDataType } from '../../../types/userTypes';

// Components
import FloatInput from '../FloatInput';
import SelectInput from '../../atoms/select';
import SolidRadio from '../../atoms/solidRadio';
import CustomDrawer from '../Drawer';
import Button from '../../atoms/Button';

// Data
import {
  EducationOptions,
  PakistanLocations,
  RadioOption,
  SpecializationOptions,
  genderOptions,
  isDoctorVerifiedOption,
  servidesData,
  waitTimeData,
} from '../../../data/dummyData';
import { showToast } from './../../../utils/toast';

// Utils
import { useUpdateUserMutation } from './../../../redux/slice/userSlice';
import TextArea from '../../atoms/textArea';

type PropsTypes = {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
  data: DoctorDataType | null;
};

function DoctorEditDrawer({ open, setOpen, data }: PropsTypes) {
  const [selectedCity, setSelectedCity] = useState<string>('');

  const [updateUser, { isLoading: updateLoading }] = useUpdateUserMutation();

  const {
    formState: { errors },
    handleSubmit,
    setValue,
    register,
    control,
  } = useForm<DoctorDataType>({
    mode: 'onTouched',
  });

  // useEffect(() => {
  //   if (data) {
  //   }
  // }, [data]);

  const onSubmit = async (formData: any) => {
    // try {
    //   const res = await updateUser({
    //     id: data?._id,
    //     data: formattedData,
    //   });
    //   if (res?.data) {
    //     showToast({
    //       message: 'Doctor Updated Successfully',
    //     });
    //   }
    // } catch (error) {
    //   console.error('error', error);
    // } finally {
    //   setOpen(false);
    // }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <CustomDrawer
      title="Doctor Edit"
      removePadding
      childrenRemovePadding
      open={open}
      handleClose={handleClose}
    ></CustomDrawer>
  );
}

export default DoctorEditDrawer;
