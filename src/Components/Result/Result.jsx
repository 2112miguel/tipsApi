import React from 'react';
import './Result.scss';
import LabelResult from '../LabelResult';
import LabelResultPerson from '../LabelResultPerson';
import LabelResultPrices from '../LabelResultPrices';
import ButtonReset from '../ButtonReset';
import { CalculatorContext } from '../../Context/Calculator/CalculatorContext';

export const Result = ({ state, setState }) => {
  /* eslint react/prop-types: 0 */
  const Context = React.useContext(CalculatorContext);

  return (
    <div className="Result rounded-3 m-2 p-5">
      <div className="Result-row">
        <div className="Result-column">
          <LabelResult />
          <LabelResultPerson />
        </div>
        <LabelResultPrices total={Context.state.Total} />
      </div>
      <div className="Result-row">
        <div className="Result-column">
          <LabelResult />
          <LabelResultPerson />
        </div>
        <LabelResultPrices total={Context.state.AmountByPerson} />
      </div>
      <ButtonReset state={state} setState={setState} />
    </div>
  );
};
