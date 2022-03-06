import React, { useState } from 'react';
import MyHOC from './MyHOC';

class HOC extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.love}</h1>
      </div>
    );
  }
}

export default MyHOC(HOC);
