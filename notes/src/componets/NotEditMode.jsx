import React, { useState } from "react";
import { Input, Button } from "./index";

function NotEditMode({ noteTitle, noteMsg, ...props }) {

    const [title , setTitle] = useState(noteTitle)
    const [msg, setMsg] = useState(noteMsg)

    React.useEffect(() =>{
        
    })
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-[90%] max-w-md rounded-xl shadow-xl p-6 space-y-4">
        <div className="space-y-3">
          <Input
            type="text"
            value={title}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800"
            placeholder="Note Title"
          />
          <Input
            type="text"
            value={msg}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800"
            placeholder="Note Message"
          />
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <Button className="bg-gray-200 text-gray-800 hover:bg-gray-300">
            Close
          </Button>
          <Button className="bg-yellow-500 text-white hover:bg-yellow-600">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NotEditMode;
