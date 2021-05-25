import React, { Component } from "react";
import Counter from "./counter";

const Counters = ({ onReset, Counters, onDelete, onIncrement }) => {
  return (
    <div>
      <button onClick={onReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      {Counters.map(counter => (
        <Counter
          key={counter.id}
          onDelete={onDelete}
          onIncrement={onIncrement}
          counter={counter}
        >
          <h4>Counter #{counter.id}</h4>
        </Counter>
      ))}
    </div>
  );
};

export default Counters;
