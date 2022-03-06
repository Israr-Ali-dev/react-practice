import React, { Component } from 'react';

class Error_Boundry extends Component {
  state = {
    errorMessage: '',
  };
  static getDerivedStateFromError(error) {
    return { errorMessage: error.toString() };
  }
  componentDidCatch(error, info) {
    this.logErrorToServices(error.toString(), info.componentStack);
  }
  // A fake logging service 😬
  logErrorToServices = console.log;
  render() {
    if (this.state.errorMessage) {
      return <h1>Something Went Wrong</h1>;
    }
    return this.props.children;
  }
}

export default Error_Boundry;
