const redux = require('redux')


// reducer function is a standard javascript function but
// it will be called byt redux library and it will always receive two parameters
// the old state and the dispatch action and should output the new state object
const counterReducer = (state = { counter: 0 }, action) => {

  if (action.type === 'INCREMENT_NUMBER') {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === 'DECREMENT_NUMBER') {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};


store.subscribe(counterSubscriber);


store.dispatch({type: 'INCREMENT_NUMBER'});
store.dispatch({type: 'DECREMENT_NUMBER'})