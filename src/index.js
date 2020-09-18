import React from "react";
import { render } from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import App from "./App";
import { rootReducer, sagaWatcher } from "./reducers";
import { forbiddenWordsMiddleware } from "./middlewares";

const saga = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, forbiddenWordsMiddleware, saga),
    window.REDUX_DEVTOOLS_EXTENSION
      ? window.REDUX_DEVTOOLS_EXTENSION()
      : (f) => f
  )
);

saga.run(sagaWatcher);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(app, document.getElementById("root"));
