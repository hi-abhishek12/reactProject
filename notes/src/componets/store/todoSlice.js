import { createSlice , nonoid} from '@reduxjs/toolkit'
import { act } from 'react'

const initialState = {
   notes : [{
      id : 1,
      notesTitle : '',
      notesMsg : ''
   }]
}

const notesSlice = createSlice({
   name : 'notes',
   initialState,
   reducers : {
      addNote : (state , action) =>{
         const todo = {
            id : nonoid(),
            notesTitle : action.payload,
            notesMsg : action.payload
         }
         state.notes.push(todo)
      },
      updateNote : (state , action) =>{
         notes.map((note) => note.id === action.payload.id(
           
         ))
      },
      removeNote : (state , action) => {

      }
      
   }
})
export const {addNote , updateNote , removeNote} = notesSlice.actions
export default notesSlice.reducer