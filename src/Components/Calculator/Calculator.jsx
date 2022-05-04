import React from 'react';
import './Calculator.scss';
import GeneralInput from '../GeneralInput';
import { Tips } from '../Tips/Tips';
import Result from '../Result/Result';
const Calculator = () => {
  return (
    <div className="">
      <div className="Calculator Calculator-align">
        <div className="">
          <GeneralInput />
          <Tips />
          <GeneralInput />
        </div>
        <div>
          <Result />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
