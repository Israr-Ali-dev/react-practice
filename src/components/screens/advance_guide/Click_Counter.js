import React, { Component } from 'react';
import withCounter from './withCounter';

export class Click_Counter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>
          {this.props.name} Clicked {count} times
        </button>
      </div>
    );
  }
}

export default withCounter(Click_Counter, 5);
