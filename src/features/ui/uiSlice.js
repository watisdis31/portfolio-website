import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobileMenuOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    closeMenu: (state) => {
      state.mobileMenuOpen = false;
    },
  },
});

export const { toggleMenu, closeMenu } = uiSlice.actions;
export default uiSlice.reducer;