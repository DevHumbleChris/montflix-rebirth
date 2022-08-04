import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

export default function TvShowsDetails() {
  const { tv_id } = useParams();
  const TV_DETAILS = gql`
    query Tv($tvId: Int) {
      tv(tv_id: $tvId) {
        details {
          id
          adult
          backdrop_path
          created_by {
            id
            credit_id
            name
            gender
            profile_path
          }
          episode_run_time
          first_air_date
          genres {
            id
            name
          }
          homepage
          in_production
          langauges
          last_air_date
          last_episode_to_air {
            air_date
            episode_number
            id
            name
            overview
            production_code
            runtime
            season_number
            show_id
            still_path
            vote_average
            vote_count
          }
          networks {
            id
            name
            logo_path
            origin_country
          }
          number_of_episodes
          number_of_seasons
          origin_country
          original_language
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
          seasons {
            air_date
            episode_count
            id
            name
            overview
            poster_path
            season_number
          }
          spoken_languages {
            english_name
            iso_639_1
            name
          }
          status
          tagline
          type
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
          adult
          backdrop_path
          id
          name
          original_language
          original_name
          overview
          poster_path
          media_type
          genre_ids
          popularity
          first_air_date
          vote_average
          vote_count
          origin_country
        }
        latest {
          id
          adult
          episode_run_time
          first_air_date
          homepage
          in_production
          langauges
          last_air_date
          number_of_episodes
          number_of_seasons
          origin_country
          original_language
          overview
          popularity
          poster_path
          status
          tagline
          type
          vote_average
          vote_count
        }
        airing_today {
          adult
          backdrop_path
          id
          name
          original_language
          original_name
          overview
          poster_path
          media_type
          genre_ids
          popularity
          first_air_date
          vote_average
          vote_count
          origin_country
        }
        on_the_air {
          adult
          backdrop_path
          id
          name
          original_language
          original_name
          overview
          poster_path
          media_type
          genre_ids
          popularity
          first_air_date
          vote_average
          vote_count
          origin_country
        }
        popular {
          adult
          backdrop_path
          id
          name
          original_language
          original_name
          overview
          poster_path
          media_type
          genre_ids
          popularity
          first_air_date
          vote_average
          vote_count
          origin_country
        }
        top_rated {
          adult
          backdrop_path
          id
          name
          original_language
          original_name
          overview
          poster_path
          media_type
          genre_ids
          popularity
          first_air_date
          vote_average
          vote_count
          origin_country
        }
        similar_tv_shows {
          adult
          backdrop_path
          id
          name
          original_language
          original_name
          overview
          poster_path
          media_type
          genre_ids
          popularity
          first_air_date
          vote_average
          vote_count
          origin_country
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(TV_DETAILS, {
    variables: {
        tvId: parseInt(tv_id)
    }
  });
  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>an error occured</div>;
  }
  if (data) {
    const { tv } = data
    return (
      <>
        <div
          className="banner"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/w500${tv.details?.backdrop_path}")`,
            backgroundPosition: "center center",
          }}
        >
          <div className="banner_contents">
            <h3 className="banner_title">{ tv.details?.name }</h3>
            <div className="buttons">
              <button className="banner_button">Play trailer</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
