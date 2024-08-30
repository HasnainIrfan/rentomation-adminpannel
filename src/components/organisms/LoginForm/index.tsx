import React from 'react';
import { useNavigate } from 'react-router-dom';

// Icons
import { User, Lock } from 'iconsax-react';

// use hook form
import { SubmitHandler, useForm } from 'react-hook-form';

// Components
import Text from '../../atoms/commonText';
import Input from '../../atoms/input';
import Button from '../../atoms/Button';

// Types
import { LoginPropsType } from '../../../types/loginTypes';

//Redux
import { useLoginMutation } from '../../../redux/slice/loginSlice';

//Cookie
import { setCookie } from '../../../utils/cookie';

//Data
import { LABELS } from '../../../data/labels';
import { LINKS } from '../../../data/links';

// Utils
import { showToast } from '../../../utils/toast';
import { TABAYAD_SESSION } from '../../..//utils/constant';

const LoginForm = () => {
  const nevigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation({});

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginPropsType>({
    mode: 'onTouched',
  });

  const onSubmit: SubmitHandler<LoginPropsType> = async formValues => {
    try {
      const res = await login(formValues);
      const userDetail = res?.data?.data;

      if (res?.data && userDetail.role === 'doctor') {
        showToast({
          message: 'Login Successfully',
          type: 'success',
        });
        setCookie(TABAYAD_SESSION, JSON.stringify(userDetail));
        nevigate(LINKS.DASHBOARD);
      } else if (res?.error) {
        return showToast({
          message: 'Invalid Credentials',
          type: 'error',
        });
      } else if (res?.data && userDetail.role !== 'doctor') {
        return showToast({
          message: 'You are not Authorized',
          type: 'error',
        });
      } else {
        return showToast({
          message: 'Something went wrong',
          type: 'error',
        });
      }
    } catch (error) {
      console.error('error on login', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-16">
        <Text
          containerTag="h2"
          className="font-fontBold font-bold text-left text-4xl mb-1 text-primary"
        >
          {LABELS.signIn}
        </Text>

        <Text containerTag="h2" className="text-xs font-light">
          {LABELS.signInDesc}
        </Text>
      </div>

      <div className="flex flex-col gap-3 mb-[65px]">
        <Input
          label="email"
          type="text"
          inputIcon={<User />}
          register={register}
          name="email"
          placeholder="Your Email"
          errors={errors}
          check={{
            required: `Email is Required`,
            pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          }}
        />

        <Input
          label="password"
          type="password"
          inputIcon={<Lock />}
          register={register}
          name="password"
          errors={errors}
          placeholder="Your Password"
          check={{
            required: `Password is Required`,
          }}
        />
      </div>

      <Button
        isLoading={isLoading}
        color="primary"
        htmlType="submit"
        className="bg-primary w-full"
      >
        {LABELS.login}
      </Button>
    </form>
  );
};

export default LoginForm;
