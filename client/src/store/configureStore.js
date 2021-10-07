import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import userReducer from './reducers/userReducer';
import searchReducer from './reducers/searchReducer';

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

export const store = createStore(
  combineReducers({
    // Define a top-level state field named `user`, handled by `userReducer`
    user: userReducer,
    // Define a top-level state field named `search`, handled by `searchReducer`
    search: searchReducer
  }),
  composeWithDevTools(applyMiddleware(...middleware))
);
