import React from 'react';
import './InitalValue.scss';

const InitalValue = ({ state, setState }) => {
  /* eslint react/prop-types: 0 */
  const onChange = ({ target }) => {
    setState({
      ...state,
      Total: target.value,
    });
  };
  return (
    <div>
      <input
        className="InitalValue"
        type="text"
        value="0"
        onChange={onChange}
      ></input>
    </div>
  );
};

export default InitalValue;
