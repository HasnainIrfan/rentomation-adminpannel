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

  useEffect(() => {
    if (data) {
      setValue('name', data?.name);
      setValue('middlename', data?.middlename);
      setValue('age', data?.age);
      setValue('cnic', data?.cnic);
      setValue('email', data?.email);
      setValue('address', data?.address);
      setValue('city', data?.city);
      setSelectedCity(data?.city);
      setValue('specialization', data?.specialization);
      setValue('gender', data?.gender);
      setValue('phone', data?.phone);
      setValue('waitTime', data?.waitTime);
      setValue('yearOfExperience', data?.yearOfExperience);
      setValue('certifications', data?.certifications);
      setValue('qualifications', data?.qualifications);
      setValue('services', data?.services);
      setValue('education', data?.education);
      setValue('descriptionOfExperience', data?.descriptionOfExperience);
      setValue('bio', data?.bio);
      setValue('isVerified', data?.isVerified);
      setValue('isDoctorVerified', data?.isDoctorVerified);
      setValue(
        'location',
        data?.location?.map((item: { name: string }) => item.name) as never
      );
    }
  }, [data]);

  const pakistanCities = PakistanLocations.map((item, key) => ({
    label: item?.city,
    value: item?.city,
    key,
  }));

  const selectedCityData = PakistanLocations.find(item => item.city === selectedCity);

  const pakistanAreas = selectedCityData?.areas.map((area, key) => ({
    label: area?.name,
    value: area?.name,
    key,
  }));

  const onSubmit = async (formData: any) => {
    const {
      specialization,
      age,
      role,
      middlename,
      services,
      education,
      certifications,
      location: locationName,
      email,
      isDoctorVerified,
      isVerified,
      ...newData
    } = formData;

    const findAreas = locationName?.map((item: string) => {
      const findLocation = selectedCityData?.areas.find(area => area.name === item);

      return {
        lat: findLocation?.lat,
        lng: findLocation?.lng,
        name: findLocation?.name,
      };
    });

    const formattedData = {
      ...newData,
      location: findAreas?.length > 0 ? findAreas : [],
      specialization: specialization?.length ? specialization : [],
      services: services?.length ? services : [],
      education: education?.length ? education : [],
      certifications: certifications?.length ? certifications : [],
      age: Number(age),
    };

    try {
      const res = await updateUser({
        id: data?._id,
        data: formattedData,
      });
      if (res?.data) {
        showToast({
          message: 'Doctor Updated Successfully',
        });
      }
    } catch (error) {
      console.error('error', error);
    } finally {
      setOpen(false);
    }
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
    >
      <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          rules={{
            required: `Name is Required`,
          }}
          render={({ field }) => (
            <FloatInput
              label="Name"
              type="text"
              name="name"
              field={field}
              errors={errors}
            />
          )}
        />

        <Controller
          name="middlename"
          control={control}
          rules={{
            required: `Father/Husband name is Required`,
          }}
          render={({ field }) => (
            <FloatInput
              label="Father/Husband Name"
              type="text"
              name="middlename"
              field={field}
              errors={errors}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          rules={{
            required: `Email is Required`,
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Invalid email address',
            },
          }}
          render={({ field }) => (
            <FloatInput
              label="Email"
              type="email"
              name="email"
              field={field}
              errors={errors}
              disabled
            />
          )}
        />

        <Controller
          name="phone"
          control={control}
          rules={{
            required: `Phone is Required`,
          }}
          render={({ field }) => (
            <FloatInput
              label="Phone"
              type="text"
              name="phone"
              field={field}
              errors={errors}
            />
          )}
        />

        <Controller
          name="age"
          control={control}
          rules={{
            required: `Age is Required`,
          }}
          render={({ field }) => (
            <FloatInput
              label="Age"
              type="number"
              name="age"
              field={field}
              errors={errors}
            />
          )}
        />

        <Controller
          name="cnic"
          control={control}
          rules={{
            required: `Cnic is Required`,
          }}
          render={({ field }) => (
            <FloatInput
              label="Cnic"
              type="number"
              name="cnic"
              field={field}
              errors={errors}
            />
          )}
        />

        <Controller
          name="city"
          control={control}
          rules={{
            required: `City is required`,
            onChange() {
              setValue('location', [] as never);
            },
          }}
          render={({ field }) => (
            <SelectInput
              title="Select City"
              required
              field={field}
              placeholder="Select City"
              errors={errors}
              options={pakistanCities}
              onChange={e => setSelectedCity(e)}
            />
          )}
        />

        <Controller
          name="location"
          control={control}
          rules={{
            required: `Location is Required`,
          }}
          render={({ field }) => (
            <SelectInput
              title="location"
              field={field}
              placeholder="Select locations"
              errors={errors}
              options={pakistanAreas || []}
            />
          )}
        />

        <Controller
          name="address"
          control={control}
          rules={{
            required: `Address is Required`,
          }}
          render={({ field }) => (
            <FloatInput
              label="Address"
              type="text"
              name="address"
              field={field}
              errors={errors}
            />
          )}
        />

        <Controller
          name="waitTime"
          control={control}
          render={({ field }) => (
            <SelectInput
              title="waitTime"
              field={field}
              placeholder="Select wait Time"
              options={waitTimeData || []}
            />
          )}
        />

        <Controller
          name="yearOfExperience"
          control={control}
          rules={{
            maxLength: {
              value: 2,
              message: 'Years of experience must be 2 digits',
            },
          }}
          render={({ field }) => (
            <FloatInput
              label="Years Of Experience"
              type="number"
              name="yearOfExperience"
              field={field}
            />
          )}
        />

        <Controller
          name="specialization"
          control={control}
          rules={{
            required: `Specialization is Required`,
          }}
          render={({ field }) => (
            <SelectInput
              title="Specialization"
              field={field}
              placeholder="Select Specialization"
              options={SpecializationOptions || []}
            />
          )}
        />

        <Controller
          name="certifications"
          control={control}
          render={({ field }) => (
            <SelectInput
              title="Certifications"
              field={field}
              placeholder="Select Certifications"
              options={SpecializationOptions || []}
            />
          )}
        />

        <Controller
          name="qualifications"
          control={control}
          render={({ field }) => (
            <FloatInput
              label="Qualifications"
              type="text"
              name="qualifications"
              field={field}
            />
          )}
        />

        <Controller
          name="services"
          control={control}
          render={({ field }) => (
            <SelectInput
              title="Services"
              field={field}
              placeholder="Select Services"
              options={servidesData || []}
            />
          )}
        />

        <Controller
          name="education"
          control={control}
          render={({ field }) => (
            <SelectInput
              title="Education"
              field={field}
              placeholder="Select Education"
              options={EducationOptions || []}
            />
          )}
        />

        <TextArea
          title="Description Of Your Experience  :"
          placeholder="Description Of Your Experience"
          label="descriptionOfExperience"
          name="descriptionOfExperience"
          register={register}
        />

        <TextArea
          title="Bio :"
          placeholder="Bio"
          label="bio"
          name="bio"
          register={register}
        />

        <Controller
          name="isVerified"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <SolidRadio title="Verified" field={field} option={RadioOption} />
          )}
        />

        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <SolidRadio title="Gender" field={field} option={genderOptions} />
          )}
        />

        <Controller
          name="isDoctorVerified"
          control={control}
          render={({ field }) => (
            <SolidRadio
              title="isDoctorVerified"
              field={field}
              option={isDoctorVerifiedOption}
            />
          )}
        />

        <div className="w-full mt-6">
          <Button
            size="large"
            htmlType="submit"
            isLoading={updateLoading}
            disabled={updateLoading}
          >
            Update Doctor
          </Button>
        </div>
      </form>
    </CustomDrawer>
  );
}

export default DoctorEditDrawer;
