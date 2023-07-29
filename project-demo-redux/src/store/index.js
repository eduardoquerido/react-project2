import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

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

const store = configureStore({
  reducer: {
    [counterSlice.name]: counterSlice.reducer,
    [authSlice.name]: authSlice.reducer,
  },
});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;