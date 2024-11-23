import { configureStore } from '@reduxjs/toolkit';
import activeReducer from './activeSlice'; // Correctly import the reducer
import clickedIconsReducer from './clickedIconsSlice';
import uiReducer from "./uiSlice"; // Import the slice

export const store = configureStore({
  reducer: {
    active: activeReducer, 
    clickedIcons: clickedIconsReducer,
    ui: uiReducer,

  },
});

// Infer RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
