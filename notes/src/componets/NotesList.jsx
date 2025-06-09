import React from 'react'
import { useSelector } from 'react-redux'

function NotesList() {
    const notesList = useSelector((state) => state.notes.notes)
   
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {notesList.map((note) => (
        <div
          className="bg-yellow-100 border border-yellow-300 shadow-md p-4 rounded-xl hover:shadow-lg transition-all"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {note.notesTitle || "Untitled"}
          </h3>
          <p className="text-gray-700 whitespace-pre-wrap">{note.notesMsg}</p>

        </div>
      ))}
    </div>
  )
}

export default NotesList