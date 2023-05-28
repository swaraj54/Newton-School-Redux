import React from 'react';
import { connect } from 'react-redux'; // help to connect compoennt to redux store
import { increment, decrement } from './counterActions';

const Counter = ({ count, increment, decrement }) => {

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
