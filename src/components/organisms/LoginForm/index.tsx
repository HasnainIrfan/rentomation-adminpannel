// Icons
import { AiOutlineUser } from 'react-icons/ai';
import { FiLock } from 'react-icons/fi';

// use hook form
import { useForm } from 'react-hook-form';

// Components
import Text from '../../atoms/commonText';
import Input from '../../atoms/input';
import Button from '../../atoms/Button';

// Types
import { LoginPropsType } from '@/src/types/loginTypes';

const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginPropsType>({
    mode: 'onTouched',
  });

  const onSubmit = (data: LoginPropsType) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-16">
        <Text
          containerTag="h2"
          className="font-fontBold font-bold text-left text-4xl mb-1 text-primary"
        >
          Sign In
        </Text>

        <Text containerTag="h2" className="text-xs font-light">
          Hey enter your details to sign in to your account
        </Text>
      </div>

      <div className="flex flex-col gap-3 mb-3">
        <Input
          label="email"
          type="text"
          inputIcon={<AiOutlineUser />}
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
          label="Password"
          type="password"
          inputIcon={<FiLock />}
          register={register}
          name="password"
          errors={errors}
          placeholder="Your Password"
          check={{
            required: `Password is Required`,
          }}
        />
      </div>

      <Text containerTag="h2" className="text-xs text-pretty font-medium mb-8">
        Having trouble signing in?
      </Text>

      <Button color="primary" type="primary">
        Login In
      </Button>

      <Text containerTag="h2" className="text-xs font-medium mt-3">
        Forgot your password?{' '}
        <span className="text-primary cursor-pointer">Reset Password</span>
      </Text>
    </form>
  );
};

export default LoginForm;
