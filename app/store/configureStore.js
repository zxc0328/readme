import {createStore} from 'redux'
import readme from '../reducers/readme.js'

export default function configureStore(initialState) {
  const store = createStore(readme, initialState);

  if(module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers/readme').default;

      store.replaceReducer(nextReducer);
    });
  }

  return store;
}