import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store, persist } from "./redux-toolkit/app/store";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persist}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>
);
