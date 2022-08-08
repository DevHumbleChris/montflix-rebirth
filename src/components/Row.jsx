import { formatDistance } from 'date-fns'
import { Link } from 'react-router-dom'

export default function Row({ data }) {
    const setDateDistance = (date) => {
        return formatDistance(new Date(date), new Date(), {
            addSuffix: true
          })
    }
  const { trending } = data;
  console.log(trending)
  return (
    <>
      <div className="movie p-2 flex overflow-x-auto scroll-smooth mt-3">
        {trending.map((movie) => {
          return (
            <div key={movie.id} className="mx-2 shrink-0">
              <Link to={`/${movie.media_type}/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className="rounded-xl h-60 movie-poster"
                />
                <div className="p-2 w-40">
                  <h4 className="text-xs font-bold text-white">{movie.name || movie.title}</h4>
                  <h5 className="text-xs my-1 text-gray-600">
                    {setDateDistance(movie.release_date || movie.first_air_date)}
                  </h5>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
