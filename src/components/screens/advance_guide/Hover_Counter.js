import React from 'react';
import withCounter from './withCounter';

function Hover_Counter(props) {
  const { count, incrementCount } = props;
  return (
    <div>
      <button onMouseOver={incrementCount}>
        {props.name} Clicked {count} times
      </button>
    </div>
  );
}

export default withCounter(Hover_Counter, 1);
