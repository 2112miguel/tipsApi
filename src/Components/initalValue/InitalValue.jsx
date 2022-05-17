import React, { useContext } from 'react';
import './InitalValue.scss';
import { CalculatorContext } from '../../Context/Calculator/CalculatorContext';

const InitalValue = ({ state, setState, icon }) => {
  /* eslint react/prop-types: 0 */
  const Context = useContext(CalculatorContext);

  const onChange = ({ target }) => {
    if (icon === 'Person') {
      Context.setInfo(target.value, target.name);
      const byPerson = state.Total / state.Person;
      setState({
        ...state,
        Person: target.value,
        AmountByPerson: byPerson,
      });
    } else {
      Context.setInfo(target.value, target.name);
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
        name={icon}
        defaultValue={icon === 'Person' ? '1' : '0'}
      ></input>
    </div>
  );
};

export default InitalValue;
