import React from 'react';
import LoginForm from '../organisms/LoginForm';

// Importing Carousel
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Images
import { sliderImage1, sliderImage2, sliderImage3 } from '../../assets/images/index';

const Login = () => {
  return (
    <div className="w-full h-[100vh] bg-background flex items-center justify-center px-3">
      <div className="w-[900px] bg-white flex min-h-[475px] rounded-md overflow-hidden shadow-xl border border-lightGray">
        <div className="flex-[1.5] hidden sm:flex items-center justify-center">
          <Carousel
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            showArrows={false}
            showStatus={false}
          >
            <img src={sliderImage1} alt="Find Talent" height="100%" />
            <img src={sliderImage2} alt="Increase Income" height="100%" />
            <img src={sliderImage3} alt="Increase Income" height="100%" />
          </Carousel>
        </div>
        <div className="flex-1 bg-white p-12">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
