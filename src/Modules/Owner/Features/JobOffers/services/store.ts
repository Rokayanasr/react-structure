import { configureStore } from '@reduxjs/toolkit'
import jobOfferReducer from './state/jobOfferSlice';

export { jobOfferReducer };

export const jobOfferStore = configureStore({
  reducer: {
    jobOffers: jobOfferReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const jobOffers = jobOfferStore.getState().jobOffers
