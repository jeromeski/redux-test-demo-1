import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { logger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-thunk';

const initialState = {
  value: 'hello world'
};

const rootReducer = (state = initialState, action) => {
  switch (action) {
    default:
      return state;
  }
};
const middleware = applyMiddleware(logger);

export const store = createStore(rootReducer, middleware);
