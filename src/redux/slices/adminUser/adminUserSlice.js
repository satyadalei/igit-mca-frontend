import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({
    name : "user",
    initialState : {
        userType: "normalUser"
    },
    reducers:{}
})


export default userSlice.reducer