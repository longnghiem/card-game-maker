import React from "react";
import ReactDOM from "react-dom";
import { Provider, } from "react-redux";
import { createStore, } from "redux";
import rootReducer from "./store/reducers/index";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

/* eslint-disable*/
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
