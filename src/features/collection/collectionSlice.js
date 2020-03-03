import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'collection',
  initialState: {
    value: [52772, 52773, 52776],
  },
  reducers: {
    addItem: (state, action) => {
		// console.log({ a: state.value, b: +action.payload });
    	state.value.push(+action.payload);
	},
	removeItem: (state, action) => {
		// console.log({ a: state.value, b: +action.payload });
    	state.value = state.value.filter(item => item !== +action.payload);
    },
    // decrement: state => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload.amount;
    // },
  },
});

export const selectCollection = state => state.collection.value;
export const { addItem, removeItem } = slice.actions;

export default slice.reducer;
