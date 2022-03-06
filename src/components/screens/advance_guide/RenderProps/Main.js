import React from 'react';
import Counter from './Counter';
import HoverCounter from './HoverCounter';
import ClickCounter from './ClickCounter';

function Main() {
  return (
    <div>
      <Counter
        render={(count, increment) => {
          return (
            <ClickCounter count={count} increment={increment}></ClickCounter>
          );
        }}
      />
      <Counter
        render={(count, increment) => {
          return (
            <HoverCounter count={count} increment={increment}></HoverCounter>
          );
        }}
      />
    </div>
  );
}

export default Main;
