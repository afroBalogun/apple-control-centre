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
  orientation: boolean;
  screenMirroring: boolean;
  focus: boolean;
  flashLight: boolean;
  timer: boolean;
  calculator: boolean;
  camera: boolean;
  powerSaver: boolean;
  screenRecord: boolean;
  Shazam: boolean;
  QRCodeScanner: boolean;
  notes: boolean;

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
  orientation: false,
  screenMirroring: false,
  focus: false,
  flashLight: false,
  timer: false,
  calculator: false,
  camera: false,
  powerSaver: false,
  screenRecord: false,
  Shazam: false,
  QRCodeScanner: false,
  notes: false,
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
