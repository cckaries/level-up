/* step 1: rewrite reducer function */

import { useReducer } from 'react';

// const initialState = { count: 0 };

// function reducer(prevState, nextState) {
//   return {
//     ...prevState,
//     ...nextState,
//   };
// }

/* 
  put initialState, reducer & useReducer altogether and its done!
*/
const Counter = () => {
  const [state, setState] = useReducer( // you can also deconstruct state as { count }
    (prevState, nextState) => ({ ...prevState, ...nextState }),
    { count: 0 }
  );
  return (
    <>
      Count: {state.count}
      <button onClick={() => setState({ count: state.count - 1 })}>-</button>
      <button onClick={() => setState({ count: state.count + 1 })}>+</button>
    </>
  );
};
