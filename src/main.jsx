import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Movies from "./Views/Movies";
import TvShows from "./views/TvShows";
import MovieDetails from "./components/MovieDetails";
import TvShowsDetails from "./components/TvShowsDetails";

const client = new ApolloClient({
  uri: "https://the-movie-db-graphql-api.vercel.app/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="tv" element={<TvShows />}>
            <Route path=":tv_id" element={<TvShowsDetails />}></Route>
          </Route>
          <Route path="movie" element={<Movies />}>
            <Route path=":movie_id" element={<MovieDetails />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
