import React from 'react';
import './App.scss';
import Calculator from './Components/Calculator';
import GeneralInput from './Components/GeneralInput';
import { Tips } from './Components/Tips/Tips';
import { Result } from './Components/Result/Result';

function App() {
  const [state, setState] = React.useState({
    Total: 0,
    InitialTotal: 0,
    Tips: 0,
    TipsAmount: 0,
    Person: 1,
    tipsByPerson: 0,
    AmountByPerson: 0,
  });

  return (
    <div className="">
      <div id="" className=" ">
        <div id="" className="App">
          <div id="" className="">
            <Calculator>
              <section>
                <GeneralInput
                  text="Bill"
                  icon="Total"
                  state={state}
                  setState={setState}
                />
                <Tips state={state} setState={setState} />
                <GeneralInput
                  text="Number of People"
                  icon="Person"
                  state={state}
                  setState={setState}
                />
              </section>
              <section>
                <Result state={state} setState={setState} />
              </section>
            </Calculator>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
