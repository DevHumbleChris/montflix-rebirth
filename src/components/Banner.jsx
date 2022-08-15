import { useQuery, gql } from '@apollo/client'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { setMovieTrailerModal } from '../store/mainStore'
import MovieTrailerModal from './MovieTrailerModal';

export default function Banner() {
  const dispatch = useDispatch()

  const openMovieTrailerModal = () => {
    dispatch(setMovieTrailerModal())
  }
  const TRENDIND_ALL_WEEK = gql`
  query Trending($mediaType: String!, $timeWindow: String!) {
    trending(media_type: $mediaType, time_window: $timeWindow) {
      id
      name
      title
      adult
      backdrop_path
      poster_path
      original_language
      popularity
      vote_average
      vote_count
      first_air_date
      release_date
      video
      media_type
      gender
      profile_path
      known_for {
        id
        name
        title
        adult
        backdrop_path
        poster_path
        original_language
        popularity
        vote_average
        vote_count
        first_air_date
        release_date
        video
        media_type
        gender
        profile_path
      }
      overview
    }
  }
`;

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n-1) + "..." : str
}

const { loading, data, error } = useQuery(TRENDIND_ALL_WEEK, {
  variables: {
    mediaType: "all",
    timeWindow: "week",
  },
})

if (loading) {
  return (
    <div className="animale-pulse w-full h-56 overflow-hidden md:h-96 bg-slate-200 space-x-4">
    </div>
  )
}
if (data) {
  const movie = data.trending[Math.floor(Math.random() * data.trending.length - 1)]
  console.log(movie)
  return (
    <>
      <div 
        className='banner'
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url("https://image.tmdb.org/t/p/w500${movie?.backdrop_path}")`,
          backgroundPosition: "center center"
        }}
      >
        <div className='banner_contents'>
          <h3 className='banner_title'>{movie?.title || movie?.name }</h3>
          <div className='buttons'>
            <button className='banner_button' onClick={openMovieTrailerModal}>Watch Trailer</button>
            <Link to={`/${movie?.media_type}/${movie?.id}`} className='banner_button mx-2'>View More</Link>
          </div>
          <MovieTrailerModal movie={movie}/>
          <h4 className='banner_description'>
            {truncate(movie?.overview, 150)}
          </h4>
        </div>
      </div>
    </>
  );
}
}
