import React, {
  useState,
  useEffect,
  Fragment,
  useContext,
  useMemo,
} from 'react';
import ChildFunction from './ChildFunction';

function CustomHooks() {
  const [exampleState, setExampleState] = useState({
    fieldOne: 'a',
  });

  const handleState = () => {
    setExampleState({ ...exampleState, birthYear: 45 });
  };

  const add = (num1, num2) => {
    console.log('Adding numbers');
    return parseInt(num1) + parseInt(num2);
  };

  //   const answer = useMemo(() => {
  //     return add(10, 12);
  //   }, [val1, val2]);

  const multi = {
    fname: 'Sheri',
    lname: 'Ali',
  };
  return (
    <div>
      {/* <p>Age: {age}</p> */}
      <button onClick={handleState}>Increase Age</button>
      <ContextAPIExample.Provider value={multi}>
        <ChildFunction />
      </ContextAPIExample.Provider>
    </div>
  );
}

export default CustomHooks;

// import React, { Component } from 'react';
// import ChildClass from './ChildClass';
export const ContextAPIExample = React.createContext();

// class CustomHooks extends Component {
//   constructor() {
//     super();
//     this.state = {
//       a: 'abc',
//     };
//   }

//   handleState = () => {
//     this.setState({ b: 'cde' });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleState}>Increase Age</button>
//         <ContextAPIExample.Provider value={multi}>
//           <ChildClass />
//         </ContextAPIExample.Provider>
//       </div>
//     );
//   }
// }

// export default CustomHooks;
