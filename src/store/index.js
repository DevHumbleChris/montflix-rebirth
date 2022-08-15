import { configureStore } from '@reduxjs/toolkit'
import mainStore from './mainStore'

export const store = configureStore({
    reducer:{
        mainStore: mainStore
    }
})