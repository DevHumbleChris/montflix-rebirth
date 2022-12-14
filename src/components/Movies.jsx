import { useQuery, gql } from "@apollo/client";
import QueryResult from "./QueryResult";
import Row from "./Row";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrendingAllDay } from "../store/mainStore";

export default function Movies() {
  const [openTab, setOpenTab] = useState(1);
  const trendingAllDay = useSelector((state) => state.mainStore.trendingAllDay);
  const dispatch = useDispatch();
  const TRENDIND_ALL_DAY = gql`
    query Trending($mediaType: String!, $timeWindow: String!) {
      trending(media_type: $mediaType, time_window: $timeWindow) {
        id
        name
        title
        adult
        backdrop_path
        poster_path
        first_air_date
        release_date
        media_type
        profile_path
      }
    }
  `;
  const TRENDIND_ALL_WEEK = gql`
    query Trending($mediaType: String!, $timeWindow: String!) {
      trending(media_type: $mediaType, time_window: $timeWindow) {
        id
        name
        title
        backdrop_path
        poster_path
        popularity
        first_air_date
        release_date
        media_type
        profile_path
      }
    }
  `;

  const { loading, data, error } = useQuery(TRENDIND_ALL_DAY, {
    variables: {
      mediaType: "all",
      timeWindow: "day",
    },
  });
  useEffect(() => {
    dispatch(getTrendingAllDay(data));
  }, [data]);

  const {
    loading: wkLoading,
    data: wkData,
    error: wkError,
  } = useQuery(TRENDIND_ALL_WEEK, {
    variables: {
      mediaType: "all",
      timeWindow: "week",
    },
  });

  return (
    <div className="app p-3">
      <div className="flex">
        <h3 className="text-2xl text-white">Trending</h3>
        <div className="mx-3 flex text-white text-lg rounded-xl border-2 border-gray-400">
          <div
            className={
              openTab === 1
                ? "mr-2 bg-[#032541] text-white px-2 rounded-xl cursor"
                : "mr-2 cursor"
            }
            onClick={() => setOpenTab(1)}
          >
            Today
          </div>
          <div
            className={
              openTab === 2 ? "bg-[#032541] text-white px-2 rounded-xl cursor" : "cursor"
            }
            onClick={() => setOpenTab(2)}
          >
            This Week
          </div>
        </div>
      </div>
      {openTab === 1 && (
        <QueryResult data={data} loading={loading} error={error}>
          <Row data={trendingAllDay} />
        </QueryResult>
      )}
      {openTab === 2 && (
        <QueryResult data={wkData} loading={wkLoading} error={wkError}>
          <Row data={trendingAllDay} />
        </QueryResult>
      )}
    </div>
  );
}
