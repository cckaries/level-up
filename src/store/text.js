import { createSlice } from '@reduxjs/toolkit';

const textSlice = createSlice({
  name: 'text',
  initialState: { text: 'here shows what you type stored in REDUX' },
  reducers: {
    setText(state, action) {
      state.text = action.payload;
    },
  },
});

export const textActions = textSlice.actions;
export default textSlice.reducer;
