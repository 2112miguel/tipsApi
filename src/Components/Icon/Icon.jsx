import React from 'react';
import './Icon.scss';
const Icon = ({ icon }) => {
  /* eslint react/prop-types: 0 */
  return (
    <>
      <img
        className="Icon"
        src={
          icon === 'people'
            ? 'https://cdn-icons-png.flaticon.com/512/456/456212.png'
            : 'https://cdn-icons-png.flaticon.com/512/991/991952.png'
        }
        alt=""
      />
    </>
  );
};

export default Icon;
