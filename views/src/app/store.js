import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import activitiesReducer from '../features/activity/activitySlice'

export const store = configureStore({
  reducer: {
   auth:authReducer,
   activity : activitiesReducer
  },
});
