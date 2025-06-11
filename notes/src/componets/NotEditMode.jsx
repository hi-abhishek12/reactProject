import React, { useState } from "react";
import { Input, Button } from "./index";
import { useDispatch } from "react-redux";
import { updateNote } from "../store/notesSlice";
function NotEditMode({ noteTitle, noteMsg, noteId }) {

    const dispatch = useDispatch()
    const [title , setTitle] = useState(noteTitle)
    const [msg, setMsg] = useState(noteMsg)
    const [isEditModeOpen, setisEditModeOpen] = useState(false)

    React.useEffect(() =>{
        
    },[title,msg])

    const saveButton = () =>{
      dispatch(updateNote({title : title , msg : msg , noteId : noteId}))
    }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-[90%] max-w-md rounded-xl shadow-xl p-6 space-y-4">
        <div className="space-y-3">
          <Input
            type="text"
            value={title}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800"
            placeholder="Note Title"
            onChange={(event) => setTitle(event.target.value)}
          />
          <Input
            type="text"
            value={msg}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800"
            placeholder="Note Message"
            onChange={(event) => setMsg(event.target.value)}
          />
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <Button className="bg-gray-200 text-gray-800 hover:bg-gray-300">
            Close
          </Button>
          <Button 
            onClick={saveButton}
            className="bg-yellow-500 text-white hover:bg-yellow-600">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NotEditMode;
