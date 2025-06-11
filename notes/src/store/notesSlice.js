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
      //title : title , msg : msg , noteId : noteId
      updateNote : (state , action) =>{
         const { title , msg , noteId} = action.payload
        
          const noteToEdit = state.notes.find((note) => note.id === noteId)
          if(noteToEdit){
            noteToEdit.notesTitle = title,
            noteToEdit.notesMsg = msg
          }
      },
      removeNote : (state , action) => {
        state.notes = state.notes.filter((note) => note.id !== action.payload)
      },

      copyNote :(state , action) =>{
         const {title , msg} = action.payload
        const newNote = {
            id : nanoid(),
            notesTitle : title,
            notesMsg : msg
        }
        state.notes.unshift(newNote)
      }
      
   }
})
export const {addNote , updateNote , removeNote , copyNote} = notesSlice.actions
export default notesSlice.reducer