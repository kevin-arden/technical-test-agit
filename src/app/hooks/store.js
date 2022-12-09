import { configureStore } from '@reduxjs/toolkit'

import authReducer from "./slice"
import searchReducer from "./searchSlice"

const store = configureStore({
  reducer: {
    auth: authReducer.reducer,
    search: searchReducer.reducer
  }
})

export default store