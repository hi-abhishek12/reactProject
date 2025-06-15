import { configureStore } from "@reduxjs/toolkit";
import notesSlice from './notesSlice'
import remainderSlice from './remainderSlice'

const store = configureStore({
    reducer : {
        notes : notesSlice,
        remainder : remainderSlice
    }
})
export default store;