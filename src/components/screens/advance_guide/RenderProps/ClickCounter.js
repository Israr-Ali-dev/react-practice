import React from 'react';

function ClickCounter(props) {
  const { count, increment } = props;
  return (
    <div>
      <button onClick={increment}>Click {count} time</button>
    </div>
  );
}

export default ClickCounter;
