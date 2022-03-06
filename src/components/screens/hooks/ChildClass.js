import React from 'react';
import { ContextAPIExample } from './CustomHooks';

function ChildClass() {
  return (
    <div>
      <ContextAPIExample.Consumer>
        {(multi) => {
          return <h1>My name {multi.fname}</h1>;
        }}
      </ContextAPIExample.Consumer>
    </div>
  );
}

export default ChildClass;
ChildClass.contextType = ContextAPIExample;
