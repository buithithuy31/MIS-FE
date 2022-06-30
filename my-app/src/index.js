import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
 
import { Provider } from "react-redux";
import { createStore } from "redux";
 
//Gọi reducers
import reducers from "./reducers/index";
 
 
//Tạo store từ reducers
const store = createStore(reducers);
 
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
 
serviceWorker.unregister();