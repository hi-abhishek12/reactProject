import { createSlice , nanoid} from '@reduxjs/toolkit'

const initialState = {
   notes : [{id : 1, notesTitle : 'Title', notesMsg : 'message'}]
}

const notesSlice = createSlice({
   name : 'notes',
   initialState,
   reducers : {
      addNote : (state , action) =>{
         const todo = {
            id : nanoid(),
            notesTitle : action.payload.title,
            notesMsg : action.payload.msg
         }
         state.notes.push(todo)
      },
      updateNote : (state , action) =>{
         notes.map((note) => note.id === action.payload.id(
           state.notes = action.payload
         ))
      },
      removeNote : (state , action) => {
      }
      
   }
})
export const {addNote , updateNote , removeNote} = notesSlice.actions
export default notesSlice.reducer