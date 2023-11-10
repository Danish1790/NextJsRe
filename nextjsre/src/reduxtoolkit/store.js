"use client"
const {configureStore} = require("@reduxjs/toolkit")
import userReducer from './slice'
import todoReducer from './TodoSlice' 
import numberReducer from './numberSlice'

export const store = configureStore({
    reducer:{
        userData:userReducer,
        todoData:todoReducer,
        numberData:numberReducer
    }
})