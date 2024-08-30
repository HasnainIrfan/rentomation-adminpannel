import React, { useEffect, useState } from 'react';

// React Hook Form
import { Controller, useForm } from 'react-hook-form';

// Types
import { UserData } from '../../../types/userTypes';

// Components
import FloatInput from '../FloatInput';
import SelectInput from '../../atoms/select';
import SolidRadio from '../../atoms/solidRadio';
import CustomDrawer from '../Drawer';

// Data
import { PakistanLocations, RadioOption, genderOptions } from '../../../data/dummyData';

type PropsTypes = {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
  data: UserData | null;
};

function DoctorEditDrawer({ open, setOpen, data }: PropsTypes) {
  const [selectedCity, setSelectedCity] = useState<string>('');

  const {
    formState: { errors },
    handleSubmit,
    setValue,
    control,
  } = useForm<UserData>({
    mode: 'onTouched',
  });

  useEffect(() => {
    if (data) {
      setValue('name', data.name);
      setValue('middlename', data.middlename);
      setValue('email', data.email);
      setValue('phone', data.phone);
      setValue('age', data.age);
      setValue('role', data.role);
      setValue('cnic', data.cnic);
      setValue('city', data.city);
      setValue('location', data.location);
      setValue('address', data.address);

      setValue('isVerified', data?.isVerified);
      setValue('gender', data?.gender);
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

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <CustomDrawer
      title="User Edit"
      removePadding
      childrenRemovePadding
      open={open}
      handleClose={handleClose}
    >
      <form action="" className="flex flex-col gap-4">
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
          name="role"
          control={control}
          rules={{
            required: `Role is Required`,
          }}
          render={({ field }) => (
            <FloatInput
              label="Role"
              type="text"
              name="role"
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
      </form>
    </CustomDrawer>
  );
}

export default DoctorEditDrawer;
