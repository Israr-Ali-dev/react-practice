import React, { useLayoutEffect, useState, useEffect } from 'react';

const USE_LAYOUTEFFECT = () => {
  const [name, setName] = useState('Rahul');

  //   useLayoutEffect(() => {
  //     if (name === 'Rahul') {
  //       setName('Bansal');
  //     }
  //   }, [name]);

  useEffect(() => {
    if (name === 'Rahul') {
      setName('Bansal');
    }
  }, [name]);
  return <div>{name} has email id of rahul@tutorialspoint.com</div>;
};
export default USE_LAYOUTEFFECT;
