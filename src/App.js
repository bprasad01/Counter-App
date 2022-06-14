import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  // function for handle increment value of each counter
  handleIncrement = (counter) => {
    // clone of the counter object using spread operator
    const counters = [...this.state.counters];
    // find index of the counter array
    const index = counters.indexOf(counter);
    // clone of the counter object that we received as a argument here using spread operator
    counters[index] = { ...counter };
    // increment tha value of each object element
    counters[index].value++;
    // update the state using setState function
    this.setState({ counters });
  };

  // function for handle decrement value of each counter
  handleDecrement = (counter) => {
    // clone of the counter object using spread operator
    const counters = [...this.state.counters];
    // find index of the counter array
    const index = counters.indexOf(counter);
    // clone of the counter object that we received as a argument here using spread operator
    counters[index] = { ...counter };
    // decrement the value of each object element
    counters[index].value--;
    // update the state using setState function
    this.setState({ counters });
  };

  // function for delete counter
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters });
  };

  // function for reset value of each counter
  handleReset = () => {
    /* using map mathod to get the each counter and reset its 
     value to 0 & this will return a new array of counters */
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={
            this.state.counters.filter((count) => count.value > 0).length
          }
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
