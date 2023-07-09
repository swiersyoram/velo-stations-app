import {AsyncThunkPayloadCreator, createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAuth, postLogin} from "../Api/authentication.api";
import {IAuth, IUser} from "../Models/auth.type";
import {STATUS_CODES} from "http";



export const login = createAsyncThunk('users/login', async (payload: IAuth) => {
    const {data} = await postLogin(payload);
    return data
})
export const authenticate = createAsyncThunk('users/authenticate', async () => {
     await getAuth();
})
export const userSlice = createSlice({
        name: "users",
        initialState: {username:null, token:null, isAuthenticated:false},
        reducers: {},
        extraReducers: (builder) => {
            builder.addCase(login.fulfilled, (state, action) => ({...action.payload, isAuthenticated:true}));
            builder.addCase(login.rejected, (state, action) => ({...state, isAuthenticated:false}));
            builder.addCase(authenticate.fulfilled, (state, action) => ({...state, isAuthenticated:true}));
            builder.addCase(authenticate.rejected, (state, action) => ({...state, isAuthenticated:false}));

    }

    }
)

export const userReducer = userSlice.reducer;
