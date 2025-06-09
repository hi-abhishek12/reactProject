import React from 'react'
import {Button} from './index';
import { removeNote } from '../store/notesSlice';
import { useSelector , useDispatch } from 'react-redux'
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

function NotesList() {
    const dispatch = useDispatch()
    const notesList = useSelector((state) => state.notes.notes);

    const [openMenu, setopenMenu] = React.useState(false)
    const menuStatus = () =>{
        setopenMenu(!openMenu)
    }
   
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {notesList.map((note) => (
        <div key={note.id}
          className="relative bg-yellow-100 border border-yellow-300 shadow-md p-4 rounded-xl hover:shadow-lg transition-all"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {note.notesTitle || "Untitled"}
          </h3>
          <p className="text-gray-700 whitespace-pre-wrap">{note.notesMsg}</p>

          <EllipsisVerticalIcon
            onClick={menuStatus}
            className="h-6 w-6 text-gray-600 cursor-pointer hover:text-gray-800" />

            {openMenu && 
              <div className="absolute right-0 mt-2 w-52 bg-[#2d2f31]
               text-sm text-white rounded-lg shadow-lg p-2 z-10 space-y-1">
                <Button type = "button"
                  onClick={()=> dispatch(removeNote(note.id))}
                  className="w-full text-left px-3 py-1 hover:bg-[#3c3e40] rounded">
                    Delete
                </Button>
                <Button type="button"
                  className="w-full text-left px-3 py-1 hover:bg-[#3c3e40] rounded">
                    Add label
                </Button>
                <Button
                  type="button"
                  className="w-full text-left px-3 py-1 hover:bg-[#3c3e40] rounded">
                    Make a copy
                </Button>

              </div>}
        </div>
      ))}
    </div>
  )
}

export default NotesList