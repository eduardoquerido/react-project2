import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import counterSlice from "./slices/counterSlice";

const store = configureStore({
  reducer: {
    [counterSlice.name]: counterSlice.reducer,
    [authSlice.name]: authSlice.reducer,
  },
});

export default store;
