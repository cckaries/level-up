/* step 1: rewrite reducer function */

import { useReducer } from 'react';

const initialState = { count: 0 };

/* 
  we just want to override prevState with new one if has any
*/
function reducer(prevState, nextState) { 
  return {
    ...prevState,
    ...nextState,
  };
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
};
