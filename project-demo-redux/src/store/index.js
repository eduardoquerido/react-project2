import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = { counter: 0, showCounter: true }


const counterSlice = createSlice({
    name: 'counterSlice',
    initialState: initialState,
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
            state.counter = state.counter + action.amount;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

const store = configureStore({
    reducer: {
        [counterSlice.name]: counterSlice.reducer
    }
});

export default store;