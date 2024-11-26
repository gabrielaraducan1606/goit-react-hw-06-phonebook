import React from "react";
import ReactDOM from "react-dom/client"; 
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./components/App";
import store, { persistor } from "./redux/store";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement); 

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
