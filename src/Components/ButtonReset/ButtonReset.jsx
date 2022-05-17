import React from 'react';
import './ButtonReset.scss';
import { CalculatorContext } from '../../Context/Calculator/CalculatorContext';

const ButtonReset = ({ state, setState }) => {
  const Context = React.useContext(CalculatorContext);
  const onChange = () => {
    console.log(Context.state.AmountByPerson);
    Context.resetInfo();
    setState({
      Total: 0,
      Tips: 0,
      TipsAmount: 0,
      Person: 1,
      tipsByPerson: 0,
      AmountByPerson: 0,
    });
  };

  return (
    <div>
      <button
        className={state.Total !== 0 ? 'ButtonResetChange' : ' ButtonReset'}
        onClick={onChange}
      >
        RESET
      </button>
    </div>
  );
};

export default ButtonReset;
