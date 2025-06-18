
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobOffers: [],
  selectedJobOffer: null,
  isLoading: false,
  error: null,
};

const jobOfferSlice = createSlice({
    name: 'jobOffers',
    initialState,   
    reducers: {
        setJobOffers: (state, action) => {
            state.jobOffers = action.payload;
        },
        setSelectedJobOffer: (state, action) => {
            state.selectedJobOffer = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },  
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setJobOffers, setSelectedJobOffer, setIsLoading, setError } = jobOfferSlice.actions;
export default jobOfferSlice.reducer;
