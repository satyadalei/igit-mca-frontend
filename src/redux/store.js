import { configureStore } from '@reduxjs/toolkit'
import adminUserStates from "./slices/adminUser/adminUserSlice"

export default configureStore({
    reducer: {
        user : adminUserStates
    }
})