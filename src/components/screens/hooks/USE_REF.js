import React, { useRef } from 'react';

function USE_REF() {
  let mailRef = useRef(null);

  const btnFocus = () => {
    mailRef.current.focus();
  };
  return (
    <div>
      <input type='name' ref={mailRef}></input>
      <button onClick={btnFocus}>Focus</button>
    </div>
  );
}

export default USE_REF;
