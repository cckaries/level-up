/* step 3: rewrite dispatch & onClick event */

import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(prevState, nextState) {
  return { ...prevState, ...nextState };
}

const Counter = () => {
  const [state, setState] = useReducer(reducer, initialState);
  /* 
    since there's no action type anymore in reducer function, 
    we can rewrite onClick events of buttons to just pass next state to reducer,
    also rename 'dispatch' to 'setState'
  */
  return (
    <>
      Count: {state.count}
      <button onClick={() => setState({ count: state.count - 1 })}>-</button>
      <button onClick={() => setState({ count: state.count + 1 })}>+</button>
    </>
  );
};
