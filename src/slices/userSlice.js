import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user-info',
    initialState: {
        user: {
            name: 'AhindraD',
            email: 'ahindra@mail.com',
            location: 'India',
        }
    },
    reducers: {
        login: (state, action) => {
            console.log('login called');
            state.user = action.payload;
        },
        logout: (state, action) => {
            console.log('logout called');
            state.user = {};
        }
    }
})
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;