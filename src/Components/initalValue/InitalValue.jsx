import React from 'react';
import './InitalValue.scss';

const InitalValue = () => {
  const [total, setTotal] = React.useState(0);
  return (
    <div>
      <input
        className="InitalValue"
        type="text"
        value={total}
        onChange={(e) => {
          const value = e.target.value;
          console.log(value);
          setTotal(value);
        }}
      ></input>
    </div>
  );
};

export default InitalValue;
