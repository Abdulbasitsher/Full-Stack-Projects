import { combineReducers } from "@reduxjs/toolkit";
import studentsSlice from '../features/studentsSlice'
import teachersSlice from '../features/teachersSlice'
const rootReducer = combineReducers({
    students: studentsSlice,
    teachers: teachersSlice
})

export default rootReducer;