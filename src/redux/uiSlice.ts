import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface UIState {
  expandIconsModal: boolean;
  expandPlayModal: boolean
}

const initialState: UIState = {
  expandIconsModal: false,
  expandPlayModal: false
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleExpandIconsModal(state) {
      state.expandIconsModal = !state.expandIconsModal;
    },
    toggleExpandPlayModal(state) {
      state.expandPlayModal = !state.expandPlayModal;
    },
    setExpanded(state, action: PayloadAction<boolean>) {
      state.expandIconsModal = action.payload,
      state.expandPlayModal = action.payload
    },
  },
});

export const { toggleExpandIconsModal,toggleExpandPlayModal, setExpanded } = uiSlice.actions;

// Selector
export const selectexpandIconsModal = (state: RootState) => state.ui.expandIconsModal;
export const selectexpandPlayModal = (state: RootState) => state.ui.expandPlayModal;


export default uiSlice.reducer;
