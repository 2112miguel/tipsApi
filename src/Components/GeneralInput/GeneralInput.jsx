import React from 'react';
import Label from '../Label';
import Icon from '../Icon';
import InitalValue from '../initalValue/InitalValue';
import './GeneralInput.scss';

const GeneralInput = ({ text, icon, state, setState }) => {
  /* eslint react/prop-types: 0 */
  return (
    <div className="flex-column m-3">
      <Label text={text} />
      <div className="flex-row my-2">
        <Icon icon={icon} />
        <InitalValue state={state} setState={setState} icon={icon} />
      </div>
    </div>
  );
};

export default GeneralInput;
