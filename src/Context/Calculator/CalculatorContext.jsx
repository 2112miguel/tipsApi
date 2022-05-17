import React, { createContext, useState } from 'react';

export const CalculatorContext = createContext();

const initalState = {
  Total: 0,
  InitialTotal: 0,
  Tips: 0,
  TipsAmount: 0,
  Person: 1,
  TipsByPerson: 0,
  AmountByPerson: 0,
};

export const CalculatorProvider = ({ children }) => {
  const [state, setState] = useState(initalState);

  const setInfo = (info, name) => {
    setState({
      ...state,
      [name]: info,
    });
  };

  const resetInfo = () => {
    setState(initalState);
  };
  const Calc = (Tips) => {
    const TipsAmount = state.Total * (Tips / 100);
    const Total = Number(state.Total) + Number(state.TipsAmount);
    const TipsByPerson = TipsAmount / state.Person;
    const AmountByPerson = Total / state.Person;
    setState({
      ...state,
      Total,
      TipsAmount,
      AmountByPerson,
      TipsByPerson,
    });
  };

  return (
    <CalculatorContext.Provider
      value={{
        state,
        setInfo,
        resetInfo,
        Calc,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
