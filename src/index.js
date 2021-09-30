import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

import App from './App';

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
    setText(state, payload) {
      state.text = payload;
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

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
