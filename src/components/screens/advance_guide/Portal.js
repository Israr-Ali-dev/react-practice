import React from 'react';
import ReactDOM from 'react-dom';

function Portal() {
  return ReactDOM.createPortal(
    <h1>First Portal</h1>,
    document.getElementById('model-root')
  );
}

export default Portal;
