import React, { useState } from "react";
import {Input} from "./index";
import {Button} from "./index";
import {useDispatch} from 'react-redux'
import { addNote } from "../store/notesSlice";
function AddNote() {
  const [notesMsg, setnotesMsg] = useState('')
  const [notesTitle, setnotesTitle] = useState('')
  const [isInputExpandable, setIsInputExpandable] = useState(false)
  const dispatch = useDispatch()

  //Functions ----->

  const inputExpand = () => {
    setIsInputExpandable(true);
  };
  const close = () =>{
    setIsInputExpandable(false)
  }

  const addNotes = (event) =>{
    event.preventDefault()
    dispatch(addNote({title : notesTitle , msg : notesMsg}))
    setnotesMsg("")
    setnotesTitle("")
    
  }
  return (
  <form 
  onSubmit={addNotes} 
  className="w-full max-w-xl mx-auto mt-6 p-4 bg-white rounded-xl shadow-md transition-all duration-200"
>
  <div 
    className="flex flex-col gap-2"
  >
    {isInputExpandable && (
      <Input 
        type="text" 
        placeholder="Title"
        value={notesTitle}
        onChange={(event) => setnotesTitle(event.target.value)}
        className="px-6 py-4 text-lg font-medium rounded-md border border-gray-300
         focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
      />
    )}

    <Input 
      type="text" 
      placeholder="Take a note..." 
      value={notesMsg}
      onClick={inputExpand}
      onChange={(event) => setnotesMsg(event.target.value)}
      className="px-4 py-2 rounded-md border border-gray-300 
      focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
    />
  </div>

  {/* 🟢 Moved out of clickable div */}
  {isInputExpandable && (
    <div className="flex justify-end gap-2 mt-2">
      <Button 
        type="button" 
        onClick={close}
        className="px-4 py-1 text-sm rounded-md bg-gray-200 hover:bg-gray-300 transition"
      >
        Close
      </Button>
      <Button 
        type="submit"
        className="px-4 py-1 text-sm rounded-md bg-yellow-400 hover:bg-yellow-500 text-white transition"
      >
        Create
      </Button>
    </div>
  )}
</form>

  );
}

export default AddNote;
