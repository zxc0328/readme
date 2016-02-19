import React from 'react';
import {Provider} from 'react-redux';
import Readme from './Readme.jsx';

export default ({store}) =>
  <Provider store={store}>
    <div className="readme">
      <Readme />
    </div>
  </Provider>