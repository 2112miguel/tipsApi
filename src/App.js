import React from 'react';
import './App.scss';
import Calculator from './Components/Calculator';
import { PersonalAmount } from './Components/PersonalAmount';
import GeneralInput from './Components/GeneralInput';
import { Tips } from './Components/Tips/Tips';
import Result from './Components/Result/Result';

function App() {
  const [state, setState] = React.useState({
    Total: 0,
    Tips: 0,
    TipsAmount: 0,
    Person: 1,
    tipsByPerson: 0,
    AmountByPerson: 0,
  });
  return (
    <div>
      <div id="" className="">
        <div id="" className="">
          <div id="" className="App">
            <Calculator>
              <GeneralInput text="Bill" icon="dollar" />
              <Tips />
              <GeneralInput
                text="Number of People"
                icon="people"
                state={state}
                setState={setState}
              />
              <div>
                <Result />
              </div>
            </Calculator>
            <PersonalAmount />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
