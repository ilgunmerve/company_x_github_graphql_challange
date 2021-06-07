import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { createStore, applyMiddleware } from "redux"; // applyMiddleware, compose
import { rootReducer } from "./store/reducers/index";
import { Provider } from "react-redux";
import logger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(logger));

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: async (operation) => {
    operation.setContext({
      headers: {
        authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
