import { useQuery, gql } from "@apollo/client";
import QueryResult from "./QueryResult";
import Row from "./Row";

export default function Movies() {
  const TRENDIND_ALL_DAY = gql`
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
      }
    }
  `;

  const { loading, data, error } = useQuery(TRENDIND_ALL_DAY, {
    variables: {
      mediaType: "all",
      timeWindow: "day",
    },
  });
  
  return (
    <>
      <div className="my-4 p-3">
        <div className="flex">
          <h3 className="text-2xl">Trending</h3>
          <div className="mx-3 flex text-lg rounded-xl border-2 border-gray-400">
            <div className="mr-2 hover:bg-[#032541] hover:text-white px-2 hover:rounded-xl">Today</div>
            <div className="hover:bg-[#032541] hover:text-white px-2 hover:rounded-xl">This Week</div>
          </div>
        </div>
        <QueryResult data={data} loading={loading} error={error}>
          <Row data={data} />
        </QueryResult>
      </div>
    </>
  );
}
