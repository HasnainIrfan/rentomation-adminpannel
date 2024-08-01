import React from 'react';
import LoginForm from '../organisms/LoginForm';
// import Text from "../atoms/commonText";

const Login = () => {
  return (
    <div className="w-full h-[100vh] bg-background flex items-center justify-center px-3">
      <div className="w-[900px] bg-white flex min-h-[500px] rounded-md overflow-hidden shadow-xl border border-lightGray">
        <div className="flex-[1.5] bg-primary p-12 flex justify-center"></div>
        <div className="flex-1 bg-white p-12">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
