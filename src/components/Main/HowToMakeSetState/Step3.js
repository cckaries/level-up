/* step 1: rewrite reducer function */

import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(prevState, nextState) {
  return {
    ...prevState,
    ...nextState,
  };
}

const Counter = () => {
  const [state, setState] = useReducer(reducer, initialState);
  /* 
    there's no action type anymore in reducer function, we can rewrite button onClick actions as 
    also rename 'dispatch' to setState 
  */
  return (
    <>
      Count: {state.count}
      <button onClick={() => setState({ count: state.count - 1 })}>-</button>
      <button onClick={() => setState({ count: state.count + 1 })}>+</button>
    </>
  );
};
