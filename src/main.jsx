import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Movies from './components/Movies'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://the-movie-db-graphql-api.vercel.app/graphql',
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <React.StrictMode>
      {/* <App /> */}
      <ApolloProvider client={client}>
        <Navbar />
        <Banner />
        <Movies />
      </ApolloProvider>
    </React.StrictMode>
)
