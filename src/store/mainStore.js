import { createSlice } from '@reduxjs/toolkit'

export const mainStore = createSlice({
    name: 'mainStore',
    initialState: {
        count: 0,
        trendingAllDay: [],
        isMovieTrailerModalOpen: false
    },
    reducers: {
        getTrendingAllDay: (state, { payload }) => {
            if (payload) {
                state.trendingAllDay = payload.trending
            }
            return state
        },
        setMovieTrailerModal: (state) => {
            state.isMovieTrailerModalOpen = !state.isMovieTrailerModalOpen
        }
    }
})

export const { incCount, decCount, getTrendingAllDay, setMovieTrailerModal } = mainStore.actions

export default mainStore.reducer