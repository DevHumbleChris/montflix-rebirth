import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

export default function MovieDetails() {
  const { movie_id } = useParams();
  const MOVIE_DETAILS = gql`
  query Movie($movieId: Int) {
  movie(movie_id: $movieId) {
    details {
      id
      adult
      backdrop_path
      belongs_to_collection {
        id
        name
        poster_path
        backdrop_path
      }
      budget
      genres {
        id
        name
      }
      homepage
      imdb_id
      original_language
      original_title
      overview
      popularity
      poster_path
      production_companies {
        id
        logo_path
        name
        origin_country
      }
      production_countries {
        iso_3166_1
        name
      }
      release_date
      revenue
      spoken_languages {
        english_name
        iso_639_1
        name
      }
      status
      tagline
      title
      video
      vote_average
      vote_count
      videos {
        iso_639_1
        iso_3166_1
        name
        key
        site
        size
        type
        published_at
        official
        id
      }
    }
    recommendations {
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
        overview
      }
      overview
    }
    similar_movies {
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
      overview
    }
    latest_movies {
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
      overview
    }
    now_playing {
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
      overview
    }
    popular_movies {
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
      overview
    }
    top_rated_movies {
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
      overview
    }
    upcoming_movies {
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
      overview
    }
  }
}
  `;
  const { loading, error, data } = useQuery(MOVIE_DETAILS, {
    variables: {
      movieId: parseInt(movie_id)
    }
  });
  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>an error occured</div>;
  }
  if (data) {
    const { movie } = data
    return (
      <>
        <div
          className="banner"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/w500${movie.details?.backdrop_path}")`,
            backgroundPosition: "center center",
          }}
        >
          <div className="banner_contents">
            <h3 className="banner_title">{ movie.details?.title }</h3>
            <div className="buttons">
              <button className="banner_button">Watch trailer</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
