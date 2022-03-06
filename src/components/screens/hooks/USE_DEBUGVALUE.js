import React from 'react';

function useCustomHook(val) {
  const [value, setValue] = useState(null);
  useDebugValue(value ? 'Not Empty' : 'Empty');
  return value;
}
function USE_DEBUGVALUE() {
  return <div></div>;
}

export default USE_DEBUGVALUE;
