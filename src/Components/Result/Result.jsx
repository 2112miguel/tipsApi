import React from 'react';
import './Result.scss';
import LabelResult from '../LabelResult';
import LabelResultPerson from '../LabelResultPerson';
import LabelResultPrices from '../LabelResultPrices';
import ButtonReset from '../ButtonReset';
const Result = () => {
  return (
    <div className="Result">
      <div className="Result-row">
        <div className="Result-column">
          <LabelResult />
          <LabelResultPerson />
        </div>
        <LabelResultPrices />
      </div>
      <div className="Result-row">
        <div className="Result-column">
          <LabelResult />
          <LabelResultPerson />
        </div>
        <LabelResultPrices />
      </div>
      <ButtonReset />
    </div>
  );
};

export default Result;
