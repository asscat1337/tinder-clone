import {createSlice,PayloadAction} from "@reduxjs/toolkit";
import {registerThunk,loginThunk} from "../actions/actionAuth";

interface ActionAuth {
    user:any,
    loading:boolean
}

const initialState:ActionAuth = {
    user:{},
    loading:false
}

export const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:{
        [registerThunk.fulfilled.type]:(state,action)=>{
            state.user = action.payload
        }
    }
})
//
// export const {login,register} = authSlice.actions
const authReducer = authSlice.reducer
export default authReducer