import React from 'react';

// React Router Dom
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <>
      <div className="notfound">
        <div className="notfound_wrapper">
          <div className="notfound_box">
            <div className="notfound_image">
              <div className="notfound_text">
                <h1>404</h1>
                <span>Page Not Found</span>
              </div>
              {/* <img src={Image} alt="" srcset="" draggable="false" /> */}
            </div>
            <div className="notfound_button">
              <button>
                <Link to="/dashboard">Return Home</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
