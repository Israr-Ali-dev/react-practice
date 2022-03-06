import React, { useContext } from 'react';
import { ContextAPExample, ContextAPIExample } from './CustomHooks';

function ChildFunction() {
  let data = useContext(ContextAPIExample);

  return (
    <div>
      <h1>My name {data.lname}</h1>
    </div>
  );
}

export default ChildFunction;
