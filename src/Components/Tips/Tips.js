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

export const Tips = () => {
  console.log(TipsNumber);
  return (
    <div className="Tips">
      {TipsNumber.map((item) => {
        return <TipButton key={item.tip} item={item.tip} />;
      })}
      <ButtonCustom />
    </div>
  );
};
