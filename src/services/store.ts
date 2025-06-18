import { configureStore } from '@reduxjs/toolkit'
import { jobOfferReducer } from '@/Modules/Owner/Features/JobOffers/services/store'
import { authMiddleware, authReducer } from '@/Modules/Auth/services/store'
import { adminMiddleware, adminReducer } from '@/Modules/Admin/services/store'
import { ownerMiddleware, ownerReducer } from '@/Modules/Owner/services/store'
import { workerMiddleware, workerReducer } from '@/Modules/Worker/services/profile/store'

export const store = configureStore({
  reducer: {
    jobOffers: jobOfferReducer,
        ...authReducer,
        ...adminReducer,
        ...ownerReducer,
        ...workerReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...authMiddleware, ...adminMiddleware, ...ownerMiddleware, ...workerMiddleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
