import React from "react";
import ReactDOM from "react-dom";
import { Provider, } from "react-redux";
import { createStore, applyMiddleware, } from "redux";
import { BrowserRouter as Router, } from "react-router-dom";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers/index";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

/* eslint-disable*/
const composeEnhancers =
  process.env.NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
/* eslint-enable */
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
