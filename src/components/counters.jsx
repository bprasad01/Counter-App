import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
 
  render() {
     const { onReset, counters, onDelete, onIncrement, onDecrement} = this.props;
    return (
      <div>
      <button onClick={onReset} className="btn btn-primary btn-sm m-2">RESET</button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            // Bubbling that event to this parent
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter  = { counter }
            
          />
        ))}
      </div>
    );
  }
}

export default Counters;
