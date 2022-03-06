import React, { useState } from 'react';

function Counter(props) {
  const [state, setstate] = useState({ count: 0 });

  const incerment = () => {
    setstate({ count: state.count + 1 });
  };

  return <div>{props.render(state.count, incerment)}</div>;
}

export default Counter;
