import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice"
import themeModeSlice from './features/themeModeSlice'
import appStateSlice from "./features/appStateSlice";
import globalLoadingSlice from "./features/globalLoadingSlice";
import authModalSlice from "./features/authModalSlice";

const store = configureStore({
    reduce: {
        user: userSlice,
        themeMode: themeModeSlice,
        authModal: authModalSlice,
        globalLoading: globalLoadingSlice,
        appState: appStateSlice,
    }
})

export default store