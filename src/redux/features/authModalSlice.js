import { createSlice } from "@reduxjs/toolkit";

export const authModallice = createSlice({
    name: "AuthModal",
    initialState: {
        authModalOpen: false
    },
    reducers: {
        setAuthModalOpen: (state, action) => {
            state.appState = action.payload
        },
    }
})

export const {
    setAuthModalOpen
} = authModallice.actions

export default authModallice.reducer;