import { configureStore } from "@reduxjs/toolkit"
import gameReducer from "../action/gameSlice"

const store = configureStore({
  reducer: {
    game: gameReducer,
  },
})

export default store
