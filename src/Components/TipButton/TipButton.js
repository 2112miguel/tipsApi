import React from 'react';
import './TipButton.scss';

export const TipButton = ({ tip }) => {
  return (
    <div>
      <button className="TipButton">%{tip}</button>
    </div>
  );
};
