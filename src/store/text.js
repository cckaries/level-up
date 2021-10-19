import { createSlice } from '@reduxjs/toolkit';

const textSlice = createSlice({
  name: 'text',
  initialState: {
    text: 'here shows what you type stored in REDUX',
    sentences: {},
  },
  reducers: {
    setText(state, action) {
      state.text = action.payload;
    },
    setSentences(state, action) {
      state.sentences = action.payload;
    },
  },
});

export const putTextThunk = text => {
  // return {type: '', payload: ...}}
  return async dispatch => {
    /* 
      1. call the api using PUT method to send the text to firebase db
      2. fetch list items
      3. display list items in <Right />
    */

    // fetch('https://level-f5322-default-rtdb.firebaseio.com/text.json', {
    //   method: 'PUT',
    //   body: JSON.stringify({
    //     text,
    //   }),
    // }).then(() =>
    //   fetch('https://level-f5322-default-rtdb.firebaseio.com/list.json')
    //     .then(res => res.json())
    //     .then(resJson => {
    //       console.log(resJson);
    //       dispatch(textActions.setSentences(resJson));
    //     })
    // );

    const putText = async () => {
      const res = await fetch(
        'https://level-f5322-default-rtdb.firebaseio.com/text.json',
        {
          method: 'PUT',
          body: JSON.stringify({
            text,
          }),
        }
      );

      if (!res.ok) throw new Error('Failed to send text to DB');
    };

    const getSentences = async () => {
      const res = await fetch(
        'https://level-f5322-default-rtdb.firebaseio.com/list.json'
      );

      return res.json();
    };

    try {
      await putText();
      const resJson = await getSentences();
      // console.log('sentences:', resJson);
      dispatch(textActions.setSentences(resJson));
    } catch (err) {
      throw new Error('It just failed:', err);
    }
  };
};

export const textActions = textSlice.actions;
export default textSlice.reducer;
