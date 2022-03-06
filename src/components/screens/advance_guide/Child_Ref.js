import React from 'react';
import Ref_Forwarding from './Ref_Forwarding';

function Child_Ref() {
  let inputRef = React.createRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <Ref_Forwarding ref={inputRef} />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default Child_Ref;
