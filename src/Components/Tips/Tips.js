import React from 'react';
import './Tips.scss';
import ButtonCustom from '../ButtonCustom';
import { TipButton } from '../TipButton/TipButton';

const TipsNumber = [
  { tip: 5 },
  { tip: 10 },
  { tip: 15 },
  { tip: 25 },
  { tip: 50 },
];

export const Tips = ({ state, setState }) => {
  /* eslint react/prop-types: 0 */
  return (
    <div className="d-flex flex-wrap w-75">
      {TipsNumber.map((item) => {
        return (
          <TipButton
            key={item.tip}
            item={item.tip}
            state={state}
            setState={setState}
          />
        );
      })}
      <ButtonCustom />
    </div>
  );
};
