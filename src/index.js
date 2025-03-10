import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { featureReducer, initialState } from "./reducers/featureReducer.js";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "bulma/css/bulma.css";
import "./styles.scss";

const rootElement = document.getElementById("root");
export const store = createStore(featureReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
