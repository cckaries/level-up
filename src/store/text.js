import { createSlice } from '@reduxjs/toolkit';

const textSlice = createSlice({
  name: 'text',
  initialState: { text: 'here shows what you type stored in REDUX', sentences: {} },
  reducers: {
    setText(state, action) {
      state.text = action.payload;
    },
    setSentences(state, action) {
      state.sentences = action.payload;
    },
  },
});

export const textActions = textSlice.actions;
export default textSlice.reducer;
