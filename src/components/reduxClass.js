import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../components/actions/actions';

export class reduxClass extends Component {
  // state = { counter: 0 };
  render() {
    return (
      <div>
        <h2>Redux Class Componet</h2>
        <button onClick={this.props.onIncrementCounter}>Increment</button>
        {this.props.ctr}
        <button onClick={this.props.onDecrementCounter}>Decrement</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxClass);
