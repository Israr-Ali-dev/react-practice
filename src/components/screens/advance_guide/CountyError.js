import React, { Component } from 'react';
import Error_Boundry from './Error_Boundry';

class CountyError extends Component {
  state = {
    counter: 0,
  };
  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  render() {
    if (this.state.counter === 5) {
      // Simulate an error!
      throw new Error('I crashed!');
    }
    return (
      <Error_Boundry>
        <div>
          <h1>{this.state.counter}</h1>
          <button onClick={this.handleClick}>+</button>
        </div>
      </Error_Boundry>
    );
  }
}

export default CountyError;
