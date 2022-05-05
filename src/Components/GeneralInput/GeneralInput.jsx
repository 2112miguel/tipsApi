import React from 'react';
import Label from '../Label';
import Icon from '../Icon';
import InitalValue from '../initalValue/InitalValue';
import './GeneralInput.scss';

const GeneralInput = ({ text, icon, state, setState }) => {
  /* eslint react/prop-types: 0 */
  return (
    <div className="flex-column">
      <Label text={text} />
      <div className="flex-row">
        <Icon icon={icon} />
        <InitalValue state={state} setState={setState} />
      </div>
    </div>
  );
};

export default GeneralInput;
