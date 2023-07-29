import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

// import { Component } from 'react';

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);


  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT_COUNTER'});
  };
  const decrementHandler = () => {dispatch({ type: 'DECREMENT_COUNTER'});};

  const increaseHandler = () => {
    dispatch({type: "INCREASE", amount: 5})
  }


  const toggleCounterHandler = () => {
    dispatch({type: "TOGGLE"})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div className="">
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};


// How to use redux in a class based component
// class Counter extends Component {

//    incrementHandler() {
//     this.props.increment();
//    }

//    decrementHandler() {
//     this.props.decrement();
//    }

//    toggleCounterHandler() {

//    }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div className="">
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter,
//   };
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "INCREMENT_COUNTER "}),
//     decrement: () => dispatch({ type: "DECREMENT_COUNTER "})
//   }
// };


// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter;
