import { configureStore } from '@reduxjs/toolkit'
import roomReducer from './roomSlice'
import createSagaMiddleware from '@redux-saga/core'

export const saga = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    rooms: roomReducer,
  },
  middleware: [saga]
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
