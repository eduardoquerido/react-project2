import { createStore } from 'redux'


const initialState = { counter: 0, showCounter: true }

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