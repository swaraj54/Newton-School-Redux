import React from 'react';
import { Provider } from 'react-redux';
import Counter from './Counter';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
      {/* routing */}
    </Provider>
  );
};

export default App;
