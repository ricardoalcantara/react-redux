import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, BrowserRouter } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/hello" component={() => <div>Hello</div>}/>
        <Route path="/goodbye" component={() => <div>Bye</div>}/>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
