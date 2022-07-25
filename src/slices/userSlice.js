import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user-info',
    initialState: {
        user: {
            name: 'ad',
            email: 'ad@mail.com',
            location: 'India',
        }
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state, action) => {
            console.log('logout called');
        }
    }
})
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;