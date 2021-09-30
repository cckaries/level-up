// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import textReducer from './text';
import authReducer from './auth';

// const counterReducer = (
//   state = { count: 0, text: 'here shows what you type stored in REDUX' },
//   action = { type: null, payload: null }
// ) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { ...state, count: state.count + 1 };
//     case 'DECREMENT':
//       return { ...state, count: state.count - 1 };
//     case 'SET_TEXT':
//       return { ...state, text: action.payload || '' };
//     default:
//       return state;
//   }
// };

// const store = createStore(counterSlice.reducer);
const store = configureStore({
  reducer: {
    counter: counterReducer,
    text: textReducer,
    auth: authReducer,
  },
});

export default store;
