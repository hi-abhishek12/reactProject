import React, { useState } from "react";
import {Input , Button} from "./index";
import NoteTextarea from "./NoteTextarea";

function AddNote({onSubmit , showRemainderTime}) {
  const [notesMsg, setnotesMsg] = useState('')
  const [notesTitle, setnotesTitle] = useState('')
  const [inputExpanded, setInputExpanded] = useState(false); 
  const [dateTime , setDateTime] = useState('')
  const [isInputExpandable, setIsInputExpandable] = useState(false)


  //Functions ----->

  const inputExpand = () => {
    setIsInputExpandable(true);
    setInputExpanded(!inputExpanded)
  };
  const close = () =>{
    setIsInputExpandable(false)
    setInputExpanded(false)
  }

  const addNotes = (event) =>{
    event.preventDefault()
    if(onSubmit){
      onSubmit({title : notesTitle , msg : notesMsg})
    }
   
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


  <NoteTextarea
    value={notesMsg}
    onClick={inputExpand}
    onChange={(e) => setnotesMsg(e.target.value)}
    rows={inputExpanded ? 3 : 1}
  />

 {showRemainderTime && 
  <Input 
    type="date-time"
    value={dateTime}
    onChange={(event) => setDateTime(event.target.value)}
  />
    
 }

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
