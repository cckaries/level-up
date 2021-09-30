// import { createStore } from 'redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0, text: 'here shows what you type stored in REDUX' },
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    setText(state, action) {
      state.text = action.payload;
    },
  },
});

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
const store = configureStore({ reducer: counterSlice.reducer });

export default store;
