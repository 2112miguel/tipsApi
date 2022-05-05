import React from 'react';
import './Calculator.scss';

const Calculator = ({ children }) => {
  /* eslint react/prop-types: 0 */
  return (
    <div className="">
      <div className="Calculator Calculator-align">
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default Calculator;
