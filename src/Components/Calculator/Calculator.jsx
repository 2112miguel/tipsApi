import React from 'react';
import './Calculator.scss';

const Calculator = ({ children }) => {
  /* eslint react/prop-types: 0 */
  return (
    <div className="">
      <div className="bg-white p-4 rounded-3">
        <div className="d-flex flex-column flex-md-row">{children}</div>
      </div>
    </div>
  );
};

export default Calculator;
