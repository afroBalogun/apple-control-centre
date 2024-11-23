import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

// Define a type for the slice state
interface ActiveState {
  value: boolean;
}

// Define the initial state using that type
const initialState: ActiveState = {
  value: false,
};

export const activeSlice = createSlice({
  name: 'active',
  initialState, // `createSlice` will infer the state type from the `initialState` argument
  reducers: {
    // Toggles the current state
    isActive: (state) => {
      state.value = !state.value;
    },
    // Explicitly sets the state based on payload
    stillActive: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload; // Use the action's payload
    
    },
  },
});

// Export actions
export const { isActive, stillActive } = activeSlice.actions;

// Selector to get the current value from the state
export const selectActive = (state: RootState) => state.active.value;

// Export the reducer for configuration in the store
export default activeSlice.reducer;
