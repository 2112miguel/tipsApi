import React from 'react';
import './InitalValue.scss';

const InitalValue = ({ state, setState, icon }) => {
  /* eslint react/prop-types: 0 */
  const onChange = ({ target }) => {
    if (icon === 'people') {
      console.log(target.value);
      const byPerson = state.Total / state.Person;
      setState({
        ...state,
        Person: target.value,
        AmountByPerson: byPerson,
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
