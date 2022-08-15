import { createSlice } from '@reduxjs/toolkit'

export const mainStore = createSlice({
    name: 'mainStore',
    initialState: {
        count: 0,
        trendingAllDay: []
    },
    reducers: {
        incCount: (state) => {
            return state.count + 1
        },
        decCount: (state) => {
            return state.count - 1
        },
        getTrendingAllDay: (state, { payload }) => {
            if (payload) {
                state.trendingAllDay = payload.trending
            }
            return state
        }
    }
})

export const { incCount, decCount, getTrendingAllDay } = mainStore.actions

export default mainStore.reducer