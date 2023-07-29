import { createStore } from 'redux'
import { createSlice } from '@reduxjs/toolkit'

const initialState = { counter: 0, showCounter: true }


createSlice({
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

const counterReducer = (state = initialState, action) => {

    // Always return a brand new object instead of overwritting the old state
    // Never overwrite the previousState --> it will work but this is very wrong
    // this can lead to bugs, unexpected side effects. 
    if (action.type === 'INCREMENT_COUNTER') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    }

    if (action.type === "INCREASE") {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'DECREMENT_COUNTER'){
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'TOGGLE'){
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        }
    }

    return state;
}

const store = createStore(counterReducer);

export default store;