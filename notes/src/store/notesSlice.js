import { createSlice , nanoid} from '@reduxjs/toolkit'

const initialState = {
    notes : JSON.parse(localStorage.getItem("notes")) || []
}

const notesSlice = createSlice({
   name : 'notes',
   initialState,
   reducers : {
      addNote : (state , action) =>{
         const notes = {
            id : nanoid(),
            notesTitle : action.payload.title,
            notesMsg : action.payload.msg
         }
         state.notes.push(notes)
      },
      updateNote : (state , action) =>{
         notes.map((note) => note.id === action.payload.id(
           state.notes = action.payload
         ))
      },
      removeNote : (state , action) => {
        state.notes = state.notes.filter((note) => note.id !== action.payload)
      }
      
   }
})
export const {addNote , updateNote , removeNote} = notesSlice.actions
export default notesSlice.reducer