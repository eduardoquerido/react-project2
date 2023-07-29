import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      // using redux toolkit we kinda of can alter the previous State
      // becuase redux toolkit will clone the old state.
      // but keeping in mind, avoiding it is still a good idea
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice;
