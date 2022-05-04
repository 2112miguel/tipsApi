import React from 'react';
import Label from '../Label';
import Icon from '../Icon';
import InitalValue from '../initalValue/InitalValue';
import './GeneralInput.scss';

const GeneralInput = () => {
  return (
    <div className="flex-column">
      <Label />
      <div className="flex-row">
        <Icon />
        <InitalValue />
      </div>
    </div>
  );
};

export default GeneralInput;
