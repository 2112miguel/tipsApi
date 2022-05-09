import React from 'react';
import './LabelResultPrices.scss';

const LabelResultPrices = ({ total }) => {
  /* eslint react/prop-types: 0 */
  return (
    <div className="LabelResultPrices">
      {total === 0 ? '$0.00' : `$ ${total}`}
    </div>
  );
};

export default LabelResultPrices;
