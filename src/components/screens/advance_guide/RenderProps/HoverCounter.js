import React from 'react';

function HoverCounter(props) {
  const { count, increment } = props;
  return (
    <div>
      <button onMouseOver={increment}>Hover {count} time</button>
    </div>
  );
}

export default HoverCounter;
