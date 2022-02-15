import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'; // used for api call but haven't done any

import { reducers } from './reducers';

// creating redux store
const store = createStore(
  // middleware for redux (extension on google chrome)
  // can also use logger by redux-logger with middleware
  reducers,
  {},
  // compose(applyMiddleware(thunk)),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store