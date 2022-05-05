import React from 'react';
import './TipButton.scss';

export const TipButton = ({ item }) => {
  /* eslint react/prop-types: 0 */
  return (
    <div>
      <button className="TipButton">{item}%</button>
    </div>
  );
};
