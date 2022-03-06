import React, { Component } from 'react';

const multi = {
  c1: 'yellow',
  c2: 'brown',
};

export class Practice extends Component {
  render() {
    return (
      <div>
        <MyContext.Provider value={multi}>
          <Practice2 />
        </MyContext.Provider>
      </div>
    );
  }
}

export default Practice;

export const MyContext = React.createContext();

export class Practice2 extends Component {
  render() {
    return (
      <div>
        <MyContext.Consumer>
          {(multi) => {
            return `MY Love ${multi.c1}`;
          }}
        </MyContext.Consumer>
      </div>
    );
  }
}
