import React from 'react';
import './InitalValue.scss';

const InitalValue = ({ state, setState, icon }) => {
  /* eslint react/prop-types: 0 */
  console.log(state);
  const onChange = ({ target }) => {
    if (icon === 'people') {
      setState({
        ...state,
        Person: target.value,
      });
    } else {
      setState({
        ...state,
        Total: target.value,
      });
    }
  };
  return (
    <div>
      <input
        className="InitalValue"
        type="number"
        onChange={onChange}
        defaultValue={icon === 'people' ? '1' : '0'}
      ></input>
    </div>
  );
};

export default InitalValue;
