import React from 'react';
import './ButtonReset.scss';

const ButtonReset = ({ state, setState }) => {
  console.log(state.Total);

  const onChange = () => {
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
