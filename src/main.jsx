import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { store } from './store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const client = new ApolloClient({
  uri: "https://the-movie-db-graphql-api.vercel.app/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <Provider store={store} >
            <App />
          </Provider>
        </ApolloProvider>
      </BrowserRouter>
  </React.StrictMode>
);
