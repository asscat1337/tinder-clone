import {createAsyncThunk} from "@reduxjs/toolkit";
import {$http} from "../../http/$http";

const loginThunk = createAsyncThunk(
    'auth/login',
    async(payload:any,thunkAPI)=>{
        const {data} = await $http.post('/auth/login',payload)
        return data
    }
)

const registerThunk = createAsyncThunk(
    'auth/register',
    async(payload:any,thunkAPI)=>{
        console.log(thunkAPI)
        const {data} = await $http.post('auth/register',payload)
        console.log(data)
    }
)

export {
    registerThunk,
    loginThunk
}