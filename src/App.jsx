import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Homepage from './Views/Homepage'
import TvShows from './TvShows'
import TvShowsDetails from './components/TvShowsDetails'
import Movies from './Views/Movies'
import MovieDetails from './components/MovieDetails'

function App() {
  return (
    <main className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="tv" element={<TvShows />}>
            <Route path=":tv_id" element={<TvShowsDetails />}></Route>
          </Route>
          <Route path="movie" element={<Movies />}>
            <Route path=":movie_id" element={<MovieDetails />}></Route>
          </Route>
        </Routes>
    </main>
  )
}

export default App
