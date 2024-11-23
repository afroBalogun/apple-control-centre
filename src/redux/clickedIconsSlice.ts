import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ClickedIconsState {
  airplane: boolean;
  airdrop: boolean;
  wifi: boolean;
  signal: boolean;
  bluetooth: boolean;
  link: boolean;
  vpn: boolean;
  airplay: boolean,
  orientation: boolean
}

const initialState: ClickedIconsState = {
  airplane: false,
  airdrop: false,
  wifi: false,
  signal: false,
  bluetooth: false,
  link: false,
  vpn: false,
  airplay: false,
  orientation: false

};

const clickedIconsSlice = createSlice({
  name: 'clickedIcons',
  initialState,
  reducers: {
    toggleIcon: (state, action: PayloadAction<keyof ClickedIconsState>) => {
      state[action.payload] = !state[action.payload];
    },
  },
});

export const { toggleIcon } = clickedIconsSlice.actions;
export const selectClickedIcons = (state: { clickedIcons: ClickedIconsState }) =>
  state.clickedIcons;
export default clickedIconsSlice.reducer;
