import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"
import studentsReducer from "./slices/studentSlice"
import teachersReducer from "./slices/teacherSlice"


const store = configureStore({
    reducer:{
        auth:authReducer,
        students:studentsReducer,
        teachers:teachersReducer,
    }
})

export default store