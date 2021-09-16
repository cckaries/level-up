/* step 4: combine everything */

import { useReducer } from 'react';

// const initialState = { count: 0 };

// function reducer(prevState, nextState) {
//   return { ...prevState, ...nextState };
// }

/* 
  put initialState, reducer & useReducer altogether and its done!
*/
const Counter = () => {
  /* 
    you can also deconstruct state as { count }, then you can simply use count instead of state.count
  */
  const [state, setState] = useReducer(
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
