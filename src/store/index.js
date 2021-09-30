// import { createStore } from 'redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
});

const textSlice = createSlice({
  name: 'text',
  initialState: { text: 'here shows what you type stored in REDUX' },
  reducers: {
    setText(state, action) {
      state.text = action.payload;
    },
  },
});

const authSlice = createSlice({
  name: 'auth',
  initialState: { isLoggedIn: false },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
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
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    text: textSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const textActions = textSlice.actions;
export const authActions = authSlice.actions;
export default store;
