import React from 'react';
import './TipButton.scss';

export const TipButton = ({ item, state, setState }) => {
  /* eslint react/prop-types: 0 */
  const onChange = () => {
    const tipsByPerson = state.Total * (item / 100);
    const totalAll =
      Number.parseFloat(state.Total) + Number.parseFloat(tipsByPerson);
    setState({
      ...state,
      Total: totalAll,
    });
  };
  return (
    <div>
      <button className="TipButton m-2" onClick={onChange}>
        {item}%
      </button>
    </div>
  );
};
